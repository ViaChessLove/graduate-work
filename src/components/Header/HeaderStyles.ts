import { Link } from 'react-router-dom';

import styled from "styled-components";
import { COLORS } from "../../constants";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  height: 40px;

  background-color: ${COLORS.oreBluishBlack};

  color: ${COLORS.poisonousIceCream};
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

  width: 150px;
`;

// TODO: заменить на Link react-router'а
export const HeaderRoute = styled(Link)`
  color: inherit;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  text-decoration: none;
`;
