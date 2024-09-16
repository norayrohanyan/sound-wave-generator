"use client";
import { useState, useEffect, useRef } from "react";

const Equalizer = () => {
  const [bars, setBars] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBars = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const barWidth = 10; 
        const numberOfBars = Math.floor(containerWidth / barWidth);

        const newBars = Array.from(
          { length: numberOfBars },
          () => Math.floor(Math.random() * 150) + 50
        );
        // const newBars = new Array(numberOfBars).fill(
        //   Math.floor(Math.random() * 150) + 50
        // );
        setBars(newBars);
      }
    };

    updateBars();

    const handleResize = () => {
      requestAnimationFrame(updateBars);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef]);

  return (
    <div className="equalizer" ref={containerRef}>
      {bars.map((barHeight, index) => (
        <div
          key={index}
          className={"bar"}
          style={{
            height: `${barHeight}px`,
            animationDelay: `${-index * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Equalizer;
