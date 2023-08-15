import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content03TitleWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  font-weight: 700;
  font-style: normal;
  color: ${props => props.$color};
  
  // lg
  @media screen and (min-width: 1440px){
    margin-top: 80px;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
  }
  
  // md
  @media screen and (min-width: 675px) and (max-width: 1440px){
    margin-top: 64px;
    font-size: ${props => TitleSizeTransform(props.$size, 'md')};
    line-height: ${props => LeadingTransform(props.$leading, 'md')};
    letter-spacing: -1.6px;
  }
  
  //sm
  @media screen and (max-width: 675px){
    margin-top: 48px;
    font-size: ${props => TitleSizeTransform(props.$size, 'sm')};
    line-height: ${props => LeadingTransform(props.$leading, 'sm')};
    letter-spacing: -0.8px;
  }
    
`


const Content03GridWrapper = styled.div`
    
    // lg
  @media screen and (min-width: 1440px){
    margin: 80px 0;
  }
  
  //md
  @media screen and (min-width: 675px) and (max-width: 1440px){
    margin: 64px 0;
  }
  
  //sm
  @media screen and (max-width: 675px){
    margin: 48px 0;
  }
`


const Content03SecondTitleWrapper = styled.div`
    font-weight: 700;
  color: ${props => props.$color};
  font-style: normal;
  text-align: center;
  letter-spacing: -0.4px;
  
  //lg 
  @media screen and (min-width: 1440px){
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
  }
  
  //md
  @media screen and (min-width: 675px) and (max-width: 1440px){
    font-size: ${props => DescSizeTransform(props.$size, 'md')};
    line-height: ${props => LeadingTransform(props.$leading, 'md')};
  }
  
  //sm
  @media screen and (max-width: 675px){
    font-size: ${props => DescSizeTransform(props.$size, 'sm')};
    line-height: ${props => LeadingTransform(props.$leading, 'sm')};
  }
`


const Content03DescWrapper = styled.div`
  margin-top:12px;
  text-align: center; 
  font-weight: 400;
  font-style: normal;
  color: ${props => props.$color};
  
  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
    padding: 0 12px;
  }
  
  // md
  @media screen and (min-width: 675px) and (max-width: 1440px){
    font-size: ${props => DescSizeTransform(props.$size, 'md')};
    line-height: ${props => LeadingTransform(props.$leading, 'md')};
    letter-spacing: -0.356px;
    padding: 0 8px;
  }
  
  //sm
  @media screen and (max-width: 675px){
    font-size: ${props => DescSizeTransform(props.$size, 'sm')};
    line-height: ${props => LeadingTransform(props.$leading, 'sm')};
    letter-spacing: -0.3px;
    // padding: 0 8px;
  }
`

export default function ContentComponent03(){


    return(
        <div className='mx-auto w-full text-align relative'>

            <div className='max-w-[345px] md:max-w-[690px] lg:max-w-[730px] grid grid-cols-12 gap-x-[30px] mx-auto'>

                <div className='col-span-12'>
                    <Content03TitleWrapper
                        $size={48}
                        $leading={56}
                        $color={'#12022F'}
                    >
                        The Templates are Designed to Show You a Sense of Acceleration in the Website Design Process
                    </Content03TitleWrapper>
                </div>

                <Content03GridWrapper className='col-span-12 md:col-span-6'>
                    <Content03SecondTitleWrapper
                        $color='#12022F'
                        $size={22}
                        $leading={32}
                    >
                        Based on Boostrap 4
                    </Content03SecondTitleWrapper>
                    <Content03DescWrapper
                        $color='#594D6D'
                        $size={18}
                        $leading={28}
                    >
                        Layout is based on one of the most common and reliable Bootstrap
                    </Content03DescWrapper>
                </Content03GridWrapper>

                <Content03GridWrapper className='col-span-12 md:col-span-6'>
                    <Content03SecondTitleWrapper
                        $color='#12022F'
                        $size={22}
                        $leading={32}
                    >
                        Sketch & Figma
                    </Content03SecondTitleWrapper>
                    <Content03DescWrapper
                        $color='#594D6D'
                        $size={18}
                        $leading={28}
                    >
                        The template designs and works perfectly in Sketch and Figma
                    </Content03DescWrapper>
                </Content03GridWrapper>
            </div>

        </div>
    )
}
