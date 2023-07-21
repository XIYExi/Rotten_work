/**
 * @Description: 最佳推荐
 * @Author: xiye
 * @date: 2023/7/21
 */
import React, {Fragment} from "react";
import {ReactComponent as ExploreSvg} from '@/assets/image/icon/explore.svg';
import Properties1 from '@/assets/image/properties/properties1.jpg';
import Properties2 from '@/assets/image/properties/properties2.jpg';
import Properties3 from '@/assets/image/properties/properties3.jpg';
import cameraImage from '@/assets/image/icon/camera.png';
import videoImage from '@/assets/image/icon/video.png';

export default function BestChoicePage() {

  return (
    <section className='py-[80px] lg:py-[120px]'>

      <div className='my-container mx-auto'>
        {/*标题*/}
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            <span className='text-secondary text-tiny inline-block mb-2'>Best Choice</span>
          </div>
          <div className='col-span-12'>
            <div className='flex flex-col sm:flex-row items-start justify-between mb-[50px]'>
              <div>
                <h2 className='font-recoleta text-primary text-[24px] sm:text-[30px] xl:text-4xl capitalize'>
                  Popular Properties<span className="text-secondary">.</span>
                </h2>
              </div>
              <div>
                <a href='#' className='flex flex-wrap items-center text-secondary text-tiny'>
                  Explore all
                  <ExploreSvg />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*展示卡片*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
          <Card
            src={Properties1}
            title='Orchid Casel de Paradise.'
            address='18B Central Street,San Francisco'
            date='25 November,2021'
            price={255300}
            meta='1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage'/>

          <Card
            src={Properties2}
            title='Ruposibangla de parlosia.'
            address='18B Central Street,San Francisco'
            date='25 November,2021'
            price={255300}
            meta='1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage'/>

          <Card
            src={Properties3}
            title='Sinomen Studio Palace.'
            address='18B Central Street,San Francisco'
            date='25 November,2021'
            price={255300}
            meta='1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage'/>
        </div>

      </div>

    </section>
  )
}

interface CardProps {
  src:string;
  title:string;
  address: string;
  date: string;
  price: number;
  meta:string;
}

const Card = (props: CardProps) => {

  const {
    src,
    title,
    address,
    date,
    price,
    meta
  } = props;

  return(
    <Fragment>

      <div className='overflow-hidden rounded-md drop-shadow-md bg-[#FFFDFC] text-center transition-all duration-300 translate-y-0.5 translate-y-modify-10'>
        <div className='relative'>

          {/*图片*/}
          <a href='#' className='block'>
            <img className='w-full h-full' src={src} alt='Orchid Casel de Paradise.' width='370' height='266' loading='lazy'/>
          </a>

          {/*标签 badge 几个照片 几个影像*/}
          <div className='flex flex-wrap flex-col absolute top-5 right-5'>
            <button className='flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white mb-[5px] text-xs'>
              <img className='mr-1' src={cameraImage} loading='lazy' width='13' height='10' alt='camera icon'/>07
            </button>

            <button className='flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white text-xs'>
              <img className='mr-1' src={videoImage} loading='lazy' width='14' height='10' alt='video icon' />08
            </button>
          </div>

          {/*房屋标签*/}
          <span className="absolute bottom-5 left-5 bg-[#FFFDFC] p-[5px] rounded-[2px] text-secondary leading-none text-[14px] font-normal capitalize">
            for Sale
          </span>
        </div>

        {/*卡片信息*/}
        <div className='p-[20px]'>
          <h3 className='mb-1'>
            <a href="#" className="font-recoleta leading-tight text-[24px] xl:text-[28px] text-primary">
              {title}</a>
          </h3>
          <h4 className='mb-1'>
            <a href="#" className="font-light text-tiny text-secondary underline">
              {address}
            </a>
          </h4>
          <span className="font-light text-sm mb-1">Added:{date}</span>
          <div className="my-5 before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-full before:z-[-1] before:bg-[#E0E0E0] relative">
            <span className="font-recoleta text-base text-primary px-[15px] bg-white">Price:${price}</span>
          </div>
          <p className="font-light mt-1">{meta}</p>
        </div>
      </div>
    </Fragment>
  )
}
