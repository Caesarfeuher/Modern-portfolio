import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';


  

// // components/About.js
const About = () => {
  useEffect(() => {
    document.body.classList.add('scrollable');
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.classList.remove('scrollable');
      document.body.style.overflowX = 'visible';
    };
  }, []);

    return (
      <div className="flex justify-center items-start p-5 h-screen md:flex-col">
        {/* Left div with image */}
        <div className="p-5 pl-[95px] md:w-[50%] md:h-[50%] sm:w-full sm:h-auto">
        <Image src={'/self.JPG'} width={250} height={250} className="md:h-[200px] md:w-[200px]" />
        </div>
  
        {/* Center div with text */}
        <div className="max-w-md self-start md:w-[100vh] md:h-[50vh] p-5">
          <p className="leading-6 md:text-overflow sm:text-overflow">
          Greetings! I'm Akrasi Daniel, a versatile professional adept in Frontend Development, Software Engineering, and Mechanical Engineering. With a blend of design flair and technical precision, I create visually captivating user interfaces and navigate complex code proficiently. My background in Mechanical Engineering adds a meticulous and detail-oriented approach, complemented by AWS Cloud expertise.

            Armed with a degree in Mechanical Engineering, my diverse journey includes notable projects that showcase my ability to bridge technology and engineering. What sets me apart is my full-stack proficiency, offering a complete skill set across the project lifecycle. Collaborative and adaptable, I bring a global perspective to projects.

            Eager to contribute my technical acumen to projects, I'm comfortable navigating the realms of design and technology. Let's connect to discuss how my skills align with your vision
          </p>
        </div>
  
        {/* Right div with information */}
        <div className="flex flex-col pl-8 self-start md:hidden">
          {/* Project Information */}
          <div className="mb-4">
           <p className="text-8xl font-bold">10+</p>
            <h3 className="text-lg font-bold mb-2 text-slate-500">Projects<br/>
            completed</h3>
            
          </div>
  
          {/* Certification Information */}
          <div className="mb-4">
            <p className="text-8xl font-bold">3+</p>
            <h3 className="text-lg font-bold mb-2 text-slate-500">Certifications</h3>
           
          </div>
  
          {/* Experience Information */}
          <div>
            <p className="text-8xl font-bold">4+</p>
            <h3 className="text-lg font-bold mb-2 text-slate-500">Years <br/>Experience</h3>
           
          </div>
        </div>
      </div>
    );
  };
  
  export default About;









