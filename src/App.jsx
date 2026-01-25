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
  weddingDate: '2025-12-31T09:00:00',
  venue: 'Gedung Serba Guna',
  address: 'Jl. Contoh No. 123, Kota Anda',
  mapsUrl: 'https://maps.google.com',
  akadTime: '08.00 - 09.00 WIB',
  resepsiTime: '10.00 - 14.00 WIB',
  // Musik: taruh file MP3 di folder public/ dengan nama music.mp3, atau isi URL di sini
  // Contoh: musicUrl: 'https://.../lagu.mp3'   atau  musicUrl: '/music.mp3'
  musicUrl: public/music.mp3, // pakai public/music.mp3 jika undefined
};

export default function App() {
  return (
    <div className="relative min-h-screen">
      <FallingPetals />
      <FloatingMusicPlayer musicUrl={CONFIG.musicUrl} />

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
  );
}
