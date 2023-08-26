import styled from "styled-components";
import {ReactComponent as ArrowSvg} from "../../assets/images/contents/contents15-icon.svg";
import {Fragment, useEffect, useRef, useState} from "react";
import {observer} from "mobx-react";
import {observable} from "mobx";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";

// 这应该是通过props传递进来的参数, 此处用于默认占位
const transfer = [
    {
        id: '1',
        title: 'Easy to Use',
        desc: 'Components in CaLan are designed to be easily integrated into any design. All components are in the same style and are easily integrated into start-up landing page projects.',
        active: true,
    },
    {
        id: '2',
        title: 'Based on Bootstrap 4',
        desc: 'Components in CaLan are designed to be easily integrated into any design. All components are in the same style and are easily integrated into start-up landing page projects.',
        active: false
    },
    {
        id: '3',
        title: 'Works in Sketch & Figma',
        desc: 'Components in CaLan are designed to be easily integrated into any design. All components are in the same style and are easily integrated into start-up landing page projects.',
        active: false
    }
]


const Content15LeftWrapper = styled.div`

    //lg
  @media screen and (min-width: 1440px){
    width: 540px;
  }
`

const Content15LeftTitleWrapper = styled.div`
    text-align: left;
  font-style: normal;
  font-weight: 700;
  color: ${props => props.$color};
  user-select: none;
  cursor: pointer;
  
  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.4px;
  }
`

const Content15LeftDescWrapper = styled.div`
    text-align: left;
  font-style: normal;
  font-weight: 400;
  color: ${props=>props.$color};
  opacity: 0.5;
  
  //lg
  @media screen and (min-width: 1440px){
    margin-top:16px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.356px;
  }
`

const Content15RightWrapper = styled.div`
    
    //lg
  @media screen and (min-width: 1440px){
    max-width: 350px;
    
  }
`

const Content15DividerWrapper = styled.div`
    height: 1px;
  width: 100%;
  background-color: #E7E5EA;
  margin-bottom: 32px;
  margin-top:32px;
`

const Content15RightSecondTitleWrapper = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: 400;
  color: ${props=>props.$color};
  opacity: 0.5;
  text-transform: uppercase;
  

  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: 4px;
  }
`

const Content15RightTitleWrapper = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: 700;
  color: ${props => props.$color};

  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -0.8px;
    margin-top: 16px;
  }
`

const Content15Button = styled.button`
    background-color: rgba(255, 221, 169, 1);
  border-radius: 28px;
  padding: 15px 24px;
  margin-top: 24px;
  position: relative;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.36px;
  
  &:before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 221, 169, 0.3);
    border-radius: 28px;
    z-index: -10;
    transition: all 300ms ease-in-out;
  }
  
  &:hover:before{
    transform: scale(1.1,1.25);
    
  }
`


const ContentComponent15 = (props) => {

    const data = useRef([]);
    useEffect(() => {
        if(props.data === undefined)
            data.current = observable(transfer);
        else
            data.current = observable(props.data);
    }, [props.data])

    return(
        <div className='w-full relative mx-auto lg:py-[80px] lg:px-[165px]'>

            <div className='flex justify-between'>
                <Content15LeftWrapper>
                    {
                        data.current.map((item, index) => (
                            <div className='w-full' key={index}>
                                <div id={item.id} className='relative'>
                                    <div className='flex mb-[16px]'
                                         onClick={() => {
                                             data.current[index].active = !data.current[index].active
                                         }}
                                    >
                                        <Content15LeftTitleWrapper
                                            $color='#000'
                                            $size={18}
                                            $leading={28}
                                        >{item.title}</Content15LeftTitleWrapper>
                                        <ArrowSvg />
                                    </div>

                                    <Content15LeftDescWrapper
                                        className={`relative transition-all duration-400 ease-in-out ${item.active ? 'max-h-[300px]' : 'max-h-[1px]'} overflow-y-hidden`}
                                        $color={'#594D6D'}
                                        $size={16}
                                        $leading={26}
                                    >
                                        {item.desc}
                                    </Content15LeftDescWrapper>
                                </div>

                                <Content15DividerWrapper />
                            </div>
                        ))
                    }
                </Content15LeftWrapper>


                <Content15RightWrapper>

                    <Content15RightSecondTitleWrapper
                        $color={'#594D6D'}
                        $size={14}
                        $leading={24}
                    >
                        perfect design
                    </Content15RightSecondTitleWrapper>

                    <Content15RightTitleWrapper
                        $color={'#12022F'}
                        $size={24}
                        $leading={34}
                    >
                        CaLan includes amazing components designed for your startup project
                    </Content15RightTitleWrapper>

                    <Content15Button>Get Started</Content15Button>
                </Content15RightWrapper>

            </div>



        </div>
    )
}

export default observer(ContentComponent15)
