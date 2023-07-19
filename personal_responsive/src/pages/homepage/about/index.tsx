import React from 'react';
import { ResponsiveAttr } from '@/absolute/design/responsive';
import homeAbout from '@/assets/home-about.png';
import ButtonComponent from '@/component/ButtonComponent';
import classNames from 'classnames';

const AboutFlexAttr = {
  sm: ['w-full', 'h-auto', 'mt-0', ],
  md: ['w-1/2', ]
}

export default function AboutPage(props: any) {

  const imgClassName = classNames(ResponsiveAttr(AboutFlexAttr), 'h-96 mt-32 ')

  const wordClassName = classNames(ResponsiveAttr(AboutFlexAttr), 'md:pl-12')

  return(
    /*about*/
    <div className='w-full h-auto py-16'>
      <div className='flex flex-wrap'>

        <div className={imgClassName}>
          <img src={homeAbout} className='md:max-w-3xl w-full py-10 pr-16'/>
        </div>


        <div className={wordClassName}>

          <div className='py-5 px-12 max-w-3xl'>
            <div className='text-lg font-thin my-6 text-red-500'>ABOUT</div>
            <div className='text-6xl mb-2'>Passion</div>
            <div className='text-6xl mb-6'>Heart & Soul</div>
            <div className='text-xl text-gray-600 mb-6'>
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
            </div>
            <div className='text-gray-400 mb-10 leading-8'>
              By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float.
            </div>
            <ButtonComponent className='text-white px-12' backgroundColor={'red-500'} hoverColor={'red-600'}>About</ButtonComponent>
          </div>

        </div>
      </div>
    </div>
  )
}
