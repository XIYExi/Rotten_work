import React from "react";
import styled from "styled-components";
import bg from '../../../assets/images/features/features6-bg.png';
import FeaturesTitleWrapper from "../components/FeaturesTitleWrapper";
import FeaturesDescWrapper from "../components/FeaturesDescWrapper";
import FeaturesButtonWrapper from "../components/FeaturesButtonWrapper";

const Feature6Wrapper = styled.div`
  background: url(${bg}), lightgray 50% / cover no-repeat;
`

export default function FeatureComponent6(props){

    return(
        <Feature6Wrapper className='mx-auto relative w-full lg:py-[80px] lg:px-[165px]'>

            <div className='grid grid-cols-2 gap-x-[125px]'>
                <div>
                    <FeaturesTitleWrapper
                        $maxw={540}
                        $color={'#FFF'}
                        $align='left'
                    >
                        {props.child[0].title.text}
                    </FeaturesTitleWrapper>

                    <div className='lg:mt-[48px]'>
                        <FeaturesDescWrapper
                            $color={'#FFF'}
                            $opacity={0.5}
                            $align='left'
                        >
                            {props.child[0].desc.text}
                        </FeaturesDescWrapper>
                    </div>

                    <div className='lg:mt-[80px]'>
                        <FeaturesButtonWrapper>
                            {props.child[0].button.text}
                        </FeaturesButtonWrapper>
                    </div>
                </div>
                <div className='py-[40px] pl-[40px] bg-white rounded-[24px]'>
                    {
                        props.child[1].child.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className='flex mb-[40px]'>
                                    <div className='bg-[#12022F]/5 rounded-[24px] w-[72px] h-[72px]'>
                                        {React.cloneElement(item.icon.svg, {className: 'm-[24px]'})}
                                    </div>

                                    <div className='ml-[24px]'>
                                        <FeaturesTitleWrapper
                                            $align='left'
                                            $size={18}
                                            $leading={28}
                                        >{item.title.text}</FeaturesTitleWrapper>

                                        <div className='mt-[8px]'>
                                            <FeaturesDescWrapper
                                                $align='left'
                                                $size={14}
                                                $leading={24}
                                                $maxw={269}
                                            >{item.desc.text}</FeaturesDescWrapper>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))
                    }

                    <div className='lg:mt-[40px]'>
                        <FeaturesButtonWrapper
                            $color='transparent'
                            $borderColor={'#c9c4d5'}
                        >
                            {props.child[1].button.text}
                        </FeaturesButtonWrapper>
                    </div>

                </div>
            </div>
        </Feature6Wrapper>
    )
}
