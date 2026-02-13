"use client";

import { useRef, useEffect, useCallback } from "react";
const FONT_SIZE = 16;
const CHAR_WIDTH = 10;
const CHAR_HEIGHT = 20;
const CHARACTER_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()-_{}[]:;<>,.?/";
class Particle {
  x;
  y;
  char;
  initialColor;
  currentColor;
  targetColor;
  colorProgress;
  constructor(x, y, char, color, targetColor) {
    this.x = x;
    this.y = y;
    this.char = char;
    this.initialColor = color;
    this.currentColor = color;
    this.targetColor = targetColor;
    this.colorProgress = 1.0;
  }
  draw(ctx) {
    ctx.fillStyle = this.currentColor;
    ctx.fillText(this.char, this.x, this.y);
  }
  randomizeCharacter() {
    this.char = CHARACTER_SET[Math.floor(Math.random() * CHARACTER_SET.length)];
  }
  setNewTargetColor(newColor, smooth) {
    if (!smooth) {
      this.currentColor = newColor;
      this.targetColor = newColor;
      this.colorProgress = 1.0;
    } else {
      this.initialColor = this.currentColor;
      this.targetColor = newColor;
      this.colorProgress = 0.0;
    }
  }
  updateColorTransition() {
    if (this.colorProgress >= 1) return false;
    this.colorProgress = Math.min(this.colorProgress + 0.05, 1);
    const start = ColorUtils.hexToRgb(this.initialColor);
    const end = ColorUtils.hexToRgb(this.targetColor);
    if (start && end) {
      this.currentColor = ColorUtils.interpolateRgb(start, end, this.colorProgress);
    }
    return true;
  }
}
const ColorUtils = {
  hexToRgb(hex) {
    if (!hex || hex.charAt(0) !== "#") return null;
    const cleanHex = hex.substring(1);
    const fullHex = cleanHex.length === 3 ? cleanHex.split("").map(c => c + c).join("") : cleanHex;
    if (fullHex.length !== 6) return null;
    return {
      r: parseInt(fullHex.substring(0, 2), 16),
      g: parseInt(fullHex.substring(2, 4), 16),
      b: parseInt(fullHex.substring(4, 6), 16)
    };
  },
  interpolateRgb(start, end, factor) {
    const r = Math.round(start.r + (end.r - start.r) * factor);
    const g = Math.round(start.g + (end.g - start.g) * factor);
    const b = Math.round(start.b + (end.b - start.b) * factor);
    return `rgb(${r}, ${g}, ${b})`;
  },
  getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }
};
const useMatrixAnimation = (canvasRef, options) => {
  const {
    colors = ["rgb(211, 8, 8)", "#cb0000", "#d80606"],
    speed = 50,
    smooth = true
  } = options;
  const particlesRef = useRef([]);
  const animationFrameId = useRef(null);
  const lastUpdateTime = useRef(0);
  const contextRef = useRef(null);
  const getRandomColorMemoized = useCallback(() => ColorUtils.getRandomColor(colors), [colors]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", {
      willReadFrequently: true
    });
    if (!context) return;
    contextRef.current = context;
    const grid = {
      cols: 0,
      rows: 0
    };
    const setup = (width, height) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.font = `${FONT_SIZE}px monospace`;
      context.textBaseline = "top";
      grid.cols = Math.ceil(width / CHAR_WIDTH);
      grid.rows = Math.ceil(height / CHAR_HEIGHT);
      particlesRef.current = [];
      for (let row = 0; row < grid.rows; row++) {
        for (let col = 0; col < grid.cols; col++) {
          const x = col * CHAR_WIDTH;
          const y = row * CHAR_HEIGHT;
          const char = CHARACTER_SET[Math.floor(Math.random() * CHARACTER_SET.length)];
          const color = getRandomColorMemoized();
          const targetColor = getRandomColorMemoized();
          particlesRef.current.push(new Particle(x, y, char, color, targetColor));
        }
      }
    };
    const animate = timestamp => {
      let needsRedraw = false;
      const elapsed = timestamp - lastUpdateTime.current;
      if (elapsed > speed) {
        const updateCount = Math.max(1, Math.floor(particlesRef.current.length * 0.05));
        for (let i = 0; i < updateCount; i++) {
          const index = Math.floor(Math.random() * particlesRef.current.length);
          const particle = particlesRef.current[index];
          if (particle) {
            particle.randomizeCharacter();
            particle.setNewTargetColor(getRandomColorMemoized(), smooth);
          }
        }
        lastUpdateTime.current = timestamp;
        needsRedraw = true;
      }
      if (smooth) {
        particlesRef.current.forEach(p => {
          if (p.updateColorTransition()) {
            needsRedraw = true;
          }
        });
      }
      if (needsRedraw) {
        const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        particlesRef.current.forEach(p => p.draw(context));
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };
    const resizeObserver = new ResizeObserver(entries => {
      if (!entries || entries.length === 0) return;
      const {
        width,
        height
      } = entries[0].contentRect;
      setup(width, height);
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    animate(0);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      resizeObserver.disconnect();
    };
  }, [colors, speed, smooth, canvasRef, getRandomColorMemoized]);
};
const LetterGlitch = ({
  glitchColors,
  glitchSpeed,
  smooth,
  centerVignette = false,
  outerVignette = true,
  className = "",
}) => {
  const canvasRef = useRef(null);

  useMatrixAnimation(canvasRef, {
    colors: glitchColors,
    speed: glitchSpeed,
    smooth,
  });

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
      {outerVignette && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0)_60%,_rgba(0,0,0,1)_100%)]" />
      )}
      {centerVignette && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_60%)]" />
      )}
    </div>
  );
};

export default function LetterGlitchWrapper() {
  return <div className="w-full h-[400px]">
      <LetterGlitch glitchColors={["#b90000", "#c00000", "#f90000", "#f54242", "#e91414", "#f54242", "#560000"]} glitchSpeed={50} smooth={true} outerVignette={true} centerVignette={false} />
    </div>;
}