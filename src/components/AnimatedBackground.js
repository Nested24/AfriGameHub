import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const numParticles = 80;
    const shapes = ['triangle', 'diamond', 'circle', 'square'];

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.speed = Math.random() * 2 + 0.5;
        this.size = Math.random() * 4 + 2;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        const colors = ['#00ffe7', '#007fff', '#ff6b6b', '#ffa500', '#00ff88', '#ff4081'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height + 10) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        switch (this.shape) {
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(-this.size, this.size);
            ctx.lineTo(this.size, this.size);
            ctx.closePath();
            ctx.fill();
            break;
          case 'diamond':
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size, 0);
            ctx.lineTo(0, this.size);
            ctx.lineTo(-this.size, 0);
            ctx.closePath();
            ctx.fill();
            break;
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'square':
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;
          default:
            break;
        }
        ctx.restore();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a1f2c');
      gradient.addColorStop(0.3, '#1e3c52');
      gradient.addColorStop(0.6, '#3a5e69');
      gradient.addColorStop(1, '#2c1810');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffe7';
      ctx.lineWidth = 1;

      const time = Date.now() * 0.001;
      for (let x = -50; x < canvas.width + 50; x += 100) {
        for (let y = -50; y < canvas.height + 50; y += 100) {
          const offsetX = Math.sin(time + x * 0.01) * 20;
          const offsetY = Math.cos(time + y * 0.01) * 20;
          ctx.save();
          ctx.translate(x + offsetX, y + offsetY);
          ctx.rotate(time * 0.5);
          ctx.beginPath();
          ctx.moveTo(0, -15);
          ctx.lineTo(15, 0);
          ctx.lineTo(0, 15);
          ctx.lineTo(-15, 0);
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        }
      }

      ctx.globalAlpha = 1;

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="homepage-canvas" />
  );
};

export default AnimatedBackground;

