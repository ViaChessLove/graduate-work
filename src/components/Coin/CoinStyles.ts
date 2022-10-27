import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants';

export const CoinContainer = styled(Link)`
  position: relative;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 20px;

  background-color: ${COLORS.white};
  color: ${COLORS.ruskinBlueColor};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  text-decoration: none;

  height: 50px;
  width: 100%;
  
  padding: 20px;
  margin-bottom: 20px;
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
