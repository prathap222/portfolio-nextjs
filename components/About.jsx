import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/assets/about1.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] h-[20%] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#c92d69]'>About</p>
          <h2 className='py-4 text-[#eeeef8]'>Who I Am</h2>
          <p className='py-2 text-[#eeeef8]'> I&apos;m a passionate developer</p>
          <p className='py-2 text-[#eeeef8]'>I have spent the last 10 years in customer service working as a senior operations executive. I have always had a knack for technology and working with computers. In 2022, I completed a web development diploma course Bootcamp in Lighthouse Labs, Vancouver.
          </p>
          <p className='py-2 text-[#eeeef8]'>
          In Bootcamp, I learned Javascript, React, Ruby, Node js, and more. I have done a lot of live projects and have earned a lot of experience there. Now I&apos;m spending my time learning new technologies and building projects with React JS, Tailwind CSS, and others.

          </p>

          <a
            href='https://github.com/prathap222?tab=repositories'
            target='_blank'
            rel='noreferrer'
          >
            <p className='py-2 text-[#73d9f6] underline cursor-pointer'>Checkout some of my latest projects </p>
          </a>



          
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;