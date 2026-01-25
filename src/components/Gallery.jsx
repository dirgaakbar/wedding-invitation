import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder: ganti dengan URL foto asli
const DEFAULT_PHOTOS = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1529634801352-7a093c43e4c6?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1525268323446-0505b7f9dce8?w=400&h=500&fit=crop',
];

export default function Gallery({ photos = DEFAULT_PHOTOS }) {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="relative py-16 md:py-24 px-4 z-10">
      <motion.h2
        className="font-serif text-2xl md:text-3xl text-earth-500 text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Galeri
      </motion.h2>
      <motion.div
        className="w-12 h-px bg-gold-400/60 mx-auto mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
        {photos.map((src, i) => (
          <motion.button
            key={i}
            className="aspect-[3/4] rounded-lg overflow-hidden border border-gold-300/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setSelected(src)}
          >
            <img src={src} alt={`Galeri ${i + 1}`} className="w-full h-full object-cover transition-transform hover:scale-105" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-lg object-contain shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
