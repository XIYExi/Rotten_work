import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content07SecondTitleWrapper = styled.div`
    text-align: center;
  margin: 0 auto;
  font-weight: 700;
  color: #FFF;
  text-transform: uppercase;
  font-style: normal;
  
  //lg
  @media screen and (min-width: 1440px){
    max-width: 254px;
    padding-top: 80px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: 4px;
  }
`


const Content07TitleWrapper = styled.div`
    text-align: center;
  margin: 0 auto;
  font-weight: 700;
  color: #FFF;
  
  //lg
  @media screen and (min-width: 1440px){
    margin-top: 48px;
    padding-bottom: 80px;
    max-width: 920px;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -1.6px;
  }
`



export default function ContentComponent07(){


    return(
        <div className='w-full relative mx-auto text-center bg-[#391484]'>

            <Content07SecondTitleWrapper
                $size={18}
                $leading={28}
            >
                CaLan Version V2.0
            </Content07SecondTitleWrapper>

            <Content07TitleWrapper
                $size={36}
                $leading={46}
            >
                Are you ready to update CaLan? Next time we update a new version, the update focuses on component systems to help ease and speed up the design process.
            </Content07TitleWrapper>
        </div>
    )
}
