import React from "react";
import location from '../../../assets/image/events-list/location.svg';

export default function EventCardComponent(props) {

    const {src, title, desc, date} = props;

    return(
        <div className='grid grid-cols-12 mb-[72px]'>
            <div className='col-span-6'>
                <img src={src} alt='event-single' height={520} loading='lazy'/>
            </div>
            <div className='col-span-6 bg-[#F7F7F7] px-[48px] pt-[83px] w-full h-full relative'>
                <span className='px-4 py-1 bg-[#FFC85A] font-thin'>{date}</span>
                <div className='mt-[16px] text-[35px] font-[600] leading-[48px] max-w-[450px] h-[250px] pb-[24px] mb-[24px] border-b-2'
                     style={{letterSpacing:'-0.5px'}}>{title}</div>
                <div className='text-[18px] font-thin flex'>
                    <img className='mr-[8px]' src={location} width={24} height={24} loading='lazy' alt='location'/>
                    <div>{desc}</div>
                </div>
                <div className='cursor-pointer absolute bottom-0 right-0 text-center px-10 py-2 bg-black text-white border border-black hover:bg-transparent hover:text-black transition-all duration-300'>Read</div>
            </div>
        </div>
    )
}
