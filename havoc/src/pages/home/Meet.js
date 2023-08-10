import React from "react";
import people1 from '../../assets/image/home/people1.png';
import people2 from '../../assets/image/home/people2.png';
import people3 from '../../assets/image/home/people3.png';
import people4 from '../../assets/image/home/people4.png';
import people5 from '../../assets/image/home/people5.png';
import people6 from '../../assets/image/home/people6.png';
import people7 from '../../assets/image/home/people7.png';
import people8 from '../../assets/image/home/people8.png';
import HumanCardComponent from "./component/HumanCard";

export default function MeetPage() {

    return(
        <section className='w-full pt-[80px] lg:pt-[120px]'>
            <div className='px-[30px] lg:px-[135px]'>

                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px]'>
                    <div className='col-span-12 mb-6'>
                        <h2 className='font-thin text-[12px] md:text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>MEET THE TEAM</h2>
                    </div>

                    <div className='col-span-12 md:pb-[40px]'>
                        <h2 className='max-w-[683px] text-[24px] md:text-[43px] font-[600] leading-[30px] md:leading-[56px]' style={{letterSpacing: '-0.5px'}}>The mighty Havoc team always making magic and pancakes</h2>
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-x-[30px]'>
                    {
                        HumanCardsData.map((item, index) => (
                            <div className='mt-[50px] hover:drop-shadow-xl transition-all duration-300' key={index}>
                                <HumanCardComponent
                                    src={item.src}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className='my-[80px] mx-auto text-center w-[200px] px-6 py-2 border border-black hover:bg-black hover:text-white transition-all duration-200'>
                    All Members
                </div>
            </div>
        </section>
    )
}


const HumanCardsData = [
    {
        src: people1,
        title: 'Morganne Flaherty',
        desc: 'UX Designer @Google'
    },
    {
        src: people2,
        title: 'Foroogh Abdi',
        desc: 'UX Designer @Google'
    },
    {
        src: people3,
        title: 'Vikentiy Chaykovsky',
        desc: 'UX Designer @Google'
    },
    {
        src: people4,
        title: 'Harrison Phillips',
        desc: 'UX Designer @Google'
    },
    {
        src: people5,
        title: 'Salma Fonseca',
        desc: 'UX Designer @Google'
    },
    {
        src: people6,
        title: 'Davea Butler',
        desc: 'UX Designer @Google'
    },
    {
        src: people7,
        title: 'Martijn Dragonjer',
        desc: 'UX Designer @Google'
    },
    {
        src: people8,
        title: 'Anton Brownstein',
        desc: 'UX Designer @Google'
    },
]
