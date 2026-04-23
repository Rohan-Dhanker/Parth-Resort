import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Adventure', path: '/activities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-12 py-6',
        scrolled ? 'glass py-3 border-b border-forest/10 shadow-sm' : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className={cn(
            "font-serif text-2xl font-bold tracking-tight uppercase leading-none",
            scrolled ? "text-forest" : "text-white"
          )}>
            The Parth
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-gold mt-1">Resort • Shivpuri</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'nav-link relative group',
                location.pathname === link.path ? 'text-forest underline underline-offset-4 decoration-gold' : (scrolled ? 'text-forest/70 hover:text-forest' : 'text-white/70 hover:text-white')
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/booking"
            className="btn-primary"
          >
            Book Your Escape
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-black/10 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-8 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-serif font-medium text-primary-green',
                  location.pathname === link.path ? 'text-gold' : ''
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="mt-4 bg-primary-green text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-xl"
            >
              <Calendar size={20} />
              Book Your Stay
            </Link>
            <div className="flex items-center justify-center gap-2 text-primary-green/60 text-sm">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
