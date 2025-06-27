import React from 'react';
import '../App.css';
import { services } from '../constants'; // Make sure your services reflect your actual offerings!
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='service_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-4 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👋 Hi, I'm <span className='text-blue-300 font-bold'>Vaibhav Chavan</span>, a cybersecurity enthusiast and business development professional.<br />
              🚀 I specialize in web security testing, penetration testing, and client engagement for cybersecurity projects.<br />
              💡 I enjoy bridging the gap between technical solutions and business needs, ensuring clients get the best security outcomes.<br />
              <br />
              📫 Connect with me on <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/vaibhav-chavan-944479211/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>.<br />
              📫 Find with me on <a className='text-green-300 hover:text-green-500 duration-300' href='https://medium.com/@vaibhavchavan_30571' target='_blank' rel='noopener noreferrer'>Medium</a>.<br />
              📄 Check out my <a className='text-purple-300 hover:text-purple-400 duration-300' href="https://drive.google.com/file/d/14_mfpwSKAyd_gMSf0iFi2IKrbxPFNaW3/view?usp=sharing" target='_blank' rel='noopener noreferrer'>Resume</a>.
            </p>

           
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
