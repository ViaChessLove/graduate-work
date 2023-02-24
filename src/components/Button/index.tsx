import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../constants';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children: string,
  ref?: React.RefObject<HTMLButtonElement>,
  disabled: boolean,
  style?: React.CSSProperties,
}

const ButtonWrapper = styled.button`
  display: block;

  padding: 20px;
  margin-bottom: 24px;

  font-family: Neucha;
  color: ${COLORS.white};
  background-color: ${COLORS.stegadonScaleGreen};
  font-size: 20px;
  
  transition: .5s ease-in-out;

  ${(props) => props.disabled && css`
    background-color: ${COLORS.duckEggBlue};
    color: ${COLORS.white};
    pointer-events: none;
  `}

  &:hover {
    cursor: pointer;

    background-color: ${COLORS.white};
    color: ${COLORS.stegadonScaleGreen};
  }
`;

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  ref,
  disabled,
  style,
}) => {
  return (
    <ButtonWrapper
      disabled={disabled}
      ref={ref}
      onClick={onClick}
      style={style}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
