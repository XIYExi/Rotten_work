import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";

const Content10TitleWrapper = styled.div`
  margin: 0 auto;
    font-weight: 700;
  text-align: center;
  font-style: normal;
  color: ${props => props.$color};
  
  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    padding-top: 80px;
    letter-spacing: -0.8px;
    max-width: 740px;
  }
`

const Content10DescWrapper = styled.div`
  margin: 0 auto;
    text-align: center;
  color: ${props => props.$color};
  font-style: normal;
  font-weight: 400;
  opacity: 0.5;
  
  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
    margin-top: 24px;
    margin-bottom: 80px;
    max-width: 740px;
  }
`


export default function ContentComponent10(){

    return(
        <div className='mx-auto relative text-align bg-[#391484] lg:min-h-[274px] w-full'>

            <Content10TitleWrapper
                $size={24}
                $leading={34}
                $color={'#FFF'}
            >
                Organized Layers and Groups
            </Content10TitleWrapper>

            <Content10DescWrapper
                $size={18}
                $leading={28}
                $color={'#FFF'}
            >
                With a team of experienced designers, design elements are intelligently organized by Layers and Groups that make it possible to develop a ready-made website layout in no time.
            </Content10DescWrapper>

        </div>
    )
}
