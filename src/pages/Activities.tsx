import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Waves, Mountain, Tent, Shield, AlertTriangle, Users, Map } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import { activities } from '../data/resortData';

const iconMap: Record<string, any> = {
  Waves,
  Mountain,
  Tent
};

export default function Activities() {
  return (
    <div className="pb-24">
      <Helmet>
        <title>Adventure & Activities | The Parth Resort Shivpuri</title>
      </Helmet>

      <HeroSection 
        title="Unleash Your Spirit"
        subtitle="Ganges & Shivaliks"
        image="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1920&auto=format&fit=crop"
        ctaText="Book Activities"
        ctaLink="#activities"
      />

      <section id="activities" className="py-24 px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Experiences"
            title="Adventure Awaits"
            subtitle="Deep in the heart of Shivpuri, we offer the best adventure packages in Rishikesh. Expert guides and top-tier equipment ensure your safety and thrill."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {activities.map((act, index) => {
              const Icon = iconMap[act.icon];
              return (
                <motion.div
                  key={act.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative h-[28rem] overflow-hidden rounded-[40px] luxury-shadow mb-8">
                    <img 
                      src={act.image} 
                      alt={act.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center text-forest mb-6 shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-3xl font-serif font-bold text-white mb-2">{act.title}</h3>
                      <p className="text-white/70 font-light line-clamp-2">{act.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 px-12 bg-off-white">
        <div className="max-w-7xl mx-auto bg-forest rounded-[40px] p-12 md:p-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              badge="Safety First"
              title="Your Wellbeing is Our Priority"
              light={true}
            />
            <p className="text-white/70 mb-10 font-light leading-relaxed">
              We adhere to international safety standards for all our adventure sports. Our guides are trained in First Aid and CPR, and we use only certified equipment.
            </p>
            <div className="space-y-6">
              {[
                { icon: Shield, text: 'Certified Safety Gear (UIAA Standards)', title: 'Quality Equipment' },
                { icon: Users, text: 'Professional & Licensed Instructors', title: 'Expert Guidance' },
                { icon: AlertTriangle, text: 'Briefings & Pre-rafting Drills', title: 'Thorough Briefing' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop" 
              alt="Safety Briefing" 
              className="rounded-[40px] luxury-shadow shadow-gold/20"
            />
            <div className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-[30px] hidden md:block">
               <Map className="text-forest mb-4" size={40} />
               <p className="text-forest font-bold text-2xl uppercase tracking-tighter">Safety <br/>Audited</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
