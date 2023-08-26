import styled from "styled-components";
import bg from '../../assets/images/contents/contents19-bg.png';
import {DescSizeTransform, LeadingTransform} from "../../utils/sizeTools";


const Content19DescWrapper = styled.div`
  position: absolute;
    color: ${props => props.$color};
  text-align: right;
  font-style: normal;
  font-weight: 400;
  padding: 14px;
  background-color: #12022F;
  border-radius: 12px;
  opacity: 0.5;
  
  //lg
  @media screen and (min-width: 1440px){
    letter-spacing: -0.356px;
    font-size: ${props => DescSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$leading)};
    margin-top: 24px;

    bottom: 64px;
    right:165px;
  }
`

export default function ContentComponent19(){

    return(
        <div className='relative mx-auto w-full'>

            <img src={bg} alt='contents19-bg' className='w-full h-full'/>


            <Content19DescWrapper
                $color={'#FFF'}
                $size={16}
                $leading={26}
            >
                @pawel_czerwinski
            </Content19DescWrapper>
        </div>
    )
}
