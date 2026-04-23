import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your message has been received. Our team will contact you shortly.');
  };

  return (
    <div className="pt-40 pb-24 px-12">
      <Helmet>
        <title>Contact Us | The Parth Resort Shivpuri</title>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          badge="Inquiries"
          title="Reach Out to Us"
          subtitle="Planning a trip or have a question? Our team is available to assist you."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          {/* Info Side */}
          <div className="flex flex-col gap-8">
             <div className="bg-forest p-12 rounded-[40px] text-white flex flex-col gap-8 h-full">
                <h3 className="font-serif text-3xl font-bold mb-4">Contact Info</h3>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Location</h4>
                    <p className="text-sm text-white/60">Shivpuri, Rishikesh, Uttarakhand 249175</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-sm text-white/60">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-sm text-white/60">info@theparthresort.com</p>
                  </div>
                </div>

                <div className="mt-auto pt-10 border-t border-white/10">
                   <h4 className="font-bold mb-6">Stay Connected</h4>
                   <div className="flex gap-4">
                     {[Facebook, Instagram, Twitter].map((Icon, i) => (
                       <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-forest transition-all">
                         <Icon size={20} />
                       </a>
                     ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white p-12 rounded-[40px] luxury-shadow border border-forest/5 h-full">
               <h3 className="font-serif text-3xl font-bold text-forest mb-8">Send a Message</h3>
               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40 ml-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="bg-off-white px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-gold transition-all outline-none"
                    />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40 ml-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-off-white px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-gold transition-all outline-none"
                    />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40 ml-2">Inquiry Type</label>
                    <select className="bg-off-white px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-gold transition-all appearance-none outline-none">
                       <option>Accommodation</option>
                       <option>Adventure Packages</option>
                       <option>Events</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-forest/40 ml-2">Your Message</label>
                    <textarea 
                      required
                      rows={5} 
                      placeholder="Tell us about your requirements..." 
                      className="bg-off-white px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-gold transition-all resize-none outline-none"
                    />
                 </div>
                 <div className="md:col-span-2 pt-6">
                    <button className="btn-gold w-full md:w-auto px-16 py-5">
                       Send Message
                    </button>
                 </div>
               </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 rounded-[40px] overflow-hidden luxury-shadow h-[500px] border-8 border-white bg-off-white">
           <div className="w-full h-full flex flex-col items-center justify-center text-forest/20">
              <MapPin size={80} className="mb-4 animate-pulse" />
              <p className="font-serif text-2xl font-bold">Resort Location</p>
           </div>
        </div>
      </div>
    </div>
  );
}
