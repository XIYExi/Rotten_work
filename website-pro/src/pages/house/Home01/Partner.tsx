/**
 * @Description: 合作者页面
 * @Author: xiye
 * @date: 2023/7/24
 */
import React, {useEffect} from "react";
import brand1 from '@/assets/image/brand/brand1.png';
import brand2 from '@/assets/image/brand/brand2.png';
import brand3 from '@/assets/image/brand/brand3.png';
import brand4 from '@/assets/image/brand/brand4.png';
import brand5 from '@/assets/image/brand/brand5.png';
import Swiper from "swiper";


export default function PartnerPage() {

  useEffect(() => {
    new Swiper('.brand-slider .swiper', {
      loop: false,
      speed: 600,
      lazy: true,
      watchSlidesProgress: true,
      spaceBetween: 30,
      pagination: false,
      navigation: false,
      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        576: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
      },
    })
  }, [])

  return(
    <section className='pt-[80px] lg:pt-[120px] pb-[80px] lg:pb-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>

            <div className='mb-[60px]'>
              <span className='text-secondary text-tiny inline-block mb-2'>Our Partner's</span>
              <h2 className='font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-4xl capitalize'>
                Reliable Partner’s<span className="text-secondary">.</span>
               </h2>
            </div>

            {/*滑动卡片*/}
            <div className='brand-slider'>

              <div className='swiper'>
                <div className='swiper-wrapper'>
                  <PartnerSwiperItem src={brand1} href='#' />
                  <PartnerSwiperItem src={brand2} href='#' />
                  <PartnerSwiperItem src={brand3} href='#' />
                  <PartnerSwiperItem src={brand4} href='#' />
                  <PartnerSwiperItem src={brand5} href='#' />
                  <PartnerSwiperItem src={brand1} href='#' />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}


const PartnerSwiperItem = (props: {src: string, href: string}) => (
    <div className='swiper-slide text-center'>
      <a href={props.href} className="block">
        <img src={props.src}  className="w-auto h-auto block mx-auto"
          loading="lazy" width="125" height="109" alt="@@title" />
      </a>
    </div>
)
