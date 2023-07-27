/**
 * @Description: 工作展示页面
 * @Author: xiye
 * @date: 2023/7/27
 */
import React from 'react';

export default function HowWorksPage() {

  return(
    <section className='py-[80px] lg:py-[120px]'>
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[50px] mb--[-30px] xl:px-[35px]'>


        </div>

      </div>
    </section>
  )
}
