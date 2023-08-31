import React, {useEffect} from "react";
import styled from "styled-components";
import FeaturesTitleWrapper from "../components/FeaturesTitleWrapper";
import FeaturesDescWrapper from "../components/FeaturesDescWrapper";


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

            <div className='grid grid-cols-3'>
                {
                    props[1].child.map((item, index) => (
                        <div>

                        </div>
                    ))
                }
            </div>


        </div>
    )
}
