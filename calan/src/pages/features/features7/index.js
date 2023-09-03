import styled from "styled-components";
import FeaturesTitleWrapper from "../components/FeaturesTitleWrapper";
import React, {Fragment} from "react";
import FeaturesDescWrapper from "../components/FeaturesDescWrapper";
import FeaturesButtonWrapper from "../components/FeaturesButtonWrapper";
import bg from '../../../assets/images/features/features7-bg.png';


export default function FeatureComponent7(props) {

    return(
        <div className='mx-auto relative w-full lg:py-[80px] lg:px-[165px] bg-[#391484]'>
            <div className='grid grid-cols-2 gap-x-[125px]'>
                <div>
                    <FeaturesTitleWrapper
                        $align='left'
                        $color={'#FFF'}
                    >
                        {props.child[0].title.text}
                    </FeaturesTitleWrapper>

                    <div className='mt-[64px]'>
                        {
                            props.child[0].child.map((item, index) => (
                                <Fragment key={index}>
                                    <div className='flex mb-[24px] p-[24px] bg-[#E7E7E7]/10 rounded-[24px]'>
                                        <div className='bg-[#FFFFFF]/5 rounded-[24px] w-[72px] h-[72px]'>
                                            {React.cloneElement(item.child[0].icon.svg, {className: 'm-[24px] fill-white stroke-white'})}
                                        </div>

                                        <div className='ml-[24px]'>
                                            <FeaturesTitleWrapper
                                                $color={'#FFF'}
                                                $size={18}
                                                $leading={28}
                                                $align='left'
                                            >
                                                {item.child[1].title.text}
                                            </FeaturesTitleWrapper>

                                            <div className='mt-[8px]'>
                                                <FeaturesDescWrapper
                                                    $color={'#FFF'}
                                                    $size={14}
                                                    $leading={24}
                                                    $align='left'
                                                >
                                                    {item.child[1].desc.text}
                                                </FeaturesDescWrapper>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            ))
                        }
                    </div>

                    <div className='mt-[32px]'>
                        <FeaturesButtonWrapper
                            className='w-full'
                        >
                            {props.button.text}
                        </FeaturesButtonWrapper>
                    </div>

                </div>

                <div>
                    <img className='mx-auto' src={bg} alt='features7-bg' width={445} height={672}/>
                </div>
            </div>
        </div>
    )
}
