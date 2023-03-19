import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  COLORS,
  SCREEN_RESOLUTIONS,
} from '@/constants';

export const CoinContainer = styled(Link)`
  position: relative;
  
  transition: .5s ease-in-out;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 20px;

  background-color: ${COLORS.white};
  color: ${COLORS.ruskinBlueColor};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  text-decoration: none;

  height: 50px;
  width: 40%;
  
  padding: 20px;
  margin-bottom: 20px;

  &:nth-child(2n) {
    margin-left: 30px;
  }

  @media screen and (max-width: ${SCREEN_RESOLUTIONS.laptop}) {
    width: 100%;

    &:nth-child(2n) {
      margin-left: unset;
    }
  }
`;

export const ExchangeWrapper = styled.div`
  position: relative;
  
  transition: .5s ease-in-out;

  border-radius: 20px;

  background-color: ${COLORS.white};
  color: ${COLORS.ruskinBlueColor};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  text-decoration: none;

  width: 100%;
  height: fit-content;
  
  padding: 20px;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const ExchangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CoinImageContent = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;

export const CoinNameContent = styled.span`
  display: block;

  color: ${COLORS.black};

  font-weight: 650;
`;

export const PriceNameContent = styled.span`
  display: block;

  font-weight: 650;
`;
