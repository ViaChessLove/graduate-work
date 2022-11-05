import { useLayoutEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useLocation } from 'react-router-dom';
import CoinsList from '../../components/CoinsList';

import {
  getCoins,
  makeSelectIsLoading,
} from '../../redux/CoinsSlice';

const Coins = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectIsLoading);

  useLayoutEffect(() => {
    dispatch(getCoins());
  }, [dispatch, location]);

  return (
    <>
      {isLoading && (
        <>
          Loading ...
        </>
      )}
      {!isLoading && (
        <CoinsList />
      )}
    </>
  )
}

export default Coins;
