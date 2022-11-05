import styled from "styled-components";
import { COLORS } from "../../constants";

export const ChangeWrapper = styled.span`
  display: block;

  font-weight: 700;
`;

export const IncreaseChangeWrapper = styled(ChangeWrapper)`
  color: ${COLORS.green};

  &:after {
    content: " ⮝";
  }
`;

export const NotChangingWrapper = styled(ChangeWrapper)`
  color: ${COLORS.yellow};
`;

export const DecreaseChangeWrapper = styled(ChangeWrapper)`
  color: ${COLORS.red};

  &:after {
    content: " ⮟";
  }
`;
