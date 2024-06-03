"use client";
import React, { useEffect, useRef } from "react";
import "./css/stars.scss";

const GalaxyBackground = ({ children }: { children: React.ReactNode }) => {
  const galaxyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateStars = () => {
      const galaxy = galaxyRef.current;
      if (!galaxy) return;

      let iterator = 0;
      while (iterator <= 30) {
        const xposition = Math.random();
        const yposition = Math.random();
        const starType = Math.floor(Math.random() * 3) + 1;
        const star = document.createElement("div");
        star.className = `star star-type${starType}`;
        star.style.left = `${galaxy.offsetWidth * xposition}px`;
        star.style.top = `${galaxy.offsetHeight * yposition}px`;

        galaxy.appendChild(star);
        iterator++;
      }
    };

    generateStars();
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div ref={galaxyRef} className="galaxy"></div>
      {children}
    </div>
  );
};

export default GalaxyBackground;
