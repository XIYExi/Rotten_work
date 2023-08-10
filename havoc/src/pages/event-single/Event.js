import React from "react";
import event from '../../assets/image/event-single/event.png';


export default function EventPage() {

    return(
        <section className='w-full pt-[80px] lg:pt-[120px]'>
            <div className='px-[30px] lg:px-[135px]'>

                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px] mb-[80px]'>
                    <div className='col-span-12 md:col-span-9 border-r-2'>
                        <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>WORKS</h2>
                    </div>
                </div>

                <div className='grid grid-cols-12 mb-[72px]'>
                    <div className='col-span-6'>
                        <img src={event} alt='event-single' loading='lazy'/>
                    </div>
                    <div className='col-span-6 bg-[#F7F7F7] px-[48px] pt-[83px] w-full h-full relative'>
                        <span className='px-4 py-1 bg-[#FFC85A] font-thin'>23 FEb</span>
                        <div className='text-[35px] font-[600] leading-[48px] max-w-[400px] mt-[23px]' style={{letterSpacing:'-0.5px'}}>456 Kingston Height, Bistro St. London, UK</div>
                        <div className='mt-[16px] text-[20px] pb-[24px] mb-[24px] border-b-2'>8 - 10 PM</div>
                        <div className='text-[20px]'>Special guests and entertainment</div>

                        <div className='cursor-pointer absolute bottom-0 right-0 text-center px-10 py-2 bg-black text-white border border-black hover:bg-transparent hover:text-black transition-all duration-300'>Register</div>
                    </div>
                </div>


                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px] mb-[30px]'>
                    <div className='col-span-12 md:col-span-9 border-r-2'>
                        <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>DETAILS</h2>
                    </div>
                </div>

                <div className='max-w-[830px] text-[20px] leading-[40px] font-thin mb-[96px]' style={{letterSpacing:'-0.2px'}}>
                    <div className='mb-[40px]'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                    </div>

                    <div>
                        from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    </div>
                </div>

                <div className='mb-[120px]'>
                    <div className='mb-[26px] text-[35px] font-[600] leading-[48px]' style={{letterSpacing:'-0.5px'}}>Points of discussion</div>
                    <ul className='customListDot font-thin child:mb-[18px]'>
                        <li className='mb-[18px]'>Lorem Ipsum passage</li>
                        <li className='mb-[18px]'>Going through history</li>
                        <li className='mb-[18px]'>Discovered the undoubtable source</li>
                        <li className='mb-[18px]'>This book is a treatise</li>
                        <li className='mb-[18px]'>Professor at Hampden-Sydney</li>
                        <li className='mb-[18px]'>Extremes of Good</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
