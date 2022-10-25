import styled from "styled-components";
import { COLORS } from "../../constants";

export const NotFoundWrapper = styled.div`
  position: fixed;

  font-family: 'Neucha', 'Montserrat';

  width: 100%;
  height: 100vh;
  
  background-color: ${COLORS.stegadonScaleGreen};

  color: ${COLORS.white};
`;

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  
  margin: 0 auto;
  padding-top: 35vh;
`;