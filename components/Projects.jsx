import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WanderlustImg from '../public/assets/projects/home-page.png';
import StoryCreatorImg from '../public/assets/projects/Home-page.png';
import TheJungleImg from '../public/assets/projects/homepage.png';
import SchedulerImg from '../public/assets/projects/interview.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem 
        title='Wanderlust' 
        backgroundImg={WanderlustImg} 
        projectUrl='/Wanderlust' 
        />
         <ProjectItem 
        title='Story Creator' 
        backgroundImg={StoryCreatorImg} 
        projectUrl='/story' 
        />
         <ProjectItem 
        title='The Jungle' 
        backgroundImg={TheJungleImg} 
        projectUrl='/jungle' 
        />
         <ProjectItem 
        title='Scheduler' 
        backgroundImg={SchedulerImg} 
        projectUrl='/scheduler' 
        />

        </div>
   
      </div>

    </div>
  );
};

export default Projects;