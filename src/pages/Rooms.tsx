import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Coffee, Wifi, Tv, Wind, Maximize, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import { rooms } from '../data/resortData';

const amenityIcons: Record<string, any> = {
  'AC': Wind,
  'Wifi': Wifi,
  'TV': Tv,
  'Coffee': Coffee,
  'Maximize': Maximize,
  'Users': Users,
};

export default function Rooms() {
  return (
    <div className="pb-24">
      <Helmet>
        <title>Rooms & Packages | The Parth Resort Shivpuri</title>
      </Helmet>

      <HeroSection 
        title="Sanctuaries of Peace"
        subtitle="Rooms & Suites"
        image="https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=1920&auto=format&fit=crop"
        ctaText="View All Packages"
        ctaLink="#room-list"
      />

      <section id="room-list" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            badge="Our Collection"
            title="Designed for Deep Comfort"
            subtitle="Every room at The Parth is a blend of local Himalayan soul and modern luxury. Select the sanctuary that speaks to you."
            centered={true}
          />

          <div className="space-y-32 mt-20">
            {rooms.map((room, index) => (
              <motion.div 
                key={room.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                   <div className="aspect-[4/3] overflow-hidden rounded-[3rem] luxury-shadow">
                      <img 
                        src={room.image} 
                        alt={room.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                   </div>
                   {/* Floating Badge */}
                   <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full font-bold text-primary-green shadow-xl">
                      {room.type}
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                   <div className="flex items-center gap-2 text-gold font-bold mb-4">
                      <span>₹{room.price}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                      <span>{room.occupancy}</span>
                   </div>
                   <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">{room.name}</h3>
                   <p className="text-lg text-forest/70 mb-8 font-light leading-relaxed">
                      {room.description}
                   </p>

                   <div className="grid grid-cols-2 gap-6 mb-10">
                      {room.amenities.map(amenity => (
                        <div key={amenity} className="flex items-center gap-3 text-sm text-forest/60">
                           <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                              <Zap size={14} />
                           </div>
                           {amenity}
                        </div>
                      ))}
                   </div>

                   <Link 
                     to="/booking"
                     className="btn-gold"
                   >
                     Book This Sanctuary
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper to keep using the icon components from Lucide
function Zap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}
