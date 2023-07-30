/**
 * @Description: Our Gallery Page
 * @Author: xiye
 * @date: 2023/7/30
 */
import React from "react";
import {ReactComponent as TourSvg} from "@/assets/image/icon/tour.svg";
import gallery01 from '@/assets/image/gallery/01.png';
import gallery02 from '@/assets/image/gallery/02.png';
import gallery03 from '@/assets/image/gallery/03.png';
import gallery04 from '@/assets/image/gallery/04.png';
import gallery05 from '@/assets/image/gallery/05.png';
import gallery06 from '@/assets/image/gallery/06.png';

export default function GalleryPage() {


  return(
    <section className='pt-[80px] pb-[120px] lg:py-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12'>
            <span className='text-secondary text-tiny inline-block mb-2'>
              Our Gallery
            </span>
          </div>
          <div className='col-span-12'>

            <div className='flex flex-col sm:flex-row items-start justify-between mb-[50px]'>
              <div>
                <h2 className='text-primary text-[24px] sm:text-[30px] xl:text-4xl font-recoleta capitalize'>
                  Visit our Photo Gallery<span className="text-secondary">.</span>
                </h2>
              </div>
              <div>
                <a href='#' className='flex flex-wrap items-center text-secondary text-tiny'>
                  Explore all
                  <TourSvg />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-x-[15px] lg:gap-x-[30px]'>
          <div className='mb-[30px] col-span-12 sm:col-span-4'>
            <img className='object-cover w-full h-full rounded-[8px] modify-scale-hover'
              src={gallery01} alt="gallery image" loading="lazy" width="370" height="281"/>
          </div>
          <div className='mb-[30px] col-span-12 sm:col-span-5'>
            <img className='object-cover w-full h-full rounded-[8px] modify-scale-hover'
                 src={gallery02} alt="gallery image" loading="lazy" width="370" height="281"/>
          </div>
          <div className='mb-[30px] col-span-12 sm:col-span-3'>
            <img className='object-cover w-full h-full rounded-[8px] modify-scale-hover'
                 src={gallery03} alt="gallery image" loading="lazy" width="370" height="281"/>
          </div>
          <div className='mb-[30px] col-span-12 sm:col-span-4'>
            <img className='object-cover w-full h-full rounded-[8px] modify-scale-hover'
                 src={gallery04} alt="gallery image" loading="lazy" width="370" height="281"/>
          </div>
          <div className='mb-[30px] col-span-12 sm:col-span-3'>
            <img className='object-cover w-full h-full rounded-[8px] modify-scale-hover'
                 src={gallery05} alt="gallery image" loading="lazy" width="370" height="281"/>
          </div>
          <div className='mb-[30px] col-span-12 sm:col-span-5'>
            <img className='object-cover w-full h-full rounded-[8px] modify-scale-hover'
                 src={gallery06} alt="gallery image" loading="lazy" width="370" height="281"/>
          </div>

        </div>
      </div>
    </section>
  )
}
