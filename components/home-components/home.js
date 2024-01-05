import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`flex flex-col items-center justify-center h-screen px-8 ${isMenuOpen ? 'backdrop-blur-lg' : ''}`} style={{ marginTop: '-70px' }}>
      {/* Image component added with fixed position */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <Image src={'/coda.gif'} width={300} height={200} />
      </div>

      {/* Typewriter div beneath the fixed image */}
      <div className="text-gray-500 text-6xl mt-4">
        <Typewriter
          options={{
            strings: ['Hi, My name is Daniel ', 'Web Developer ', 'Software Engineer ', 'A-code-a-day.tsx ', ' <>KeepsTheBugsAway</>', 'AWS Cloud Practitioner '],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}





