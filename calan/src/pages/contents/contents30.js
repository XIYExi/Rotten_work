import styled from "styled-components";
import bg from '../../assets/images/contents/contents30-bg.png';
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content30SecondTitleWrapper = styled.div`
  //margin: 0 auto;

  color:${props=>props.$color};
  opacity: 50%;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;

  // lg
  @media screen and (min-width: 1440px){
    max-width: 445px;
    font-size: ${props=> DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: 4px;
    margin-top: 24px;
  }
`

const Content30TitleWrapper = styled.div`
  //margin: 0 auto;
  font-style: normal;
  font-weight: 700;
  text-align: left;
  color: ${props=>props.$color};

  // lg
  @media screen and (min-width:1440px){
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
    width: 445px!important;
    margin-top:24px;
  }
`


const Content30DescWrapper = styled.div`
    color: ${props => props.$color};
  font-weight: 400;
  text-align: left;
  //margin: 0 auto;
  opacity: 0.5;
  
  //lg
  @media screen and (min-width: 1440px){
    margin-top:40px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    max-width: 445px;
    letter-spacing: -0.4px;
  }
`


export default function ContentComponent29(){


    return(
        <div className='relative mx-auto w-full lg:py-[80px] lg:px-[165px]'>

            <div className='grid grid-cols-2 gap-x-[160px]'>

                <div className='col-span-1 mx-auto'>

                    <Content30SecondTitleWrapper
                        $color={'#12022F'}
                        $size={14}
                        $leading={24}
                    >
                        Perfect Design
                    </Content30SecondTitleWrapper>

                    <Content30TitleWrapper
                        $color={'#12022F'}
                        $size={48}
                        $leading={56}
                    >
                        Landing Design Templates for Your Startup
                    </Content30TitleWrapper>

                    <Content30DescWrapper
                        $color={'#594D6D'}
                        $size={18}
                        $leading={28}
                    >
                        With a team of highly experienced designers, we have done it carefully and simply. The components work together to create a beautiful landing. It is essential template for designers
                    </Content30DescWrapper>

                    <button className='py-4 px-14 rounded-full bg-[#FFDDA9] text-[16px] font-bold leading-[26px] mt-[64px]'
                            onClick={() => console.log('contents29-explore')}
                    >
                        Explore
                    </button>

                </div>

                <div className='col-span-1'>
                    <img loading='lazy' width={540} height={540} src={bg} alt='contents29-bg'/>
                </div>

            </div>


        </div>
    )
}
