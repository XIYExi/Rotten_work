import FeaturesTitleWrapper from "../components/FeaturesTitleWrapper";
import React, {useEffect} from "react";
import FeaturesDescWrapper from "../components/FeaturesDescWrapper";



export default function FeatureComponent01(props){

    useEffect(() => {
        console.log(props)
    }, [])

    return(
        <div className='w-full relative mx-auto lg:py-[80px] lg:px-[165px]'>
            <FeaturesTitleWrapper>
                {props[0].title.text}
            </FeaturesTitleWrapper>


            <div className='mt-[80px] grid grid-cols-3 gap-x-[30px]'>
                {
                    props[1].child.map((item ,index) => (
                        <div className='relative' key={index} id={item.id}>
                            {
                                React.cloneElement(
                                    item.icon,
                                    {
                                        className: 'bg-transparent mx-auto',
                                        style: {zIndex: '-10'}
                                    }
                                )
                            }


                            <FeaturesTitleWrapper
                                className='lg:pt-[40px]'
                                $size={24}
                                $leading={34}
                            >
                                {item.title.text}
                            </FeaturesTitleWrapper>
                            <FeaturesDescWrapper
                                className='lg:mt-[16px]'
                                $size={16}
                                $leading={26}
                            >
                                {item.desc.text}
                            </FeaturesDescWrapper>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}
