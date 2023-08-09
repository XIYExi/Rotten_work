import React from "react";
import arrow from '../../assets/image/home/arrow.svg';

export default function UpcomingPage() {

    return(
        <section className='w-full pt-[80px] lg:pt-[120px] bg-[#F7F7F7]'>
            <div className='px-[30px] lg:px-[135px]'>
                <div className='flex'>
                    <div className='font-thin mt-[40px] mr-[20px] hidden lg:block'>
                        ——————————
                    </div>

                    <div className='w-full'>
                        <div className='text-[80px] font-[600] leading-[100px] max-w-[585px]  mb-[53px]' style={{letterSpacing: '-1px'}}>
                            Upcoming events
                        </div>

                        <div className='mb-[64px]'>
                            <div className='mb-6'>
                                <span className='bg-[#FFC85A] py-1 px-5 text-[20px] font-[500]'>23 FEB</span>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <div className='text-[28px] font-[600] leading-[42px]' style={{letterSpacing: '-0.4px'}}>
                                    Summer Event
                                </div>
                                <img src={arrow} loading='lazy' width={44} height={13} alt='arrow'/>
                            </div>
                            <div className='font-thin text-[20px] pb-[40px] customBorder'>
                                A fresh new start for 2021
                            </div>
                        </div>

                        <div className='mb-[64px]'>
                            <div className='mb-6'>
                                <span className='bg-[#FFC85A] py-1 px-5 text-[20px] font-[500]'>23 FEB</span>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <div className='text-[28px] font-[600] leading-[42px]' style={{letterSpacing: '-0.4px'}}>
                                    How UI/UX is empowering industries
                                </div>
                                <img src={arrow} loading='lazy' width={44} height={13} alt='arrow'/>
                            </div>
                            <div className='font-thin text-[20px] pb-[40px] customBorder'>
                                A deep dive into our methods
                            </div>
                        </div>

                        <div className='mb-[200px]'>
                            <div className='mb-6'>
                                <span className='bg-[#FFC85A] py-1 px-5 text-[20px] font-[500]'>23 FEB</span>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <div className='text-[28px] font-[600] leading-[42px]' style={{letterSpacing: '-0.4px'}}>
                                    The importance of UX
                                </div>
                                <img src={arrow} loading='lazy' width={44} height={13} alt='arrow'/>
                            </div>
                            <div className='font-thin text-[20px] pb-[40px] customBorder'>
                                How user experience is changing
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
