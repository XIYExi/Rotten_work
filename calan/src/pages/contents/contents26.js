import styled from "styled-components";
import google from '../../assets/images/contents/contents25-google.png';
import netflix from '../../assets/images/contents/contents25-netflix.png';
import uber from '../../assets/images/contents/contents25-uber.png';
import calab from '../../assets/images/contents/contents25-calab.png';
import intercom from '../../assets/images/contents/contents25-intercom.png';
import {DescSizeTransform, LeadingTransform} from "../../utils/sizeTools";

const brandList = [google, netflix, uber, calab, intercom];


const Content26DescWrapper = styled.div`
    text-align: center;
  font-weight: 400;
  margin: 0 auto;
  color: ${props => props.$color};
  
  //lg
  @media screen and (min-width: 1440px){
    max-width: 730px;
    margin-top: 60px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
  }
`

export default function ContentComponent26(){

    return(
        <div className='w-full mx-auto relative lg:py-[80px] lg:px-[165px]'>
            <div className='grid grid-cols-5 mx-auto'>
                {
                    brandList.map((item, index) => (
                        <img className='mx-auto' width={160} height={32} loading='lazy' key={index} src={item} alt={`contents25-brand-${index}`}/>
                    ))
                }
            </div>

            <Content26DescWrapper
                $color={'#594D6D'}
                $size={18}
                $leading={28}
            >
                We've done it carefully and simply. Combined with the ingredients makes for beautiful landings. It is definitely the tool you need to speed up your design process.
            </Content26DescWrapper>

            <div className='mt-[60px] relative text-center'>
                <button className='py-4 px-14 rounded-full bg-[#FFDDA9] text-[16px] font-bold leading-[26px]'
                        onClick={(e) => console.log(`contents-26 button onClick`, e)}
                >
                    Get Started
                </button>
            </div>

        </div>
    )
}
