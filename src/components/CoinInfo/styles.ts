import styled from 'styled-components';

import { COLORS, SCREEN_RESOLUTIONS } from './../../constants';

export const CoinInfoContainer = styled.div`
  margin-bottom: 40px;
`;

export const CoinItem = styled.div`
  margin-top: 10px;
  width: 100%;

 &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CoinInfoPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px dashed ${COLORS.riveraSea};

  margin-bottom: 10px;
  padding: 10px;

  @media screen and (max-width: ${SCREEN_RESOLUTIONS.mobileL}) {
    flex-wrap: wrap;
  };
`;

export const PartTitle = styled.span`
  display: block;

  font-size: 18px;
  font-weight: 600;

  &:after {
    content: ":";
  }
`;

export const PartContent = styled.span`
  display: block;

`;

export const CoinWebsiteLink = styled.a`
  display: block;

  color: ${COLORS.duckEggBlue};

  text-decoration: none;

  cursor: pointer;

  @media screen and (max-width: ${SCREEN_RESOLUTIONS.mobileL}) {

  };
`;
