import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import NavLogo from '../public/assets/navLogo4.jpeg';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(()=> {
    if (
      router.asPath === '/Wanderlust' ||
      router.asPath === '/story' ||
      router.asPath === '/jungle' ||
      router.asPath === '/scheduler'
    ) {
      setNavBg('transparent');
      setLinkColor('#353738');
    } else {
      setNavBg('#353738');
      setLinkColor('#353738');
    }

  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div style={{background:`${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20  z-[100]'}>
      <div className='flex justify-between item-center w-full h-full px-2 2xl:px-16  '>
        <Link href='/'>
          <Image src={NavLogo} alt="/" width='125' height='50' />
        </Link>
        
        <div>
          <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
            <Link href='/'>
              {/* <li className='ml-10 text-sm uppercase hover:border-b'>Home</li> */}
              <button className='px-3 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300 animate-pulse' >Home
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>

                </span>
              </button>
            </Link>
            <Link href='/#about'>
              {/* <li className='ml-10 text-sm uppercase hover:border-b'>About</li> */}
              <button className='px-3 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300 animate-pulse'>About
                <span>
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>

                </span>
              </button>
            </Link>
            <Link href='/#skills'>
              {/* <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li> */}
              <button className='px-3 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300 animate-pulse'>Skills
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>

                </span>
              </button>
            </Link>
            <Link href='/#projects'>
              {/* <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li> */}
              <button className='px-3 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300 animate-pulse'>Projects
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>

                </span>
              </button>
            </Link>
            <Link href='/#contact'>
              {/* <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li> */}
              <button className='px-3 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300 animate-pulse'>Contact
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>

              </button>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>

      <div className={nav ? 'mde:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>

        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}
        >
          <div>
            <div  className='flex w-full items-center justify-between '>
              <Link href='/'>
                <Image src={NavLogo} width='87' height='35' alt='/'/>
              </Link>
              
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer '>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className=' w-[85%] md:w-[90%] py-4'>
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
              </Link>
              <Link  href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
              </Link>
              <Link  href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/prathap222/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full bg-[#7B68EE] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn/>
                  </div>
                </a>
                <a
                  href='https://github.com/prathap222'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full bg-[#7B68EE] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub/>
                  </div>
                </a>
                <Link href='/#contact'>
                  <div className='rounded-full bg-[#7B68EE] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail/>
                  </div>
                </Link>
                <a
                  href=' https://resume.creddle.io/resume/59iptgf4c36 '
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full bg-[#7B68EE] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </a>
                  
              </div>

            </div>
            

          </div>

        </div>

      </div>

    </div>
  );
};


export default Navbar;