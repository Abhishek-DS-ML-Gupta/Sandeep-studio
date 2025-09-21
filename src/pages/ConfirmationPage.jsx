import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import qrCodeImg from '../assets/qr-code.png';

function ConfirmationPage() {
  const location = useLocation();
  const [clientName, setClientName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('qr'); // default payment method

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
    alert('UPI ID copied to clipboard!');
  };

  return (
    <div
      className="confirmation-container"
      style={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'flex-end', // middle-right
        alignItems: 'center',
        padding: '2rem',
        paddingTop: '6rem', // offset for navbar
      }}
    >
      <div
        className="confirmation-card"
        style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '2rem',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          color: '#fff',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <h1>Booking Received!</h1>
        {clientName && <h2>Thank you, {clientName}!</h2>}
        <p>Your booking request has been received. Please complete the payment to confirm it.</p>

        {/* Payment Method Selection */}
        <div
          className="payment-methods"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            margin: '1.5rem 0',
            flexWrap: 'wrap',
          }}
        >
          <button
            className={`payment-btn ${paymentMethod === 'qr' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('qr')}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: paymentMethod === 'qr' ? '#fff' : '#333',
              color: paymentMethod === 'qr' ? '#000' : '#fff',
              fontWeight: 'bold',
            }}
          >
            QR Code
          </button>
          <button
            className={`payment-btn ${paymentMethod === 'upi' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('upi')}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: paymentMethod === 'upi' ? '#fff' : '#333',
              color: paymentMethod === 'upi' ? '#000' : '#fff',
              fontWeight: 'bold',
            }}
          >
            UPI ID
          </button>
          <button
            className={`payment-btn ${paymentMethod === 'netbanking' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('netbanking')}
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: paymentMethod === 'netbanking' ? '#fff' : '#333',
              color: paymentMethod === 'netbanking' ? '#000' : '#fff',
              fontWeight: 'bold',
            }}
          >
            Net Banking
          </button>
        </div>

        {/* Payment Display */}
        <div className="payment-display" style={{ marginTop: '1rem' }}>
          {paymentMethod === 'qr' && (
            <div>
              <p>Scan the QR code using your UPI app:</p>
              <img
                src={qrCodeImg}
                alt="QR Code for Payment"
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                }}
              />
            </div>
          )}
          {paymentMethod === 'upi' && (
            <div>
              <p>Use the following UPI ID for payment:</p>
              <div
                style={{
                  backgroundColor: '#333',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  marginTop: '0.5rem',
                  cursor: 'pointer',
                }}
                onClick={handleCopyUPI}
              >
                {upiId}{' '}
                <span style={{ marginLeft: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>
                  (Click to Copy)
                </span>
              </div>
            </div>
          )}
          {paymentMethod === 'netbanking' && (
            <div
              style={{
                textAlign: 'left',
                margin: '0 auto',
                maxWidth: '300px',
                backgroundColor: '#333',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              <p>
                <strong>Net Banking Details:</strong>
              </p>
              <pre style={{ whiteSpace: 'pre-wrap', color: '#fff' }}>{netBankingInstructions}</pre>
            </div>
          )}
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#aaa' }}>
          After completing the payment, you will receive a confirmation email.
        </p>
      </div>
    </div>
  );
}

export default ConfirmationPage;
