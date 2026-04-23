import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroSection({ title, subtitle, image, ctaText = 'Explore Stay', ctaLink = '/rooms' }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex flex-col items-start justify-center overflow-hidden px-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-4xl">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="flex items-center space-x-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-gold"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold">{subtitle}</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl text-white font-bold leading-[1.05] mb-10 tracking-tight"
        >
          {title.includes('Ganges') ? (
            <>Where the <span className="italic text-gold">Ganges</span> <br/> Meets the Soul.</>
          ) : title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-start gap-6"
        >
          <Link 
            to={ctaLink}
            className="btn-gold"
          >
            {ctaText}
          </Link>
          
          <Link 
            to="/activities"
            className="text-white hover:text-gold transition-colors font-bold text-xs uppercase tracking-widest border-b border-white/30 hover:border-gold pb-1 flex items-center gap-2"
          >
            Adventure Activities
          </Link>
        </motion.div>
        
        {/* Rating Stats - Theme specific */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
           className="flex space-x-12 mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col">
            <span className="text-3xl font-serif text-white">4.9/5</span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Guest Rating</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-serif text-white">25+</span>
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Adventures</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-60">Scroll Down</span>
        <ChevronDown size={24} className="opacity-60" />
      </motion.div>
      
      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
