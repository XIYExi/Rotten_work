import styled from "styled-components";
import {LeadingTransform, TitleSizeTransform} from "../../../utils/sizeTools";


const FeaturesButtonWrapper = styled.button`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  padding: ${props => ( props.$px || props.$py ) && `${props.$py || 12}px ${props.$px || 80}px` || '12px 80px'};
  background-color: ${props => props.$color || '#FFDDA9'};
  border: 2px ${props => props.$borderColor || '#FFDDA9'} solid;
  border-radius: 32px;
  position: relative;
  color: ${props => props.$bg || '#000'};

  
  &:before{
    content: '';
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    border-radius: 32px;
    background-color: ${props => props.$color || '#FFDDA9'};
    opacity: 0.5;
    z-index: -1;
  }
  
  &:hover:before{
    transform: scale(1.12, 1.4);
    opacity: 0.01;
    transition: all 400ms ease-in-out;
  }
  
  //lg
  @media screen and (min-width: 1440px){
    font-size: ${props => props.$size && TitleSizeTransform(props.$size) || TitleSizeTransform(16)};
    line-height: ${props => props.$leading && LeadingTransform(props.$leading) || LeadingTransform(26)};
    letter-spacing: -0.36px;
  }
`

export default FeaturesButtonWrapper;
