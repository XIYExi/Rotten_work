import styled from "styled-components";
import {LeadingTransform, TitleSizeTransform} from "../../utils/sizeTools";


const Content08TitleWrapper = styled.div`
    text-align: center;
  margin:0 auto;
  font-weight: 700;
  
  //lg
  @media screen and (min-width: 1440px){
    max-width: 730px;
    padding: 80px 0;
    font-size: ${props => TitleSizeTransform(props.$size)};
    line-height: ${props => LeadingTransform(props.$size)};
    letter-spacing: -0.8px;
  }
`

export default function ContentComponent08(){


    return(
        <div className='text-center w-full relative'>

            <Content08TitleWrapper
                $size={24}
                $leading={34}
            >
                With CaLan, we do research on startups. We create products with an easy-to-use purpose for designers to create landing pages quickly and efficiently.
            </Content08TitleWrapper>

        </div>
    )
}
