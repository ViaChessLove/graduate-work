import React from 'react';
import { Dot, LoadingWrapper } from './styles';

const Loader = () => (
  <LoadingWrapper>
    <Dot delay="0s" />
    <Dot delay="0.05s" />
    <Dot delay="0.1s" />
    <Dot delay="0.15s" />
    <Dot delay="0.2s" />
    <Dot delay="0.25s" />
    <Dot delay="0.3s" />
  </LoadingWrapper>
);

export default Loader;
