const SuccessModal = ({ onClose }) => {
  return (
    // Overlay
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4 backdrop-blur-sm" onClick={onClose}>
      
      {/* Modal Content */}
      <div 
        className="bg-[#1e293b] rounded-xl shadow-2xl w-full max-w-sm p-8 text-center border-t-4 border-[#14b8a6] transform scale-100 opacity-100 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#14b8a6] mb-4">
          <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400 mb-6">
          Thank you for reaching out. I will review your message and respond within 24 hours.
        </p>

        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-[#14b8a6] hover:bg-[#0d9488] text-black font-medium rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
