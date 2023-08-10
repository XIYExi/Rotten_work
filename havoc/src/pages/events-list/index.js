import React from "react";
import img1 from '../../assets/image/events-list/img1.png';
import img2 from '../../assets/image/events-list/img2.png';
import img3 from '../../assets/image/events-list/img3.png';
import img4 from '../../assets/image/events-list/img4.png';
import img5 from '../../assets/image/events-list/img5.png';
import EventCardComponent from "./component/EventCardComponent";

const images = [img1, img2, img3, img4, img5]
const words = [
    'How UI/UX is empowering industries across the globe and how to benefit',
    'Havoc. Summer Event',
    'The important of UX',
    'How we tackle photography, a quick Havoc course',
    'How UI/UX is empowering industries across the globe'
];
const location = [
    'London, UK',
    'Paris, France',
    'London, UK',
    'London, UK',
    'London, UK',
];


export default function EventsListIndex(){

    return(
        <section className='w-full pt-[80px] lg:pt-[120px]'>
            <div className='px-[30px] lg:px-[135px]'>

                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px] mb-[80px]'>
                    <div className='col-span-12 md:col-span-9'>
                        <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>WORKS</h2>
                        <div className='max-w-[750px] text-[43px] font-[600] leading-[56px]' style={{letterSpacing:'-0.5px'}}>
                            Here are some exciting new projects we’ve been working on
                        </div>
                    </div>
                </div>


                <div className='grid grid-cols-1 gap-y-[100px]'>
                    {
                        images.map((item ,index) => (
                            <EventCardComponent
                                date={'23 FEb'}
                                src={item}
                                key={index}
                                title={words[index]}
                                desc={location[index]}
                            />
                        ))
                    }
                </div>


            </div>
        </section>
    )
}
