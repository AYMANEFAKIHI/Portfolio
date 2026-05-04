import { useLanguage } from '../context/LanguageContext';

const SuccessModal = ({ onClose }) => {
  const { t } = useLanguage();

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center p-4 backdrop-blur-sm"
      style={{ background: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <div
        className="rounded-xl shadow-2xl w-full max-w-sm p-8 text-center border-t-4 border-[#14b8a6] transition-all duration-300"
        style={{ background: 'var(--bg-card)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#14b8a6] mb-4">
          <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {t('success_title')}
        </h3>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
          {t('success_body')}
        </p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 font-medium rounded-lg transition-colors"
          style={{ background: 'var(--accent)', color: '#000' }}
        >
          {t('success_close')}
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
