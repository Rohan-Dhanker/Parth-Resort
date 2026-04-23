import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Waves, Tent, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import { rooms, activities, testimonials } from '../data/resortData';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>The Parth Resort | Luxury Riverside Stay in Shivpuri, Rishikesh</title>
        <meta name="description" content="Discover luxury at The Parth Resort in Shivpuri, Rishikesh. Experience riverside camping, river rafting, and premium hospitality in the heart of the Himalayas." />
      </Helmet>

      {/* Hero Section */}
      <HeroSection 
        title="Where Mountains Meet the Soul"
        subtitle="Experience Luxury in Shivpuri"
        image="https://images.unsplash.com/photo-1544102824-3677b85f2694?q=80&w=1920&auto=format&fit=crop"
      />

      {/* Highlights Section */}
      <section className="py-24 px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <SectionHeading 
            badge="The Experience"
            title="A Riverside Retreat in the Himalayan Foothills"
            subtitle="Nestled on the banks of the mighty Ganges, The Parth Resort offers a unique blend of adventure and serene luxury. Just miles from Rishikesh, explore a world of tranquility."
          />
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-off-white p-8 rounded-[30px] luxury-shadow flex flex-col gap-4 border border-gold/10"
            >
              <Waves className="text-gold" size={32} />
              <h3 className="font-serif text-xl font-bold">Rafting Central</h3>
              <p className="text-sm text-forest/60 underline decoration-gold/30">Located at the heart of the rafting starting points.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-forest text-white p-8 rounded-[30px] luxury-shadow flex flex-col gap-4"
            >
              <Tent className="text-gold" size={32} />
              <h3 className="font-serif text-xl font-bold">Nature Stays</h3>
              <p className="text-sm text-white/60">Wake up to the sounds of river rapids and birds.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-forest text-white p-8 rounded-[30px] luxury-shadow flex flex-col gap-4"
            >
              <Zap className="text-gold" size={32} />
              <h3 className="font-serif text-xl font-bold">Adventure</h3>
              <p className="text-sm text-white/60">Trekking, bungee jumping, and cliff diving nearby.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-off-white p-8 rounded-[30px] luxury-shadow flex flex-col gap-4 border border-gold/10"
            >
              <Star className="text-gold" size={32} />
              <h3 className="font-serif text-xl font-bold">Luxury</h3>
              <p className="text-sm text-forest/60 underline decoration-gold/30">Premium amenities with traditional hill hospitality.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-24 px-12 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <SectionHeading 
              badge="Accommodations"
              title="Signature Stays"
              centered={false}
            />
            <Link to="/rooms" className="nav-link text-gold mb-16 flex items-center gap-2">
              View All Rooms <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-[40px] bg-white luxury-shadow border border-forest/5"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gold text-[10px] font-bold uppercase tracking-widest">{room.type}</span>
                    <span className="text-2xl font-serif font-bold">₹{room.price}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{room.name}</h3>
                  <p className="text-sm text-forest/60 mb-8 line-clamp-2 leading-relaxed">{room.description}</p>
                  <Link 
                    to="/booking" 
                    className="btn-gold w-full text-center block"
                  >
                    Check Availability
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-12 bg-forest text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            badge="Testimonials"
            title="Voices of the Ganges"
            centered={true}
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass p-12 rounded-[40px] border border-white/10"
              >
                <div className="flex gap-1 mb-6 text-gold">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-lg font-light leading-relaxed mb-8 italic text-forest">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center font-serif text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-forest">{t.name}</h4>
                    <p className="text-[10px] text-forest/40 uppercase tracking-widest font-bold">Happy Guest</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-gold rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden luxury-shadow">
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary-green mb-8">Ready for an Unforgettable Escape?</h2>
            <p className="text-xl text-primary-green/80 mb-12 max-w-2xl mx-auto font-light">
              Secure your riverside cottage now and get a 10% discount on river rafting adventure packages.
            </p>
            <Link 
              to="/booking" 
              className="inline-flex items-center gap-3 bg-primary-green text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-primary-green transition-all duration-500 shadow-2xl"
            >
              Book Your Adventure
              <ArrowRight />
            </Link>
          </div>
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
      </section>
    </div>
  );
}
