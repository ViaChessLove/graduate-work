import { useLayoutEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import CoinsList from '../../components/CoinsList';

import {
  getCoins,
  makeSelectIsLoading,
} from '../../redux/CoinsSlice';

const Coins = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectIsLoading);

  useLayoutEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

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
