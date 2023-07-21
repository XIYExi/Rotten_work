/**
 * @Description: 房产中介首页图，左右布局
 * @Author: xiye
 * @date: 2023/7/20
 */
import React, {Fragment, useEffect, useRef} from "react";
import star from '@/assets/image/hero/star.png';
import cogs from '@/assets/image/hero/cogs.png';
import hero from '@/assets/image/hero/hero.png';
import shape2 from '@/assets/image/hero/shape2.svg';
import Swiper from "swiper";
import 'swiper/swiper.css';
import Parallax from 'parallax-js';


export default function HomePage() {


  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      //小圆点分页
      pagination: {
        el: '.swiper-pagination',
      },
      //autoplay: true,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
    })
  }, [])


  return(
    <Fragment>

      <section className='bg-[#FFF6F0] relative'>
        {/*滑动主页*/}
        <div className='hero-slider overflow-hidden pt-[130px] lg:pt-[80px] xl:pt-[0px] pb-[70px] lg:pb-[0px]'>

          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <SwiperSliderItem/>
              {/*为了让滑动生效，需要再复制一份swiper-slider*/}
              <SwiperSliderItem/>
            </div>
          </div>
          <div className='swiper-pagination'>

          </div>
        </div>

        {/*左下角的星星*/}
        <img className='absolute left-0 bottom-0' src={star} alt='icon' width='112' height='138'/>
      </section>


    </Fragment>
  )
}

const SwiperSliderItem = () => {

  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(parallaxRef.current);
  }, [parallaxRef.current])

  return(
    <div className='swiper-slide lg:h-[700px] xl:h-[960px] xs:h-[auto] flex flex-wrap items-center'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12'>
          {/*网站标题*/}
          <div className='col-span-12 lg:col-span-5 xl:col-span-6'>

            <div className='slider-content'>
              <div className='relative mb-5 sub_title'>
                <img className="animate-animateSpin" src={cogs} width="62" height="62" alt="icon" />
                <span className="bg-[#FFF6F0] text-base text-secondary block absolute left-[28px] top-1/2 -translate-y-1/2">
                A new way to find Properties
              </span>
              </div>

              <h1 className='font-recoleta text-primary text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px]
             leading-tight xl:text-[68px] font-bold title'>
                <span>Find your Most Suitable Property</span>
              </h1>

              <p className="text-base text-[#494949] mt-5 mb-8 text max-w-[570px]">Huge number
                of propreties availabe here for buy,and sell,also you can find here
                co-living property,So you have lots of opportunity
              </p>

              <div className="inline-block mb-7 hero_btn">
                <a href="#" className="before:rounded-md before:block before:absolute before:left-auto
                          before:right-0 before:inset-y-0 before:bg-secondary before:w-0 hover:before:w-full
                          hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px]
                           capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute
                           after:inset-0 index-modify after:bg-primary after:rounded-md after:transition-all block font-bold">
                  Contact us
                </a>
              </div>

              <span className="block font-recoleta hero_info">
                <span className="text-[20px] sm:text-[22px] text-secondary">Have a question?</span>
                <a href="#" className="text-[22px] sm:text-[32px] text-primary hover:underline">+9985 254 784</a>
            </span>

            </div>

          </div>

          {/*图片*/}
          <div className='col-span-12 lg:col-span-7 xl:col-span-6'>
            <div className='relative mt-10 md:mt-0 lg:absolute xl:right-[30px] 2xl:right-[130px] lg:top-1/2
                      lg:-translate-y-1/2 3xl:max-w-[830px] 2xl:max-w-[700px] xl:max-w-[630px] lg:max-w-[550px]'>
              <img className='hero_image' src={hero} alt='hero image' width='849' height='739'/>
              <svg
                className="mysvg absolute top-[-20px] md:top-[0px] lg:top-[20px] xl:top-[38px] 2xl:top-[68px] 3xl:top-[133px] 3xl:left-[-50px] 2xl:left-[-40px] xl:left-[-40px] lg:left-[-40px] left-0"
                version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 52 52" width="52" height="52">
                <path className="st0"
                      d="M2.96,30.53c-4.57,5.96,3.81,15.3,11.32,18.61c7.49,3.3,17.32,0.85,24.15-3.06  c13.78-7.89,15.38-21.63,6.69-34.15C39.86,4.34,29.33-3.09,20.4,3.8c-5.04,3.88-9.25,13.06-6.87,19.32  c1.57,4.13,11.66,10.45,14.59,4.17c2.45-5.24-7.77-5.94-8.2-10.79C19.3,9.5,28.7,8.86,32.96,10.95c8.35,4.08,9.53,19.1,2.7,25.09  c-5.01,4.39-16.54,4.55-22.15,0.92C11.34,35.55,7.83,26.66,2.96,30.53z"/>
              </svg>

              <div ref={parallaxRef} data-relative-input='true'>
                <img data-depth='0.2' className='hero-star absolute bottom-[-55px] sm:bottom-0 lg:bottom-[150px] xl:bottom-[185px]
                          3xl:bottom-[250px] 3xl:left-[60px] 2xl:left-[50px] lg:left-[30px]'
                     src={shape2}
                     width="98"
                     height="74"
                     alt="icon"/>
              </div>

              <svg
                className="orange-shape absolute bottom-[0%] lg:bottom-[120px] xl:bottom-[140px] 2xl:bottom-[150px] 3xl:bottom-[190px] 3xl:right-[135px] 2xl:right-[120px] xl:right-[110px] lg:right-[80px] right-[30px]"
                version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 59 56" width="59" height="56">
                <g>
                  <path className=""
                        d="M25.76,1.27c-5.34,0-10.59,1.54-15.11,5.09C-0.23,14.91-1.08,29.98,3.7,42.08c1.32,3.35,2.95,7.45,5.62,10.18   c0.99,1.02,2.13,1.85,3.44,2.38c1.12,0.45,2.45,0.69,3.81,0.69c3.4,0,6.94-1.52,7.44-5.08c0.6-4.24-7.99-11.32-8.9-16.26   C13.16,23.47,19.02,18,25.97,18c4.89,0,10.32,2.7,13.96,8.25c2.28,3.46,7.05,9.61,11.65,9.61c1.6,0,3.18-0.74,4.63-2.6   c6.24-7.99-4.66-20.84-10.6-25.17C39.84,3.89,32.73,1.27,25.76,1.27L25.76,1.27z"/>
                </g>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


