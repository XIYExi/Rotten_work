import React from 'react';
import emailSvg from '../../assets/image/home/email.svg';
import './index.css';
import image from'../../assets/image/home/image.png';
import img1 from '../../assets/image/home/img1.png';
import img2 from '../../assets/image/home/img2.png';
import img3 from '../../assets/image/home/img3.png';
import img4 from '../../assets/image/home/img4.png';
import CardComponent from './component/card';
import map from '../../assets/image/home/map.svg';


export default function HomePage() {



    return(
        <>

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
                                <div className='text-[80px] font-[600] leading-[100px] max-w-[585px]' style={{letterSpacing: '-1px'}}>
                                    Growing all around the globe.
                                </div>

                                <div className='mt-12 grid grid-cols-3 gap-x-[50px] xl:gap-x-[80px]'>
                                    <div className='border-r-2'>
                                        <div className='text-[120px] font-thin'>54</div>
                                        <div className='leading-[20px] pl-[30px]'>Counties</div>
                                    </div>
                                    <div className='border-r-2'>
                                        <div className='text-[120px] font-thin'>136</div>
                                        <div className='leading-[20px] pl-[60px]'>Clients</div>
                                    </div>
                                    <div>
                                        <div className='text-[120px] font-thin'>12</div>
                                        <div className='leading-[20px] pl-[30px]'>Offices</div>
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


            <section className='w-full pt-[80px] lg:pt-[120px]'>
                <div className='px-[30px] lg:px-[135px]'>

                    <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px]'>
                        <div className='col-span-12 mb-6'>
                            <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>MEET THE TEAM</h2>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
