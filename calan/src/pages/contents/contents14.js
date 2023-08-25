import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content14TitleWrapper = styled.div`
    text-align: center;
  margin: 0 auto;
  color: ${props => props.$color};
  font-weight: 700;
  
  //lg
  @media screen and (min-width: 1440px){
    // 上边距写在最外层wrapper里面
    // margin-top: 80px;
    max-width: 730px;
    font-size: ${props=> TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.8px;
  }
    
`

const Content14DescWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  color: ${props => props.$color};
  font-weight: 400;
  opacity: 0.5;

  //lg
  @media screen and (min-width: 1440px){
    margin-top: 24px;
    max-width: 730px;
    font-size: ${props=> DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
  }
`


const Content14ExtraWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  color: ${props => props.$color};
  font-weight: 700;
  background-color: rgba(67, 30, 140, 1);
  border-radius: 24px;

  //lg
  @media screen and (min-width: 1440px) {
    padding-top: 48px;
    padding-bottom: 48px;
    margin-top: 56px;
    max-width: 730px;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.8px;
  }

`


export default function ContentComponent14(){


    return(
        <div className='w-full relative mx-auto bg-[#391484] lg:py-[80px]'>

            <Content14TitleWrapper
                $color='#FFF'
                $size={24}
                $leading={34}
            >
                A high quality solution beautifully designed for startups
            </Content14TitleWrapper>

            <Content14DescWrapper
                $color={'#FFF'}
                $size={18}
                $leading={28}
            >
                We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.
            </Content14DescWrapper>

            <Content14ExtraWrapper
                $color='#FFF'
                $size={24}
                $leading={34}
            >
                “The product is beautifully designed for startups”
            </Content14ExtraWrapper>

        </div>
    )
}
