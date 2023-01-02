import styled from "styled-components";
import { COLORS } from "../../constants";

export const CoinWrapper = styled.div`
  position: relative;

  background-color: ${COLORS.white};

  color: ${COLORS.oreBluishBlack};

  width: 100%;
  height: 100%;
`;

export const CoinTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  width: 100%;
`;

export const CoinImageContent = styled.img`

  width: 70px;
  height: 70px;

  border-radius: 50%;

  object-fit: cover;
`;

export const CoinDescription = styled.div`
  border: 2px solid ${COLORS.carrierPigeonBlue};

  margin-bottom: 40px;

  height: 150px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1px;
  };

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.oreBluishBlack};
    outline: 1px solid ${COLORS.stegadonScaleGreen};
  };

  font-size: 18px;
  padding: 15px;

  a {
    color: ${COLORS.duckEggBlue};

    text-decoration: none;
  }

  p {
    margin-bottom: 10px;
  }
`

export const CoinGraphOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  margin-bottom: 20px;
`;

export const ChartWrapper = styled.div`
  margin-bottom: 30px;
`;
