import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content02TitleWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  font-weight: 700;
  color: ${props => props.$color};
  font-style: normal;
    
    // lg
  @media screen and (min-width: 1440px){
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 80px;
    max-width: 730px;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
  }

  // md
  @media screen and (min-width: 675px) and (max-width: 1440px){
    padding-right: 8px;
    padding-left: 8px;
    margin-top: 64px;
    max-width: 450px;
    font-size: ${props => TitleSizeTransform(props.$size, 'md')};
    line-height: ${props => LeadingTransform(props.$leading, 'md')};
    letter-spacing: -1.6px;
  }

  // sm
  @media screen and (max-width: 675px) {
    padding: 0 8px;
    margin: 0 15px;
    margin-top: 48px;
    min-width: 345px;
    font-size: ${props => TitleSizeTransform(props.$size, 'sm')};
    line-height: ${props => LeadingTransform(props.$leading, 'sm')};
    letter-spacing: -0.8px;
  }
`

const Content02DescWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  color: ${props => props.$color};
  font-weight: 400;
  font-style: normal;
  
  // lg
  @media screen and (min-width: 1440px){
    margin-top: 40px;
    margin-bottom: 80px;
    max-width: 540px;
    font-size: ${props=>DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
  }
  
  // md
  @media screen and (min-width: 675px) and (max-width: 1440px){
    margin-top: 32px;
    margin-bottom: 64px;
    max-width: 450px;
    font-size: ${props=>DescSizeTransform(props.$size, 'md')};
    line-height: ${props => LeadingTransform(props.$leading, 'md')};
    letter-spacing: -0.356px;
  }
  
  //sm
  @media screen and (max-width: 675px){
    margin: 0 15px;
    margin-top: 24px;
    margin-bottom: 48px;
    min-width: 345px;
    font-size: ${props => TitleSizeTransform(props.$size, 'sm')};
    line-height: ${props => LeadingTransform(props.$leading, 'sm')};
    letter-spacing: -0.3px;
  }
`



export default function ContentComponent02(){

  return(
    <div className='mx-auto w-full relative text-center '>
      <Content02TitleWrapper
          $size={48}
          $leading={56}
          $color={'#12012F'}
      >
        Essential Design Interface Template for Startups
      </Content02TitleWrapper>

      <Content02DescWrapper
          $size={18}
          $leading={28}
          $color={'#594D6D'}
      >
        We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.
      </Content02DescWrapper>

    </div>
  )
}

