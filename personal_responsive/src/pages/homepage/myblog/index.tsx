import React from 'react';
import ButtonComponent from '@/component/ButtonComponent';
import DisplayComponent from '@/component/DisplayComponent';

import img1 from '@/assets/home-blog-img1.png';
import img2 from '@/assets/home-blog-img2.png';
import img3 from '@/assets/home-blog-img3.png';

export default function MyblogPage(props:any){

  return(
    <div className='w-full h-auto md:h-screen max-w-6xl mx-auto py-16'>

      <div className='px-10'>
        <div className='font-thin text-red-500 text-lg mb-6'>MY BLOG</div>
        <div className='font-bold text-6xl mb-6'>My Personal Articles</div>
        <div className='grid grid-cols-6'>
          <div className='col-start-1 md:col-span-2 col-span-6 font-thin'>
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
          </div>
          <div className='col-end-3 md:col-end-7 col-span-2 md:justify-self-end justify-self-center pt-4 md:pt-0'>
            <ButtonComponent borderColor='red-200' hoverColor='red-500' hoverFontColor='white'>Blog</ButtonComponent>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap'>
        <DisplayComponent
          className='md:w-1/3 w-full p-5 m-4 md:m-0'
          title='Red flare silhouetted'
          desc='By the same illusion which lifts the horizon of the sea to the level of the spectator'
          src={img1}
        />
        <DisplayComponent
          className='md:w-1/3 w-full p-5 m-4 md:m-0'
          title='Watched the storm'
          desc='By the same illusion which lifts the horizon of the sea to the level of the spectator'
          src={img2}
        />
        <DisplayComponent
          className='md:w-1/3 w-full p-5 m-4 md:m-0'
          title='Shining crescent far beneath'
          desc='By the same illusion which lifts the horizon of the sea to the level of the spectator'
          src={img3}
        />
      </div>


    </div>
  )
}
