import React from 'react';
import CardComponent from '@/component/CardComponent';
import img1 from '@/assets/home-members-icon1.png';
import img2 from '@/assets/home-members-icon2.png';
import img3 from '@/assets/home-members-icon3.png';

export default function MembersPage(props:any) {

  return(
    <div className='w-full h-auto md:h-screen max-w-6xl mx-auto py-16'>

      <div className='text-lg text-red-500 font-thin mb-6 text-center'>SOME MEMBERS</div>

      <div className='text-4xl md:text-5xl font-bold text-center mb-3'>
        Completed 420+ Projects
      </div>
      <div className='text-4xl md:text-5xl font-bold text-center mb-6'>
        Last Year
      </div>

      <div className='flex flex-wrap text-center py-10'>
        <div className='md:w-1/3 px-6 my-4'>
          <CardComponent
            title={<span className='text-center text-6xl font-thin'>123K</span>}
            imgCenter
            src={img1}
          >By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</CardComponent>
        </div>
        <div className='md:w-1/3 px-6 my-4'>
          <CardComponent
            title={<span className='text-center text-6xl font-thin'>45+</span>}
            imgCenter
            src={img2}
          >
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
          </CardComponent>
        </div>
        <div className='md:w-1/3 px-6 my-4'>
          <CardComponent
            title={<span className='text-center text-6xl font-thin'>67%</span>}
            imgCenter
            src={img3}
          >
            By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
          </CardComponent>
        </div>
      </div>

    </div>
  )
}
