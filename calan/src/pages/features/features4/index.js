import React from "react";
import bg from '../../../assets/images/features/features4-bg.png';
import styled from "styled-components";
import FeaturesTitleWrapper from "../components/FeaturesTitleWrapper";
import FeaturesDescWrapper from "../components/FeaturesDescWrapper";
import FeaturesButtonWrapper from "../components/FeaturesButtonWrapper";

const Feature4Wrapper = styled.div`
  background: linear-gradient(0deg, rgba(18, 2, 47, 0.50) 0%, rgba(18, 2, 47, 0.50) 100%), url(${bg}), lightgray 50% / cover no-repeat;
`


export default function FeatureComponent4(props){

    return(
        <Feature4Wrapper className='mx-auto w-full relative lg:py-[80px] lg:px-[165px]'>

            <FeaturesTitleWrapper
                $color={'#FFF'}
            >
                {props[0].title.text}
            </FeaturesTitleWrapper>

            <div className='mt-[40px]'>
                <FeaturesDescWrapper>
                    {props[0].desc.text}
                </FeaturesDescWrapper>
            </div>

            <div className='mt-[80px] grid grid-cols-3 gap-x-[30px]'>
                {
                    props[1].child.map((item, index) => (
                        <div key={index} className='border-2 border-[#FFF]/10 rounded-[24px] lg:py-[56px] lg:px-[32px]'>
                            {React.cloneElement(item.icon, {className: 'mx-auto'})}

                            <div className='mt-[32px]'>
                                <FeaturesTitleWrapper
                                    $color={'#FFF'}
                                    $size={24}
                                    $leading={34}
                                >
                                    {item.title.text}
                                </FeaturesTitleWrapper>
                            </div>

                            <div className='mt-[16px]'>
                                <FeaturesDescWrapper
                                    $color={'#FFF'}
                                    $opacity={0.5}
                                    $size={16}
                                    $leading={26}
                                >
                                    {item.desc.text}
                                </FeaturesDescWrapper>
                            </div>

                            <div className='text-center mt-[32px]'>
                                <FeaturesButtonWrapper
                                    $color='transparent'
                                    $bg={'#FFF'}
                                    $borderColor={'rgba(255,255,255,.1)'}
                                    className='hover:bg-[#E7E7E7] transition-all duration-300 hover:text-black'
                                >
                                    Learn More
                                </FeaturesButtonWrapper>
                            </div>
                        </div>
                    ))
                }
            </div>

        </Feature4Wrapper>
    )
}
