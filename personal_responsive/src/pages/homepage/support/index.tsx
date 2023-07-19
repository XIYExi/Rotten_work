import React from 'react';
import homeSupport from '@/assets/home-support-img.png';
import BigTagComponent from '@/component/BigTagComponent';

import img1 from '@/assets/home-support-img1.png';
import img2 from '@/assets/home-support-img2.png';
import img3 from '@/assets/home-support-img3.png';
import img4 from '@/assets/home-support-img4.png';


const SupportPage = (props: any) => {

  return(
    <div className='w-full h-auto md:h-screen py-16'>

      <div className='flex flex-wrap'>

        <div className='md:w-1/2 w-full p-10 md:p-16 max-w-xl mx-auto'>
          <div className='text-red-500 font-thin text-lg mb-6'>SUPPORT</div>
          <div className='text-5xl font-bold mb-3'>24/7 Hour</div>
          <div className='text-5xl font-bold mb-6'>Online Supports</div>

          <div className='font-thin text-xl mb-16'>
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
          </div>
          <div className='flex flex-wrap'>
            <BigTagComponent className='md:w-1/2' title='Communication experience'  src={img1}/>
            <BigTagComponent className='md:w-1/2' title='Best designing experience'  src={img2}/>
            <BigTagComponent className='md:w-1/2' title='Trending tools and sizes' src={img3}/>
            <BigTagComponent className='md:w-1/2' title='Training and communication' src={img4}/>
          </div>
        </div>

        <div className='md:w-1/2 w-full'>
          <img className='w-full md:max-w-3xl md:float-right' src={homeSupport} />
        </div>
      </div>

    </div>
  )
}

export default SupportPage;
