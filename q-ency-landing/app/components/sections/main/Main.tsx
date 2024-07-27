'use client';

import React from 'react';
import Image from 'next/image';
import mobile from '@/public/main/qencyMobile.png';
import { Parallax } from 'react-scroll-parallax';

import layeredWaves from '@/public/main/bg.svg';

const MainSection: React.FC = () => {
  return (
    <section id='home' className="relative h-screen w-screen grid grid-cols-2">
      <Image
        src={layeredWaves}
        alt="Layered Waves"
        layout="fill"
        objectFit="cover"
        className="z-[-20]"
      />
      <div className="ml-28 flex flex-col items-start">
        <Parallax translateY={['25', '-50']} className="text-5xl font-bold mt-[40%] text-black drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.4)]">DESCUBRE<br /> NUESTRA NUEVA<br /> APLICACIÓN</Parallax>
        <Parallax translateY={['20', '-25']} className="mb-6 text-gray-500 drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.5)]">Muy pronto disponible en las principales tiendas de aplicaciones digitales</Parallax>
        <a href="#download" className="bg-purple-500 text- font-semibold border-[1px] border-black/60 px-6 py-3 rounded-full hover:bg-purple-700 hover:duration-200 duration-300 drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.3)]">DESCARGAR</a>
      </div>
      <div className="relative flex justify-center">
        <Parallax translateY={['50', '-100']} className="absolute xl:top-1/4 xl:-translate-y-20 top-1/4 drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)]">
          <Image src={mobile} alt="Imagen del celular" className="w-[38rem] h-[36rem] 2xl:w-[40rem] 2xl:h-[40rem] hover:scale-105 hover:duration-200 duration-300" />
        </Parallax>
      </div>
    </section>
  );
};

export default MainSection;
