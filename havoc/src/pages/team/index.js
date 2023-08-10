import React, {useEffect, useState} from "react";
import {ReactComponent as FacebookSvg} from '../../assets/image/work-single/facebook.svg'
import {ReactComponent as InsSvg} from '../../assets/image/work-single/ins.svg'
import {ReactComponent as TwitterSvg} from '../../assets/image/work-single/twitter.svg'


export default function TeamIndex(){
    const [selected, setSelected] = useState('London');

    const [images, setImages] = useState([]);
    useEffect(() => {
        const arr = [];
        (async () => {
            for (let i = 1; i <= 16; ++i){
                const {default: graph} = await import(`../../assets/image/team/img${i}.png`)
                arr.push(graph);
            }
            setImages(arr);
        })()
    }, [])

    return(
        <section className='w-full pt-[80px] lg:pt-[120px]'>
            <div className='px-[30px] lg:px-[135px]'>
                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px] mb-[56px]'>
                    <div className='col-span-12 mb-6'>
                        <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>TEAM</h2>
                    </div>

                    <div className='col-span-12 mb-6'>
                        <div className='max-w-[700px] font-[600] text-[43px] leading-[56px] mb-[16px]' style={{letterSpacing: '-0.5px'}}>
                            Meet the mighty Havoc team always making magic and pancakes
                        </div>

                        <div className='max-w-[700px] font-thin text-[18px] leading-[33px] ' style={{letterSpacing: '-0.5px'}}>
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot the pain and trouble.
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap max-w-[850px] mb-[56px]'>
                    <div
                        className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'London' ? 'bg-[#FFC85A]' : 'bg-transparent'}`}
                        onClick={() => setSelected('London')}
                    >London</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'USA' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('USA')}>USA</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'Ireland' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('Ireland')}>Ireland</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'France' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('France')}>France</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'UAE' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('UAE')}>UAE</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'Lebanon' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('Lebanon')}>Lebanon</div>
                </div>

                <div className='grid grid-cols-12 gap-x-[57px] gap-y-[62px] mb-[140px]'>
                    {
                        images.map((item, index) => (
                            <div className='col-span-3 relative customHover' key={index}>
                                <div className='relative'>
                                    <img className='mb-[16px] transition-all duration-300 customHoverImage'
                                         src={item} alt={`image-${index}`} loading='lazy'/>
                                    <div className='absolute opacity-0 flex customHoverFlag transition-all duration-300'>
                                        <FacebookSvg className='mr-[16px] hoverIconFacebook'/>
                                        <InsSvg className='mr-[16px] hoverIconIns'/>
                                        <TwitterSvg className='hoverIconTwitter'/>
                                    </div>
                                </div>
                                <div className='text-[24px] font-[500] mb-[6px]'>Morganne Flaherty</div>
                                <div className='text-[14px] text-[#7B7B7B] font-thin'>UX Designer @Google</div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
