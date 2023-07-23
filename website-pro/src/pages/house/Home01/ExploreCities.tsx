/**
 * @Description: Explore Cities页面
 * @Author: xiye
 * @date: 2023/7/23
 */
import React, {Fragment, useEffect, useState} from "react";
import Swiper from "swiper";
import 'swiper/swiper.css';
import Image1 from '@/assets/image/cities/cities1.png';
import Image2 from '@/assets/image/cities/cities2.png';
import Image3 from '@/assets/image/cities/cities3.png';
import Image4 from '@/assets/image/cities/cities4.png';


export default function ExploreCitiesPage() {

  const [data, setData] = useState<CityCardSwiperItemProps[]>([]);
  useEffect(() => {

    (async () => {
      const {default:Graph} = await import('@/assets/data/ExploreCitiesData');
      setData(Graph.Cities);
    })()

  }, [])


  useEffect(() => {
    new Swiper('.swiper', {
      loop: false,
      initialSlide: 2,
      slidesPerView: 3,
      centeredSlides: true,
      grabCursor: true,
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


      //小圆点分页
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletElement : 'li',
        dynamicBullets: true,
      },
      //autoplay: true,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
    })
  }, [])

  const renderImage = (type: string) => {
    switch (type){
      case '1':
        return Image1;
      case '2':
        return Image2;
      case '3':
        return Image3;
      case '4':
        return Image4;
      default:
        return Image1;
    }
  }

  return (
    <section className='py-[80px] lg:py-[120px] pt-[80px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12'>

          <div className='col-span-12 items-center justify-between text-center'>
            <span className='text-secondary inline-block text-tiny  mb-2'>
              Explore Cities
            </span>
          </div>

          <div className='col-span-12 items-center justify-between text-center mb-[30px] lg:mb-[60px]'>
            <h2 className='font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-4xl capitalize mb-3'>Find Your Neighborhood<span className='text-secondary'>.</span></h2>
          </div>

          <div className='col-span-12'>
            <div className='px-[30px] py-[60px]' style={{margin:'0 -30px', padding: '-60px 0'}}>
              <div className='swiper'>
                <div className='swiper-wrapper'>
                  {
                    data.map((item:CityCardSwiperItemProps, index:number) => (
                      <CityCardSwiperItem
                        key={index}
                        title={item.title}
                        src={renderImage(item.src)}
                        href={item.href}
                        desc={item.desc}
                      />
                    ))
                  }
                </div>
                <div className="swiper-pagination">

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

interface CityCardSwiperItemProps {
  title: string;
  src: string;
  href: string;
  desc: string;
}

const CityCardSwiperItem = (props: CityCardSwiperItemProps) => {

  const {
    title,
    src,
    href,
    desc,
  } = props;

  return (
    <Fragment>
      <div className='swiper-slide flex text-center items-center justify-center'>
        <div className='relative group w-[270px] '>

          <a href={href} className='block'>
            <img src={src} className='block mx-auto rounded-tr-[6px] rounded-tl-[6px]'
                 loading='lazy' width='270' height='290' alt='New York'/>
            <div className='cities-shadow bg-[#FFFDFC] rounded-bl-[6px] rounded-br-[6px] px-[15px] py-[20px]'>
              <span className='font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all'>
                {title}
              </span>
              <p className='font-light text-tiny capitalize text-secondary group-hover:text-primary transition-all'>
                {desc}
              </p>
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  )
}

