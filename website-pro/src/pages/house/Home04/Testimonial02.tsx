/**
 * @Description: 客户感言推荐02页面
 * @Author: xiye
 * @date: 2023/7/26
 */
import React, {useEffect, useState} from "react";
import {ReactComponent as TestimonialSvg} from "@/assets/image/testimonial/testimonial02.svg";
import Pattern from '@/assets/image/testimonial/pattern.png';
import {TestimonialSwiperItemProps} from "@/pages/house/Home01/Testimonial";
import {ReactComponent as IconSvg} from "@/assets/image/testimonial/icon.svg";
import {ReactComponent as StarIcon} from "@/assets/image/testimonial/star.svg";
import Swiper from "swiper";
import {Pagination, Navigation} from 'swiper/modules';
import Person1 from "@/assets/image/testimonial/person1.png";
import Person2 from "@/assets/image/testimonial/person3.png";
import {render} from "react-dom";


export default function Testimonial02Page() {

  const [data, setData] = useState<TestimonialSwiperItemProps[]>([]);
  useEffect(() => {
    (async () => {
      const {default:Graph} = await import('@/assets/data/TestimonialData');
      setData(Graph.TestimonialData);
    })()
  }, [])

  useEffect(() => {
    new Swiper('.testimonial-carousel-two .swiper', {
      modules: [Pagination, Navigation],
      loop: false,
      watchSlidesProgress: true,
      slidesPerView: 1,
      spaceBetween: 30,
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

      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        576: {
          slidesPerView: 1,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
      },
    })
  }, [])


  return(
    <section className='testimonial-section pb-[80px] lg:pb-[120px] bg-center bg-no-repeat bg-white z-10'>
      <div className='my-container mx-auto relative testimonial-carousel-two'>

        <div className="grid items-center grid-cols-12 gap-x-[30px]">
          <div className="col-span-12 relative">
            <div className="swiper rounded-[30px] pb-[40px] md:pb-0">

              <div className="swiper-wrapper">

                {/*slider*/}
                {
                  data.map((item:TestimonialSwiperItemProps, index:number) => (
                    <Testimonial02SwiperItem
                      src={item.src}
                      desc={item.desc}
                      title={item.title}
                      key={index}
                    />
                  ))
                }

              </div>
              <div className="testimonial-pagination hidden sm:block">
                <div
                  className="swiper-button-prev w-[36px] h-[36px] rounded-full bg-secondary xl:bg-primary  text-white hover:bg-secondary top-auto bottom-[85px] left-[30px]">
                </div>
                <div
                  className="swiper-button-next w-[36px] h-[36px] rounded-full bg-secondary xl:bg-primary  text-white hover:bg-secondary top-auto bottom-[85px] left-[85px]">
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}


const Testimonial02SwiperItem = (props: TestimonialSwiperItemProps) => {

  const {
    src,
    title,
    desc,
  } = props;

  const renderImage = (type:string) => {
    switch (type){
      case '1':
        return Person1;
      case '2':
        return Person2;
      default:
        return Person1;
    }
  }

  return(
    <div className="swiper-slide">
      <div className="pl-[50px] xl:pl-[150px]">
        <div className="inline-block relative bg-primary text-primary rounded-[30px] z-10">
          <TestimonialSvg />
          <img src={renderImage(src)} className="w-auto h-auto block mx-auto relative z-20 thumb" loading="lazy"
               width="402" height="505" alt="Oliver Stephen" />
          <img className="absolute left-[0px] top-0 z-[1]"
               src={Pattern} width="400"
               height="500" loading="lazy" alt="shape"/>
        </div>
      </div>

      <div className="before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-full before:h-[395px] before:content-[''] before:bg-[#F5F9F8] before:rounded-[30px]">
        <div className="text-left rounded-[14px] max-w-[100%] sm:max-w-[90%] md:max-w-[560px] mx-auto md:ml-auto absolute top-[65%] sm:top-1/2 left-0 md:left-auto right-0 md:right-[50px] xl:right-0 -translate-y-1/2 px-[20px] md:px-[30px] xl:pl-[0px] xl:pr-[60px]  py-[20px] md:py-[30px] z-20 bg-white xl:bg-transparent shadow lg:shadow-none scale-[0.8] sm:scale-100">
          <div className="relative">
            <span className="block absolute right-[0px] top-[0px]">
              <IconSvg />
            </span>
            <span className="text-secondary text-tiny capitalize inline-block mb-[5px] xl:mb-[10px]">Testimonial</span>
            <h2 className="font-recoleta text-primary text-[24px] xl:text-4xl capitalize mb-[10px] xl:mb-[20px] leading-[1.2]">
              Reviews from our <br className="hidden xl:block"/>happy Clients
              <span className="text-secondary">.</span>
            </h2>
            <p className="text-primary max-w-[480px]">
              {desc}
            </p>
          </div>
          <ul>
            <li className="flex flex-wrap items-center justify-between mt-4">
              <span className="font-recoleta text-[18px] leading-none capitalize text-secondary">
                {title}
              </span>
              <span className="flex flex-wrap">
                {
                  new Array(5).fill(0).map((_:number, index:number) => (
                    <span className='ml-[4px]' key={index}>
                      <StarIcon />
                    </span>
                  ))
                }
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
