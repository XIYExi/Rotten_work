import styled from "styled-components";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";
import google from '../../assets/images/contents/contents25-google.png';
import netflix from '../../assets/images/contents/contents25-netflix.png';
import uber from '../../assets/images/contents/contents25-uber.png';
import calab from '../../assets/images/contents/contents25-calab.png';
import intercom from '../../assets/images/contents/contents25-intercom.png';


const brandList = [google, netflix, uber, calab, intercom];

const Content25SecondTitleWrapper = styled.div`
  font-weight: 700;
  color: ${props => props.$color};
  font-style: normal;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;

  //lg 
  @media screen and (min-width: 1440px){
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
  }
`

const Content25TitleWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  font-weight: 700;
  color: ${props => props.$color};
  font-style: normal;
    //lg
  @media screen and (min-width: 1440px){
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 24px;
    max-width: 730px;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -1.6px;
  }
`


export default function ContentComponent25(){


    return(
        <div className='mx-auto relative w-full lg:py-[80px] lg:px-[165px]'>

            <Content25SecondTitleWrapper
                $color={'#594D6D'}
                $size={14}
                $leading={24}
            >
                Our Clients
            </Content25SecondTitleWrapper>

            <Content25TitleWrapper
                $color={'#12022F'}
                $size={36}
                $leading={46}
            >
                Great Customers are Using the CaLan Template
            </Content25TitleWrapper>


            <div className='h-[2px] w-full bg-[#E7E5EA] my-[60px]'></div>

            <div className='grid grid-cols-5 mx-auto'>
                {
                    brandList.map((item, index) => (
                        <img className='mx-auto' width={160} height={32} loading='lazy' key={index} src={item} alt={`contents25-brand-${index}`}/>
                    ))
                }
            </div>

        </div>
    )
}
