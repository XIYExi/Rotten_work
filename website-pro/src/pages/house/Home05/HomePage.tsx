import React, {useEffect, useState} from "react";
import HomePage04 from "@/pages/house/Home04/HomePage";
import house01 from '@/assets/image/latest-properties/properties1.jpg';
import house02 from '@/assets/image/latest-properties/properties2.jpg';
import Swiper from "swiper";


export default function HomePage() {

  const [data, setData] = useState<CardSwiperItemProps[]>([]);
  useEffect(() => {
    (async () => {
      const {default: graph} = await import('@/assets/data/HouseCardData');
      setData(graph.Cards);
    })()
  }, [])

  useEffect(() => {
    new Swiper(".latest-properties-slider .swiper",
      {
        loop: true,
        spaceBetween: 6,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        lazy: true,
        fadeEffect: {
          crossFade: true,
        },
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
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },

          1920: {
            slidesPerView: 5,
          },
        },
      })
  }, [])

  return(
    <div className='relative'>
      <HomePage04 />

      <div className="latest-properties-slider absolute w-full bottom-0 left-0">
        <div className="swiper">
          <div className="swiper-wrapper">

            {
              data.map((item:CardSwiperItemProps, index: number) => (
                <CardSwiperItem
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  src={item.src}
                  key={index}
                />
              ))
            }

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  )
}

interface CardSwiperItemProps {
  title: string;
  desc: string;
  price: number;
  src: string;
}

const CardSwiperItem = (props: CardSwiperItemProps) => {

  const {
    title,
    desc,
    price,
    src
  } = props;

  const renderImage = (type:string) => {
    switch (type) {
      case '1':
        return house01;
      case '2':
        return house02;
      default:
        return house01;
    }
  }

  return (
    <div className="swiper-slide">
      <div className="bg-[#F5F9F8] flex flex-wrap items-center p-[15px] rounded-t-[6px]">

        <a href="#" className="block mr-[20px]">
          <img src={renderImage(src)}
               className="w-full h-full rounded-[6px]" loading="lazy" width="160" height="106"
               alt="Casel de Philadio."/>
        </a>

        <div className="flex-1">
          <h3>
            <a href="#" className="font-recoleta leading-tight text-primary hover:text-secondary">
              {title}
            </a>
          </h3>
          <p className="font-light text-[12px]">
            {desc}
          </p>
          <span className="font-recoleta text-[14px] text-secondary">Price:${price}</span>
        </div>
      </div>
    </div>
  )
}
