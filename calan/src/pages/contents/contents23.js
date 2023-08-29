import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";
import poster from "../../assets/images/contents/contents22-poster.png";
import {BigPlayButton, Player} from "video-react";
import 'video-react/dist/video-react.css';

const Content23TitleWrapper = styled.div`
    color: ${props => props.$color};
  text-align: center;
  margin: 0 auto;
  font-weight: 700;
  font-style: normal;
  
  //lg
  @media screen and (min-width: 1440px){
    max-width: 730px;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
  }
`

const Content23DescWrapper = styled.div`
    color: ${props => props.$color};
  text-align: center;
  font-weight: 400;
  margin: 0 auto;
  
  //lg
  @media screen and (min-width: 1440px){
    max-width: 730px;
    margin-top: 40px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
  }
`


const Content23VideoWrapper = styled.div`
  margin: 0 auto;
    //lg
  @media screen and (min-width: 1440px){
    max-width: 730px;
    max-height: 410px;
    margin-top: 40px;
  }
`


export default function ContentComponent23(){

    return(
        <div className='relative mx-auto w-full lg:py-[80px]'>

            <Content23TitleWrapper
                $color={'#12022F'}
                $size={48}
                $leading={56}
            >
                Organized Layers and Groups
            </Content23TitleWrapper>


            <Content23DescWrapper
                $color={'#594D6D'}
                $size={18}
                $leading={28}
            >
                With a team of experienced designers, design elements are intelligently organized by Layers and Groups that make it possible to develop a ready-made website layout in no time.
            </Content23DescWrapper>

            <div className='mt-[40px] relative text-center'>
                <button className='py-2 px-10 border-2 rounded-full text-[16px] font-bold leading-[26px]'>
                    Explore
                </button>
            </div>


            <Content23VideoWrapper>
                <Player
                    fluid={true}
                    playsInline
                    poster={poster}
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                >
                    <BigPlayButton position="center" />
                </Player>
            </Content23VideoWrapper>

        </div>
    )
}
