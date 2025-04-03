"use client";

import { useRef, useEffect } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  color: string;
  size: number;
}

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isDrawing = useRef(false);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = containerRef.current;
    if (!container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full width/height
    const updateCanvasSize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Define standard colors
    const standardColors = [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
    ];

    // Initialize points
    const pointCount = Math.min(100, Math.floor(window.innerWidth / 15));
    pointsRef.current = [];

    for (let i = 0; i < pointCount; i++) {
      const randomColor =
        standardColors[Math.floor(Math.random() * standardColors.length)];
      const randomSize = Math.random() * 2.5 + 1; // Random size between 1.5 and 4

      pointsRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
        color: randomColor,
        size: randomSize,
      });
    }

    // Connect points that are close to each other
    const connectPoints = () => {
      const points = pointsRef.current;
      const maxDistance = Math.min(canvas.width, canvas.height) / 5;

      points.forEach((point) => {
        point.connections = [];
      });

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            points[i].connections.push(j);
            points[j].connections.push(i);
          }
        }
      }
    };

    // Draw function
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const points = pointsRef.current;
      const mouse = mouseRef.current;

      points.forEach((point, i) => {
        // Attraction to mouse
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxForceDistance = 200;

        if (distance < maxForceDistance) {
          const force =
            ((maxForceDistance - distance) / maxForceDistance) * 0.02;
          point.vx += dx * force;
          point.vy += dy * force;
        }

        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;

        // Add friction
        point.vx *= 0.99;
        point.vy *= 0.99;

        // Draw point with its random size
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();

        // Draw connections with a darker line and subtle shadow
        point.connections.forEach((j) => {
          if (j > i) {
            ctx.save();
            ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
            ctx.lineWidth = 0.5;
            ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      connectPoints();
      animationRef.current = requestAnimationFrame(draw);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    connectPoints();
    animationRef.current = requestAnimationFrame(draw);
    isDrawing.current = true;

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
      isDrawing.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default NetworkBackground;
