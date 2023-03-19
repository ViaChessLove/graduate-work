import styled from "styled-components";

import {
  COLORS,
  SCREEN_RESOLUTIONS,
} from '@/constants';

export const CoinsListWrapper = styled.section`

  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 20px;

  background-color: ${COLORS.ruskinBlueColor};

  font-family: 'Montserrat', sans-serif;
`;

export const CoinsListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  
  margin: 0 auto;
  padding-top: 20px;

  max-width: 750px;

  @media screen and (max-width: ${SCREEN_RESOLUTIONS.laptop}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const CoinsListOptions = styled.div`
  display: flex;
  justify-content: center;

  gap: 10px;

  margin: 0 auto;
  padding-top: 20px;

  max-width: 650px;

  @media screen and (max-width: ${SCREEN_RESOLUTIONS.laptop}) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: ${SCREEN_RESOLUTIONS.mobileL}) {
    flex-direction: column;
    align-items: center;
  }
`;
