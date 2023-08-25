import styled from "styled-components";
import bg from '../../assets/images/contents/contents11-bg.png';
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content11Wrapper = styled.div`
  background: linear-gradient(0deg, rgba(18, 2, 47, 0.60) 0%, rgba(18, 2, 47, 0.60) 100%), url(${bg}), lightgray 50% / cover no-repeat;
  z-index: -10!important;

  //lg
  @media screen and (min-width:1440px){
    padding: 80px 300px;
  }
`


const Content11InnerWrapper = styled.div`
  background: white;
  border-radius: 32px;
  margin: 0 auto;
  z-index: 10!important;
    //lg
  @media screen and (min-width: 1440px){
    padding-top: 72px;
    padding-bottom: 72px;
    max-width: 825px;
    
  }
`


const Content11TitleWrapper = styled.div`
    text-align: center;
  margin: 0 auto;
  font-weight: 700;
  font-style: normal;
  color:${props => props.$color};
  
  //lg
  @media screen and (min-width: 1440px){
    max-width: 635px;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
  }
`

const Content11DescWrapper = styled.div`
  text-align: center;
  font-weight: 400;
  font-style: normal;
  color: ${props => props.$color};
  margin: 0 auto;
  opacity: 0.5;
  
    
    //lg
  @media screen and (min-width: 1440px){
    max-width: 505px;
    margin-top: 40px;

    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
  }
`



export default function ContentComponent11(){

    return(
        <Content11Wrapper className='w-full relative mx-auto'>

            <Content11InnerWrapper>

                <Content11TitleWrapper
                    $color={'#12022F'}
                    $size={48}
                    $leading={56}
                >
                    Landing Design Templates for Your Startup
                </Content11TitleWrapper>

                <Content11DescWrapper
                    $color={'#594D6D'}
                    $size={18}
                    $leading={28}
                >
                    We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.
                </Content11DescWrapper>

            </Content11InnerWrapper>

        </Content11Wrapper>
    )
}
