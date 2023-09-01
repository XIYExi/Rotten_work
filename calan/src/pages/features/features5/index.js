import React from "react";
import FeaturesTitleWrapper from "../components/FeaturesTitleWrapper";
import FeaturesDescWrapper from "../components/FeaturesDescWrapper";


export default function FeatureComponent5(props) {


    return(
        <div className='mx-auto relative w-full lg:py-[80px] lg:px-[165px]'>
            <FeaturesTitleWrapper>
                {props[0].title.text}
            </FeaturesTitleWrapper>

            <div className='lg:mt-[40px]'>
                <FeaturesDescWrapper>
                    {props[0].desc.text}
                </FeaturesDescWrapper>
            </div>

            <div className='mt-[80px] grid grid-cols-2 gap-x-[160px]'>
                {
                    props[1].child.map((item, index) => (
                        <div key={index} className='mx-auto'>
                            <img src={item.image}
                                 loading='lazy'
                                 width={380}
                                 height={200}
                                 alt='features5-img'
                                 className='mx-auto'
                            />

                            <div className='mt-[40px]'>
                                <FeaturesTitleWrapper
                                    $size={22}
                                    $leading={32}
                                >
                                    {item.title.text}
                                </FeaturesTitleWrapper>
                            </div>

                            <div className='mt-[12px]'>
                                <FeaturesDescWrapper
                                    $size={18}
                                    $leading={28}
                                >
                                    {item.desc.text}
                                </FeaturesDescWrapper>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
