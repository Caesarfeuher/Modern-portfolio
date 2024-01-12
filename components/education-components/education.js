// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import React from 'react'

// const Education = () => {
//   useEffect(() => {
//     document.body.classList.add('scrollable');

//     return () => {
//       document.body.classList.remove('scrollable');
//     };
//   }, []);
//   const [isCentered, setIsCentered] = React.useState(false);

//   const toggleCenter = () => {
//     setIsCentered(!isCentered);
//   };

//   return (
//     <motion.div
//       className={`flex flex-col items-center justify-center ${isCentered ? 'centered' : ''}`}
//       onClick={toggleCenter}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//     >
//       <motion.h1
//         className="text-5xl"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         exit={{ opacity: 0, x: -50 }}
//         transition={{ duration: 0.5 }}
//       >  
//       </motion.h1>
//       EDUCATION

//       {/* Four divs for listing institutions */}
//       <div className="education-item">
//         <p className="text-gray-400 text-4xl">Bachelor of Science in Mechanical Engineering</p>
//         <h2 className="text-gray-400 text-2xl">2015-2019 | Kwame Nkrumah University Of Science And Technology (KNUST) </h2>
//         <h3 className="text-gray-400">Mechanical and aerospace Engineering background</h3>
//       </div>

//       <div className="education-item">
//         <p className="text-gray-400 text-4xl">Diploma in Frontend Development</p>
//         <h2 className="text-gray-400 text-2xl">2021 | HIIT Plc</h2>
//         <h3 className="text-gray-400">HTML. CSS. BOOTSTRAP. Tailwind. React. ReactNative. Kotlin. CSS Frameworks. Javascript. Next. Typescript</h3>
//       </div>

//       <div className="education-item">
//         <p className="text-gray-400 text-4xl">AWS Cloud Practitioner</p>
//         <h2 className="text-gray-400 text-2xl">2022 | ALX</h2>
//         <h3 className="text-gray-400">Introduction to Cloud Computing:AWS cloud practitioner course</h3>
//       </div>

//       <div className="education-item">
//         <p className="text-gray-400 text-4xl">Fuel/LPG station and Petroleum Depot Management </p>
//         <h2 className="text-gray-400 text-2xl">2018 | ASCON OIL</h2>
//         <h3 className="text-gray-400"> Safety course, gas station operation and management course, petroleum products depot management course</h3>
//       </div>

//       <style jsx>{`
//         .centered {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         h1 {
//           cursor: pointer;
//           user-select: none;
//         }

//         .education-item {
//           margin-top: 16px;
//           border: 1px solid #ccc;
//           padding: 16px;
//           width: 900px; /* Adjust the width as needed */
//           text-align: center;  
//         }
//         @media screen and (max-width: 850px) {
//           /* Apply styles for screens with a maximum width of 850px */
//           .education-item {
//             width: 50%; /* Make the width 100% for smaller screens */
//             overflow:auto
//             text-align: center;
//             border: 1px solid #ccc;
//             margin-top: 32px;
//             padding: 32px;
//           }
//           .education-item p {
//             // font-size: 2xl !important; /* Add !important to ensure the style is applied */
//             font-size: 1.5rem;
//           }
//           .education-item h2 {
//             // font-size: 2xl !important; /* Add !important to ensure the style is applied */
//             font-size: 0.9rem;
//           }
//         }
//       `}
//       </style>
//     </motion.div>
//   );
// };

// export default Education;




import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Skills() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach event listener to update window width on resize
    window.addEventListener('resize', updateWindowWidth);

    // Initial update
    updateWindowWidth();

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const isMobile = windowWidth && windowWidth <= 850;

  return (
    <div className={`centered ${isMobile && 'mobile'}`}>
      <div className='education-item'>
        <Image src='/javascript.jpg' width={800} height={400} className='image' />
        <Image src='/react.jpg' width={800} height={400} className='image' />
        <Image src='/figma.jpg' width={800} height={400} className='image' />
        <Image src='/git.jpg' width={800} height={400} className='image' />
        <Image src='/firebase.jpg' width={400} height={200} className='image' />
        <Image src='/chatgpt.jpg' width={800} height={400} className='image' />
      </div>

      <div className='education-item'>
        <Image src='/vue.jpg' width={800} height={400} className='image' />
        <Image src='/expo.jpg' width={800} height={20} className='image' />
        <Image src='/angular.jpg' width={800} height={400} className='image' />
        <Image src='/typescript.jpg' width={800} height={400} className='image' />
        <Image src='/wordpress.jpg' width={800} height={400} className='image' />
        <Image src='/nextjs.jpg' width={800} height={400} className='image' />
      </div>

      <div className='education-item'>
        <Image src='/nodejs-logo.jpg' width={800} height={400} className='image' />
        <Image src='/AWS-Emblem.jpg' width={800} height={400} className='image' />
        <Image src='/express.jpg' width={800} height={400} className='image' />
        <Image src='/postman.jpg' width={800} height={400} className='image' />
        <Image src='/aleo.jpg' width={800} height={400} className='image' />
        <Image src='/nodemon.jpg' width={800} height={400} className='image' />
      </div>

      <div className='education-item'>
        <Image src='/reactnative.jpg' width={800} height={400} className='image' />
        <Image src='/mongo.jpg' width={800} height={400} className='image' />
        <Image src='/eng.jpg' width={800} height={400} className='image' />
      </div>

      <style jsx>{`
        .centered {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .education-item {
          margin-top: 16px;
          border: 1px solid #ccc;
          padding: 16px;
          width: 900px;
          text-align: center;
        }

        .education-item img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
          border-radius: 100px;
        }

        @media screen and (max-width: 850px) {
          .education-item {
            width: 50%;
            overflow: auto;
            text-align: center;
            border: 1px solid #ccc;
            margin-top: 32px;
            padding: 32px;
          }

          .education-item img {
            border-radius: 50px; /* Adjust border-radius for smaller screens */
          }
        }
      `}</style>
    </div>
  );
}
