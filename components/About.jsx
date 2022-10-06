import React from 'react'

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
            Bootcamp i learnt javascript,React,Ruby,node js and i have done lot of live projects.I have earned lot of experience there. Now 
            im spending my time building  projects with React JS, Tailwind css , and learing new technologies.
          </p>
          <p className='py-2 text-gray-700 underline cursor-pointer'>Checkout some of my latest projects </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About