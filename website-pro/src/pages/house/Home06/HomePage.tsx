import React, {useEffect} from "react";
import bathroom from '@/assets/image/icon/bathroom.png';
import bed from '@/assets/image/icon/bed.png';
import garage from '@/assets/image/icon/garage.png';
import home from '@/assets/image/icon/home.png';
import kitchen from '@/assets/image/icon/kitchen.png';
import classnames from "classnames";
import Swiper from "swiper";
import {Pagination} from 'swiper/modules';

export default function HomePage() {

  useEffect(() => {
    new Swiper('.hero-slider2 .swiper', {
      modules: [Pagination],
      loop:true,
      speed: 600,
      autoplay: false,
      lazy: true,
      spaceBetween: 0,
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index:number, className:string) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },

      navigation: false,
    })
  }, [])


  return(
    <section className="hero-section bg-white">
      <div className="hero-slider2 overflow-hidden">
        <div className="swiper">
          <div className="swiper-wrapper">
            <Home06BgSwiper className='custom-bg-0601'/>
            <Home06BgSwiper className='custom-bg-0602'/>
            <Home06BgSwiper className='custom-bg-0603'/>
          </div>
          <div className="swiper-pagination home-pagination-six hidden lg:flex flex-wrap flex-col items-end z-20">
          </div>
        </div>
      </div>
    </section>
  )
}


const Home06BgSwiper = (props: any) => {

  const SwiperItemClassName = classnames(
    "swiper-slide bg-no-repeat bg-left-bottom bg-sky-100 z-10 relative before:absolute lg:py-[125px]",
    "before:w-full before:h-full before:inset-0 before:content-[''] before:bg-[#000000] before:opacity-[75%] custom-before-zIndex py-[80px]",
    props.className);

  return(
    <div className={SwiperItemClassName}>
      <div className="my-container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="slider-content">

              <div className="relative mb-5 sub_title">
                <span className="text-base text-white block">Luxury Home</span>
              </div>

              <h1 className="mb-2 font-recoleta text-white text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-6xl title">
                <span>Patriot de Plaza</span>
              </h1>
              <p className="text-base text-white font-light underline text">
                194 Mercer Street,627 Broadway,New York </p>
              <span className="text-white inline-block font-recoleta text-[28px] px-[20px] py-[12px] leading-none border-b-2 border-secondary bg-primary  mt-[40px] mb-[75px] hero_btn text-center">
                Price:$255300
              </span>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-10">
            <ul className="flex flex-wrap items-center sm:justify-between text-white mt-[-20px] mb-[10px] lg:mb-[60px]">
              <li className="pr-[30px] sm:pr-[35px] lg:pr-[70px] sm:border-r sm:border-[#E0E0E0] my-[20px]">
                <img className="mb-[15px]" src={home} width="33"
                     height="33" alt="icon"/>
                <span>2350 Sq.fit</span>
              </li>

              <li className="pr-[30px] sm:pr-[35px] lg:pr-[70px] sm:border-r sm:border-[#E0E0E0] my-[20px]">
                <img className="mb-[15px]" src={bed} width="33"
                     height="31" alt="icon"/>
                <span>Bedrooms</span>
              </li>

              <li className="pr-[30px] sm:pr-[35px] lg:pr-[70px] sm:border-r sm:border-[#E0E0E0] my-[20px]">
                <img className="mb-[15px]" src={bathroom} width="32"
                     height="33" alt="icon"/>
                <span>Bathroom</span>
              </li>

              <li className="pr-[30px] sm:pr-[35px] lg:pr-[70px] sm:border-r sm:border-[#E0E0E0] my-[20px]">
                <img className="mb-[15px]" src={kitchen} width="31"
                     height="31" alt="icon"/>
                <span>2 Kitchen</span>
              </li>

              <li className="my-[20px]">
                <img className="mb-[15px]" src={garage} width="32" height="32"
                     alt="icon"/>
                <span>3 Garage</span>
              </li>

            </ul>
            <a href="#" className="text-white text-base underline capitalize hover:text-secondary">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
