import React from "react";
import facebook from '../../assets/image/work-single/facebook.svg';
import ins from '../../assets/image/work-single/ins.svg';
import twitter from '../../assets/image/work-single/twitter.svg';
import img1 from '../../assets/image/work-single/img1.png';
import img2 from '../../assets/image/work-single/img2.png';
import img3 from '../../assets/image/work-single/img3.png';
import img4 from '../../assets/image/work-single/img4.png';
import img5 from '../../assets/image/work-single/img5.png';

const images = [img1, img2, img3, img4, img5];


export default function SinglePage() {


    return(
        <section className='w-full pt-[80px] lg:pt-[120px]'>
            <div className='px-[30px] lg:px-[135px]'>

                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px] mb-6'>
                    <div className='col-span-12 md:col-span-9 border-r-2'>
                        <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>WORKS</h2>
                        <div className='font-[600] text-[42px] mb-[16px]'>Harmless Coconut Water</div>
                        <div className='hidden md:block font-thin text-[18px] max-w-[750px] leading-[33px] text-[#7B7B7B]'>
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot the pain and trouble.
                        </div>
                    </div>

                    <div className='col-span-12 md:col-span-3'>
                        <div className='mb-[33px] text-[16px]'>
                            <span className='font-[500]'>Date:</span>
                            <span className='font-thin ml-[8px]'>November 2012</span>
                        </div>

                        <div className='mb-[33px] text-[16px]'>
                            <span className='font-[500]'>Client:</span>
                            <span className='font-thin ml-[8px]'>November 2012</span>
                        </div>

                        <div className='mb-[33px] text-[16px]'>
                            <span className='font-[500]'>Category:</span>
                            <span className='font-thin ml-[8px]'>Branding</span>
                        </div>

                        <div className='flex flex-wrap'>
                            <img src={facebook} alt='facebook' className='mr-[32px] cursor-pointer' width={32} height={32} loading='lazy'/>
                            <img src={ins} alt='ins' className='mr-[32px] cursor-pointer' width={32} height={32} loading='lazy'/>
                            <img src={twitter} alt='twitter' className='cursor-pointer' width={32} height={32} loading='lazy'/>
                        </div>
                    </div>



                </div>


                <div className='pt-[80px]'>
                    {
                        images.map((item ,index) => (
                            <div key={index} className='mb-[128px]'>
                                <img src={item} alt={`image-${index+1}`} className='mb-[32px] p-[10px] w-full h-auto' loading={'lazy'}/>
                                <div className='max-w-[750px] text-[18px] font-thin text-[#7B7B7B] leading-[33px]'>
                                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='flex text-center items-center justify-center text-center mb-[160px]'>
                    <div className='px-12 py-2 mr-[73px] border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>
                        <span>Previous</span>
                    </div>
                    <div className='px-8 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>
                        <span>Next</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
