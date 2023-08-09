import image from "../../assets/image/home/image.png";
import CardComponent from "./component/card";
import img1 from "../../assets/image/home/img1.png";
import img2 from "../../assets/image/home/img2.png";
import img3 from "../../assets/image/home/img3.png";
import img4 from "../../assets/image/home/img4.png";
import React from "react";


export default function LatestPage() {

    return(
        <section className='w-full pt-[80px] lg:pt-[120px]'>
            <div className='px-[30px] lg:px-[135px]'>
                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px]'>
                    <div className='col-span-12 mb-6'>
                        <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>LATEST WORK</h2>
                    </div>
                    <div className='col-span-12 mb-10'>
                        <div className='max-w-[653px] text-[40px] font-[600]'>
                            Here are some exciting new projects we’ve been working on
                        </div>
                    </div>

                    <div className='col-span-12 md:mb-[100px]'>
                        <div className='mx-auto mb-5'>

                            <div className='relative'>
                                <img className='mx-auto'  loading='lazy' src={image} />
                                <div className='flex absolute bottom-0 right-0'>
                                    <div className='w-[76px] py-1 bg-[#FFC85A] text-center'>Prev</div>
                                    <div className='w-[76px] py-1 bg-[#000000] text-white text-center'>Next</div>
                                </div>
                            </div>

                            <div>
                                <h2 className='text-[14px] font-thin mb-2'>Branding . Packaging</h2>
                                <div className='text-[40px] max-w-[650px] font-[600]'>Elderbook The Not Squash Branding</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 md:col-span-6 gap-x-[80px]'>
                        <CardComponent
                            src={img1}
                            title='Bitter Fit Pilates Ring product design and digital work'
                            meta='Branding'
                        />
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <CardComponent
                            src={img2}
                            title='Vrai Corportae Branding and Packaging'
                            meta='Branding'
                        />
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <CardComponent
                            src={img3}
                            title='Buck Naked Soap corporate identity and packaging'
                            meta='Branding'
                        />
                    </div>
                    <div className='col-span-12 md:col-span-6'>
                        <CardComponent
                            src={img4}
                            title='Harmless Coconut Water'
                            meta='Branding'
                        />
                    </div>
                </div>
                <div className='mx-auto text-center w-[200px] px-6 py-2 border border-black hover:bg-black hover:text-white transition-all duration-200'>
                    Button
                </div>
            </div>
        </section>
    )
}
