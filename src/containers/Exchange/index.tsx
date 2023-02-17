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
import {
  CoinsListContainer,
  CoinsListWrapper,
} from '../../components/CoinsList/CoinsListStyles';
import { CoinImageContent, CoinNameContent, ExchangeContainer, ExchangeWrapper } from '../../components/CoinItem/CoinStyles';
import ExchangeItem from '../../components/ExchangeItem';

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
          <CoinsListWrapper>
            <CoinsListContainer>
              {exchanges?.map(({ uuid, name, iconUrl}) => (
                <ExchangeItem
                  key={uuid}
                  name={name}
                  iconUrl={iconUrl}
                />
              ))}
            </CoinsListContainer>
          </CoinsListWrapper>
        )
      }
    </>
  );
};

export default Exchange;
