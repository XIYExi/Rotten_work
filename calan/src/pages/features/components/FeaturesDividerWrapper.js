import styled from "styled-components";


const FeaturesDividerWrapper = styled.div`
    margin: ${props => props.$py && `${props.$py} auto` || '40px auto'};
  height: 2px;
  background-color: ${props => props.$color || '#E7E5EA'};
`

export default FeaturesDividerWrapper;
