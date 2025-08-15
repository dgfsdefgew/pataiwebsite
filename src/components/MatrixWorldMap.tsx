import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

interface DataStream {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
}

const MatrixWorldMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const dataStreamsRef = useRef<DataStream[]>([]);

  // World map coordinates (simplified continents outline)
  const worldMapPaths = [
    // North America
    "M150,120 L180,110 L220,115 L250,125 L280,140 L300,160 L290,180 L270,190 L240,185 L200,175 L170,165 L150,145 Z",
    // South America
    "M200,220 L230,210 L250,230 L260,260 L270,300 L265,340 L250,360 L230,350 L210,330 L200,300 L195,270 L200,240 Z",
    // Europe
    "M320,100 L350,95 L380,100 L390,120 L385,140 L370,145 L350,140 L330,135 L320,120 Z",
    // Africa
    "M320,160 L360,155 L380,170 L390,200 L395,240 L390,280 L380,310 L360,320 L340,315 L325,300 L320,270 L315,230 L320,190 Z",
    // Asia
    "M400,90 L480,85 L520,95 L560,110 L580,130 L590,160 L585,180 L570,190 L540,185 L500,175 L460,165 L420,155 L400,130 Z",
    // Australia
    "M520,280 L560,275 L580,285 L590,300 L585,315 L570,320 L540,315 L520,305 Z"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 100; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

    // Initialize data streams
    const initDataStreams = () => {
      dataStreamsRef.current = [];
      for (let i = 0; i < 20; i++) {
        dataStreamsRef.current.push({
          x: Math.random() * canvas.width,
          y: -Math.random() * 100,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };

    initParticles();
    initDataStreams();

    const drawWorldMap = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);

      // Scale and center the map
      const scaleX = canvas.width / 800;
      const scaleY = canvas.height / 600;
      const scale = Math.min(scaleX, scaleY) * 1.5;
      const offsetX = (canvas.width - 800 * scale) / 2;
      const offsetY = (canvas.height - 400 * scale) / 2;

      ctx.save();
      ctx.translate(offsetX, offsetY);
      ctx.scale(scale, scale);

      worldMapPaths.forEach(path => {
        const path2D = new Path2D(path);
        ctx.stroke(path2D);
      });

      ctx.restore();
      ctx.setLineDash([]);
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;

      const gridSize = 50;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      particlesRef.current.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fill();

        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Reset particle if it dies or goes off screen
        if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.width || 
            particle.y < 0 || particle.y > canvas.height) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vx = (Math.random() - 0.5) * 0.5;
          particle.vy = (Math.random() - 0.5) * 0.5;
          particle.life = particle.maxLife;
        }
      });
    };

    const drawDataStreams = () => {
      dataStreamsRef.current.forEach(stream => {
        const gradient = ctx.createLinearGradient(0, stream.y, 0, stream.y + stream.length);
        gradient.addColorStop(0, `rgba(0, 255, 255, 0)`);
        gradient.addColorStop(0.5, `rgba(0, 255, 255, ${stream.opacity})`);
        gradient.addColorStop(1, `rgba(0, 255, 255, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(stream.x, stream.y, 2, stream.length);

        // Update stream
        stream.y += stream.speed;

        // Reset stream if it goes off screen
        if (stream.y > canvas.height + stream.length) {
          stream.y = -stream.length;
          stream.x = Math.random() * canvas.width;
          stream.speed = Math.random() * 2 + 1;
          stream.opacity = Math.random() * 0.8 + 0.2;
        }
      });
    };

    const drawMatrixRain = () => {
      ctx.fillStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.font = '12px monospace';
      
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      
      for (let i = 0; i < 50; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillText(char, x, y);
      }
    };

    const drawConnectionLines = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
      ctx.lineWidth = 0.5;

      // Draw random connection lines between particles
      for (let i = 0; i < particlesRef.current.length; i += 10) {
        const particle1 = particlesRef.current[i];
        const particle2 = particlesRef.current[(i + 5) % particlesRef.current.length];
        
        const distance = Math.sqrt(
          Math.pow(particle1.x - particle2.x, 2) + 
          Math.pow(particle1.y - particle2.y, 2)
        );

        if (distance < 200) {
          ctx.beginPath();
          ctx.moveTo(particle1.x, particle1.y);
          ctx.lineTo(particle2.x, particle2.y);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      drawWorldMap();
      drawParticles();
      drawDataStreams();
      drawMatrixRain();
      drawConnectionLines();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }}
    />
  );
};

export default MatrixWorldMap;