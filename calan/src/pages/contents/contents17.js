import styled from "styled-components";
import {observer} from "mobx-react";
import {useEffect, useRef} from "react";
import {observable} from "mobx";
import {DescSizeTransform, LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";

const transfer = [
    {
        id: '1',
        title: 'How CaLan works?',
        desc: 'With a team of highly experienced designers, we have done it carefully and simply. The components work together to create a beautiful landing. It is essential template for designers'
    },
    {
        id: '2',
        title: 'Perfect Design',
        desc: 'We have done it carefully and simply. Our models take a long time to research and work on, so you can easily and simply use the ingredients to make the landing.'
    },
    {
        id: '3',
        title: 'Cariety of Designs',
        desc: 'Components are designed to match perfectly in a variety of situations, helping you create multiple target spills quickly.'
    }
]

const Content17TitleWrapper = styled.div`
    text-align: left;
  font-weight: 700;
  font-style: normal;
  color: ${props => props.$color};
  
  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    letter-spacing: -2px;
    padding-top: 80px;
  }
`


const Content17Button = styled.button`
    background-color: rgba(255, 221, 169, 1);
  border-radius: 28px;
  padding: 15px 24px;
  margin-top: 24px;
  position: relative;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.36px;
  margin-bottom: 80px;
  
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


const Content17SecondTitleWrapper = styled.div`
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

const Content17DescWrapper = styled.div`
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


const ContentComponent17 = (props) => {

    const data = useRef([]);
    useEffect(() => {
        if(props.data !== undefined)
            data.current = observable(props.data);
        else
            data.current = observable(transfer);
    }, [props.data])


    return(
        <div className='relative mx-auto w-full px-[165px] '>

            <Content17TitleWrapper
                $color={'#000'}
                $size={48}
                $leading={56}
            >
                Easy Steps
            </Content17TitleWrapper>


            <div className='mt-[80px]'>
                {
                    data.current.map((item, index) => (
                        <div className='flex mb-[48px]' id={item.id} key={index}>
                            <div className='w-[64px] flex items-center justify-center h-[64px] rounded-full bg-[#E7E5EA] font-[#12022F] text-center font-[24px] font-bold leading-[34px]'>
                                <div>{index + 1}</div>
                            </div>

                            <div className='ml-[30px]'>
                                <Content17SecondTitleWrapper
                                    $color='#12022F'
                                    $size={18}
                                    $leading={28}
                                >
                                    {item.title}
                                </Content17SecondTitleWrapper>
                                <Content17DescWrapper
                                    $color='#594D6D'
                                    $size={16}
                                    $leading={26}
                                >
                                    {item.desc}
                                </Content17DescWrapper>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Content17Button>
                Learn More
            </Content17Button>

        </div>
    )
}

export default observer(ContentComponent17);
