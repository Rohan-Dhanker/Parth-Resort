import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-white pt-20 pb-10 px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-3xl font-bold tracking-tight uppercase leading-none">The Parth</span>
            <span className="text-[10px] tracking-[0.4em] uppercase font-semibold text-gold mt-2">Resort • Shivpuri</span>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs font-light">
            An oasis of tranquility in the heart of Shivpuri. Experience luxury stays, river rafting, and soul-stirring Himalayan views.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group">
                <Icon size={18} className="group-hover:text-forest transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/70">
            {['Home', 'Rooms', 'Activities', 'Gallery', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-gold transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Contact Info</h4>
          <ul className="flex flex-col gap-6 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin size={20} className="text-gold shrink-0" />
              <span>Shivpuri, Rishikesh, Uttarakhand 249175, India</span>
            </li>
            <li className="flex gap-3">
              <Phone size={20} className="text-gold shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="text-gold shrink-0" />
              <span>reservations@theparthresort.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-semibold mb-6 text-gold">Updates</h4>
          <p className="text-sm text-white/70 mb-6 font-light">Subscribe for seasonal rafting updates and Himalayan storytelling.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button className="bg-gold text-forest font-bold py-3 rounded-xl hover:bg-white transition-colors duration-300 uppercase tracking-widest text-[10px]">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} The Parth Resort. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
