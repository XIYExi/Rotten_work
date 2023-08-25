import styled from "styled-components";
import {ReactComponent as IconSvg} from "../../assets/images/contents/contents13-icon.svg";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content13TitleWrapper = styled.div`
    text-align: center;
  margin: 0 auto;
  color: ${props => props.$color};
  font-weight: 700;
  
  //lg
  @media screen and (min-width: 1440px){
    margin-top: 40px;
    max-width: 730px;
    font-size: ${props=> TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.8px;
  }
    
`

const Content13DescWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  color: ${props => props.$color};
  font-weight: 400;
  opacity: 0.5;

  //lg
  @media screen and (min-width: 1440px){
    margin-top: 16px;
    max-width: 730px;
    font-size: ${props=> DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
    padding-bottom: 80px;
  }
`


export default function ContentComponent13(){


    return(
        <div className='w-full relative mx-auto bg-[#391484] lg:pt-[80px]'>

            <IconSvg className='mx-auto w-[102px] h-[24px]'/>

            <Content13TitleWrapper
                $color='#FFF'
                $size={24}
                $leading={34}
            >
                Organized Layers and Groups
            </Content13TitleWrapper>

            <Content13DescWrapper
                $color={'#FFF'}
                $size={18}
                $leading={28}
            >
                With a team of experienced designers, design elements are intelligently organized by Layers and Groups that make it possible to develop a ready-made website layout in no time.
            </Content13DescWrapper>
        </div>
    )
}
