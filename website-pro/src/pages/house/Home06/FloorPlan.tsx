import React from "react";
import floor1 from '@/assets/image/floor-plan/floor1.png';
import floor2 from '@/assets/image/floor-plan/floor2.png';
import floor3 from '@/assets/image/floor-plan/floor3.png';

export default function FloorPlanPage() {


  return(
    <section className='pt-[80px] sm:pt-[110px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12 pb-[45px]'>
          <div className='col-span-12 text-center'>
            <span className='text-secondary text-tiny inline-block mb-2'>Floor Plan</span>
            <h2 className='text-primary text-[24px] sm:text-[30px] xl:text-4xl mb-3'>
              Check Our Floor Plan<span className='text-secondary'>.</span>
            </h2>
            <p className='font-thin max-w-[440px] mx-auto'>
              Huge number of propreties availabe here for buy,sell and Rent. Also you find here co-living property,lots opportunity
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px]'>
          <div className="text-center">
            <img src={floor1} alt="Floor Plan"/>
            <p>Single flat</p>
          </div>

          <div className="text-center">
            <img src={floor2} alt="Floor Plan"/>
            <p>Ground floor</p>
          </div>

          <div className="text-center">
            <img src={floor3} alt="Floor Plan"/>
            <p>1st Floor</p>
          </div>
        </div>
      </div>
    </section>
  )
}
