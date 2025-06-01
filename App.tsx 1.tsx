import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon, Music2Icon, VolumeXIcon } from 'lucide-react';
export function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  useEffect(() => {
    const audio = new Audio('https://www.chosic.com/wp-content/uploads/2021/04/romantic-piano-extended-version-2868.mp3');
    audio.loop = true;
    setAudioElement(audio);
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);
  const togglePlay = () => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 overflow-x-hidden">
      {/* Floating hearts background */}
      <FloatingHearts />
      {/* Music control button */}
      <button onClick={togglePlay} className="fixed bottom-4 right-4 z-50 bg-pink-200 hover:bg-pink-300 rounded-full p-3 shadow-lg transition-all duration-300">
        {isPlaying ? <VolumeXIcon size={20} color="#d53f8c" /> : <Music2Icon size={20} color="#d53f8c" />}
      </button>
      {/* Hero Section */}
      <HeroSection />
      {/* Why I Love You Section */}
      <ReasonsSection />
      {/* Photo Gallery Section */}
      <GallerySection />
      {/* Love Letter Section */}
      <LoveLetterSection />
      <footer className="w-full py-6 text-center text-pink-500">
        <p>Made with love ❤️</p>
      </footer>
    </div>;
}
const FloatingHearts = () => {
  return <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, index) => <FloatingHeart key={index} />)}
    </div>;
};
const FloatingHeart = () => {
  const randomLeft = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomDuration = 15 + Math.random() * 20;
  const randomSize = 10 + Math.random() * 20;
  const opacity = 0.3 + Math.random() * 0.4;
  return <motion.div className="absolute text-pink-300" initial={{
    top: '100%',
    left: `${randomLeft}%`,
    opacity
  }} animate={{
    top: '-5%'
  }} transition={{
    duration: randomDuration,
    repeat: Infinity,
    delay: randomDelay,
    ease: 'linear'
  }} style={{
    fontSize: randomSize
  }}>
      ❤️
    </motion.div>;
};
const HeroSection = () => {
  return <motion.section className="min-h-screen flex flex-col items-center justify-center px-4 relative" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 1
  }}>
      <Sparkles>
        <motion.h1 className="text-4xl md:text-6xl font-bold text-center text-pink-600 mb-6" initial={{
        scale: 0.8
      }} animate={{
        scale: 1
      }} transition={{
        duration: 0.8,
        type: 'spring',
        stiffness: 100
      }}>
          Happy Birthday My Love 💖
        </motion.h1>
      </Sparkles>
      <motion.div className="mt-8" initial={{
      scale: 0
    }} animate={{
      scale: 1
    }} transition={{
      delay: 0.5,
      duration: 0.8,
      type: 'spring',
      stiffness: 100
    }}>
        <HeartBeat />
      </motion.div>
      <motion.div className="absolute bottom-10 w-full flex justify-center" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }}>
        <motion.div className="animate-bounce" transition={{
        repeat: Infinity,
        duration: 1.5
      }}>
          <p className="text-pink-500">Scroll down ↓</p>
        </motion.div>
      </motion.div>
    </motion.section>;
};
const HeartBeat = () => {
  return <motion.div animate={{
    scale: [1, 1.2, 1, 1.2, 1]
  }} transition={{
    duration: 1.5,
    repeat: Infinity,
    repeatDelay: 0.5
  }} className="text-9xl md:text-[150px] text-pink-500">
      ❤️
    </motion.div>;
};
const Sparkles = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <div className="relative inline-block">
      {children}
      {[...Array(15)].map((_, i) => <Sparkle key={i} />)}
    </div>;
};
const Sparkle = () => {
  const randomX = Math.random() * 100 - 50;
  const randomY = Math.random() * 100 - 50;
  const randomSize = Math.random() * 10 + 5;
  const randomDelay = Math.random() * 3;
  return <motion.div className="absolute text-yellow-300" style={{
    top: `calc(50% + ${randomY}px)`,
    left: `calc(50% + ${randomX}px)`,
    fontSize: randomSize
  }} initial={{
    opacity: 0,
    scale: 0
  }} animate={{
    opacity: [0, 1, 0],
    scale: [0, 1, 0]
  }} transition={{
    duration: 2,
    delay: randomDelay,
    repeat: Infinity,
    repeatDelay: Math.random() * 5 + 3
  }}>
      ✨
    </motion.div>;
};
const ReasonsSection = () => {
  const reasons = ['Your smile lights up my darkest days', 'Your laughter is my favorite sound in the world', 'You understand me like no one else ever has'];
  return <section className="min-h-screen py-20 px-4 md:px-10 bg-gradient-to-b from-pink-100 to-pink-50 relative">
      <div className="max-w-3xl mx-auto">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          Why I Love You
        </motion.h2>
        <div className="space-y-10">
          {reasons.map((reason, index) => <motion.div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-200" initial={{
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.2
        }} viewport={{
          once: true
        }}>
              <div className="flex items-center gap-4">
                <HeartIcon className="text-pink-500 flex-shrink-0" />
                <p className="text-lg md:text-xl text-pink-800">{reason}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
const GallerySection = () => {
  // Placeholder images - these would be replaced by user's actual photos
  const photos = ['IMG-20250406-WA0003.jpg', 'IMG-20250325-WA0001.jpg', 'IMG-20250325-WA0000.jpg'];
  return <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-10" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          My Dream Memories
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} viewport={{
        once: true
      }}>
          {photos.map((photo, index) => <motion.div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg" whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.3
        }}>
              <img src={photo} alt={`Memory ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent flex items-end p-4">
                <p className="text-white text-sm">Memory {index + 1}</p>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
const LoveLetterSection = () => {
  return <section className="min-h-screen py-20 px-4 md:px-10 bg-gradient-to-b from-pink-100 to-pink-50 flex items-center justify-center">
      <motion.div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-xl border border-pink-200" initial={{
      opacity: 0,
      y: 50
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1
    }} viewport={{
      once: true
    }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-8">
          My Love Letter to You
        </h2>
        <div className="space-y-6 text-pink-800">
          <p>My dearest love,</p>
          <p>
            On your special day, I want you to know how much joy and love you
            bring into my life. Every moment with you is a gift that I cherish
            deeply. Your smile, your kindness - everything about you makes my 
            heart fuller each day.
          </p>
          <p>
            The day we met changed my life forever, and I'm so grateful for
            every memory we've created together. You are my best friend, my
            confidant, and the love of my life.
          </p>
          <p>
            I promise to continue loving you, supporting your dreams, and being
            by your side through all of life's adventures. You deserve all the
            happiness in the world, and I'll do everything I can to make sure
            you feel loved every single day.
          </p>
          <p>
            Happy birthday, my love. Here's to many more birthdays and beautiful
            memories together.
          </p>
          <p className="text-right">Forever yours,</p>
          <p className="text-right font-bold">Sudu</p>
        </div>
      </motion.div>
    </section>;
};