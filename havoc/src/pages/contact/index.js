import React, {useState} from "react";
import map from '../../assets/image/contact/map.png';
import UpcomingPage from "../home/Upcoming";

export default function ContactIndex(){

    const [selected, setSelected] = useState('London');

    return(
        <div>

            <section className='w-full pt-[80px] lg:pt-[120px]'>
                <div className='px-[30px] lg:px-[135px]'>
                    <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px] mb-[56px]'>
                        <div className='col-span-12 mb-6'>
                            <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>CONTACT</h2>
                        </div>

                        <div className='col-span-12 mb-6'>
                            <div className='max-w-[700px] font-[600] text-[43px] leading-[56px] ' style={{letterSpacing: '-0.5px'}}>
                                6 offices around the world and growing rapidly
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


                    <div className='grid grid-cols-12 bg-[#F7F7F7] mb-[120px]'>
                        <div className='col-span-4 px-[72px] pt-[100px]'>
                            <div className='text-[10px] text-[#7B7B7B] leading-[17px]'>ADDRESS</div>
                            <div className='max-w-[300px] text-[22px] pb-4 border-b-2 mb-[30px]' style={{letterSpacing:'-0.2px'}}>Westminster, London SW1A 2LW, United Kingdom</div>

                            <div className='text-[10px] text-[#7B7B7B] leading-[17px]'>PHONE</div>
                            <div className='max-w-[300px] text-[22px] pb-4 border-b-2 mb-[30px]' style={{letterSpacing:'-0.2px'}}>+334 3344567</div>

                            <div className='text-[10px] text-[#7B7B7B] leading-[17px]'>P.O BOX</div>
                            <div className='max-w-[300px] text-[22px] pb-4 border-b-2 mb-[30px]' style={{letterSpacing:'-0.2px'}}>77656</div>

                        </div>

                        <div className='col-span-8'>
                            <img src={map} alt='map'/>
                        </div>
                    </div>

                </div>
            </section>

            <UpcomingPage />


        </div>
    )
}
