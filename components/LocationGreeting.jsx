'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LocationGreeting = () => {
  const [location, setLocation] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('/api/location');
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };
    fetchLocation();
  }, []);

  if (!location) return null;

  return (
    <p className="text-md font-medium mt-2" style={{ color: 'var(--text-muted)' }}>
      👋 <strong style={{ color: 'var(--text-secondary)' }}>{t('location_greeting')}</strong>{' '}
      {t('location_connecting')}{' '}
      <span style={{ color: 'var(--accent)' }}>{location.city}</span>,{' '}
      <span style={{ color: 'var(--accent)' }}>{location.country}</span>.{' '}
      {t('location_cta')}
    </p>
  );
};

export default LocationGreeting;
