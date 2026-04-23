import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/SectionHeading';
import HeroSection from '../components/HeroSection';

export default function About() {
  return (
    <div className="pb-24">
      <Helmet>
        <title>About Us | The Story of The Parth Resort</title>
      </Helmet>

      <HeroSection 
        title="Our Story"
        subtitle="Himalayan Heritage"
        image="https://images.unsplash.com/photo-1544102824-3677b85f2694?q=80&w=1920&auto=format&fit=crop"
        ctaText="Discover More"
        ctaLink="#story"
      />

      <section id="story" className="py-24 px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <SectionHeading 
              badge="Since 2018"
              title="A Vision Born from the River Winds"
              subtitle="The Parth Resort was founded with a single mission: to provide an authentic Himalayan experience that doesn't compromise on the comforts of modern living."
            />
            <div className="space-y-6 text-forest/70 font-light leading-relaxed">
              <p>
                Located in the heart of Shivpuri, we are more than just a resort. We are a family of adventurers, nature lovers, and hospitality experts who believe that the best memories are made between the mountains and the river.
              </p>
              <p>
                Our philosophy is simple—sustainability, luxury, and adventure. We work closely with the local mountain communities to ensure our footprint is minimal and our impact is positive.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 mt-16 pt-16 border-t border-forest/10">
               <div>
                  <h4 className="text-4xl font-serif font-bold text-gold mb-2">1500+</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-forest/40">Happy Guests</p>
               </div>
               <div>
                  <h4 className="text-4xl font-serif font-bold text-gold mb-2">50+</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-forest/40">Adventure Trips</p>
               </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10 rounded-[40px] overflow-hidden luxury-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop" 
                  alt="Resort Staff" 
                  className="w-full h-full object-cover"
                />
             </div>
             {/* Decorative Element */}
             <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-gold rounded-tl-[40px] -z-0" />
             <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-4 border-b-4 border-gold rounded-br-[40px] -z-0" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-12 bg-forest text-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading 
            badge="Our Values"
            title="The Three Pillars"
            light={true}
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { title: 'Authenticity', text: 'We offer experiences that reflect the true culture and natural spirit of Uttarakhand.' },
              { title: 'Excellence', text: 'From the threads of your linens to the path of your raft, we demand perfection.' },
              { title: 'Harmony', text: 'Living in balance with the Ganges and the forest that surrounds us.' },
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-12 rounded-[40px] glass border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h4 className="font-serif text-3xl font-bold text-gold mb-6">{v.title}</h4>
                <p className="text-white/60 font-light leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
