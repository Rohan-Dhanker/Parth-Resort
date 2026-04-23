import { motion } from 'motion/react';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-gold/10 border-t-gold rounded-full"
        />
        
        {/* Inner Content */}
        <div className="text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="font-serif text-2xl font-bold text-forest block"
          >
            P
          </motion.span>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-forest/40 font-bold mb-2">The Parth Resort</span>
        <div className="w-48 h-[1px] bg-forest/5 relative overflow-hidden">
           <motion.div 
             animate={{ x: [-200, 200] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute inset-0 bg-gold"
           />
        </div>
      </motion.div>
    </div>
  );
}
