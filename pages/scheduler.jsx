import Image from 'next/image';
import React from 'react';
import NewsImg from '../public/assets/projects/news.png';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const scheduler = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 '/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={NewsImg} alt='/'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>AI-News-App</h2>
          <h3> Tech Stack: React,JavaScript,  Alan AI, Material UI </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='py-4 text-[#f8f7fc]'>Project</p>
          <h2 className='py-4 text-[#f8f7fc]'>Overview</h2>
          <p className='py-4 text-[#f8f7fc]'>Voice Controlled React News Application - Alan AI Voice Assistant.</p>
          <a
            href='https://ai-news-rauxxyg4p-prathap222.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/prathap222/AI-News-App'
            target='_blank'
            rel='noreferrer'
          >

            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 bg-slate-50'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>JavaScript</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Alan AI</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Material UI</p>
              {/* <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Storybook</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>PostgresSQL</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>SASS</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Cypress</p> */}
            
            
            
            </div>

          </div>

        </div>
        <Link href='/#projects'>
          <button className='px-8 py-2 mt-4'>Back</button>
        </Link>
      </div>

    </div>
  );
};

export default scheduler;