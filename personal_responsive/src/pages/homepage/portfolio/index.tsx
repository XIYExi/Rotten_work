import React from 'react';
import ButtonComponent from '@/component/ButtonComponent';
import img1 from '@/assets/home-portfolio-img1.png';
import img2 from '@/assets/home-portfolio-img2.png';
import img3 from '@/assets/home-portfolio-img3.png';

const PortfolioPage = (props: any) => {

  return (
    <div className='w-full h-auto md:h-screen max-w-6xl mx-auto py-16 px-8'>

      <div className='text-red-500 text-lg font-thin my-6'>PORTFOLIO</div>

      <div className='md:text-6xl text-5xl text-bold mb-4'>Some of My Work</div>

      <div className='grid grid-cols-6 mb-16'>
        <div className='text-lg font-thin max-w-lg col-start-1 md:col-span-3 col-span-6'>
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
        </div>

        <div className='md:col-end-7 col-end-2 col-span-1 mt-6 md:mt-0'>
          <ButtonComponent
            borderColor='red-200'
            border
            hoverFontColor='white'
            hoverColor='red-500'
          >Portfolio</ButtonComponent>
        </div>

      </div>

      <div className='flex flex-wrap justify-center items-center'>
        <div className='md:w-1/3 pr-7 my-4'>
          <img className='w-80' src={img1}/>
        </div>
        <div className='md:w-1/3 pr-7 my-4'>
          <img className='w-80' src={img2}/>
        </div>
        <div className='md:w-1/3 pr-7 my-4'>
          <img className='w-80' src={img3}/>
        </div>

      </div>

    </div>
  )
}

export default PortfolioPage;
