import React, {useEffect, useRef} from 'react';
import check from '@/assets/image/about/check.png';
import about6 from '@/assets/image/about/about6.png';
import shape2 from "@/assets/image/hero/shape2.svg";
import Parallax from "parallax-js";

export default function Materials02Page() {

  const shape2Ref = useRef(null);
  useEffect(() => {
    new Parallax(shape2Ref.current);
  }, [shape2Ref.current])

  return(
    <section className='pt-[80px] lg:pt-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12 gap-x-[30px]'>
          <div className='col-span-12 lg:col-span-7 mb-[30px]'>
            <div className='relative'>
              <img src={about6} width="630" height="513" alt="image"/>
              <div ref={shape2Ref} className='absolute sm:bottom-[80px] xl:bottom-[100px] left-[30px] hidden sm:block'>
                <img data-depth="0.2" src={shape2} width="98" height="74" alt="icon"/>
              </div>

            </div>
          </div>

          <div className='col-span-12 lg:col-span-5 lg:pl-[30px] mb-[30px]'>
            <span className='text-tiny text-secondary inline-block mb-2'>Materials</span>
            <h2 className='text-primary text-[24px] sm:text-[30px] xl:text-4xl mb-3'>
              Property Amenities<span className='text-secondary'>.</span>
            </h2>
            <p className='lg:max-w-[340px] font-thin'>
              Amenities of property is very number of propreties availabe here for buy,sell and Rent you benifits
            </p>

            <div className='relative'>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-[40px] mt-[40px]'>
                {
                  ['7 Bedrooms', '5 Bathrooms', 'Air Conditioning', 'CC Camera',
                  '3 Garaze', 'Cable TV', '10 Nearby Restaurant', '6 Nearby Schools',
                  'Gym for all', 'Dishwasher', '5 Balcony', 'Swimming Pool',
                    'Internet', 'Security System'].map((item:string, index:number) => (
                      <MaterialItem
                        key={index}
                        src={check}
                        title={item}
                      />
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const MaterialItem = (props: {src:string, title:string}) => {

  return(
    <li className="flex flex-wrap items-center mb-[25px]">
      <img className="mr-[15px]" src={props.src} loading="lazy" alt="icon" width="20" height="20"/>
      <span>{props.title}</span>
    </li>
  )
}
