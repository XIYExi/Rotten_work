import React from 'react';
import CardComponent from '@/component/CardComponent';
import featureIcon1 from '@/assets/home-features-icon1.png';
import featureIcon2 from '@/assets/home-features-icon2.png';
import featureIcon3 from '@/assets/home-features-icon3.png';

export default function FeaturesPage (props:any) {


  return(
    <div className='w-full h-auto md:h-screen max-w-6xl mx-auto py-16'>
      <div className='text-center text-red-500 text-lg font-thin my-6'>FEATURES</div>
      <div className='text-center md:text-6xl text-5xl text-bold mb-3'>
        Awesome
      </div>
      <div className='text-center md:text-6xl text-5xl text-bold'>
        Customer <span className='pl-4'>Service</span>
      </div>

      <div className='text-center max-w-xl mx-auto mt-4'>
        Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
      </div>

      <div className='flex flex-wrap md:mt-20 mt-10'>
        <div className='md:w-1/3 md:p-10 p-6'>
          <CardComponent src={featureIcon1} title='Design' btnText='Learn More'>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</CardComponent>
        </div>

        <div className='md:w-1/3 md:p-10 p-6'>
          <CardComponent src={featureIcon2} title='Prototype' btnText='Learn More'>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</CardComponent>
        </div>

        <div className='md:w-1/3 md:p-10 p-6'>
          <CardComponent src={featureIcon3} title='Develop' btnText='Learn More'>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</CardComponent>
        </div>
      </div>
    </div>
  )
}
