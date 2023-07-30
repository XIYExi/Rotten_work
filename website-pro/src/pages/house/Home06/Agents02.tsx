import React from "react";
import person07 from '@/assets/image/team/person7.png';

export default function Agents02Page() {

  return(
    <section className='pb-[80px] lg:pb-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12 gap-x-[30px] mb-[-30px] items-end'>

          <div className='col-span-12 lg:col-span-5 mb-[30px] text-center sm:px-8 md:px-16'>
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

          <div className='col-span-12 lg:col-span-7 mb-[30px]'>
            <span className="text-secondary text-tiny capitalize inline-block mb-[15px]">Our Agent</span>
            <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-4xl capitalize mb-[15px]">
              Contact our Agent<span className="text-secondary">.</span>
            </h2>
            <p className="max-w-[460px]">
              Huge number of propreties availabe here for buy,sell and Rent. Also you
              find here co-living property,lots opportunity
            </p>

            {/*Form*/}
            <div className='mt-[50px]'>

              <form action="#" className="grid grid-cols-12 gap-x-[20px] gap-y-[30px]">
                <div className="col-span-12 md:col-span-6">
                  <Agents02Input placeholder='First Name'/>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <Agents02Input placeholder='Last Name'/>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <Agents02Input placeholder='Phone number'/>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <Agents02Input placeholder='Email Address'/>
                </div>
                <div className="col-span-12">
                  <textarea className="h-[196px] font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border
                  border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400]
                   focus:border-opacity-60 focus:outline-none focus:drop-shadow-md resize-none"
                            name="textarea" id="textarea" cols={30} rows={10} placeholder="Message" />
                </div>
                <div className="col-span-12">
                  <button type="submit"
                          className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 index-modify
                           before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all
                           leading-none px-[30px] py-[15px] capitalize font-medium text-white block text-[14px] xl:text-[16px] relative
                           after:block after:absolute after:inset-0 after:bg-primary after:rounded-md after:transition-all">
                    Contact us
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


interface Agents02InputProps {
  placeholder: string;
  setData?: (value: string) => {};
}

export const Agents02Input = (props:Agents02InputProps) => (
  <input className="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border
                  border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60
                   focus:outline-none focus:drop-shadow-md "
         type="text" placeholder={props.placeholder} onChange={e => {props.setData && props.setData(e.target.value)}}/>
)
