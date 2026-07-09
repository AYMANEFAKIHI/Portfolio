'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ContributionGraph,
  ContributionGraphGrid,
  ContributionGraphTooltip,
  ContributionGraphLegend,
} from './ui/contribution-graph';
import { useLanguage } from '../context/LanguageContext';

const GithubActivity = () => {
  const { t, lang } = useLanguage();
  const [state, setState] = useState({ status: 'loading', data: null });

  useEffect(() => {
    let cancelled = false;
    fetch('/api/github-contributions')
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.ok && data.contributions?.length) setState({ status: 'ready', data });
        else setState({ status: 'error', data: null });
      })
      .catch(() => { if (!cancelled) setState({ status: 'error', data: null }); });
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="section-padding" id="github-activity" style={{ background: 'var(--bg-primary)' }} aria-label="GitHub activity">
      <div className="container-max">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('github_title')}
        </motion.h2>
        <motion.p
          className="text-center mb-12 text-lg"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('github_subtitle')}
        </motion.p>

        <motion.div
          className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl border"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {state.status === 'loading' && (
            <div className="h-32 flex items-center justify-center">
              <span className="text-sm animate-pulse" style={{ color: 'var(--text-muted)' }}>
                {t('github_loading')}
              </span>
            </div>
          )}

          {state.status === 'error' && (
            <div className="h-32 flex flex-col items-center justify-center gap-3 text-center">
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{t('github_error')}</p>
              <a
                href="https://github.com/AYMANEFAKIHI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
                style={{ color: 'var(--accent)' }}
              >
                {t('github_view_profile')} →
              </a>
            </div>
          )}

          {state.status === 'ready' && (
            <>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {state.data.total.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US')}
                  </span>{' '}
                  {t('github_contributions_in_year')}
                </p>
                <a
                  href="https://github.com/AYMANEFAKIHI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline"
                  style={{ color: 'var(--accent)' }}
                >
                  @AYMANEFAKIHI →
                </a>
              </div>

              <div
                style={{
                  '--contribution-empty': 'var(--border-color)',
                  '--contribution-level-1': 'rgba(20,184,166,0.25)',
                  '--contribution-level-2': 'rgba(20,184,166,0.5)',
                  '--contribution-level-3': 'rgba(20,184,166,0.75)',
                  '--contribution-level-4': '#14b8a6',
                }}
              >
                <ContributionGraph
                  data={state.data.contributions}
                  startDate={state.data.startDate}
                  endDate={state.data.endDate}
                  cellSize={10}
                  cellRadius={2}
                  gap={3}
                >
                  <ContributionGraphGrid />
                  <ContributionGraphTooltip />
                  <div className="mt-3 flex justify-end">
                    <ContributionGraphLegend lessLabel={t('github_less')} moreLabel={t('github_more')} />
                  </div>
                </ContributionGraph>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GithubActivity;
