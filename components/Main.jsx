import React from 'react';
import { FaLinkedinIn, FaGithub, } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import ProfileImg from '../public/assets/profile.JPG';
import Image from 'next/image';


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center '>
      <div className='max-w-[1240px] w-full h-full mx-auto py-16  flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widestw-full h-full mx-auto py-16 text-[#eeeef8]'>
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h2 className='py-2 text-[#eeeef8]'>
              Hi, I&apos;m <span className='text-[#5651e5]'>Prathap</span>
          </h2>
          <h2 className='py-2 text-[#eeeef8]'>
                A Full-stack Web Developer
          </h2>
          <p className='py-4 text-[#eeeef8] max-w-[70%] m-auto'>
          Full-stack developer with processes, and operational experience looking forward to learning and gaining developer experience. Motivated to use proven teamwork, communication, and organizational skills to deliver high-quality work.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/prathap222/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-[#7B68EE] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  
                <FaLinkedinIn/>
              </div>
            </a>
            <a
              href='https://github.com/prathap222'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-[#7B68EE] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full bg-[#7B68EE] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail/>
              </div>
            </Link>
            <a
              href=' https://resume.creddle.io/resume/59iptgf4c36 '
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full bg-[#7B68EE] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>

          </div>

          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <Image src={ProfileImg} layout="fill" objectFit="cover" />
          </div>

           

        </div>
      </div>
    </div>
  );
};
 
export default Main;