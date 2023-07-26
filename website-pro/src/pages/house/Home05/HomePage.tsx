import React from "react";
import HomePage04 from "@/pages/house/Home04/HomePage";

export default function HomePage() {

  return(
    <div className='relative'>
      <HomePage04 />

      <div className="latest-prorperties-slider absolute w-full bottom-0 left-0">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="bg-[#F5F9F8] flex flex-wrap items-center p-[15px] rounded-t-[6px]">

                <a href="#" className="block mr-[20px]">
                  <img src="assets/images/latest-properties/properties1.jpg"
                    className="w-full h-full rounded-[6px]" loading="lazy" width="160" height="106"
                    alt="Casel de Philadio."/>
                </a>

                <div className="flex-1">
                  <h3>
                    <a href="#" className="font-recoleta leading-tight text-primary hover:text-secondary">
                      Casel de Philadio.
                    </a>
                  </h3>
                  <p className="font-light text-[12px]">
                    4356 Riverside Drive,Central Town,Augusta,Georgia
                  </p>
                  <span className="font-recoleta text-[14px] text-secondary">Price:$255300</span>
                </div>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  )
}
