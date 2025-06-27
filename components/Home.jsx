import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';

// You can also import your name from constants if you prefer
const name = "Vaibhav Chavan";

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');

  useEffect(() => {
    if (ref.current < name.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + name[ref.current]);
        ref.current += 1;
      }, 120); // Faster typing effect
      return () => clearTimeout(timeout);
    }
  }, [text]);

  return (
    <div className='area relative z-0 bg-black w-screen h-screen'>
      {/* Animated background (optional, you can use <Background /> instead) */}
      {/* <Background /> */}
      <ul className="circles">
        <li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li>
      </ul>
      <div className='hero relative h-[calc(80vh)] flex justify-center items-center text-white' id='hero'>
        <div className='backdrop-blur-sm rounded-3xl'>
          <h1 className='text-6xl sm:text-7xl font-extrabold'>
            Hi, I'm&nbsp;
            <h1 className='text-cyan-400 font-extrabold'>Vaibhav Chavan</h1>
          </h1>
          <p className='text-xl max-w-2xl'>
            Cybersecurity Enthusiast & Business Development Professional.<br />
            Passionate about securing digital assets, web application testing, and helping businesses grow securely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
