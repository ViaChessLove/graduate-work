import { Link } from 'react-router-dom';
import styled from "styled-components";

import { COLORS, SCREEN_RESOLUTIONS } from "../../constants";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  height: 40px;

  background-color: ${COLORS.oreBluishBlack};

  color: ${COLORS.poisonousIceCream};
  
  z-index: 1;
`;

export const HeaderContent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;

  padding: 10px;
  margin: 0 auto;

  max-width: 900px;

  font-family: 'Neucha', cursive;
`;

export const HeaderRoutes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  width: 150px;

  @media screen and (max-width: ${SCREEN_RESOLUTIONS.mobileL}) {
    width: 100px;
  }
`;

export const HeaderRoute = styled(Link)`
  color: inherit;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  text-decoration: none;

  @media screen and (max-width: ${SCREEN_RESOLUTIONS.mobileL}) {
    font-size: 14px;
  }
`;
