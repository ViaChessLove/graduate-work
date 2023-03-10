import React from 'react';
import { Dot, LoadingWrapper } from './styles';

const DOTS = [
  '0s',
  '0.05s',
  '0.1s',
  '0.15s',
  '0.2s',
  '0.25s',
  '0.3s',
]

const Loader = () => (
  <LoadingWrapper>
    {DOTS.map((delay, delayIndex) => (
      <Dot key={delayIndex} delay={delay} />
    ))}
  </LoadingWrapper>
);

export default Loader;
