import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  useLocation,
} from 'react-router-dom';
import { getCoin } from '../../redux/CoinSlice';
import { getUuidFromPathName } from '../../utils/helpers';

const Coin = () => {
  const { pathname } = useLocation();

  const uuid = getUuidFromPathName(pathname);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoin(uuid));
  }, [dispatch])
  return (
    <>
    </>
  )
}

export default Coin;
