import React from 'react';
import { ResponsiveAttr } from '@/absolute/design/responsive';
import homeService from '@/assets/home-service.png';
import TagComponent from '@/component/TagComponent';
import homeIcon from '@/assets/home-service-icon.png';
import ButtonComponent from '@/component/ButtonComponent';
import classNames from 'classnames';

const ServiceWordFlexAttr = {
  md: ['w-1/2', 'p-16']
}

const ServiceImageFlexAttr = {
  md: ['w-1/2']
}


export default function ServicePage(props:any){

  const wordClassName =  classNames(ResponsiveAttr(ServiceWordFlexAttr), 'p-12 max-w-xl mx-auto')

  const imageClassName = classNames(ResponsiveAttr(ServiceImageFlexAttr))


  return(
    /*service*/
    <div className='w-full h-auto'>
      <div className='flex flex-wrap'>
        <div className={wordClassName}>
          <div className='text-lg font-thin my-6 text-red-500'>SERVICE</div>
          <div className='md:text-6xl text-5xl mb-3'>Professional <span className='md:text-5xl text-4xl'>for</span></div>
          <div className='md:text-5xl text-4xl mb-6'>Business Solution</div>
          <div className='text-base md:text-xl text-gray-800 mb-6'>
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
          </div>
          <div className='text-gray-400 mb-10 leading-8'>
            <TagComponent className='mb-2' src={homeIcon}>Highly configurable and easy to setup</TagComponent>
            <TagComponent className='mb-2' src={homeIcon}>Responsive and Mobile Friendly</TagComponent>
            <TagComponent className='mb-2' src={homeIcon}>Super Fast Customization</TagComponent>
          </div>

          <ButtonComponent className='text-white px-12' backgroundColor={'red-500'} hoverColor={'red-600'}>Service</ButtonComponent>
        </div>

        <div className={imageClassName}>
          <img src={homeService} className='md:float-right md:max-w-3xl w-full'/>
        </div>
      </div>
    </div>
  )
}
