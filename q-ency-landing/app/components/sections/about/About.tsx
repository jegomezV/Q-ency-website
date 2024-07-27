import React from 'react';
import Image from 'next/image';
import layeredWaves from '@/public/about/AboutWaves.svg';
import point from '@/public/about/point.png';
import reload from '@/public/about/reload.png';
import like from '@/public/about/like.png';
import hands from '@/public/about/hands.png';

import { Parallax } from 'react-scroll-parallax';

const AboutSection: React.FC = () => {
  return (
    <section id='about' className="relative h-screen w-screen border-t-[1px] border-purple-800/30 flex items-center justify-center">
      <Image
        src={layeredWaves}
        alt="Layered Waves"
        layout="fill"
        objectFit="cover"
        className="z-[-20]"
      />
      <div className="relative z-10 flex space-x-8 mx-10">
        <Parallax translateY={['50', '-50']} className="flex flex-col items-center text-center">
          <Image src={point} alt="Aplicación en cualquier lugar" width={100} height={100} className="mb-4" />
          <h3 className="text-xl font-bold mb-2 text-black drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.4)]">Usa la aplicación en<br/> cualquier lugar</h3>
          <div className='border-[1px] border-black/40 p-4 rounded backdrop-blur-[4px] bg-purple-900/30 shadow-black hover:scale-110 hover:duration-200 duration-300 shadow-[0_35px_130px_-15px_rgba(0,0,0,0.1)]'>
            <p className="text-md px-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.</p>
          </div>
        </Parallax>
        <Parallax translateY={['50', '-50']} className="flex flex-col items-center text-center">
          <Image src={reload} alt="Sincroniza tus datos con tus cuentas" width={100} height={100} className="mb-4" />
          <h3 className="text-xl font-bold mb-2 text-black drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.4)]">Sincroniza tus datos con<br/> tus cuentas</h3>
          <div className='border-[1px] border-black/40 p-4 rounded backdrop-blur-[4px] bg-purple-900/30 shadow-black hover:scale-110 hover:duration-200 duration-300 shadow-[0_35px_130px_-15px_rgba(0,0,0,0.1)]'>
            <p className="text-md px-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.</p>
          </div>
        </Parallax>
        <Parallax translateY={['50', '-50']} className="flex flex-col items-center text-center">
          <Image src={like} alt="Accede a la aplicación sin conexión" width={100} height={100} className="mb-4" />
          <h3 className="text-xl font-bold mb-2 text-black drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.4)]">Accede a la aplicación<br/> sin conexión</h3>
          <div className='border-[1px] border-black/40 p-4 rounded backdrop-blur-[4px] bg-purple-900/30 shadow-black hover:scale-110 hover:duration-200 duration-300 shadow-[0_35px_130px_-15px_rgba(0,0,0,0.1)]'>
            <p className="text-md px-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.</p>
          </div>
        </Parallax>
        <Parallax translateY={['50', '-50']} className="flex flex-col items-center text-center">
          <Image src={hands} alt="Comparte los datos con tus contactos" width={100} height={100} className="mb-4" />
          <h3 className="text-xl font-bold text-black mb-2 drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.4)]">Comparte los datos con<br/> tus contactos</h3>
          <div className='border-[1px] border-black/40 p-4 rounded backdrop-blur-[4px] bg-purple-900/30 shadow-black hover:scale-110 hover:duration-200 duration-300 shadow-[0_35px_130px_-15px_rgba(0,0,0,0.1)]'>
            <p className="text-md text-black px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et ipsum.</p>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default AboutSection;
