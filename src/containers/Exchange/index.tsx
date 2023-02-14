import {
  FC,
  useEffect,
} from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  exchangesRequest,
  makeSelectExchangeData,
  makeSelectIsLoading,
  resetExchanges,
} from '../../redux/ExchangeSlice';

import Loader from '../../components/Loader';

const Exchange: FC = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectIsLoading);

  const exchanges: [] = useSelector(makeSelectExchangeData);

  useEffect(() => {
    dispatch(exchangesRequest());

    return () => {
      dispatch(resetExchanges());
    };
  }, []);
  
  return (
    <>
      {isLoading
        ? (
          <Loader />
        ) : (
          <div>
            {exchanges?.map((exchange) => (
              <div key={exchange.uuid}>
                {exchange.uuid}
                {exchange.name}
                <img src={exchange.iconUrl} />
              </div>
            ))}
            {exchanges && exchanges.length}
          </div>

        )
      }
    </>
  );
};

export default Exchange;
