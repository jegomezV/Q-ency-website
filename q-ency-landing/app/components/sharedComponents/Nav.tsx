'use client';

import React from 'react';

const Nav: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      smoothScrollTo(targetElement.offsetTop, 1000); // 1000 ms = 1 second
    }
  };

  const smoothScrollTo = (targetPosition: number, duration: number) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <nav className="flex space-x-4 rounded-lg px-4 shadow-lg backdrop-blur-3xl bg-white/30">
      <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-black text-xl p-2 transition duration-300 ease-in-out transform hover:scale-105">Inicio</a>
      <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-black text-xl p-2 transition duration-300 ease-in-out transform hover:scale-105">Nosotros</a>
      <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="text-black text-xl p-2 transition duration-300 ease-in-out transform hover:scale-105">Servicios</a>
      <a href="#alliances" onClick={(e) => handleSmoothScroll(e, 'alliances')} className="text-black text-xl p-2 transition duration-300 ease-in-out transform hover:scale-105">Alianzas</a>
    </nav>
  );
};

export default Nav;
