import styled from 'styled-components';
import { COLORS } from '@/constants';

export const SelectComponent = styled.select`
  display: block;

  text-align: center;

  font-family: Neucha;
  font-size: 16px;
  line-height: 30px;

  padding: 5px;

  cursor: pointer;

  width: 200px;

  border: 3px solid ${COLORS.stegadonScaleGreen};

  ::-webkit-scrollbar {
    width: 2px;
  };

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.oreBluishBlack};
    outline: 1px solid ${COLORS.stegadonScaleGreen};
  };
`;

export const SelectOption = styled.option`
  display: inline-block;

  padding: 10px;

  font-family: Neucha;
`;
