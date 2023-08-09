import emailSvg from "../../assets/image/home/email.svg";
import React from "react";


export default function HomePage(){

    return(
        <section className="w-full h-screen bg-[#FFC85A]">
            <div className="px-[30px] lg:px-[135px] mx-auto xxl:pt-52 pt-32">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-6 xl:col-span-5 col-span-12 border-b-2 md:border-r-2 border-slate-400">
                        <h2 className='font-bold text-[50px] lg:text-[60px] xl:text-[104px] max-w-[450px]'>
                            <div className="">Building.</div>
                            <div className="mt-[-20px] lg:mt-[-40px]">Brands.</div>
                        </h2>

                    </div>
                    <div className='lg:col-span-6 xl:col-span-7 col-span-12 border-b-2 border-slate-400'>
                        <div className='text-[30px] ml-[20px] xl:text-[43px] font-[500] xl:max-w-[850px] xl:ml-[60px] xl:mt-[20px] mb-4'>
                            We love to explore new ways to engage with brands and reach new levels of creative outlets through design.
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 mx-auto">
                    <div className="col-span-12 xl:col-span-5 lg:col-span-6 lg:border-r-2 border-slate-400">
                        <div className='flex flex-wrap xl:mt-[40px]'>
                            <img src={emailSvg} />
                            <div className='font-thin ml-4 text-[30px] xl:text-[40px]'>hello@havoc.co.uk</div>
                        </div>
                    </div>
                    <div className='col-span-12 xl:col-span-7 lg:col-span-6'>
                        <div className='xl:ml-[60px] xl:mt-[40px]'>
                            <ul className='xl:max-w-[450px] text-xl font-thin'>
                                <li className='flex flex-wrap justify-between mb-4'>
                                    <span className='hoverBrand'>Branding</span>
                                    <span className='hoverBrand'>UI/UX Design</span>
                                </li>
                                <li className='flex flex-wrap justify-between mb-4'>
                                    <span className='hoverBrand'>Packagine</span>
                                    <span className='hoverBrand'>Development</span>
                                </li>
                                <li className='flex flex-wrap justify-between mb-4'>
                                    <span className='hoverBrand'>Marketing</span>
                                    <span className='hoverBrand'>Commercials</span>
                                </li>
                                <li className='flex flex-wrap justify-between mb-4'>
                                    <span className='hoverBrand'>Video</span>
                                    <span className='hoverBrand'>Radio</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
