import React, {useEffect, useRef} from "react";
import about3 from '@/assets/image/about/about3.png';
import dotWithLine from '@/assets/image/about/dot-with-line.png';
import star from '@/assets/image/about/star.png';
import Parallax from "parallax-js";
import dollar from '@/assets/image/icon/doller.png';
import location from '@/assets/image/icon/location.png';
import trusted from '@/assets/image/icon/trusted.png';



export default function ChooseUs02Page() {

  const dotRef = useRef(null);
  const starRef = useRef(null);
  const aboutRef = useRef(null);
  useEffect(()=>{
    new Parallax(dotRef.current);
    new Parallax(starRef.current);
    new Parallax(aboutRef.current);
  }, [dotRef.current, starRef.current, aboutRef.current])


  return(
    <section className='py-[80px] lg:py-[120px]'>
      <div className='my-container mx-auto'>
        <div className='grid grid-cols-12 gap-x-[30px] mb-[-30px]'>
          <div className='col-span-12 lg:col-span-6 mb-[30px] relative'>
            <div ref={dotRef} className="absolute top-0 right-[5%] xl:right-[10%]" data-relative-input="true">
              <img data-depth="0.2" src={dotWithLine} width="48" height="158"
                   alt="image"/>
            </div>
            <div ref={starRef} className="absolute bottom-[10%] lg:bottom-[25%] xl:bottom-[15%] left-[10%]"
                 data-relative-input="true">
              <img data-depth="0.3" src={star}
                   width="85" height="64" loading="lazy" alt="image"/>
            </div>
            <div ref={aboutRef} data-relative-input="true">
              <img className="block mx-auto" data-depth="0.1"
                   src={about3} loading="lazy" width="520" height="467"
                   alt="about Image"/>
            </div>
          </div>

          <div className='col-span-12 lg:col-span-6 mb-[30px]'>
            <div className='text-secondary text-tiny mb-2 inline-block'>Why Choose us</div>
            <h2 className='font-recoleta xl:text-4xl text-[24px] sm:text-[30px] text-primary leading-[1.277] max-w-[500px] mb-3'>
              We Provide Right Choice of Properties that You need<span className='text-secondary'>.</span>
            </h2>
            <p className="max-w-[480px]">
              Huge number of propreties availabe here for buy,sell and Rent. Also you
              find here co-living property,lots opportunity you have to choose here and enjoy huge
              discount you can get.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[20px] mb-[-30px] mt-[45px]'>
              <Choose02CardItem img={dollar} title={'Budget Friendly'} desc={'Properties are most budget friendly.'}/>
              <Choose02CardItem img={location} title={'Prime Location'} desc={'Properties are most budget friendly.'}/>
              <Choose02CardItem img={trusted} title={'Trusted'} desc={'Properties are most budget friendly.'}/>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

interface Choose02CardItemProps {
  img:string;
  title: string;
  desc:string;
}


const Choose02CardItem = (props:Choose02CardItemProps) => {

  return(
    <div className="mb-[30px] lg:mb-10 border border-[#FFF6F0] p-[20px] rounded-[8px] transition-all hover:drop-shadow-xl hover:bg-[#F5F9F8]">
      <img src={props.img} className="max-w-[38px] self-start mb-[15px]"
           loading="lazy" width="50" height="50" alt="about Image" />
      <div>
        <h3 className="font-recoleta text-primary text-base capitalize mb-[5px]">
          {props.title}
        </h3>
        <p className="text-[14px]">{props.desc}</p>
      </div>
    </div>
  )
}
