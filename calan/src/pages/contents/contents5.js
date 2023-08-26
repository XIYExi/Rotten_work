import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";
import bg from '../../assets/images/contents/contents05-bg.png';


const Content05Wrapper = styled.div`
  background: linear-gradient(0deg, rgba(18, 2, 47, 0.60) 0%, 
          rgba(18, 2, 47, 0.60) 100%), 
          url(${bg}), 
          lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  
  // 1440px
  @media screen and (min-width: 1440px){
    min-height: 472px;
  }
  // lg
  @media screen and (min-width: 675px) and (max-width: 1440px){
    
  }
  //sm
  @media screen and (max-width: 675px){
    
  }
`

const Content05SecondTitleWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-style: normal;
  color: ${props => props.$color};
  
    //lg
  @media screen and (min-width: 1440px){
    padding-top: 80px;
    font-size: ${props => DescSizeTransform(props.$size)};
    letter-spacing: 4px;
    line-height: ${props => LeadingTransform(props.$leading)};
  }
  

`

const Content05TitleWrapper = styled.div`
  margin: 0 auto;
  text-align: center;  
  font-weight: 700;
  font-style: normal;
  color: ${props => props.$color};
  
    //lg
  @media screen and (min-width: 1440px){
    margin-top: 48px;
    max-width: 730px;
    padding: 12px 0;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
  }
`

const Content05DescWrapper = styled.div`
  margin: 0 auto;
  font-weight: 400;
  text-align: center;
  color: ${props => props.$color};
    
    //lg
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
    margin-bottom: 72px;
    max-width: 540px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
  }
`


export default function ContentComponent05(){


    return(
        <Content05Wrapper className='w-full mx-auto relative'>

            <Content05SecondTitleWrapper
                $color='#FFFFFF'
                $size={18}
                $leading={20}
            >
                Works in Sketch & Figma
            </Content05SecondTitleWrapper>

            <Content05TitleWrapper
                $color='#FFFFFF'
                $size={48}
                $leading={56}
            >
                Perfectly Designed on Two Platforms Sketch & Figma
            </Content05TitleWrapper>

            <Content05DescWrapper
                $color='#FFFFFF'
                $size={18}
                $leading={28}
            >
                We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.
            </Content05DescWrapper>
        </Content05Wrapper>
    )
}
