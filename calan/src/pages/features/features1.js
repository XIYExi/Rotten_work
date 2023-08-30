import FeaturesTitleWrapper from "./components/FeaturesTitleWrapper";
import FeaturesDescWrapper from "./components/FeaturesDescWrapper";


export default function FeatureComponent01(){

    return(
        <div className='w-full relative mx-auto lg:py-[80px] lg:px-[165px]'>
            <FeaturesTitleWrapper>
                Calan Landing Page Kit
            </FeaturesTitleWrapper>

            <FeaturesDescWrapper
                className='lg:pt-[40px]'
            >
                We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.
            </FeaturesDescWrapper>
        </div>
    )
}
