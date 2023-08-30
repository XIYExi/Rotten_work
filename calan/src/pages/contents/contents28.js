import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";
import google from '../../assets/images/contents/contents25-google.png';
import netflix from '../../assets/images/contents/contents25-netflix.png';
import uber from '../../assets/images/contents/contents25-uber.png';
import calab from '../../assets/images/contents/contents25-calab.png';
import intercom from '../../assets/images/contents/contents25-intercom.png';

const brandList = [google, netflix, uber, calab, intercom];

const Content28TitleWrapper = styled.div`
  margin: 0 auto;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: ${props=>props.$color};

  // lg
  @media screen and (min-width:1440px){
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
    width: 730px!important;
    margin-top:40px;
  }
`


const Content28DescWrapper = styled.div`
    color: ${props => props.$color};
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  opacity: 0.5;
  
  //lg
  @media screen and (min-width: 1440px){
    margin-top:40px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    max-width: 540px;
    letter-spacing: -0.4px;
  }
`


export default function ContentComponent28(){


    return(
        <div className='relative w-full mx-auto lg:py-[80px] lg:px-[165px] bg-[#391484]'>

            <Content28TitleWrapper
                $color={'#FFF'}
                $size={48}
                $leading={56}
            >
                Our Great Clients
            </Content28TitleWrapper>

            <Content28DescWrapper
                $color={'#FFF'}
                $size={18}
                $leading={28}
            >
                CaLan includes templates for your startup project, helping you create landing pages quickly and easily
            </Content28DescWrapper>

            <div className='lg:mt-[100px]'>
                <div className='grid grid-cols-5 mx-auto'>
                    {
                        brandList.map((item, index) => (
                            <img className='mx-auto border-2 py-4 rounded-[24px]'
                                 style={{borderColor: 'rgba(233,232,239, 0.2)'}}
                                 width={160} height={32} loading='lazy' key={index} src={item} alt={`contents25-brand-${index}`}/>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}
