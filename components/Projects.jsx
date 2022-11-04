
import React from 'react';
import WanderlustImg from '../public/assets/projects/home-page.png';
import StoryCreatorImg from '../public/assets/projects/Home-page.png';
import UniswapImg from '../public/assets/projects/uniswap.png';
import NewsImg from '../public/assets/projects/news.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-24'>
        <p className='text-xl tracking-widest uppercase text-[#c92d69]'>Projects</p>
        <h2 className='py-4 text-[#f8f7fc]'>What I&apos;ve Built</h2>
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
            title='Uniswap 2.0'
            backgroundImg={UniswapImg}
            projectUrl='/jungle'
          />
          <ProjectItem
            title='Scheduler'
            backgroundImg={NewsImg}
            projectUrl='/scheduler'
          />

        </div>
   
      </div>

    </div>
  );
};

export default Projects;