import React from 'react';
import homeTestImg from '@/assets/home-test-img1.png';
import CarouselComponent from '@/component/CarouselComponent';
import homeTestAvatar from '@/assets/home-test-avatar.png';


const carouselData = [
  {
    src: homeTestAvatar,
    title: 'Nick Evans',
    meta: 'Developer',
  },
  {
    src: homeTestAvatar,
    title: 'Sam Dicks',
    meta: 'Developer',
  },
  {
    src: homeTestAvatar,
    title: 'David Evil',
    meta: 'Developer',
  }
]


const TestimonialsPage = (props:any) => {

  return(
    <div className='w-full h-auto md:h-screen'>
      <div className='flex flex-wrap'>

        <div className='md:w-1/2 w-full'>
          <img src={homeTestImg} className='w-full md:max-w-3xl py-10 pr-16'/>

        </div>


        <div className='md:justify-self-center md:w-1/2 w-full py-5 px-12 max-w-3xl'>
          <div className='font-thin text-red-500 text-lg mb-6'>
            TESTIMONIALS
          </div>

          <div className='mb-2 text-5xl md:text-6xl font-bold'>
            What's Client
          </div>
          <div className='mb-6 text-5xl md:text-6xl font-bold'>
            Say About Me
          </div>

          <div className='mb-6 text-xl font-thin'>
            "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle."
          </div>

          <CarouselComponent data={carouselData} duration={0}/>
        </div>

      </div>
    </div>
  )

}

export default TestimonialsPage;
