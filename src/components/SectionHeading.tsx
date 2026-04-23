import { motion } from 'motion/react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({ 
  badge, 
  title, 
  subtitle, 
  light = false, 
  centered = false 
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-flex items-center space-x-3 mb-6`}
        >
          <div className={`h-[1px] w-10 ${light ? 'bg-gold' : 'bg-gold'}`}></div>
          <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${
            light ? 'text-gold' : 'text-gold'
          }`}>
            {badge}
          </span>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 ${
          light ? 'text-white' : 'text-forest'
        }`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/70' : 'text-forest/60'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
