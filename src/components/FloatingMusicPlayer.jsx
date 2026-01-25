import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// REVISI 1: Path harus menyertakan nama folder repository agar tidak 404
const MUSIC_URL = '/wedding-invitation/music.mp3';

export default function FloatingMusicPlayer({ autoPlay }) { 
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Inisialisasi Audio saat pertama kali load
  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audioRef.current = audio;
    audio.volume = 0.5;
    audio.loop = true; 

    return () => {
      audio.pause();
    };
  }, []);

  // REVISI 2: Fungsi untuk memutar otomatis saat tombol "Buka Undangan" diklik
  useEffect(() => {
    if (autoPlay && audioRef.current) {
      const playAudio = async () => {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay diblokir browser, menunggu klik manual.");
        }
      };
      playAudio();
    }
  }, [autoPlay]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((err) => console.error("Gagal putar musik:", err));
      setIsPlaying(true);
    }
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-amber-600 text-white shadow-lg flex items-center justify-center hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      onClick={toggle}
      aria-label={isPlaying ? 'Pause musik' : 'Putar musik'}
    >
      {isPlaying ? (
        /* Icon Pause */
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      ) : (
        /* Icon Play */
        <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </motion.button>
  );
}
