/**
 * @Description: index-3 HomePage页面
 * @Author: xiye
 * @date: 2023/7/24
 */
import React from 'react';
import home3 from '@/assets/image/hero/home-3.jpg';
import SearchBarPage from "@/pages/house/Home01/SearchBar";


export default function HomePage() {

  return(
    <section className='bg-[#FFF6F0] relative before:absolute before:inset-0 before:content-[""] before:bg-[#060606] before:opacity-[50%]'>
      <div className='lg:h-[720px] xl:h-[830px]'>
        <img className="w-full h-full min-h-[360px] md:min-h-[540px] object-cover"
             src={home3} alt="hero image"/>

        <div className="absolute right-0 left-0 lg:top-[110px] xl:top-[155px] top-[50%] -translate-y-1/2 lg:translate-y-0">
          <div className="my-container mx-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="lg:max-w-[500px] xl:max-w-[600px] text-center ml-auto mr-auto lg:mb-[75px]">
                  <span className="text-base text-white block mb-5">
                    A new way to find Properties
                  </span>
                  <h1 className="font-recoleta text-white text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-5xl title">
                    Search and Find Luxury Homes
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
