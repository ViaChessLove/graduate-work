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
  border: 3px solid ${COLORS.oreBluishBlack};

  object-fit: cover;
`;

export const CoinDescription = styled.div`
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
