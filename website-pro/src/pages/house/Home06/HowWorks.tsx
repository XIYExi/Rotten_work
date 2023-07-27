/**
 * @Description: 工作展示页面
 * @Author: xiye
 * @date: 2023/7/27
 */
import React from 'react';
import chart from '@/assets/image/service-icon/chart.png';
import key from '@/assets/image/service-icon/key.png';
import note from '@/assets/image/service-icon/note.png';



export default function HowWorksPage() {

  return(
    <section className='pb-[80px] lg:pb-[120px]'>
      <div className='my-container mx-auto'>
        {/*顶部信息*/}
        <div className='grid grid-cols-12'>
          <div className='col-span-12 text-center'>
            <span className='text-tiny text-secondary mb-2 inline-block '>How we Works</span>
          </div>
          <div className='col-span-12 items-center justify-center'>
            <h2 className='sm:text-[30px] text-[24px] xl:text-4xl text-primary text-center mb-3'>
              It’s Very Simple Way<span className='text-secondary'>.</span>
            </h2>
          </div>
          <div className='col-span-12 items-center'>
            <div className='max-w-[480px] text-center font-thin leading-[1.2777] mx-auto'>
              Huge number of propreties availabe here for buy,sell and Rent. Also you find here co-living property,lots opportunity
            </div>
          </div>
        </div>

        {/*卡片*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[50px] mb-[-30px] xl:px-[35px] pt-[40px]'>


          <div className="custom-mouse-up01 relative p-[20px] xl:p-[30px] mb-[30px] bg-[#F5F9F8] hover:bg-[#FFF6F0] transition-all drop-shadow-md rounded-[10px] skew-left">
            <div className="flex flex-wrap justify-between">
              <span className="font-recoleta text-[28px] leading-none text-secondary mb-[10px] block">01.</span>
              <img className="self-start mb-[-20px] md:mb-[0] lg:mb-[-20px]" src={chart} alt="image" width="50" height="50" loading='lazy'/>
            </div>
            <h3 className="font-recoleta text-base text-primary mb-[5px]">Schedule Visit</h3>
            <p className="font-light text-[14px] max-w-[250px]">
              We visit our client to understand their all of requirements to do better.</p>
          </div>

          <div className="custom-mouse-up02 relative p-[20px] xl:p-[30px] mb-[30px] hover:bg-[#F5F9F8] bg-[#FFF6F0] transition-all drop-shadow-md rounded-[10px]">
            <div className="flex flex-wrap justify-between">
              <span className="font-recoleta text-[28px] leading-none text-secondary mb-[10px] block">02.</span>
              <img className="self-start mb-[-20px] md:mb-[0] lg:mb-[-20px]"
                   src={note} alt="image" width="50" height="50"
                   loading='lazy'/>
            </div>
            <h3 className="font-recoleta text-base text-primary mb-[5px]">Contract Signing</h3>
            <p className="font-light text-[14px] max-w-[250px]">
              We visit our client to understand their all of requirements to do better.
            </p>
          </div>

          <div className='custom-mouse-up03 relative p-[20px] xl:p-[30px] mb-[30px] hover:bg-[#FFF6F0] bg-[#F5F9F8] transition-all drop-shadow-md rounded-md skew-right'>
            <div className='flex flex-wrap justify-between'>
              <span className='font-recoleta text-[28px] leading-none text-secondary mb-[10px] block'>03.</span>
              <img className='self-start mb-[-20px] md:mb-[0] lg:mb-[-20px]' src={key} alt="image" width="50" height="54" loading='lazy' />
            </div>
            <h3 className="font-recoleta text-base text-primary mb-[5px]">Hand Over</h3>
            <p className="font-light text-[14px] max-w-[250px]">
              We visit our client to understand their all of requirements to do better.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
