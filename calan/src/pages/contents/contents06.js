import styled from "styled-components";
import {ReactComponent as IconSvg} from "../../assets/images/contents/contents06-icon.svg";
import Bg from '../../assets/images/contents/contents06-bg.png';
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content06Wrapper = styled.div`
  background: linear-gradient(0deg, rgba(18, 2, 47, 0.60) 0%, rgba(18, 2, 47, 0.60) 100%), url(${Bg}), lightgray 50% / cover no-repeat;
  
  //lg
  @media screen and (min-width: 1440px){
    padding-top: 80px;
    min-height: 532px;
  }
`

const Content06TitleWrapper = styled.div`
    font-weight: 700;
  text-align: center;
  margin: 0 auto;
  font-style: normal;
  color: ${props => props.$color};
  
  //lg
  @media screen and (min-width: 1440px){
    max-width: 730px;
    margin-top: 64px;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
    padding: 0 20px;
  }
  
`

const Content06DescWrapper = styled.div`
    text-align: center;
  margin: 0 auto;
  font-style: normal;
  font-weight: 200;
  color: ${props => props.$color};
  opacity: 0.5;
  
  //lg
  @media screen and (min-width: 1440px){
    margin-top: 40px;
    margin-bottom: 80px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
    max-width: 540px;
  }
`


export default function ContentComponent06(){

    return(
        <Content06Wrapper className='w-full relative mx-auto'>

            <IconSvg className='mx-auto w-[72px] h-[72px] hover:stroke-white duration-300 transition-all'/>

            <Content06TitleWrapper
                $color={"#FFFFFF"}
                $size={48}
                $leading={56}
            >
                Landing Design Templates for Your Startup
            </Content06TitleWrapper>

            <Content06DescWrapper
                $color={'#FFFFFF'}
                $size={18}
                $leading={28}
            >
                We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.
            </Content06DescWrapper>

        </Content06Wrapper>
    )
}
