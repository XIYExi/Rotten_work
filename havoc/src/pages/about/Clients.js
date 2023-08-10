import React from "react";
import msi from '../../assets/image/about/msi.svg';
import cola from '../../assets/image/about/cola.svg';
import airbnb from '../../assets/image/about/airbnb.svg';
import microsoft from '../../assets/image/about/microsoft.svg';
import netflix from '../../assets/image/about/netflix.svg';
import nike from '../../assets/image/about/nike.svg';
import british from '../../assets/image/about/british.svg';
import canon from '../../assets/image/about/canon.svg';

const images = [msi, cola, airbnb, microsoft, netflix, nike, british, canon];


export default function ClientsPage(){

    return(
        <section className='w-full'>
            <div className='px-[30px] lg:px-[135px]'>

                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px] mb-[56px]'>
                    <div className='col-span-12 md:col-span-9 border-r-2'>
                        <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>BELOVED CLIENTS</h2>
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-x-[40px] gap-y-[52px] mb-[128px]'>
                {
                    images.map((item, index) => (
                        <div className='col-span-3'>
                            <img src={item} key={index} alt={`images-${index}`} />
                        </div>
                    ))
                }
                </div>


            </div>
        </section>
    )
}
