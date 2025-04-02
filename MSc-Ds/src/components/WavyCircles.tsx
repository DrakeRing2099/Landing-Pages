import React from "react";

const WavyCircles: React.FC = () => {
  // Create an array from 0 to 20 (21 circles)
  const circles = Array.from({ length: 21 }, (_, i) => i);

  return (
    <>
      <div className="relative flex justify-center items-center h-screen bg-white overflow-hidden">
        <div className="absolute top-[20%] h-[90%] flex justify-center items-center">
          {circles.map((i) => (
            <div
              key={i}
              style={
                {
                  "--i": i,
                  // Increase width multiplier to make circles wider
                  width: `calc(var(--i) * 8vmin)`,
                  animationDelay: `calc(${i} * 0.08s)`,
                  transform: "rotateX(70deg) translateZ(50px)",
                  boxShadow:
                    "0 0 15px rgba(234, 179, 8, 0.5), inset 0 0 15px rgba(234, 179, 8, 0.5)",
                } as React.CSSProperties
              }
              className="absolute bg-transparent aspect-square rounded-full border-[3px] border-yellow-500 border-dotted animate-circle"
            />
          ))}
        </div>
      </div>

      {/* Global styles for the custom keyframes animation */}
      <style jsx global>{`
        @keyframes circle {
          0%,
          100% {
            transform: rotateX(70deg) translateZ(50px) translateY(0);
            filter: hue-rotate(0);
          }
          50% {
            transform: rotateX(70deg) translateZ(50px) translateY(-70vmin);
            filter: hue-rotate(360deg);
          }
        }
        .animate-circle {
          animation: circle 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default WavyCircles;
