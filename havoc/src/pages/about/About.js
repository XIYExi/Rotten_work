import React from "react";
import hero from '../../assets/image/about/hero.png';


export default function AboutPage() {


    return(
        <section className='w-full pt-[80px] lg:pt-[120px]'>
            <div className='px-[30px] lg:px-[135px]'>

                <div className='grid grid-cols-12 gap-x-[40px] lg:gap-x-[80px] mb-[80px]'>
                    <div className='col-span-12 md:col-span-9 border-r-2'>
                        <h2 className='font-thin text-[20px] before:mr-2 line-[20px] relative flex flex-wrap before:content-["————"]'>WORKS</h2>

                        <div className='max-w-[750px] font-[600] text-[43px]'>
                            We started as a small group of design enthusiasts in a garage
                        </div>
                    </div>
                </div>

                <img src={hero} alt='hero' className='w-full p-[10px] h-auto mb-[56px]' loading='lazy'/>

                <div className='text-[20px] font-thin leading-[40px] mb-[30px]' style={{letterSpacing:'-0.2px'}}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                </div>
                <div className='text-[20px] font-thin leading-[40px] mb-[128px]' style={{letterSpacing:'-0.2px'}}>
                    from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                </div>
            </div>
        </section>
    )
}
