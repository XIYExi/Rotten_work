import styled from "styled-components";
import {LeadingTransform, TitleSizeTransform} from "../../../utils/sizeTools";


const FeaturesTitleWrapper = styled.div`
    margin: 0 auto;
  position: relative;
  text-align: ${props => props.$align || 'center'};
  font-weight: 700;
  font-style: normal;
  color: ${props => props.$color || '#12022F'};
  
  //lg
  @media screen and (min-width: 1440px){
    max-width: 730px;
    letter-spacing: -2px;
    font-size: ${props => props.$size && TitleSizeTransform(props.$size) || TitleSizeTransform(48)};
    line-height: ${props => props.$leading && LeadingTransform(props.$leading) || LeadingTransform(56)};
  }
`

export default FeaturesTitleWrapper;
