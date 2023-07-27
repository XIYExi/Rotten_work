import React, {useEffect} from "react";
import slide1 from '@/assets/image/interior/slide1.png';
import slide2 from '@/assets/image/interior/slide2.png';
import slide3 from '@/assets/image/interior/slide3.png';
import Swiper from "swiper";
import {Pagination, Navigation} from 'swiper/modules';

export default function MaterialsPage() {

  useEffect(() => {
    new Swiper(".interior-carousel .swiper", {
      modules: [Pagination, Navigation],
      slidesPerView: "auto",
      slidesPerGroup: 3,
      spaceBetween: 25,
      speed: 1000,
      // autoplay: {
      //   delay: 5000,
      // },
      lazy: true,
      pagination: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, [])

  return(
    <section className="pt-[80px] lg:pt-[120px] interior-carousel">
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12'>
          {/*信息*/}
          <div className='col-span-12 lg:col-span-4 mb-[30px] relative lg:pr-[30px] xl:pr-[45px] pb-[80px]'>
            <span className='text-tiny text-secondary mb-2 inline-block'>Materials</span>
            <h2 className='text-[24px] sm:text-[30px] xl:text-4xl text-primary leading-[1.2777] mb-3'>
              Luxurious Interior & Superior Style<span className='text-secondary'>.</span>
            </h2>
            <p className='font-thin text-justify lg:max-w-[300px]'>
              Huge number of propreties availabe here for buy,sell and Rent. Also you find here co-living property,lots opportunity of huge discount.
            </p>

            <div className="swiper-button-prev w-[36px] h-[36px] rounded-full bg-primary  text-white hover:bg-secondary top-auto bottom-[0px] left-0">
            </div>
            <div className="swiper-button-next w-[36px] h-[36px] rounded-full bg-primary  text-white hover:bg-secondary top-auto bottom-[0px] left-[56px]">
            </div>
          </div>

          {/*卡片swiper*/}
          <div className='col-span-12 lg:col-span-8 mb-[30px] rounded-[10px] overflow-hidden'>
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide rounded-[10px] overflow-hidden w-auto">
                  <img src={slide1} alt="interior image"/>
                </div>
                <div className="swiper-slide rounded-[10px] overflow-hidden w-auto">
                  <img src={slide2} alt="interior image"/>
                  </div>
                <div className="swiper-slide rounded-[10px] overflow-hidden w-auto">
                  <img src={slide3} alt="interior image"/>
                  </div>
                <div className="swiper-slide rounded-[10px] overflow-hidden w-auto">
                  <img src={slide2} alt="interior image"/>
                </div>
                <div className="swiper-slide rounded-[10px] overflow-hidden w-auto">
                  <img src={slide1} alt="interior image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
