'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Tag {
  text: string;
  size?: number;
}

interface TagCloud3DProps {
  tags: Tag[];
  radius?: number;
  speed?: number;
}

export default function TagCloud3D({ 
  tags, 
  radius = 180, 
  speed = 0.002 
}: TagCloud3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>();

  // Generate sphere positions using Fibonacci sphere algorithm
  const generatePositions = (count: number, r: number) => {
    const positions: { x: number; y: number; z: number; scale: number }[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      positions.push({
        x: x * r,
        y: y * r,
        z: z * r,
        scale: 0.5 + (z + r) / (2 * r) * 0.5 // Scale based on depth
      });
    }
    return positions;
  };

  useEffect(() => {
    let lastTime = 0;
    
    const animate = (time: number) => {
      if (!isHovering) {
        setRotation(prev => ({
          x: prev.x,
          y: prev.y + speed * (time - lastTime)
        }));
      }
      lastTime = time;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, speed]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setRotation({ x: -y * 0.1, y: x * 0.1 });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const positions = generatePositions(tags.length, radius);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 md:h-96 perspective-1000 cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center transform-style-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
        animate={{ 
          rotateX: rotation.x, 
          rotateY: rotation.y 
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      >
        {tags.map((tag, index) => {
          const pos = positions[index];
          if (!pos) return null;
          
          return (
            <motion.div
  key={tag.text}
  className="absolute px-3 py-1.5 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm text-xs font-medium whitespace-nowrap select-none hover:border-primary/50 hover:bg-card-hover transition-all duration-200"
  style={{
    transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) scale(${pos.scale})`,
    zIndex: Math.round(pos.z + radius)
  }}
  whileHover={{ 
    scale: pos.scale! * 1.2,
    borderColor: 'rgba(255,255,255,0.3)',
    backgroundColor: 'rgba(30,30,30,0.9)'
  }}
  suppressHydrationWarning={true}  // ✅ Add this line
>
  {tag.text}
</motion.div>
          );
        })}
      </motion.div>
      
      {/* Subtle center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}