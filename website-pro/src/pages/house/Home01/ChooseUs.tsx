/**
 * @Description: 关于页面，是一个会跟随鼠标移动的大图片，why choose us的介绍信息
 * @Author: xiye
 * @date: 2023/7/21
 */
import React, {useEffect, useRef} from "react";
import Parallax from 'parallax-js';
import aboutImage from '@/assets/image/about/about.png';

export default function ChooseUsPage() {

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
            <img data-depth='0.1' src={aboutImage} className='2xl:ml-[-130px] mx-auto lg:max-w-[500px] xl:max-w-[729px]'
                 loading='lazy' width='729' height='633' alt='about image'
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

          </div>
        </div>

      </div>
    </section>
  )
}
