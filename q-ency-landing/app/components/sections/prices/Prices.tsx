import React from 'react';
import Image from 'next/image';
import layeredWaves from '@/public/prices/PriceBg.svg';
import green from '@/public/prices/green.png';
import yellow from '@/public/prices/yellow.png';
import gray from '@/public/prices/gray.png';

import { Parallax } from 'react-scroll-parallax';


const PricesSection: React.FC = () => {
  return (
    <section id='services' className="relative h-screen w-screen border-t-[1px] border-black flex items-center justify-center">
      <Image
        src={layeredWaves}
        alt="Layered Waves"
        layout="fill"
        objectFit="cover"
        className="z-[-20]"
      />
      <div className="relative z-10 flex space-x-8 mx-10 text-black">
        {/* Básico Plan */}
        <Parallax translateX={['50', '-50']} className="bg-white/60 backdrop-blur-sm drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] border-[1px] border-black/40 p-6 rounded-lg shadow-lg flex flex-col items-start relative w-80">
          <Image src={green} alt="Point Icon" width={70} height={70} className="absolute top-4 right-4" />
          <h3 className="text-4xl font-bold mb-2 drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.6)]">Básico</h3>
          <p className="text-2xl font-semibold mb-4 text-green-700 drop-shadow-[0_1.5px_30px_rgba(255,255,255,5)]">13€</p>
          <ul className="list-disc space-y-4 pl-6">
            <li>1 cuenta</li>
            <li>Acceso a los datos</li>
            <li>Crear contenido</li>
            <li>Publicar fotos</li>
            <li>Publicar vídeos</li>
          </ul>
        </Parallax>
        {/* Avanzado Plan */}
        <div className="bg-white/60 backdrop-blur-sm drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] border-[1px] border-black/40 p-6 rounded-lg shadow-lg flex flex-col items-start relative w-80">
          <Image src={yellow} alt="Reload Icon" width={70} height={70} className="absolute top-4 right-4" />
          <h3 className="text-4xl font-bold mb-2 drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.6)]">Avanzado</h3>
          <p className="text-xl font-semibold mb-4 text-yellow-600 drop-shadow-[0_1.5px_30px_rgba(255,255,255,5)]">25€</p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Todo el plan Básico</li>
            <li>5 cuentas</li>
            <li>Atención personalizada</li>
            <li>Feedback mensual</li>
            <li>Destaca tus contenidos</li>
            <li>Acceso ilimitado</li>
            <li>Ofertas y descuentos</li>
            <li>Mayor seguridad</li>
          </ul>
        </div>
        {/* Personalizado Plan */}
        <Parallax translateX={['-50', '50']} className="bg-white/60 backdrop-blur-sm drop-shadow-[0_1.5px_30px_rgba(0,0,0,5)] border-[1px] border-black/40 p-6 rounded-lg shadow-lg flex flex-col items-start relative w-80">
          <Image src={gray} alt="Like Icon" width={70} height={70} className="absolute top-4 right-4" />
          <h3 className="text-3xl font-bold mb-2 drop-shadow-[0_1.5px_30px_rgba(0,0,0,0.6)]">Personalizado</h3>
          <button className="bg-black text-white px-2 py-1 rounded hover:bg-blue-700 hover:duration:200 duration:200 mb-4">Contactar</button>
          <p>Todas las características de los planes anteriores además de las características personalizadas que necesites.</p>
          <p><br/>Se realizará un presupuesto ajustado a las necesidades de tu negocio.</p>
        </Parallax>
      </div>
    </section>
  );
};

export default PricesSection;
