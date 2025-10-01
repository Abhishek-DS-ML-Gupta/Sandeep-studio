import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import qrCodeImg from '../assets/qr-code.png';

function ConfirmationPage() {
  const location = useLocation();
  const [clientName, setClientName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('qr'); // default payment method
  const [copied, setCopied] = useState(false);

  // Replace these with your actual payment details
  const upiId = 'sandeepstudio@upi';
  const netBankingInstructions = `Bank: ABC Bank
Account: 123456789
IFSC: ABCD0123456`;

  useEffect(() => {
    if (location.state && location.state.name) {
      setClientName(location.state.name);
    }
  }, [location.state]);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex justify-center items-center py-20 px-4">
      <div className="max-w-2xl w-full bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 md:p-10 shadow-2xl animate-fade-in">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400 mb-2">
            Booking Received!
          </h1>
          {clientName && (
            <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
              Thank you, <span className="text-emerald-400 font-semibold">{clientName}</span>!
            </h2>
          )}
          <p className="text-gray-400 max-w-md mx-auto">
            Your booking request has been received. Please complete the payment to confirm it.
          </p>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-300 mb-4 text-center">Select Payment Method</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button
              onClick={() => setPaymentMethod('qr')}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center ${
                paymentMethod === 'qr'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
              </svg>
              QR Code
            </button>
            
            <button
              onClick={() => setPaymentMethod('upi')}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center ${
                paymentMethod === 'upi'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
              UPI ID
            </button>
            
            <button
              onClick={() => setPaymentMethod('netbanking')}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center ${
                paymentMethod === 'netbanking'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
              </svg>
              Net Banking
            </button>
          </div>
        </div>

        {/* Payment Display */}
        <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50 transition-all duration-500">
          {paymentMethod === 'qr' && (
            <div className="flex flex-col items-center">
              <p className="text-gray-300 mb-4">Scan the QR code using your UPI app:</p>
              <div className="relative group">
                <img
                  src={qrCodeImg}
                  alt="QR Code for Payment"
                  className="w-56 h-56 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-green-500/20 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          )}
          
          {paymentMethod === 'upi' && (
            <div className="flex flex-col items-center">
              <p className="text-gray-300 mb-4">Use the following UPI ID for payment:</p>
              <div
                className="flex items-center bg-gray-700/50 p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-gray-700/70 group"
                onClick={handleCopyUPI}
              >
                <div className="bg-gray-800/50 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-lg text-gray-200">{upiId}</div>
                  <div className="text-sm text-gray-400 mt-1 flex items-center">
                    {copied ? (
                      <span className="text-emerald-400 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Copied!
                      </span>
                    ) : (
                      <span className="flex items-center group-hover:text-emerald-400 transition-colors">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                        Click to Copy
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {paymentMethod === 'netbanking' && (
            <div className="bg-gray-700/50 rounded-xl p-5">
              <div className="flex items-center mb-4">
                <div className="bg-gray-800/50 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-200">Net Banking Details</h3>
              </div>
              <pre className="bg-gray-800/50 p-4 rounded-lg text-gray-200 whitespace-pre-wrap font-sans">
                {netBankingInstructions}
              </pre>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm flex flex-col items-center">
          <svg className="w-5 h-5 mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          After completing the payment, you will receive a confirmation email.
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default ConfirmationPage;