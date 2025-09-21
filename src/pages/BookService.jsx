import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import CustomSelect from '../components/CustomSelect';

const prices = {
  shootType: { 'Wedding': 25000, 'Pre-Wedding': 15000, 'Maternity': 10000, 'Newborn': 12000, 'Birthday': 8000, 'Portfolio': 18000, 'Other': 10000 },
  setup: { 'Standard Package': 5000, 'Premium Package': 10000, 'Cinematic Package': 20000 },
  extras: { 'droneShot': 7000 }
};

function BookService() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ shootType:'', setup:'', droneShot:false, name:'', email:'', phone:'' });
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleDroneShot = () => {
    setFormData(prev => ({ ...prev, droneShot: !prev.droneShot }));
  };

  const calculateTotal = () => {
    let total = 0;
    if(formData.shootType) total += prices.shootType[formData.shootType];
    if(formData.setup) total += prices.setup[formData.setup];
    if(formData.droneShot) total += prices.extras.droneShot;
    return total;
  };

  const handleNext = () => {
    if(step===1){ 
      if(formData.shootType && formData.setup) setStep(2); 
      else setModalMessage('Please select a shoot type and a package.'); 
    }
    else if(step===2){ 
      if(formData.name && formData.email && formData.phone) setStep(3); 
      else setModalMessage('Please fill out all your details.'); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/bookings', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      });
      if(response.ok) navigate('/booking-confirmed',{state:{name:formData.name}});
      else setModalMessage('Booking failed. Please try again.');
    } catch(error){
      setModalMessage('Network error. Please try again.');
      console.error(error);
    }
  };

  const shootTypeOptions = Object.keys(prices.shootType).map(key=>({ value:key, label:`${key} (${prices.shootType[key].toLocaleString()}₹)` }));
  const setupOptions = Object.keys(prices.setup).map(key=>({ value:key, label:`${key} (${prices.setup[key].toLocaleString()}₹)` }));

  return (
    <div className="book-service-container" style={{ minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'flex-start', padding:'6rem 1rem' }}>
      <div className="booking-content-box" style={{
        width:'100%',
        maxWidth:'600px',
        background:'rgba(0,0,0,0.6)',
        backdropFilter:'blur(10px)',
        padding:'2.5rem',
        borderRadius:'16px',
        boxShadow:'0 8px 30px rgba(0,0,0,0.4)',
        color:'#fff',
      }}>
        <h1 style={{ textAlign:'center', marginBottom:'2rem' }}> Book a Service</h1>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group" style={{ marginBottom: '1rem', width: '100%' }}>
              <CustomSelect
                label="What type of shoot do you want?"
                name="shootType"
                value={formData.shootType}
                options={shootTypeOptions}
                onChange={handleChange}
                style={{ width: '100%' }} // Full width
              />
            </div>

            <div className="form-group" style={{ marginBottom: '1rem', width: '100%' }}>
              <CustomSelect
                label="Select your package:"
                name="setup"
                value={formData.setup}
                options={setupOptions}
                onChange={handleChange}
                style={{ width: '100%' }} // Same width as first select
              />
            </div>

            {/* Drone Shot Yes/No */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'1rem' }}>
              <span>Drone Shot Extra (₹{prices.extras.droneShot.toLocaleString()})</span>
              <div style={{ display:'flex', borderRadius:'12px', overflow:'hidden', border:'1px solid #fff' }}>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, droneShot: true }))}
                  style={{
                    padding:'0.5rem 1rem',
                    backgroundColor: formData.droneShot ? '#FFD700' : 'transparent',
                    color: formData.droneShot ? '#000' : '#fff',
                    border:'none',
                    cursor:'pointer',
                    fontWeight:'bold',
                    transition:'0.3s'
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, droneShot: false }))}
                  style={{
                    padding:'0.5rem 1rem',
                    backgroundColor: !formData.droneShot ? '#FFD700' : 'transparent',
                    color: !formData.droneShot ? '#000' : '#fff',
                    border:'none',
                    cursor:'pointer',
                    fontWeight:'bold',
                    transition:'0.3s'
                  }}
                >
                  No
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="cta-button form-submit-button"
              style={{ marginTop: '1.5rem' }}
            >
              Next
            </button>
          </form>
        )}

        {/* Step 2 */}
        {step===2 && (
          <form onSubmit={(e)=>e.preventDefault()} style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} style={inputStyle}/>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle}/>
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={inputStyle}/>

            <div style={{ display:'flex', justifyContent:'space-between', gap:'1rem' }}>
              <button type="button" onClick={()=>setStep(1)} style={backButtonStyle}>Go Back</button>
              <button type="button" onClick={handleNext} style={ctaButtonStyle}>Next</button>
            </div>
          </form>
        )}

        {/* Step 3 */}
        {step===3 && (
          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <h2 style={{ textAlign:'center' }}>Order Summary</h2>
            <div style={summaryBoxStyle}>
              <div style={summaryItemStyle}><span>Name:</span><span>{formData.name}</span></div>
              <div style={summaryItemStyle}><span>Email:</span><span>{formData.email}</span></div>
              <div style={summaryItemStyle}><span>Shoot Type:</span><span>{shootTypeOptions.find(opt=>opt.value===formData.shootType)?.label}</span></div>
              <div style={summaryItemStyle}><span>Package:</span><span>{setupOptions.find(opt=>opt.value===formData.setup)?.label}</span></div>
              {formData.droneShot && <div style={summaryItemStyle}><span>Drone Shot:</span><span>Yes</span></div>}
              <div style={{ ...summaryItemStyle, fontWeight:'bold', fontSize:'1.1rem' }}><span>Total:</span><span>₹{calculateTotal().toLocaleString()}</span></div>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', gap:'1rem' }}>
              <button type="button" onClick={()=>setStep(2)} style={backButtonStyle}>Go Back</button>
              <button onClick={handleSubmit} style={ctaButtonStyle}>Proceed to Payment</button>
            </div>
          </div>
        )}
      </div>

      {modalMessage && <Modal message={modalMessage} onClose={()=>setModalMessage('')}/>}
    </div>
  );
}

// Styles
const inputStyle = { padding:'0.75rem 1rem', borderRadius:'10px', border:'none', outline:'none', fontSize:'1rem' };
const ctaButtonStyle = { flex:1, padding:'0.75rem 1rem', backgroundColor:'#FFD700', color:'#000', border:'none', borderRadius:'10px', fontWeight:'bold', cursor:'pointer' };
const backButtonStyle = { flex:1, padding:'0.75rem 1rem', backgroundColor:'rgba(255,255,255,0.2)', color:'#fff', border:'none', borderRadius:'10px', fontWeight:'bold', cursor:'pointer' };
const summaryBoxStyle = { background:'rgba(255,255,255,0.1)', borderRadius:'12px', padding:'1rem', display:'flex', flexDirection:'column', gap:'0.75rem' };
const summaryItemStyle = { display:'flex', justifyContent:'space-between' };

export default BookService;
