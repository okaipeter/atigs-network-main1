import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  // Handle OTP input change
  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value && index < 5) {
      const nextInput = element.parentElement?.nextElementSibling?.querySelector('input');
      if (nextInput) nextInput.focus();
    }
  };

  // Handle backspace
  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = e.currentTarget.parentElement?.previousElementSibling?.querySelector('input');
      if (prevInput) {
        prevInput.focus();
        setOtp([...otp.map((d, idx) => (idx === index - 1 ? '' : d))]);
      }
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    if (pastedData.every(char => !isNaN(Number(char)))) {
      setOtp([...pastedData, ...Array(6 - pastedData.length).fill('')]);
      // Focus last input or the next empty input
      const inputs = document.querySelectorAll('input');
      const lastFilledIndex = Math.min(pastedData.length, 5);
      if (inputs[lastFilledIndex]) {
        inputs[lastFilledIndex].focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter all digits of the OTP');
      return;
    }

    try {
      // Here you would verify the OTP with your backend
      console.log('Verifying OTP:', otpString);
      // If verification is successful, navigate to reset password page
      navigate('/reset-password', { state: { email, otp: otpString } });
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/forgot-password">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 text-[#1a365d] hover:text-[#2c5282] transition-colors"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Reset Password</span>
            </motion.div>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Enter Verification Code
              </h1>
              <p className="text-sm text-gray-600">
                We've sent a 6-digit code to {email || 'your email'}. 
                Enter the code below to verify.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Input */}
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <div key={index} className="w-12">
                    <input
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e.target, index)}
                      onKeyDown={(e) => handleBackspace(e, index)}
                      onPaste={handlePaste}
                      className="w-full h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                    />
                  </div>
                ))}
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-[#1a365d] text-white py-3 px-4 rounded-lg hover:bg-[#2c5282] transition-colors font-medium"
              >
                Verify Code
              </motion.button>

              <div className="text-center text-sm">
                <p className="text-gray-600">
                  Didn't receive the code?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      // Handle resend code logic here
                      console.log('Resending code...');
                    }}
                    className="text-[#1a365d] hover:text-[#2c5282] font-medium"
                  >
                    Resend Code
                  </button>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyOTP; 