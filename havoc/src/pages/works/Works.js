import React, {useEffect, useState} from "react";
import {mockGenerateFunc} from "../../assets/data/WorksMockData";


export default function WorksPage() {

    const [selected, setSelected] = useState('Branding');
    const [data, setData] = useState([]);
    useEffect(() => {
        const data = mockGenerateFunc(selected);
        setData(data)
    }, [selected])

    return(
        <section className='w-full pt-[80px] lg:pt-[120px]'>
            <div className='px-[30px] lg:px-[135px]'>
                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px]'>
                    <div className='col-span-12 mb-6'>
                        <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>LATEST WORK</h2>
                    </div>

                    <div className='col-span-12 mb-6'>
                        <div className='max-w-[700px] font-[600] text-[43px] leading-[56px] ' style={{letterSpacing: '-0.5px'}}>
                            Here are some exciting new projects we’ve been working on
                        </div>
                    </div>
                </div>


                <div  className='flex flex-wrap max-w-[850px] mb-[56px]'>
                    <div
                        className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'Branding' ? 'bg-[#FFC85A]' : 'bg-transparent'}`}
                        onClick={() => setSelected('Branding')}
                    >Branding</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'Packaging' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('Packaging')}>Packaging</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'Marketing' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('Marketing')}>Marketing</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'UI' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('UI')}>UI/UX</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'Video' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('Video')}>Video</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'Development' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('Development')}>Development</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'Radio' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('Radio')}>Radio</div>
                    <div className={`px-5 py-2 border border-black mr-[24px] mb-[24px] cursor-pointer ${selected === 'Commercials' ? 'bg-[#FFC85A]' : 'bg-transparent'}`} onClick={() => setSelected('Commercials')}>Commercials</div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[80px]'>
                    {
                        data.map((item, index) => (
                            <div key={index} className='mb-[128px] last:mb-[64px] customHoverScaleWrapper'>
                                <img src={item.src} alt={item.belong} width={540} height={580} className='mb-[24px] transition-all duration-300 p-[10px] customHoverScale'/>
                                <div className='text-[20px] font-[600] max-w-[350px] pl-[10px]'>{item.title}</div>
                            </div>
                        ))
                    }
                </div>

                <div className='mb-[160px] text-center'>
                    <span className='cursor-pointer py-2 px-12 border border-black hover:bg-black hover:text-white'>Load More</span>
                </div>


            </div>
        </section>
    )
}
