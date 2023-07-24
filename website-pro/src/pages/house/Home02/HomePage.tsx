/**
 * @Description: home/index-2首页
 * @Author: xiye
 * @date: 2023/7/24
 */
import React, {useEffect} from 'react';
import hernan from '@/assets/image/hero/hernan-lucio.png';
import Swiper from "swiper";


export default function HomePage() {

  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true, // 循环模式选项
      //autoplay: true,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
    })
  }, [])

  return(
    <section className='bg-[#FFFFFF] relative before:absolute before:w-1/2 custom-lg-w custom-xl-w
    before:h-full before:top-0 before:right-0 before:content-[""] before:bg-[#ECFAF7] pt-[130px] lg:pt-[80px]
     xl:pt-[0px] mb-[70px] lg:mb-[0px]'>
      <div className='hero-slider overflow-hidden index2-swiper'>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            <Index2HouseSwiper />
            <Index2HouseSwiper />
          </div>
        </div>
      </div>
    </section>
  )
}

const Index2HouseSwiper = () => (
  <div className="swiper-slide lg:h-[700px] xl:h-[950px] xs:h-[auto] flex flex-wrap items-center">
    <div className='my-container mx-auto'>

      <div className='grid grid-cols-12'>
        {/*标题*/}
        <div className='col-span-12 lg:col-span-5 xl:col-span-6'>
          <div className='max-w-[560px]'>
            <div className="relative mb-5 sub_title">
              <span className="text-base text-secondary block">A new way to find Properties</span>
            </div>
            <h1 className="font-recoleta text-primary text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-6xl title">
              <span>Modern,Creative & Luxury Homes</span>
            </h1>
            <p className="font-thin text-[#494949] mt-5 mb-8 text max-w-[570px]">
              Huge number of propreties availabe here for buy,and sell,also you can find here
              co-living property,So you have lots of opportunity
            </p>
            <div className="inline-block mb-[60px] hero_btn">
              <a href='#'
                 className="before:rounded-md before:block before:absolute before:left-auto before:right-0
                    before:inset-y-0 custom-before-zIndex before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all
                    leading-none px-[20px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0
                    custom-after-zIndex after:bg-primary after:rounded-md after:transition-all block">
                Contact us
              </a>
            </div>

            <ul className="flex flex-wrap list-none">
              <li className="block">
                <span className="font-recoleta text-secondary text-2xl">
                  <span>20</span><span>k+</span>
                </span>
                <p>Properties</p>
              </li>
              <li className="block pl-[25px] sm:pl-[40px] md:pl-[60px]">
                <span className="font-recoleta text-secondary text-2xl">
                  <span>12</span><span>k+</span>
                </span>
                <p>Customers</p>
              </li>
              <li className="block pl-[25px] sm:pl-[40px] md:pl-[60px]">
                <span className="font-recoleta text-secondary text-2xl">
                  <span>160</span><span>+</span>
                </span>
                <p>Awards Win</p>
              </li>
            </ul>

          </div>

        </div>

        {/*图片*/}
        <div className='col-span-12 lg:col-span-7 xl:col-span-6'>

          <div className="relative mt-10 md:mt-0 lg:absolute lg:right-0 lg:bottom-0">
            <img className="hero_image lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[750px] 3xl:max-w-[866px]"
                 src={hernan} width="866" height="879" alt="hero image" />
          </div>

        </div>

      </div>

    </div>
  </div>
)
