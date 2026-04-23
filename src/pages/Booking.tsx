import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, CreditCard, ChevronRight, Check, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { rooms } from '../data/resortData';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomId: rooms[0].id
  });

  const selectedRoom = rooms.find(r => r.id === formData.roomId) || rooms[0];
  const totalPrice = selectedRoom.price; // Simplified calculation for demo

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-off-white min-h-screen">
      <Helmet>
        <title>Book Your Experience | The Parth Resort</title>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          badge="Reservation"
          title="Secure Your Stay"
          centered={true}
        />

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative">
           <div className="h-1 bg-forest/10 absolute top-1/2 left-0 right-0 -translate-y-1/2 rounded-full" />
           <div 
             className="h-1 bg-gold absolute top-1/2 left-0 -translate-y-1/2 rounded-full transition-all duration-500" 
             style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
           />
           <div className="relative flex justify-between">
              {[1, 2, 3].map((s) => (
                <motion.div 
                  key={s} 
                  initial={false}
                  animate={{ scale: step === s ? 1.2 : 1 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 z-10 ${
                    step >= s ? 'bg-gold border-gold text-white shadow-lg' : 'bg-white border-forest/10 text-forest'
                  }`}
                >
                  {step > s ? <Check size={18} /> : s}
                </motion.div>
              ))}
           </div>
           <div className="flex justify-between mt-4 text-[10px] uppercase font-bold tracking-widest text-forest/40 px-2">
              <span className={step >= 1 ? 'text-forest' : ''}>Dates</span>
              <span className={step >= 2 ? 'text-forest' : ''}>Details</span>
              <span className={step >= 3 ? 'text-forest' : ''}>Confirmation</span>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Booking Area */}
          <div className="lg:col-span-2">
             <div className="bg-white p-8 md:p-12 rounded-[40px] luxury-shadow mb-8 relative overflow-hidden border border-forest/5">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <h3 className="font-serif text-3xl font-bold flex items-center gap-4 text-forest">
                         <Calendar className="text-gold" />
                         Choose Your Dates
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-forest/30">Check-in Date</label>
                            <input 
                              type="date" 
                              className="bg-off-white px-8 py-5 rounded-2xl border-none focus:ring-2 focus:ring-gold font-medium"
                              value={formData.checkIn}
                              onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                            />
                         </div>
                         <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-forest/30">Check-out Date</label>
                            <input 
                              type="date" 
                              className="bg-off-white px-8 py-5 rounded-2xl border-none focus:ring-2 focus:ring-gold font-medium"
                              value={formData.checkOut}
                              onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                            />
                         </div>
                         <div className="md:col-span-2 flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-forest/30">Number of Guests</label>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                               {['1', '2', '3', '4', '5', '6+'].map((num) => (
                                 <button
                                   key={num}
                                   onClick={() => setFormData({...formData, guests: num})}
                                   className={`py-4 rounded-2xl font-bold transition-all ${
                                     formData.guests === num ? 'bg-forest text-white shadow-xl' : 'bg-off-white hover:bg-gold/10'
                                   }`}
                                 >
                                   {num}
                                 </button>
                               ))}
                            </div>
                         </div>
                      </div>
                      <button 
                        onClick={nextStep}
                        disabled={!formData.checkIn || !formData.checkOut}
                        className="btn-gold w-full py-6"
                      >
                         Continue to Room Selection
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <h3 className="font-serif text-3xl font-bold flex items-center gap-4 text-forest">
                         <Users className="text-gold" />
                         Select Sanctuary
                      </h3>
                      <div className="grid grid-cols-1 gap-6">
                         {rooms.map((room) => (
                           <button
                             key={room.id}
                             onClick={() => setFormData({...formData, roomId: room.id})}
                             className={`p-6 rounded-[30px] border-2 text-left transition-all flex flex-col md:flex-row gap-8 items-center ${
                               formData.roomId === room.id ? 'border-gold bg-gold/5 shadow-inner' : 'border-off-white hover:border-gold/20'
                             }`}
                           >
                             <div className="w-full md:w-32 h-32 shrink-0 overflow-hidden rounded-2xl">
                                <img src={room.image} className="w-full h-full object-cover" alt={room.name} />
                             </div>
                             <div className="flex-grow">
                                <div className="flex justify-between items-center mb-2">
                                  <h4 className="font-serif text-2xl font-bold text-forest">{room.name}</h4>
                                  <p className="font-bold text-gold">₹{room.price}</p>
                                </div>
                                <p className="text-sm text-forest/60 mb-4 line-clamp-2">{room.description}</p>
                             </div>
                           </button>
                         ))}
                      </div>
                      <div className="flex gap-4">
                        <button onClick={prevStep} className="flex-1 bg-off-white text-forest font-bold py-6 rounded-3xl">Go Back</button>
                        <button onClick={nextStep} className="flex-[2] btn-gold py-6">Confirm Sanctuary</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <h3 className="font-serif text-3xl font-bold flex items-center gap-4 text-forest">
                         <CreditCard className="text-gold" />
                         Secure Checkout
                      </h3>
                      <div className="bg-forest/5 p-10 rounded-[30px] border border-gold/10 grid grid-cols-1 md:grid-cols-2 gap-12">
                         <div className="space-y-8">
                            <h4 className="uppercase tracking-widest font-bold text-[10px] text-forest/40">Guest Details</h4>
                            <div className="space-y-4">
                               <input type="text" placeholder="Full Name" className="w-full bg-white px-6 py-4 rounded-xl border border-forest/10 focus:ring-2 focus:ring-gold outline-none" />
                               <input type="email" placeholder="Email Address" className="w-full bg-white px-6 py-4 rounded-xl border border-forest/10 focus:ring-2 focus:ring-gold outline-none" />
                            </div>
                         </div>
                         <div className="space-y-8">
                            <h4 className="uppercase tracking-widest font-bold text-[10px] text-forest/40">Payment Info</h4>
                            <div className="grid grid-cols-1 gap-4">
                               <button className="flex items-center gap-4 p-5 rounded-xl border-2 border-forest bg-white shadow-lg">
                                  <div className="w-4 h-4 rounded-full border-4 border-gold" />
                                  <span className="font-bold flex-grow text-left text-forest">Digital Payment</span>
                               </button>
                            </div>
                         </div>
                      </div>
                      <div className="flex gap-4">
                        <button onClick={prevStep} className="flex-1 bg-off-white text-forest font-bold py-6 rounded-3xl">Go Back</button>
                        <button className="flex-[2] btn-gold py-6">Complete Escape</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
             
             {/* Security Badge */}
             <div className="flex items-center justify-center gap-3 text-primary-green/40 text-sm font-medium">
                <ShieldCheck size={18} className="text-gold" />
                <span>SSL Encrypted Secure Transaction</span>
             </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
             <div className="bg-white rounded-[40px] luxury-shadow overflow-hidden sticky top-32 border border-forest/5">
                <div className="h-40 relative">
                   <img src={selectedRoom.image} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <h4 className="text-white font-serif text-2xl font-bold">{selectedRoom.name}</h4>
                   </div>
                </div>
                <div className="p-10 space-y-8">
                   <div className="space-y-6">
                      <div className="flex justify-between text-sm">
                         <span className="text-forest/40 font-bold uppercase tracking-widest text-[10px]">Pricing</span>
                         <span className="font-bold">₹{selectedRoom.price} / night</span>
                      </div>
                      <div className="flex justify-between text-sm">
                         <span className="text-forest/40 font-bold uppercase tracking-widest text-[10px]">Stay Duration</span>
                         <span className="font-bold">2 Nights</span>
                      </div>
                   </div>
                   <div className="pt-8 border-t border-forest/10 flex justify-between items-center">
                      <span className="font-serif text-2xl font-bold text-forest">Total</span>
                      <span className="font-serif text-3xl font-bold text-gold">₹{(totalPrice * 2) + 1200}</span>
                   </div>
                   
                   <div className="bg-gold/5 p-6 rounded-2xl space-y-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">Sanctuary Perk</p>
                      <ul className="space-y-2 text-xs font-semibold text-forest/70">
                         <li className="flex items-center gap-2"><Check size={14} className="text-gold" /> Morning Himalayan Yoga</li>
                         <li className="flex items-center gap-2"><Check size={14} className="text-gold" /> High Speed Nature-Wifi</li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
