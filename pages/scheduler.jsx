import Image from 'next/image';
import React from 'react';
import SchedulerImg from '../public/assets/projects/interview.png';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const scheduler = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 '/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={SchedulerImg} alt='/'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Scheduler</h2>
          <h3> Tech Stack: React,JavaScript,  Axios, Classnames, Storybook, PostgresSQL, SASS, Cypress </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='py-4 text-[#f8f7fc]'>Project</p>
          <h2 className='py-4 text-[#f8f7fc]'>Overview</h2>
          <p className='py-4 text-[#f8f7fc]'>Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors.</p>
          <a
            href='https://github.com/prathap222/scheduler'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/prathap222/scheduler'
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
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Axios</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Classnames</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Storybook</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>PostgresSQL</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>SASS</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Cypress</p>
            
            
            
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