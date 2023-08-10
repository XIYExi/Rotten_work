import map from "../../assets/image/home/map.svg";
import React from "react";

export default function MapPage(){

    return(
        <section className='w-full pt-[80px] lg:pt-[120px]'>
            <div className='relative'>
                <div className='absolute top-0 left-0 right-0' style={{zIndex: '-20'}}>
                    <img src={map} loading='lazy' height={677} width={1368} className='w-[1368px] h-[677px] mx-auto'/>
                </div>

                <div className='px-[30px] lg:px-[135px]'>
                    <div className='flex'>
                        <div className='font-thin mt-[40px] mr-[20px] hidden lg:block'>
                            ——————————
                        </div>

                        <div className='w-full'>
                            <div className='text-[35px] md:text-[80px] font-[600] leading-[38px] md:leading-[100px] max-w-[585px]' style={{letterSpacing: '-1px'}}>
                                Growing all around the globe.
                            </div>

                            <div className='mt-12 grid grid-cols-3 gap-x-[50px] xl:gap-x-[80px]'>
                                <div className='border-r-2'>
                                    <div className='text-[42px] md:text-[120px] font-thin'>54</div>
                                    <div className='leading-[20px] md:pl-[30px]'>Counties</div>
                                </div>
                                <div className='border-r-2'>
                                    <div className='text-[42px] md:text-[120px] font-thin'>136</div>
                                    <div className='leading-[20px] md:pl-[60px]'>Clients</div>
                                </div>
                                <div>
                                    <div className='text-[42px] md:text-[120px] font-thin'>12</div>
                                    <div className='leading-[20px] md:pl-[30px]'>Offices</div>
                                </div>
                            </div>

                            <div className='mt-12 flex'>
                                <div className='px-3 bg-[#FFC85A]'>Lasted</div>
                                <div className='ml-[16px]'>Nigeria office is now operational.</div>
                            </div>
                            <div className='mt-12 '>
                                <span className='relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[0.5px] after:w-full after:bg-black'>See all branches</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
