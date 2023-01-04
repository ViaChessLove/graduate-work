import { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useLocation } from 'react-router-dom';
import CoinsList from '../../components/CoinsList';

import {
  getCoins,
  makeSelectIsLoading,
  resetCoinsSlice,
} from '../../redux/CoinsSlice';

const Coins = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectIsLoading);

  useEffect(() => {
    dispatch(getCoins({
      limit: 10,
      offset: 0,
    }));

    return () => {
      dispatch(resetCoinsSlice());
    }
  }, [location]);

  return (
    <>
      {isLoading && (
        <>
          Loading ...
        </>
      )}
      {!isLoading && (
        <>
          <CoinsList />
        </>
      )}
    </>
  )
}

export default Coins;
