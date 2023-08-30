import styled from "styled-components";
import {DescSizeTransform, LeadingTransform} from "../../../utils/sizeTools";


const FeaturesDescWrapper = styled.div`
    text-align: ${props => props.$align || 'center'};
  color: ${props => props.$color || '#594D6D'};
  font-weight: 400;
  opacity: ${props => props.$opacity || 1};
  font-style: normal;
  margin: 0 auto;
  
  //lg
  @media screen and (min-width: 1440px){
    max-width: ${props => props.$maxw || 730}px;
    font-size: ${props => props.$size && DescSizeTransform(props.$size) || DescSizeTransform(18)};
    line-height: ${props => props.$leading && LeadingTransform(props.$leading) || LeadingTransform(28)};
    letter-spacing: -0.4px;
  }
`

export default FeaturesDescWrapper;
