import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content01DescWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  color:${props=>props.$color};
  opacity: 50%;
  font-family: 'DM Sans',serif;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;

  // lg
  @media screen and (min-width: 1440px){
    margin-top: 80px;
    max-width: 20.962rem!important;
    font-size: ${props=> DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: 4px;
  }

  // md
  @media screen and (min-width: 675px) and (max-width: 1440px){
    margin-top: 64px;
    max-width: 18.44rem!important;
    font-size: ${props=> DescSizeTransform(props.$size, 'md')};
    line-height: ${props => LeadingTransform(props.$leading, 'md')};
    letter-spacing: 3.4px;
  }

  // sm
  @media screen and (max-width: 675px){
    margin-top: 48px;
    width: 12.5rem!important;
    font-size: ${props=> DescSizeTransform(props.$size, 'sm')};
    line-height: ${props => LeadingTransform(props.$leading, 'sm')};
    letter-spacing: -0.8px;
  }
`

const Content02TitleWrapper = styled.div`
  margin: 0 auto;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: ${props=>props.$color};

  // lg
  @media screen and (min-width:1440px){
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
    width: 730px!important;
    margin-top:40px;
  }

  // md
  @media screen and (min-width: 475px) and (max-width: 1440px){
    margin-top:24px;
    width: 450px!important;
    line-height: ${props => LeadingTransform(props.$leading, 'md')};
    font-size: ${props => TitleSizeTransform(props.$size, 'md')};
    letter-spacing: -1.6px;
  }
  @media screen and (max-width: 475px){
    margin-top:16px;
    width: 345px!important;
    line-height: ${props => LeadingTransform(props.$leading, 'sm')};
    font-size: ${props => TitleSizeTransform(props.$size, 'sm')};
    letter-spacing: -0.8px;
  }
`


export default function ContentComponent01() {

  return(
    <div className='relative container mx-auto min-h-[204px] md:min-h-[270px] lg:min-h-[340px] w-full text-center'>

      <Content01DescWrapper
        $size={18}
        $color={'#594D6D'}
        $leading={28}
      >
        prefect design
      </Content01DescWrapper>


      <Content02TitleWrapper
        $color={'#12022F'}
        $size={48}
        $leading={56}
      >
        Speed Up Your Design Process with CaLan
      </Content02TitleWrapper>
    </div>
  )
}
