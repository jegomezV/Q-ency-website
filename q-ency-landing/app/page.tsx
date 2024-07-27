'use client';

import Header from "./components/sharedComponents/Header";
import Wave from './components/sections/main/WaveComponent'
import Main from './components/sections/main/Main'
import About from './components/sections/about/About'
import Prices from './components/sections/prices/Prices'
import ContactSection from "./components/sections/contact/Contact";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <>
     <ParallaxProvider>
      <Header />
        <main className="h-full w-screen relative">
          <Main/>
          <About/>
          <Prices/>
          <ContactSection/>
        </main>
      </ParallaxProvider>
    </>
  );
}
