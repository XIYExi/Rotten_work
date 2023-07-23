/**
 * @Description: 动效卡片页面 客户感言页面
 * @Author: xiye
 * @date: 2023/7/23
 */
import React, {useEffect, useState} from "react";
import Person1 from '@/assets/image/testimonial/person1.png';
import Person2 from '@/assets/image/testimonial/person3.png';
import shape from '@/assets/image/testimonial/shape.png';
import {ReactComponent as TestIcon} from "@/assets/image/testimonial/icon.svg";
import {ReactComponent as StarIcon} from "@/assets/image/testimonial/star.svg";
import Swiper from "swiper";

export default function TestimonialPage() {

  const [data, setData] = useState<TestimonialSwiperItemProps[]>([]);
  useEffect(() => {
    (async () => {
      const {default: Graph} = await import('@/assets/data/TestimonialData');
      setData(Graph.TestimonialData);
    })()
  }, [])

  useEffect(() => {
    new Swiper('.swiperx', {
      loop: false,
      breakpoints: {
        320: {  //当屏幕宽度大于等于320
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {  //当屏幕宽度大于等于768
          slidesPerView: 2,
          spaceBetween: 20
        },
        1280: {  //当屏幕宽度大于等于1280
          slidesPerView: 3,
          spaceBetween: 30
        }
      },
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
    })
  }, [])


  return (
    <section className='md:pt-[50px] bg-no-repeat bg-white relative z-10 custom-testimonial-bg'>
      <div className='my-container mx-auto'>

        <div className='grid grid-cols-12 items-center gap-x-[30px] mb-[30px]'>
          <div className='col-span-12 lg:col-span-7 mb-[30px]'>
            <div className='swiperx p-[30px]' style={{margin:'-30px'}}>
              <div className='swiper-wrapper'>
                {
                  data.map((item:TestimonialSwiperItemProps, index: number) => (
                    <TestimonialSwiperItem src={item.src} desc={item.desc} title={item.title} key={index}/>
                  ))
                }
              </div>
            </div>

          </div>

          <div className="col-span-12 lg:col-span-5 mb-[30px] order-first lg:order-last">
            <div className="relative 2xl:ml-[55px] max-w-[385px]"><span
              className="text-secondary text-tiny capitalize inline-block mb-[10px]">Testimonial</span>
              <h2
                className="font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-xl mb-[20px] max-w-[375px]">
                Reviews from our happy Clients<span className="text-secondary">.</span></h2>
              <p>Huge number of propreties availabe here for buy,sell and Rent. Also you find here
                co-living property so lots opportunity you have to choose here and enjoy. </p>
              <div className="testimonial-pagination hidden sm:block">
                <div
                  className="swiper-button-prev w-[36px] h-[36px] rounded-full bg-primary  text-white hover:bg-secondary top-auto bottom-[-65px] left-0">
                </div>
                <div
                  className="swiper-button-next w-[36px] h-[36px] rounded-full bg-primary  text-white hover:bg-secondary top-auto bottom-[-65px] left-[56px]">
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

interface TestimonialSwiperItemProps{
  src: string;
  desc: string;
  title: string;
}

const TestimonialSwiperItem = (props: TestimonialSwiperItemProps) => {

  const {src, desc, title} = props;

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


  return (
    <div className='swiper-slide' style={{width:'100%'}}>
      <div className='relative text-right'>

        <div className='inline-block relative before:absolute before:content-[""] before:inset-x-0 before:bottom-0 before:bg-primary
        text-primary before:w-full before:h-[calc(100%_-_50px)] custom-before-zIndex before:rounded-[16px]'>
          <img src={renderImage(src)} className='w-auto h-auto block mx-auto relative z-10' loading='lazy' width='300' height='380' alt='Oliver Stephen'/>
          <img src={shape} className='absolute right-[20px] bottom-0 z-[1]' width='130' height='132' loading='lazy' alt='shape'/>
        </div>

        <div className='review-shadow-card text-left rounded-[14px] pl-[20px] sm:pl-[30px] pr-[45px] pt-[30px] sm:pt-[45px] pb-[20px] sm:pb-[30px]'>

          {/*分号icon*/}
          <span className='block absolute right-[20px] top-[30px]'>
            <TestIcon />
          </span>

          <p className="text-primary">{desc}</p>

          <ul>
            <li className="flex flex-wrap items-center justify-between mt-4">
              <span className="font-recoleta text-[18px] leading-none capitalize text-secondary">{title}</span>
              <span className="flex flex-wrap">
                <span className="ml-[4px]">

                </span>
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
