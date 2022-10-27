import Image from 'next/image';
import React from 'react';

import ReactImg from '../public/assets/skills/react.png';
import JavaScriptImg from '../public/assets/skills/javascript.png';
import NextJsImg from '../public/assets/skills/nextjs.png';
import HtmlImg from '../public/assets/skills/html.png';
import TailwindImg from '../public/assets/skills/Tailwind.png';
import GithubImg from '../public/assets/skills/github1.png';
import CssImg from '../public/assets/skills/css.png';
import NodeJsImg from '../public/assets/skills/node1.jpg';
import MongoImg from '../public/assets/skills/mongo.png';
import MeterialUiImg from '../public/assets/skills/material.png';
import PostgresImg from '../public/assets/skills/postgresql.png';
import RubyImg from '../public/assets/skills/ruby1.png';
import CypressImg from '../public/assets/skills/cypress.io.png';
import InsomniaImg from '../public/assets/skills/insomnia.png';
import PostmanImg from '../public/assets/skills/postman1.png';
import SocketImg from '../public/assets/skills/socket3.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4 text-[#f6f6fb]'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/react.png" width='64px' height='64px' alt="/" /> */}
                <Image src={ReactImg} width='64px' height='64px' alt="/" />
              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>React</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/javascript.png" width='64px' height='64px' alt="/" /> */}
                <Image src={JavaScriptImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>JavaScript</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/nextjs.png" width='64px' height='64px' alt="/" /> */}
                <Image src={NextJsImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Next JS</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/html.png" width='64px' height='64px' alt="/" /> */}
                <Image src={HtmlImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Html</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/Tailwind.png" width='64px' height='64px' alt="/" /> */}
                <Image src={TailwindImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Tailwind</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/github1.png" width='64px' height='64px' alt="/" /> */}
                <Image src={GithubImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Github</h3>
              </div>
            </div>

          </div>


          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/css.png" width='64px' height='64px' alt="/" /> */}
                <Image src={CssImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>CSS</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/nodejs.png" width='64px' height='64px' alt="/" /> */}
                <Image src={NodeJsImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Node JS</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/mongo.png" width='64px' height='64px' alt="/" /> */}
                <Image src={MongoImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Mongo</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/javascript.png" width='64px' height='64px' alt="/" /> */}
                <Image src={MeterialUiImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>MeterialUi</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/javascript.png" width='64px' height='64px' alt="/" /> */}
                <Image src={PostgresImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Postgres</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/javascript.png" width='64px' height='64px' alt="/" /> */}
                <Image src={RubyImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Ruby</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/javascript.png" width='64px' height='64px' alt="/" /> */}
                <Image src={CypressImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Cypress.io</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/javascript.png" width='64px' height='64px' alt="/" /> */}
                <Image src={InsomniaImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Insomnia</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/javascript.png" width='64px' height='64px' alt="/" /> */}
                <Image src={PostmanImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Postman</h3>
              </div>
            </div>

          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-slate-600'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                {/* <Image src="/../public/assets/skills/javascript.png" width='64px' height='64px' alt="/" /> */}
                <Image src={SocketImg} width='64px' height='64px' alt="/" />

              </div>
              <div className='flex flex-col items-center justify-center text-[#f8f7fc]'>
                <h3>Socket.io</h3>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Skills;