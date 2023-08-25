import styled from "styled-components";
import bg from '../../assets/images/contents/contents12-bg.png'
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";

const Content12Wrapper = styled.div`
  background: linear-gradient(0deg, rgba(18, 2, 47, 0.60) 0%, rgba(18, 2, 47, 0.60) 100%), url(${bg}), lightgray 50% / cover no-repeat;
  z-index: -10!important;
  //lg
  @media screen and (min-width: 1440px){
    
  }
`

const Content12InnerWrapper = styled.div`
    margin-left: 165px;
  padding-top: 180px;
  padding-bottom: 80px;
  position: relative;
  
  @media screen and (min-width: 1440px){
    max-width: 500px;
  }
`


const Content12TitleWrapper = styled.div`
    text-align: left;
  font-weight: 700;
  font-style: normal;
  color: ${props => props.$color};
  position: relative;
  
  //lg
  @media screen and (min-width: 1440px){

    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
    
  }
`

const Content12DescWrapper = styled.div`
    text-align: left;
  font-style: normal;
  opacity: 0.5;
  color: ${props => props.$color};
  
  
  //lg
  @media screen and (min-width: 1440px){
    margin-top: 40px;
    max-width: 540px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
  }
`


export default function ContentComponent12(){

    return(
        <Content12Wrapper className='w-full relative mx-auto'>

            <Content12InnerWrapper>
                <Content12TitleWrapper
                    $size={48}
                    $leading={56}
                    $color={'#FFF'}
                >
                    High-Quality Template for a Nice Startup Website
                </Content12TitleWrapper>

                <Content12DescWrapper
                    $color={'#FFF'}
                    $size={18}
                    $leading={28}
                >
                    We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.
                </Content12DescWrapper>

            </Content12InnerWrapper>

        </Content12Wrapper>
    )
}
