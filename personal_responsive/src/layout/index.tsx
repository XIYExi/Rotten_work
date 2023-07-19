import React from 'react';
import { IRouteProps } from 'umi';
import homeBg from '@/assets/home-bg.png';
import { ResponsiveShow } from '@/absolute/design/responsive';

export default function LayoutIndex({children}:IRouteProps){

  return(
    <React.Fragment>
      {/*header*/}
      <header className='absolute top-0 right-0 z-10 relative mx-auto
         max-w-6xl px-6 py-8 flex justify-between items-center text-white'>

        <a href='#' className='text-3xl tracking-wider'>PBP</a>


        {/*1em*/}
        <ul className={`${ResponsiveShow('md:flex', true)} uppercase pr-6`}>
          <li>
            <a href='#'>About</a>
          </li>
          <li className='ml-6'>
            <a href='#'>Portfolio</a>
          </li>
          <li className='ml-6'>
            <a href='#'>Blog</a>
          </li>
          <li className='ml-6'>
            <a href='#'>Contact</a>
          </li>
        </ul>


        <button className={`${ResponsiveShow('md', true)} h-10 text-center border hover:border-white`}
                style={{width:'170px'}}>Contact</button>

        <button className={`${ResponsiveShow('md', false)} h-10 text-center border hover:border-white`}>Show</button>


      </header>

      {children}

      {/*footer*/}
      <div className='text-center w-full h-20 p-6 max-w-6xl mx-auto'>
        - Footer -
      </div>

    </React.Fragment>
  )
}
