import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';


const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen '>
      <div className='max-w-[1240] m-auto px-2 py-16 w-full  '>
        <p className='text-xl tracking-widest uppercase text-[#c92d69]'>Contact</p>
        <h2 className='py-4 text-[#f8f7fc]'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full  '>
              <div>
                <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
              </div>
              <div>
                <h2 className='py-2 text-[#f8f7fc]'>
      Prathap
                </h2>
                <p className='py-4 text-[#f8f7fc]'>Front-End Developer</p>
                <p className='py-4 text-[#f8f7fc]'> I am avilable for full-time positions or freelance. Contact me and let&apos;s talk.</p>
              </div>


              <div>
                <p className='uppercase pt-8 text-[#f8f7fc]'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
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
              </div>
            </div>
          </div>
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>


              <form action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060' method='POST' encType='multipart/form-data'>

                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-[#f8f7fc]'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type="text" name="name"  />

                  </div>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-[#f8f7fc]'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type="text" name="phone" />

                  </div>

                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-[#f8f7fc]'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-400' type="email" name="email" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-[#f8f7fc]'>Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-400' type="text" name="subject" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-[#f8f7fc]'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name="message"></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send message</button>
              </form>

            </div>
          </div>
        </div>
        <div className='flex justify-center py-12' >
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#7B68EE]'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
            </div>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Contact;