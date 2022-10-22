import styled from "styled-components";
import { COLORS } from "../../constants";

export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  
  width: 100%;
  height: 80px;

  background-color: ${COLORS.stegadonScaleGreen};

  color: ${COLORS.carrierPigeonBlue};

  font-family: 'Neucha', cursive;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;

  margin: 0 auto;
  padding-top: 20px;

  text-align: center;

  max-width: 900px;
`;
