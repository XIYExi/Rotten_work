import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";

const Content09GridWrapper = styled.div`
    
    //lg
  @media screen and (min-width: 1440px){
    padding: 80px 165px;
  }
    
`

const Content09TitleWrapper = styled.div`
  color: ${props => props.$color};
  text-align: left;
  font-weight: 700;
  font-style: normal;
    
    //lg
  @media screen and (min-width: 1440px){
    max-width: 635px;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.8px;
  }
`

const Content09DescWrapper = styled.div`
  font-weight: 700;
  text-align: left;
  font-style: normal;
  color: ${props => props.$color};
  text-transform: uppercase;
    //lg
  @media screen and (min-width: 1440px){
    max-width: 445px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: 4px;
  }
`


export default function ContentComponent09(){

    return(
        <div className='w-full relative mx-auto text-align'>

            <Content09GridWrapper className='grid grid-cols-12 gap-x-[30px]'>

                <Content09TitleWrapper
                    className='col-span-12 sm:col-span-6'
                    $size={24}
                    $leading={34}
                    $color={'#12022F'}
                >
                    The Templates are Designed to Show You a Sense of Acceleration in the Website Design Process
                </Content09TitleWrapper>

                <Content09DescWrapper
                    className='col-span-12 sm:col-span-6'
                    $size={18}
                    $leading={28}
                    $color={'#594D6D'}
                >
                    The product is beautifully designed for startups
                </Content09DescWrapper>


            </Content09GridWrapper>

        </div>
    )
}
