import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import LogoImg from '@/public/main/qencyLogo.png';

const Header: React.FC = () => {
  return (
    <header className="fixed z-50 top-0 w-screen flex justify-between items-center p-4 bg-slate-200/30 backdrop-blur-[2px] shadow-md shadow-black/20 border-b-[1px] border-black/30">
      <div className="relative flex items-center space-x-10">
        <div className="absolute h-12 w-12 border-black">
          <Image src={LogoImg} alt="Logo" fill className="" />
        </div>
        <h1 className="text-3xl pl-3 translate-y-[5%] font-serif text-transparent duration-1000 bg-black cursor-default font-display whitespace-nowrap bg-clip-text drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.4)]">
          Q-ency
        </h1>
      </div>
      <Nav />
      <div className="bg-purple-600/70 hover:bg-purple-800 hover:duration-200 duration-200 rounded-full py-2 px-4 border-[1px] border-black/30 mr-4">
        <Link href="#contact" className="text-lg drop-shadow-[0_1.5px_5px_rgba(0,0,0,0.8)]">Contacto</Link>
      </div>
    </header>
  );
};

export default Header;