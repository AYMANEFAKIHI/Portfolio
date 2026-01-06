'use client';
import { useState } from 'react';
import SuccessModal from './SuccessModal'; // Import the new modal component

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // New state for modal

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error immediately when user starts typing
    if (errors[e.target.name]) {
        setErrors({ ...errors, [e.target.name]: null });
    }
  };
  
  // Real-time validation on blur (when user clicks out of the input)
  const handleBlur = (e) => {
    if (!e.target.value.trim() && e.target.name !== 'message') {
         setErrors({ ...errors, [e.target.name]: `${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)} is required.` });
    } else if (e.target.name === 'email' && e.target.value && !/\S+@\S+\.\S+/.test(e.target.value)) {
         setErrors({ ...errors, email: 'Email address is invalid.' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' }); // Clear form
        } else {
            const data = await response.json();
            alert(data.message || 'Failed to send message. Please try again.');
        }

    } catch (error) {
      console.error('Submission error:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-10">
            Have a project or a question? Send me a message, and I'll respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-4 rounded-lg bg-[#1e293b] text-white border ${
                errors.name ? 'border-red-500' : 'border-gray-700 focus:border-[#14b8a6]'
              } transition-colors`}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-4 rounded-lg bg-[#1e293b] text-white border ${
                errors.email ? 'border-red-500' : 'border-gray-700 focus:border-[#14b8a6]'
              } transition-colors`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-4 rounded-lg bg-[#1e293b] text-white border ${
                errors.message ? 'border-red-500' : 'border-gray-700 focus:border-[#14b8a6]'
              } transition-colors`}
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-[#14b8a6] hover:bg-[#0d9488] text-black font-semibold rounded-lg transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {isSuccess && <SuccessModal onClose={() => setIsSuccess(false)} />}
    </section>
  );
};

export default Contact;
