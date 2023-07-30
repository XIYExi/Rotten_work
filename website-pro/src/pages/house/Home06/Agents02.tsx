import React from "react";
import person07 from '@/assets/image/team/person7.png';

export default function Agents02Page() {

  return(
    <section className='pb-[80px] lg:pb-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12 gap-x-[30px] mb-[-30px] items-end'>

          <div className='col-span-12 lg:col-span-5 mb-[30px] text-center'>
            <div className="relative rounded-tr-[6px] rounded-tl-[6px]">
              <a href="#" className="block relative before:absolute before:content-[''] before:inset-x-0 before:bottom-0
              before:bg-[#ECFAF7] before:w-full custom-before-h custom-before-zIndex
              before:rounded-tr-[6px] before:rounded-tl-[6px]">
                <img src={person07} className="w-auto h-auto block mx-auto" loading="lazy" alt="Albert S. Smith" width="301" height="474"/>
              </a>
            </div>
            <div className="bg-[#FFFDFC] drop-shadow-md rounded-br-[6px] rounded-bl-[6px] px-[15px] py-[20px] border-b-[6px] border-secondary">
              <h3>
                <a href="#" className="font-recoleta font-normal text-[18px] lg:text-[28px] leading-none text-primary transition-all hover:text-secondary">
                  Amelia Margaret</a>
              </h3>
              <p className="font-normal text-[14px] leading-none capitalize mt-[5px] border-b border-[#B6C9C4] pb-[10px]">
                Real Estate Agent
              </p>
              <a href="" className="text-primary transition-all hover:text-secondary text-[14px]">
                Phone+13547 658 412
              </a>
            </div>
          </div>

          <div className='col-span-12 lg:col-span-7 mb-[30px]'></div>

        </div>
      </div>
    </section>
  )
}
