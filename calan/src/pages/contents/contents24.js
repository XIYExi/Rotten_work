import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";
import poster from "../../assets/images/contents/contents22-poster.png";
import {BigPlayButton, Player} from "video-react";
import 'video-react/dist/video-react.css';
import poster1 from '../../assets/images/contents/contents24-poster1.png';
import poster2 from '../../assets/images/contents/contents24-poster2.png';


const Content24TitleWrapper = styled.div`
    font-weight: 700;
  color: ${props => props.$color};
  text-align: center;
  margin: 0 auto;
  
  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
    max-width: 730px;
  }
`

const Content24VideoWrapper = styled.div`
  margin: 0 auto;
    //lg
  @media screen and (min-width: 1440px){
    margin-top: 80px;
    max-width: 730px;
    max-height: 410px;
  }
`

const Content24DescWrapper = styled.div`
    color: ${props => props.$color};
  font-weight: 700;
  
  //lg
  @media screen and (min-width: 1440px){
    padding-left: 12px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
  }
`


export default function ContentComponent24(){

    return(
        <div className='lg:py-[80px] mx-auto relative w-full bg-[#391484]'>

            <Content24TitleWrapper
                $color={'#FFF'}
                $size={48}
                $leading={56}
            >
                Essential Design Interface Template for Startups
            </Content24TitleWrapper>

            <Content24VideoWrapper>
                <Player
                    fluid={true}
                    playsInline
                    poster={poster}
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                >
                    <BigPlayButton position="center" />
                </Player>
            </Content24VideoWrapper>

            <div className='lg:mt-[80px] lg:max-w-[730px] grid grid-cols-12 gap-x-[30px] mx-auto'>
                <div className='col-span-6 grid grid-cols-2 p-[30px] rounded-[32px]' style={{backgroundColor: 'rgba(67, 30, 140, 1)'}}>
                    <Player
                        fluid={false}
                        width={125}
                        height={90}
                        playsInline
                        poster={poster1}
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    >
                        <BigPlayButton className='scale-0.5' position="center" />
                    </Player>
                    <Content24DescWrapper
                        $color='#FFF'
                        $size={16}
                        $leading={28}
                    >
                        High-Quality Template for a Nice Startup…
                    </Content24DescWrapper>
                </div>
                <div className='col-span-6 grid grid-cols-2 p-[30px] rounded-[32px]' style={{backgroundColor: 'rgba(67, 30, 140, 1)'}}>
                    <Player
                        fluid={false}
                        width={125}
                        height={90}
                        playsInline
                        poster={poster2}
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    >
                        <BigPlayButton className='scale-0.5' position="center" />
                    </Player>
                    <Content24DescWrapper
                        $color='#FFF'
                        $size={16}
                        $leading={28}
                    >
                        The Blocks are Designed Simply and Beautifully
                    </Content24DescWrapper>
                </div>
            </div>

        </div>
    )
}
