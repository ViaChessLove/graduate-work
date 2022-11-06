import styled from "styled-components";

import {
  COLORS,
  SCREEN_RESOLUTIONS,
} from "../../constants";

export const CoinsListWrapper = styled.section`
  position: relative;

  width: 100%;
  height: 100%;

  background-color: ${COLORS.ruskinBlueColor};

  font-family: 'Montserrat', sans-serif;
`;

export const CoinsListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  
  margin: 0 auto;
  padding-top: 20px;

  max-width: 750px;

  @media screen and (max-width: ${SCREEN_RESOLUTIONS.laptop}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
