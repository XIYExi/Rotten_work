import React from "react";
import FeaturesTitleWrapper from "../components/FeaturesTitleWrapper";
import FeaturesDescWrapper from "../components/FeaturesDescWrapper";
import {ReactComponent as Arrow} from "../../../assets/images/features/features2-arrow.svg";


export default function FeatureComponent3(props){

    return(
        <div className='mx-auto w-full relative lg:py-[80px] lg:px-[165px]'>

            <FeaturesTitleWrapper>
                {props[0].title.text}
            </FeaturesTitleWrapper>

            <div className='mt-[40px]'>
                <FeaturesDescWrapper>
                    {props[0].desc.text}
                </FeaturesDescWrapper>
            </div>

            <div className='mt-[120px] grid grid-cols-3 gap-x-[80px]'>
                {
                    props[1].child.map((item, index) => (
                        <div key={index} className=''>

                            <FeaturesTitleWrapper
                                $size={24}
                                $leading={34}
                            >
                                {item.title.text}
                            </FeaturesTitleWrapper>

                            <div className='mt-[16px]'>
                                <FeaturesDescWrapper
                                    $size={16}
                                    $leading={26}
                                    $maxw={280}
                                    $ellipse={2}
                                >
                                    {item.desc.text}
                                </FeaturesDescWrapper>
                            </div>


                            <div className='text-center mt-[32px]'>
                                <button className='p-[8px] border-2 rounded-full text-center hover:bg-[#FFDDA9] hover:border-0 transition-all duration-300'>
                                    <Arrow className='mx-auto w-[24px] h-[24px] rounded-full'/>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}
