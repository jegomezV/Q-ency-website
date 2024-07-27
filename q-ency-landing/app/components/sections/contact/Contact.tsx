import React from 'react';
import Image from 'next/image';
import BgGradient from '@/public/contact/contactBg.svg';

const ContactSection: React.FC = () => {
  return (
    <section id='alliances' className="relative h-screen w-screen border-t-[1px] border-black flex items-center justify-center">
      <Image
        src={BgGradient}
        alt="Layered Waves"
        layout="fill"
        objectFit="cover"
        className="z-[-20]"
      />
      <div className="relative z-10 text-white lg:translate-y-10 flex flex-col items-center space-y-6 px-4 lg:px-20">
        <h2 className="text-4xl font-bold drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">¿Quieres saber más?</h2>
        <p className="text-center max-w-2xl drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et nulla at, egestas euismod orci.</p>
        <div className="flex flex-col lg:flex-row w-full lg:space-x-10 space-y-6 lg:space-y-0">
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">Utiliza las siguientes vías de contacto, o rellena el formulario.</h3>
            <p className="font-bold drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">Vía E-mail</p>
            <p className='drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]'>hola@unsitiogenial.es</p>
            <p className="font-bold drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">En nuestras redes sociales</p>
            <p className='drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]'>@unsitiogenial</p>
            <p className="font-bold drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">Por teléfono</p>
            <p className='drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]'>91-1234-567</p>
          </div>
          <div className="lg:w-1/2 space-y-4">
            <div>
              <input
                id="name"
                type="text"
                placeholder="Escribe tu nombre"
                className="w-full p-3 border border-gray-300 rounded text-black"
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Escribe tu e-mail"
                className="w-full p-3 border border-gray-300 rounded text-black"
              />
            </div>
            <div>
              <input
                id="phone"
                type="tel"
                placeholder="Escribe tu teléfono (Opcional)"
                className="w-full p-3 border border-gray-300 rounded text-black"
              />
            </div>
            <div>
              <textarea
                id="message"
                placeholder="Escribe tu mensaje"
                className="w-full p-3 border border-gray-300 rounded text-black"
                rows={4}
              />
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-blue-700">Enviar mensaje</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
