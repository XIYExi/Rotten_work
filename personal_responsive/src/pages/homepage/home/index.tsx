import React, { useEffect } from 'react';
import { ResponsiveAttr, ResponsiveShow } from '@/absolute/design/responsive';
import ButtonComponent from '@/component/ButtonComponent';
import homeBg from '@/assets/home-bg.png';
import homeR from '@/assets/home-r.png';
import classNames from 'classnames';

const wordRe = {
  sm: ['w-full'],
  md: ['w-2/5']
}

const imageRe = {
  sm: ['w-full', '-m-10'],
  md: ['w-3/5']
}

export default function IndexPage() {

  useEffect(() => {
    console.log(ResponsiveShow('sss',true))
  }, [])

  const wordClasses = classNames(ResponsiveAttr(wordRe), 'w-full p-4 mb-12 mt-12');
  const imageClasses = classNames(ResponsiveAttr(imageRe), 'w-full p-4 mb-12 ')

  return (
    <React.Fragment>
      {/*homepage*/}
      <div className='w-full h-screen text-white'>
        <img src={homeBg} className='absolute top-0 left-0 w-full h-full object-cover' style={{zIndex:-999}}/>

        <div className='max-w-6xl mx-auto flex flex-wrap items-start md:pt-16'>
          <div className={wordClasses}>
            <div className='text-2xl font-bold my-6'>Personal Portfolio</div>
            <div className='lg:text-7xl text-6xl font-bold mb-3'>Design &</div>
            <div className='lg:text-7xl text-6xl font-bold'>Development</div>
            <div className='text-xl my-6 font-thin'>
              The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.
            </div>

            <div className='flex my-10'>
              <div className='grow md:grow-0'>
                <ButtonComponent
                  className='mr-4'
                  backgroundColor={'red-500'}
                  border={false}
                >About</ButtonComponent>
              </div>
              <div className='grow md:grow-0'>
                <ButtonComponent className='ml-4'>Learn More</ButtonComponent>
              </div>
            </div>
          </div>

          <div className={imageClasses}>
            <img src={homeR} className='block w-full h-auto mb-12 md:ml-12'/>
          </div>

        </div>
      </div>


    </React.Fragment>
  );
}
