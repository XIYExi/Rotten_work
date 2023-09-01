import React, {useEffect} from "react";
import styled from "styled-components";
import FeaturesTitleWrapper from "../components/FeaturesTitleWrapper";
import FeaturesDescWrapper from "../components/FeaturesDescWrapper";
import {ReactComponent as Arrow} from '../../../assets/images/features/features2-arrow.svg';
import FeaturesButtonWrapper from "../components/FeaturesButtonWrapper";


export default function FeatureComponent2(props){

    useEffect(() => {
        console.log(props)
    }, [])

    return(
        <div className='mx-auto relative w-full lg:py-[80px] lg:px-[165px]'>

            <FeaturesTitleWrapper>
                {props[0].title.text}
            </FeaturesTitleWrapper>

            <FeaturesDescWrapper className='lg:pt-[40px]'>
                {props[0].desc.text}
            </FeaturesDescWrapper>

            <div className='grid grid-cols-3 gap-x-[30px] lg:mt-[80px]'>
                {
                    props[1].child.map((item, index) => (
                        <div key={index} className='border-2 border-[#E7E5EA] rounded-[24px] lg:py-[56px] even:border-[#391484]/50 even:bg-[#391484]/5 '>

                            {React.cloneElement(item.icon, {className:'mx-auto w-[48px] h-[48px]'})}

                            <FeaturesTitleWrapper
                                className='lg:pt-[32px]'
                                $size={24}
                                $leading={34}
                            >
                                {item.title.text}
                            </FeaturesTitleWrapper>

                            <FeaturesDescWrapper
                                $size={16}
                                $leading={26}
                                className='lg:pt-[16px]'
                                $maxw={286}
                            >
                                {item.desc.text}
                            </FeaturesDescWrapper>


                            <div className='text-center mt-[32px]'>
                                <button className='p-[8px] border-2 rounded-full text-center hover:bg-[#FFDDA9] hover:border-0 transition-all duration-300'>
                                    <Arrow className='mx-auto w-[24px] h-[24px] rounded-full'/>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='mx-auto mt-[80px] w-full text-center'>
                <FeaturesButtonWrapper>
                    Explore All Features
                </FeaturesButtonWrapper>
            </div>


        </div>
    )
}
