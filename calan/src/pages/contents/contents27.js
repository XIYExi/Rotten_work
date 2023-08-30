import styled from "styled-components";
import {ReactComponent as IconSvg} from "../../assets/images/contents/contents27-icon.svg";
import google from '../../assets/images/contents/contents25-google.png';
import netflix from '../../assets/images/contents/contents25-netflix.png';
import uber from '../../assets/images/contents/contents25-uber.png';
import calab from '../../assets/images/contents/contents25-calab.png';
import intercom from '../../assets/images/contents/contents25-intercom.png';
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";
import {useState} from "react";

const brandList = [google, netflix, uber, calab, intercom];

const Content27SecondTitleWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  color:${props=>props.$color};
  opacity: 50%;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;

  // lg
  @media screen and (min-width: 1440px){
    max-width: 130px!important;
    font-size: ${props=> DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: 4px;
  }
`

const Content27TitleWrapper = styled.div`
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


const Content27DescWrapper = styled.div`
    color: ${props => props.$color};
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  
  //lg
  @media screen and (min-width: 1440px){
    margin-top:16px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    max-width: 540px;
    letter-spacing: -0.4px;
  }
`

const Content27InputWrapper = styled.input`
  display: flex;
  width: 350px;
  height: 56px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`


export default function ContentComponent27(){

    const [email, setEmail] = useState('');

    const handleEmailValid = (email) => {
        let split = email.split('@');

        // 校验是否有 ’@‘
        if (split.length !== 2 || split[0].length === 0 || split[1].length === 0){
            // console.log('请输入正确的邮箱')
            return false;
        }

        // 校验是否有 '.'
        const back = split[1];
        let _split = back.split('.');
        if(_split.length !== 2 || _split[0].length === 0 || _split[1].length === 0) {
            // console.log('邮箱格式错误')
            return false;
        }
        return true;
    }

    const handleSendEmail = () => {
        const flag = handleEmailValid(email);

        if (flag){
            // TODO 发送http请求
            console.log('发送http请求')
        }
        else{
            // TODO 邮箱格式错误
            console.log('邮箱格式错误');
        }

    }


    return(
        <div className='mx-auto relative w-full lg:py-[80px] lg:px-[165px]'>

            <Content27SecondTitleWrapper
                $color={'#594D6D'}
                $size={14}
                $leading={24}
            >
                our clients
            </Content27SecondTitleWrapper>

            <Content27TitleWrapper
                $color={'#12022F'}
                $size={48}
                $leading={56}
            >
                The Best Customer Experiences
            </Content27TitleWrapper>

            <Content27DescWrapper
                $color={'#594D6D'}
                $size={18}
                $leading={28}
            >
                We create the best product, trusted by many customers
            </Content27DescWrapper>



            <div className='mt-[56px] lg:max-w-[730px] flex mx-auto'>

                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-[20px]">
                        <IconSvg />
                    </span>
                    <Content27InputWrapper
                        className='border border-slate-300 rounded-[32px] pl-[60px] pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1'
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Type your E-mail'/>
                </label>


                <button className='py-4 px-14 rounded-full bg-[#FFDDA9] text-[16px] font-bold leading-[26px] ml-[30px]'
                        onClick={handleSendEmail}
                >
                    Get Started
                </button>
            </div>


            <div className='h-[2px] w-full bg-[#E7E5EA] my-[80px]'></div>

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
