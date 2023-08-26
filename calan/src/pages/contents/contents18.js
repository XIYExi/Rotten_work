import styled from "styled-components";
import img from '../../assets/images/contents/contents18-img.png';
import {DescSizeTransform, LeadingTransform} from "../../utils/sizeTools";

const Content18Wrapper = styled.div`

    //lg
  @media screen and (min-width: 1440px){
    padding: 80px 165px;
  }
`

const Content18DescWrapper = styled.div`
    color: ${props => props.$color};
  text-align: right;
  font-style: normal;
  font-weight: 400;
  
  //lg
  @media screen and (min-width: 1440px){
    letter-spacing: -0.356px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    margin-top: 24px;
  }
`


export default function ContentComponent18(props){

    return(
        <Content18Wrapper className='w-full relative mx-auto'>

            <img className='w-full h-full rounded-[32px] cover' src={img} alt='content18-img'/>

            <Content18DescWrapper
                $color={'#594D6D'}
                $size={16}
                $leading={26}
            >
                @pawel_czerwinski
            </Content18DescWrapper>
        </Content18Wrapper>
    )
}
