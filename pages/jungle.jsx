import Image from 'next/image';
import React from 'react';
import unisawpImg from '../public/assets/projects/uniswap.png';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const jungle = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10 '/>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={unisawpImg} alt='/'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Uniswap 2.0</h2>
          <h3> Tech Stack: React  / Tailwind CSS  / Cranq / web3 </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='py-4 text-[#f8f7fc]'>Project</p>
          <h2 className='py-4 text-[#f8f7fc]'>Overview</h2>
          <p className='py-4 text-[#f8f7fc]'>A Crypto Exchange application built with Web3 & Smart Contract.</p>
          <a
            href='https://elaborate-pixie-2ff87a.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/prathap222/uniswap2.0'
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
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind CSS</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Cranq</p>
              <p className='text-gray-700 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>web3</p>
            
            
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

export default jungle;