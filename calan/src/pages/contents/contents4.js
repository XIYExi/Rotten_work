import {ReactComponent as IconSvg} from "../../assets/images/contents/contents03-icon.svg";
import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content04IconWrapper = styled(IconSvg)`
    
    //lg
  @media screen and (min-width: 1440px){
    margin-top: 80px;
  }
  
  //md
  @media screen and (min-width: 675px) and (max-width: 1440px){
    margin-top: 56px;
  }
  
  //sm
  @media screen and (max-width: 675px){
    margin-top: 48px;
  }
`

const Content04TitleWrapper = styled.div`
  margin: 0 auto;
  color: ${props => props.$color};
  font-weight: 700;
  font-style: normal;
  text-align: center;
  
    //lg
  @media screen and (min-width: 1440px){
    max-width: 730px;
    padding: 20px 0;
    margin-top: 64px;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
  }
  //md
  @media screen and (min-width: 675px) and (max-width: 1440px){
    max-width: 450px;
    padding: 15px 0;
    margin-top: 48px;
    font-size: ${props => TitleSizeTransform(props.$size, 'md')};
    line-height: ${props => LeadingTransform(props.$leading, 'md')};
    letter-spacing: -1.6px;
  }
  //sm
  @media screen and (max-width: 675px){
    max-width: 340px;
    padding: 25px 0;
    margin-top: 32px;
    font-size: ${props => TitleSizeTransform(props.$size, 'sm')};
    line-height: ${props => LeadingTransform(props.$leading, 'sm')};
    letter-spacing: -0.8px;
  }
`

const Content04DescWrapper = styled.div`
  margin: 0 auto;
  color: ${props => props.$color};
  font-weight: 400;
  font-style: normal;
  text-align: center;
  letter-spacing: -0.4px;
  
  //lg
  @media screen and (min-width: 1440px){
    max-width: 540px;
    margin-top: 40px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    margin-bottom: 80px;
  }
  //md
  @media screen and (min-width: 675px) and (max-width: 1440px){
    max-width: 450px;
    margin-top: 32px;
    font-size: ${props => DescSizeTransform(props.$size, 'md')};
    line-height: ${props => LeadingTransform(props.$leading, 'md')};
    margin-bottom: 56px;
  }
  //sm
  @media screen and (max-width: 675px){
    max-width: 345px;
    margin-top: 24px;
    font-size: ${props => DescSizeTransform(props.$size, 'sm')};
    line-height: ${props => LeadingTransform(props.$leading, 'sm')};
    margin-bottom: 48px;
  }
`

export default function ContentComponent04(){

    return(
        <div className='w-full relative mx-auto bg-transparent'>
            <Content04IconWrapper className='mx-auto'/>

            <Content04TitleWrapper
                $color='12022F'
                $size={48}
                $leading={56}
            >
                Landing Design Templates for Your Startup
            </Content04TitleWrapper>

            <Content04DescWrapper
                $color='#594D6D'
                $size={18}
                $leading={28}
            >
                We've done it carefully and simply. Combined with the ingredients makes for beautiful landings.
                It is definitely the tool you need to speed up your design process.
            </Content04DescWrapper>
        </div>
    )
}
