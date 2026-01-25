import { useState } from 'react';
import FallingPetals from './components/FallingPetals';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Location from './components/Location';
import FloatingMusicPlayer from './components/FloatingMusicPlayer';

// ——— Sesuaikan data di bawah ini ———
const CONFIG = {
  groom: { name: 'Pria', role: 'Mempelai Pria', bio: 'Putra dari Bapak ... & Ibu ...' },
  bride: { name: 'Wanita', role: 'Mempelai Wanita', bio: 'Putri dari Bapak ... & Ibu ...' },
  weddingDate: '2026-03-08T09:00:00',
  venue: 'Gedung UNCEN',
  address: 'Pos 7 Bawah No. 123, Jayapura',
  mapsUrl: 'https://share.google/APoLcbOwLGBH5r841',
  akadTime: '08.00 - 09.00 WIB',
  resepsiTime: '10.00 - Selesai WIT',
};

export default function App() {
  // 1. Tambahkan state untuk mengontrol apakah undangan sudah dibuka
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* 2. Berikan prop autoPlay={isOpen} ke FloatingMusicPlayer */}
      <FloatingMusicPlayer autoPlay={isOpen} />

      {/* 3. Tampilan Layar Sampul (Muncul sebelum diklik) */}
      {!isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-900 text-white text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-serif italic text-amber-500">The Wedding of</h2>
            <h1 className="text-4xl md:text-6xl font-serif mb-8">
              {CONFIG.groom.name} & {CONFIG.bride.name}
            </h1>
            <button 
              onClick={() => setIsOpen(true)} // Saat tombol ini diklik, musik baru bisa berputar
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-all animate-bounce shadow-xl font-semibold"
            >
              Buka Undangan
            </button>
          </motion.div>
        </div>
      )}

      {/* 4. Konten Utama (Hanya terlihat rapi jika isOpen true) */}
      <div className={!isOpen ? "hidden" : "block"}>
        <FallingPetals />
        <main>
          <Hero groomName={CONFIG.groom.name} brideName={CONFIG.bride.name} />
          <Countdown targetDate={CONFIG.weddingDate} />
          <Profile groom={CONFIG.groom} bride={CONFIG.bride} />
          <Gallery />
          <Location
            venue={CONFIG.venue}
            address={CONFIG.address}
            mapsUrl={CONFIG.mapsUrl}
            akadTime={CONFIG.akadTime}
            resepsiTime={CONFIG.resepsiTime}
          />
        </main>

        <footer className="relative py-8 text-center font-sans text-earth-400 text-sm z-10">
          <p>Terima kasih atas doa dan restu Anda</p>
        </footer>
      </div>
    </div>
  );
}
