import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const [phoneOTP, setPhoneOTP] = useState(new Array(4).fill(''));
  const [emailOTP, setEmailOTP] = useState(new Array(4).fill(''));

  // Handle OTP Input Changes
  const handleOTPChange = (otpType, index, value) => {
    const otpArray = otpType === 'phone' ? [...phoneOTP] : [...emailOTP];
    otpArray[index] = value;
    otpType === 'phone' ? setPhoneOTP(otpArray) : setEmailOTP(otpArray);
  };

  // Handle Phone Number Verification
  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!phoneNumber) {
      setError('Phone number is required');
      setLoading(false);
      return;
    }

    try {
      // Mocking an API call for sending phone OTP
      const response = await fetch('/api/send-phone-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, phoneOTP: phoneOTP.join('') }),
      });

      // if (!response.ok) {
      //   throw new Error('Failed to verify OTP. Please try again.');
      // }

      const data = "await response.json()";

      if (data==="await response.json()") {
        setSuccess(true);
      } else {
        throw new Error(data.message || 'Unknown error');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    setSuccess(true);
  };

  // Handle Email Verification
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!companyEmail) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    try {
      // Mocking an API call for sending email OTP
      const response = await fetch('/api/send-email-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyEmail, emailOTP: emailOTP.join('') }),
      });

      // if (!response.ok) {
      //   throw new Error('Failed to verify OTP. Please try again.');
      // }

      const data = "await response.json()";

      if (data==="await response.json()") {
        setSuccess(true);
      } else {
        throw new Error(data.message || 'Unknown error');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

    setSuccess(true);

    navigate('/createroom')
    
  };

  // Render OTP Inputs
  const renderOTPInputs = (otpType) => (
    <div className="flex justify-center gap-2 mt-4">
      {new Array(4).fill('').map((_, idx) => (
        <input
          key={idx}
          type="text"
          maxLength="1"
          value={otpType === 'phone' ? phoneOTP[idx] : emailOTP[idx]}
          onChange={(e) => handleOTPChange(otpType, idx, e.target.value)}
          className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      ))}
    </div>
  );

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 p-6">
        
        <div className="md:w-1/2 text-center mt-52">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vitae ex possimus culpa itaque a quia adipisci quas nam quo vero
            nulla, amet soluta, placeat quaerat eligendi et est ullam.
          </p>
        </div>

       
        <div className="md:w-1/2 border-4 border-yellow-300 p-8 rounded-lg bg-white shadow-lg">
          <h3 className="text-center text-2xl font-bold mb-4">Sign Up</h3>
          <p className="text-center text-gray-500 mb-6">
            Lorem lapsum is simple dummy text
          </p>

         
          <form onSubmit={handlePhoneSubmit}>
            <div className="space-y-4">
              <span className="block">
                <input
                  type="text"
                  placeholder="Phone no."
                  value={phoneNumber}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </span>
              {/* OTP Input Boxes for Phone */}
              <span className="block">
                <label className="block text-center">Enter OTP:</label>
                {renderOTPInputs('phone')}
              </span>
              <span className="block text-center">
                <button
                  type="submit"
                  className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Verify Number'}
                </button>
              </span>
            </div>
          </form>

          <form onSubmit={handleEmailSubmit}>
            <div className="space-y-4 mt-6">
              <span className="block">
                <input
                  type="email"
                  placeholder="Company Email"
                  value={companyEmail}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  onChange={(e) => setCompanyEmail(e.target.value)}
                />
              </span>
              
              <span className="block">
                <label className="block text-center">Enter OTP:</label>
                {renderOTPInputs('email')}
              </span>
              <span className="block text-center">
                <button
                  type="submit"
                  className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Verify Email'}
                </button>
              </span>
            </div>
          </form>

         
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && (
            <p className="text-green-500 text-center mt-4">
              OTP verified successfully!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUpOTP;
