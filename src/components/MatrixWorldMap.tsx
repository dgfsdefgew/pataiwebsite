import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
}

interface DataStream {
  x: number;
  y: number;
  z: number;
  length: number;
  speed: number;
  opacity: number;
  rotation: number;
}

interface Node3D {
  x: number;
  y: number;
  z: number;
  size: number;
  pulse: number;
  connections: number[];
}

const MatrixWorldMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const dataStreamsRef = useRef<DataStream[]>([]);
  const nodesRef = useRef<Node3D[]>([]);
  const rotationRef = useRef({ x: 0, y: 0, z: 0 });

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
      for (let i = 0; i < 150; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 200 - 100,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: (Math.random() - 0.5) * 0.3,
          life: Math.random() * 100,
          maxLife: 100
        });
      }
    };

    // Initialize data streams
    const initDataStreams = () => {
      dataStreamsRef.current = [];
      for (let i = 0; i < 30; i++) {
        dataStreamsRef.current.push({
          x: Math.random() * canvas.width,
          y: -Math.random() * 100,
          z: Math.random() * 100 - 50,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          rotation: Math.random() * Math.PI * 2
        });
      }
    };

    // Initialize 3D nodes
    const initNodes = () => {
      nodesRef.current = [];
      for (let i = 0; i < 20; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 150 - 75,
          size: Math.random() * 8 + 4,
          pulse: Math.random() * Math.PI * 2,
          connections: []
        });
      }
    };

    // 3D projection function
    const project3D = (x: number, y: number, z: number) => {
      const perspective = 800;
      const scale = perspective / (perspective + z);
      return {
        x: x * scale,
        y: y * scale,
        scale: scale
      };
    };

    initParticles();
    initDataStreams();
    initNodes();

    const drawWorldMap = () => {
      // Rotate the world map in 3D space
      rotationRef.current.y += 0.002;
      
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.4)';
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
      
      // Apply 3D rotation
      const rotY = Math.sin(rotationRef.current.y) * 0.3;
      ctx.transform(Math.cos(rotY), 0, -Math.sin(rotY) * 0.5, 1, 0, 0);
      
      ctx.scale(scale, scale);
      ctx.translate(-400, -200);

      worldMapPaths.forEach(path => {
        const path2D = new Path2D(path);
        ctx.stroke(path2D);
      });

      ctx.restore();
      ctx.setLineDash([]);
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.15)';
      ctx.lineWidth = 0.5;

      const gridSize = 60;
      const perspective = Math.sin(Date.now() * 0.001) * 0.2;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const offset = Math.sin(x * 0.01 + Date.now() * 0.002) * 10;
        ctx.beginPath();
        ctx.moveTo(x + offset * perspective, 0);
        ctx.lineTo(x - offset * perspective, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const offset = Math.sin(y * 0.01 + Date.now() * 0.002) * 10;
        ctx.beginPath();
        ctx.moveTo(0, y + offset * perspective);
        ctx.lineTo(canvas.width, y - offset * perspective);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      particlesRef.current.forEach(particle => {
        const projected = project3D(particle.x, particle.y, particle.z);
        const alpha = (particle.life / particle.maxLife) * projected.scale;
        const size = 1 + projected.scale * 2;
        
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha * 0.8})`;
        ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
        ctx.shadowBlur = size * 2;
        
        ctx.beginPath();
        ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;

        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        particle.life -= 0.5;

        // Reset particle if it dies or goes off screen
        if (particle.life <= 0 || projected.x < -100 || projected.x > canvas.width + 100 || 
            projected.y < -100 || projected.y > canvas.height + 100) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.z = Math.random() * 200 - 100;
          particle.vx = (Math.random() - 0.5) * 0.5;
          particle.vy = (Math.random() - 0.5) * 0.5;
          particle.vz = (Math.random() - 0.5) * 0.3;
          particle.life = particle.maxLife;
        }
      });
    };

    const drawDataStreams = () => {
      dataStreamsRef.current.forEach(stream => {
        const projected = project3D(stream.x, stream.y, stream.z);
        const width = 2 * projected.scale;
        const length = stream.length * projected.scale;
        
        const gradient = ctx.createLinearGradient(0, projected.y, 0, projected.y + length);
        gradient.addColorStop(0, `rgba(0, 255, 255, 0)`);
        gradient.addColorStop(0.5, `rgba(0, 255, 255, ${stream.opacity * projected.scale})`);
        gradient.addColorStop(1, `rgba(0, 255, 255, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(projected.x, projected.y, width, length);

        // Update stream
        stream.y += stream.speed;
        stream.z += Math.sin(stream.rotation) * 0.5;
        stream.rotation += 0.02;

        // Reset stream if it goes off screen
        if (projected.y > canvas.height + length) {
          stream.y = -stream.length;
          stream.x = Math.random() * canvas.width;
          stream.z = Math.random() * 100 - 50;
          stream.speed = Math.random() * 2 + 1;
          stream.opacity = Math.random() * 0.8 + 0.2;
        }
      });
    };

    const draw3DNodes = () => {
      nodesRef.current.forEach((node, index) => {
        const projected = project3D(node.x, node.y, node.z);
        const size = node.size * projected.scale;
        const pulse = Math.sin(Date.now() * 0.003 + node.pulse) * 0.5 + 0.5;
        const alpha = projected.scale * (0.6 + pulse * 0.4);
        
        // Draw node core
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
        ctx.shadowBlur = size * 2;
        
        ctx.beginPath();
        ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw outer ring
        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(projected.x, projected.y, size * (1.5 + pulse * 0.5), 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
        
        // Update node position
        node.z += Math.sin(Date.now() * 0.001 + index) * 0.2;
        node.pulse += 0.02;
      });
    };
    const drawMatrixRain = () => {
      ctx.fillStyle = 'rgba(0, 255, 255, 0.15)';
      ctx.font = '12px monospace';
      
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      
      for (let i = 0; i < 80; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const z = Math.random() * 100 - 50;
        const projected = project3D(x, y, z);
        
        ctx.save();
        ctx.globalAlpha = projected.scale * 0.3;
        ctx.scale(projected.scale, projected.scale);
        ctx.fillText(char, projected.x / projected.scale, projected.y / projected.scale);
        ctx.restore();
      }
    };

    const drawConnectionLines = () => {
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
      ctx.lineWidth = 0.5;

      // Draw random connection lines between particles
      for (let i = 0; i < particlesRef.current.length; i += 15) {
        const particle1 = particlesRef.current[i];
        const particle2 = particlesRef.current[(i + 7) % particlesRef.current.length];
        
        const proj1 = project3D(particle1.x, particle1.y, particle1.z);
        const proj2 = project3D(particle2.x, particle2.y, particle2.z);
        
        const distance = Math.sqrt(
          Math.pow(proj1.x - proj2.x, 2) + 
          Math.pow(proj1.y - proj2.y, 2)
        );

        if (distance < 150) {
          const alpha = (1 - distance / 150) * Math.min(proj1.scale, proj2.scale);
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
          ctx.beginPath();
          ctx.moveTo(proj1.x, proj1.y);
          ctx.lineTo(proj2.x, proj2.y);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      drawWorldMap();
      drawParticles();
      drawDataStreams();
      draw3DNodes();
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
      style={{ 
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 30%, #111111 70%, #000000 100%)',
        filter: 'contrast(1.1) brightness(0.9)'
      }}
    />
  );
};

export default MatrixWorldMap;