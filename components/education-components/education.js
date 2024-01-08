import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const [isCentered, setIsCentered] = React.useState(false);

  const toggleCenter = () => {
    setIsCentered(!isCentered);
  };

  return (
    <motion.div
      className={`flex flex-col items-center justify-center ${isCentered ? 'centered' : ''}`}
      onClick={toggleCenter}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.h1
        className="text-5xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        EDUCATION
      </motion.h1>

      {/* Four divs for listing institutions */}
      <div className="education-item">
        <p className="text-gray-400 text-4xl">Bachelor of Science in Mechanical Engineering</p>
        <h2 className="text-gray-400 text-2xl">2015-2019 | Kwame Nkrumah University Of Science And Technology (KNUST) </h2>
        <p className="text-gray-400">Mechanical and aerospace Engineering background</p>
      </div>

      <div className="education-item">
        <p className="text-gray-400 text-4xl">Diploma in Frontend Development</p>
        <h2 className="text-gray-400 text-2xl">2021 | HIIT Plc</h2>
        <p className="text-gray-400">HTML. CSS. BOOTSTRAP. Tailwind. React. ReactNative. Kotlin. CSS Frameworks. Javascript. Next. Typescript</p>
      </div>

      <div className="education-item">
        <p className="text-gray-400 text-4xl">AWS Cloud Practitioner</p>
        <h2 className="text-gray-400 text-2xl">2022 | ALX</h2>
        <p className="text-gray-400">Introduction to Cloud Computing:AWS cloud practitioner course</p>
      </div>

      <div className="education-item">
        <p className="text-gray-400 text-4xl">Fuel/LPG station and Petroleum Depot Management </p>
        <h2 className="text-gray-400 text-2xl">2018 | ASCON OIL</h2>
        <p className="text-gray-400"> Safety course, gas station operation and management course, petroleum products depot management course</p>
      </div>

      <style jsx>{`
        .centered {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        h1 {
          cursor: pointer;
          user-select: none;
        }

        .education-item {
          margin-top: 16px;
          border: 1px solid #ccc;
          padding: 16px;
          width: 900px; /* Adjust the width as needed */
          text-align: center;  
        }
        @media screen and (max-width: 850px) {
          /* Apply styles for screens with a maximum width of 850px */
          .education-item {
            width: 50%; /* Make the width 100% for smaller screens */
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Education;
