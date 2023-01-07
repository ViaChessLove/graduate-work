import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants';
import { DotProps } from '../../types';

export const Animation = keyframes`
  0%, 100% {
    margin-top: 0;
  }

  50% {
    margin-top: 2rem;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;

  padding-top: 30vh;

  height: 100vh;
  width: 100vw;

  background-color: ${COLORS.carrierPigeonBlue};
  color: ${COLORS.white};
`;

export const Dot = styled.div`
  background-color: ${COLORS.duckEggBlue};
  border-radius: 50%;

  width: 0.75rem;
  height: 0.75rem;

  margin: 0 0.25rem;

  animation: ${Animation} 1s infinite;
  animation-delay: ${(props: DotProps) => props.delay};
`;