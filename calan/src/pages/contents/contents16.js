import styled from "styled-components";
import {observer} from "mobx-react";
import {useEffect, useRef} from "react";
import {observable} from "mobx";
import {ReactComponent as IconSvg} from "../../assets/images/contents/contents16-icon.svg";
import {LeadingTransform, TitleSizeTransform, DescSizeTransform} from "../../utils/sizeTools";

const transfer = [
    {
        id: '1',
        title: 'When will I get my invitation?',
        desc: 'We’re slowly rolling out invites starting Q1 2020. We want to make sure you get a great product and quick support.'
    },
    {
        id: '2',
        title: 'Do you have a trial?',
        desc: 'Yes, our one and only plan includes a 14-day trial so you can test the waters and see if CaLan is right for your team.'
    },
    {
        id: '3',
        title: 'Do I need a credit card to sign up?',
        desc: 'No, you are free to use CaLan for 14 days, after which you do need to add a credit card to avoid service intreruption.'
    },
    {
        id: '4',
        title: 'Who built this?',
        desc: 'We’re Ideaware, for over 10 years we’ve provided software design & devleopment services in sillicon valley.'
    },
    {
        id: '5',
        title: 'Do you include templates?',
        desc: 'Yes! We worked really hard to include the most common procedures and information a growing team might need.'
    },
    {
        id: '6',
        title: 'Is this a public CaLan software?',
        desc: 'It is as public or private as you want to make it. You are fully in control of who sees what in or outside your team.'
    },
]

const Content16TitleWrapper = styled.div`
    font-weight: 700;
  font-style: normal;
  color: ${props => props.$color};
  text-align: center;
  margin: 0 auto;
  
  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
    margin-top: 64px;
    max-width: 720px;
  }
`

const Content16SecondTitleWrapper = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: 700;
  color: ${props=>props.$color};

  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
  }
`

const Content16DescWrapper = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: 400;
  color: ${props=>props.$color};
  margin-top: 16px;
  opacity: 0.5;

  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.356px;
  }
`


const ContentComponent16 = (props) => {

    const data = useRef([]);
    useEffect(() => {
        if(props.data !== undefined)
            data.current = observable(props.data);
        else
            data.current = observable(transfer);
    }, [props.data])


    return(
        <div className='relative w-full mx-auto'>
            <IconSvg className='mx-auto w-[72px] h-[72px] lg:mt-[80px]'/>

            <Content16TitleWrapper
                $color={'#12022F'}
                $size={48}
                $leading={56}
            >
                Frecuently Asked Questions
            </Content16TitleWrapper>

            <div className='grid grid-cols-12 gap-x-[30px] gap-y-[80px] mx-auto lg:my-[80px] lg:px-[260px]'>
                {
                    data.current.map((item, index) => (
                        <div id={item.id} key={index} className='lg:col-span-6'>
                            <Content16SecondTitleWrapper
                                $color={'#12022F'}
                                $size={18}
                                $leading={28}
                            >
                                {item.title}
                            </Content16SecondTitleWrapper>
                            <Content16DescWrapper
                                $color={'#594D6D'}
                                $size={16}
                                $leading={26}
                            >
                                {item.desc}
                            </Content16DescWrapper>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default observer(ContentComponent16);
