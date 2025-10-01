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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Removed unused toggleDroneShot function

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
    setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const shootTypeOptions = Object.keys(prices.shootType).map(key=>({ value:key, label:`${key} (${prices.shootType[key].toLocaleString()}₹)` }));
  const setupOptions = Object.keys(prices.setup).map(key=>({ value:key, label:`${key} (${prices.setup[key].toLocaleString()}₹)` }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex justify-center items-start py-20 px-4">
      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Book a Service
          </h1>
          <div className="flex justify-center mt-4">
            <div className="flex items-center">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    step >= num 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {num}
                  </div>
                  {num < 3 && (
                    <div className={`w-16 h-1 mx-1 ${step > num ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gray-700'}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <form className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="form-group">
                <CustomSelect
                  label="What type of shoot do you want?"
                  name="shootType"
                  value={formData.shootType}
                  options={shootTypeOptions}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <CustomSelect
                  label="Select your package:"
                  name="setup"
                  value={formData.setup}
                  options={setupOptions}
                  onChange={handleChange}
                />
              </div>

              {/* Drone Shot Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  <span className="text-gray-200">Drone Shot Extra (₹{prices.extras.droneShot.toLocaleString()})</span>
                </div>
                <div className="flex bg-gray-700 rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, droneShot: true }))}
                    className={`px-4 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                      formData.droneShot 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, droneShot: false }))}
                    className={`px-4 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                      !formData.droneShot 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
            >
              Next
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </form>
        )}

        {/* Step 2: Contact Information */}
        {step===2 && (
          <form className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  value={formData.name} 
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={formData.email} 
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone} 
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <button 
                type="button" 
                onClick={()=>setStep(1)}
                className="flex-1 py-3 bg-gray-700/50 text-gray-200 font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back
              </button>
              <button 
                type="button" 
                onClick={handleNext}
                className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
              >
                Next
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Order Summary */}
        {step===3 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-center text-gray-200">Order Summary</h2>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-700/50">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-gray-200 font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700/50">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-gray-200 font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700/50">
                  <span className="text-gray-400">Shoot Type:</span>
                  <span className="text-gray-200 font-medium">{shootTypeOptions.find(opt=>opt.value===formData.shootType)?.label}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-700/50">
                  <span className="text-gray-400">Package:</span>
                  <span className="text-gray-200 font-medium">{setupOptions.find(opt=>opt.value===formData.setup)?.label}</span>
                </div>
                {formData.droneShot && (
                  <div className="flex justify-between items-center pb-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Drone Shot:</span>
                    <span className="text-gray-200 font-medium">Yes</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-4">
                  <span className="text-xl font-bold text-gray-200">Total:</span>
                  <span className="text-xl font-bold text-indigo-400">₹{calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button 
                type="button" 
                onClick={()=>setStep(2)}
                className="flex-1 py-3 bg-gray-700/50 text-gray-200 font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back
              </button>
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`flex-1 py-3 font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-gradient-to-r from-indigo-400 to-purple-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Proceed to Payment
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {modalMessage && <Modal message={modalMessage} onClose={()=>setModalMessage('')}/>}
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default BookService;