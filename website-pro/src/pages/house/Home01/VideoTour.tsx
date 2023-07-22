/**
 * @Description: Video tour页面
 * @Author: xiye
 * @date: 2023/7/22
 */
import React, {useEffect, useRef} from "react";
import {ReactComponent as VideoTourSvg} from '@/assets/image/icon/tour.svg';
import star from '@/assets/image/video/star.png';
import shape from '@/assets/image/video/shape.png';
import video from '@/assets/image/video/video.png';
import Parallax from 'parallax-js';

export default function VideoTourPage() {

  const videoRef = useRef(null);
  useEffect(() => {
    new Parallax(videoRef.current);
  }, [videoRef])

  return(
    <section className='my-container mx-auto'>
      <div className='grid grid-cols-12'>
        {/*信息*/}
        <div className='col-span-12 lg:col-span-6 relative'>
          <div className='mb-5 lg:mb-0 max-w-[450px]'>
            <span className='text-secondary text-tiny inline-block mb-2'>Take a video tour</span>
            <h2 className='font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-4xl mb-[10px]'>
              Watch the video for taking your decision easily<span className="text-secondary">.</span>
            </h2>
            <p>
              Huge number of propreties availabe here for buy,sell and Rent. Also you find here
              co-living property so lots opportunity you have to choose here and enjoy huge discount.
            </p>
            <a href='#' className='flex flex-wrap items-center text-secondary text-tiny mt-[20px]'>
              View all
              <VideoTourSvg />
            </a>
            <img className='absolute right-[5px]' style={{bottom:'-18px'}} src={star} loading='lazy' width='65' height='73' alt='image'/>
          </div>
        </div>

        {/*视频*/}
        <div className='col-span-12 lg:col-span-6 text-center'>
          <div className='relative rounded-[24px] pt-[45px] z-10 inline-block'>
            <div className='absolute top-0 right-0 bg-primary w-[90%] h-[90%] rounded-[24px]' style={{zIndex:'-2'}}>
              <img src={shape} className='absolute top-[18px]'
                   loading='lazy' width='68' height='56' alt='shape image' style={{left:'-17px', zIndex:'-1'}}/>
              <img src={shape}
                className="absolute bottom-[15px] right-[15px]" loading="lazy" width="68"
                height="56" alt="shape image" style={{zIndex:'-1'}}/>
            </div>

            <div className='relative modify-relative-position'>
              <div ref={videoRef} data-relative-input={true}>
                <img data-depth={'0.1'} src={video} className='rounded-[24px]' loading='lazy' width='507' height='349' alt='video image'/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
