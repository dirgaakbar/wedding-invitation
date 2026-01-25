import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Ganti src dengan URL file MP3 musik undangan (bisa dari /public/music.mp3 atau URL eksternal)
const MUSIC_URL = '/music.mp3';

export default function FloatingMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audioRef.current = audio;
    audio.volume = 0.5;
    return () => {
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    const onEnd = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audioRef.current.addEventListener('ended', onEnd);
    audioRef.current.addEventListener('play', onPlay);
    audioRef.current.addEventListener('pause', onPause);
    return () => {
      audioRef.current?.removeEventListener('ended', onEnd);
      audioRef.current?.removeEventListener('play', onPlay);
      audioRef.current?.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gold-500 text-white shadow-lg flex items-center justify-center hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      onClick={toggle}
      aria-label={isPlaying ? 'Pause musik' : 'Putar musik'}
      title={isPlaying ? 'Pause' : 'Putar musik'}
    >
      {isPlaying ? (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </motion.button>
  );
}
