import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FallingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const items = [
      '❤️', '💕', '💖', '💗', '💓', '💝', '💞', '💑', '👰', '🤵', '💍', '💐'
    ];

    const createHeart = () => {
      return {
        id: Math.random(),
        emoji: items[Math.floor(Math.random() * items.length)],
        left: Math.random() * 100,
        duration: 8 + Math.random() * 5,
        delay: Math.random() * 2,
        size: 20 + Math.random() * 20
      };
    };

    // Criar corações iniciais
    const initialHearts = Array.from({ length: 15 }, createHeart);
    setHearts(initialHearts);

    // Adicionar novos corações periodicamente
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHearts = [...prev, createHeart()];
        // Manter apenas os últimos 20 corações
        return newHearts.slice(-20);
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -100, x: `${heart.left}vw`, opacity: 0, rotate: 0 }}
          animate={{ 
            y: '110vh', 
            opacity: [0, 0.7, 0.7, 0],
            rotate: [0, 360, 720]
          }}
          transition={{ 
            duration: heart.duration,
            delay: heart.delay,
            ease: "linear"
          }}
          className="absolute"
          style={{ 
            fontSize: `${heart.size}px`,
            left: 0,
            top: 0
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
}