import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-700'> Im a passionate developer</p>
          <p className='py-2 text-gray-700'>I have spent the last 10 years in the customer service working as a opration executive. I have always had a knack for tectnology
            and working with computers. In 2022 I joined Bootcamp for web development diploma course.
          </p>
          <p className='py-2 text-gray-700'>
            In Bootcamp I learnt Javascript,React,Ruby,Node js. I have done lot of live projects and have earned lot of experience there.
            Now I&aposm spending my time building  projects with React JS, Tailwind CSS , and learing new technologies.
          </p>
          <p className='py-2 text-gray-700 underline cursor-pointer'>Checkout some of my latest projects </p>
        </div>``
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;