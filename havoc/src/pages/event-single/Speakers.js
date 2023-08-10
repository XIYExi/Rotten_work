import React from "react";
import img1 from '../../assets/image/event-single/img1.png';
import img2 from '../../assets/image/event-single/img2.png';
import img3 from '../../assets/image/event-single/img3.png';
import img4 from '../../assets/image/event-single/img4.png';
import img5 from '../../assets/image/event-single/img5.png';
import img6 from '../../assets/image/event-single/img6.png';
import img7 from '../../assets/image/event-single/img7.png';
import img8 from '../../assets/image/event-single/img8.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
const words = [
    'Morganne Flaherty',
    'Foroogh Abdi',
    'Vikentiy Chaykovsky',
    'Harrison Phillips',
    'Salma Fonseca',
    'Davea Butler',
    'Martijn Dragonjer',
    'Anton Brownstein',
];
const desc = 'UX Designer @Google';


export default function SpeakersPage(){

    return(
        <section className='w-full'>
            <div className='px-[30px] lg:px-[135px]'>

                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px] mb-[80px]'>
                    <div className='col-span-12 md:col-span-9 border-r-2'>
                        <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>WORKS</h2>
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-x-[57px] gap-y-[59px] mb-[120px]'>
                    {
                        images.map((item, index) => (
                            <div className='col-span-3' key={index}>
                                <img src={item} alt={words[index]} width={250} height={257} className='mb-[16px]' loading='lazy'/>
                                <div className='text-[24px] font-[500] mb-[6px]'>{words[index]}</div>
                                <div className='font-thin text-[#7B7B7B] text-[14px]'>{desc}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
