import React, {
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useLocation,
} from 'react-router-dom';
import * as slice from '../../redux/CoinSlice';
import { getUuidFromPathName } from '../../utils/helpers';
import { makeSelectCoinData } from '../../redux/CoinSlice/index';

const Coin = () => {
  const location = useLocation();

  const { pathname } = location;

  const uuid = getUuidFromPathName(pathname);
  const dispatch = useDispatch();

  const coin = useSelector(makeSelectCoinData);
  const isLoading = useSelector(slice.makeSelectIsLoading);

  useEffect(() => {
    dispatch(slice.resetCoin());
    dispatch(slice.setUuid(uuid));
    dispatch(slice.getCoin());
  }, [location])
  return (
    <>
      {isLoading ? (
        <div>
          Loading...
        </div>
      ) : (
        <div>
          {coin?.name}
          <img
            src={coin?.iconUrl}
            alt={`icon-${coin?.name}`}
          />
          <div dangerouslySetInnerHTML={{__html: coin?.description}}></div>
        </div>
      )}
    </>
  )
}

export default Coin;
