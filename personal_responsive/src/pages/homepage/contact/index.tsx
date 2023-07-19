import React from 'react';
import homeContactBg from '@/assets/home-contact-bg.png';
import ButtonComponent from '@/component/ButtonComponent';

export default function ContactPage(props:any) {

  return(
    <div className=' w-full h-96 text-white relative'>
      <img className='absolute top-0 left-0 w-full h-full object-fill' src={homeContactBg} style={{zIndex:-999}}/>

      <div className='text-center max-w-4xl mx-auto py-16 font-bold'>
        <div className='text-4xl mb-6 mt-4'>Contact If You Have Any Projects?</div>
        <div className='opacity-90 mb-10'>
          Apparently we had reached a great height in the atmosphere
        </div>

        <div className='flex justify-center items-center'>
          <ButtonComponent className='m-5' backgroundColor='red-500' hoverColor='red-700' hoverFontColor='white'>Contact</ButtonComponent>
          <ButtonComponent className='m-5'>About</ButtonComponent>
        </div>

      </div>
    </div>
  )
}
