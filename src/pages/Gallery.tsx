import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1544102824-3677b85f2694?q=80&w=800&auto=format&fit=crop', category: 'Resort', span: 'col-span-2 row-span-2' },
  { id: 2, url: 'https://images.unsplash.com/photo-1530866495547-084969ef31e3?q=80&w=800&auto=format&fit=crop', category: 'Adventure', span: '' },
  { id: 3, url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop', category: 'Views', span: 'row-span-2' },
  { id: 4, url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop', category: 'Rooms', span: '' },
  { id: 5, url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop', category: 'Rooms', span: 'col-span-2' },
  { id: 6, url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop', category: 'Adventure', span: '' },
  { id: 7, url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop', category: 'Pool', span: 'row-span-2' },
  { id: 8, url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop', category: 'Rooms', span: '' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <Helmet>
        <title>Visual Gallery | The Parth Resort Shivpuri</title>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          badge="Gallery"
          title="Captured Moments"
          subtitle="A glimpse into the beauty, thrill, and hospitality that awaits you at The Parth."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative group cursor-pointer overflow-hidden rounded-3xl ${img.span}`}
              onClick={() => setSelectedImg(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.category} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-green">
                  <Maximize2 size={20} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-[10px] text-white uppercase tracking-widest font-bold border border-white/20">
                {img.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-gold transition-colors">
            <X size={40} />
          </button>
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImg} 
            className="max-w-full max-h-full rounded-2xl luxury-shadow"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
