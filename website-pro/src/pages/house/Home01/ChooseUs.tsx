/**
 * @Description: 关于页面，是一个会跟随鼠标移动的大图片，why choose us的介绍信息
 * @Author: xiye
 * @date: 2023/7/21
 */
import React, {useEffect, useRef} from "react";
import Parallax from 'parallax-js';
import doller from '@/assets/image/icon/doller.png';
import location from '@/assets/image/icon/location.png';
import trusted from '@/assets/image/icon/trusted.png';

interface ChooseUsPageProps {
  img: string;
  imgWidth?:number;
  imgHeight?:number;
}

export default function ChooseUsPage(props:ChooseUsPageProps) {

  const {
    imgWidth = 729,
    imgHeight = 633
  } = props;

  const ImageRef = useRef(null);
  useEffect(()=>{
    new Parallax(ImageRef.current);
  }, [ImageRef.current])

  return (
    <section className='my-container mx-auto'>
      <div className='grid grid-cols-12'>

        {/*会动的老登的照片*/}
        <div className='col-span-12 lg:col-span-7'>
          <div ref={ImageRef} data-relative-input='true'>
            <img data-depth='0.1' src={props.img} className=' mx-auto lg:max-w-[500px] xl:max-w-[729px]'
                 loading='lazy' width={imgWidth} height={imgHeight} alt='about image'
            />
          </div>
        </div>

        {/*信息*/}
        <div className='col-span-12 lg:col-span-5'>
          <span className='text-secondary text-tiny inline-block mb-2'>Why Choose us</span>
          <h2 className='font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-4xl capitalize mb-3'>
            We Provide Right Choice of Properties that You need<span className="text-secondary">.</span>
          </h2>
          <div className='font-recoleta max-w-[448px] mt-[12px] text-tiny text-justify font-thin'>
            Huge number of propreties availabe here for buy,sell and Rent. Also you
            find here co-living property so lots opportunity you have to choose here and enjoy huge
            discount.
          </div>
          <div className='mt-[45px]' style={{marginBottom:'-10px'}}>
            <div className='flex flex-wrap mb-5 lg:mb-10'>
              <img src={doller} className='self-start mr-5' loading='lazy' width='50' height='50' alt='about Image'/>
              <div className='flex-1'>
                <h3 className='font-recoleta text-primary text-[22px] xl:text-lg capitalize mb-2'>Budget Friendly</h3>
                <p className='max-w-[340px] font-thin'>Properties are most budget friendly so you have opportunity to find the best one</p>
              </div>
            </div>

            <div className='flex flex-wrap mb-5 lg:mb-10'>
              <img src={location} className='self-start mr-5' loading='lazy' width='50' height='50' alt='about Image'/>
              <div className='flex-1'>
                <h3 className='font-recoleta text-primary text-[22px] xl:text-lg capitalize mb-2'>
                  Prime Location
                </h3>
                <p className="max-w-[340px] font-thin">Properties are most budget friendly so you have opportunity
                  to find the best one</p>
              </div>
            </div>

            <div className="flex flex-wrap mb-5 lg:mb-10">
              <img src={trusted} className="self-start mr-5" loading="lazy" width="50"
                   height="50" alt="about Image" />
              <div className="flex-1">
                <h3 className="font-recoleta text-primary text-[22px] xl:text-lg capitalize mb-2">
                  Trusted by Thousand</h3>
                <p className="max-w-[340px] font-thin">
                  Properties are most budget friendly so you have opportunity to find the best one</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
