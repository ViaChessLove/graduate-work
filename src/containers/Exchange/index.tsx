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
import ExchangeItem from '../../components/ExchangeItem';
import { formatPrice } from '../../utils/helpers';

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
              {exchanges?.map(({
                uuid,
                name,
                iconUrl,
                verified,
                recommended,
                price,
                coinrankingUrl,
                numberOfMarkets,
              }) => (
                <ExchangeItem
                  key={uuid}
                  name={name}
                  iconUrl={iconUrl}
                  verified={verified}
                  recommended={recommended}
                  price={Number(formatPrice(price))}
                  coinrankingUrl={coinrankingUrl}
                  numberOfMarkets={numberOfMarkets}
                  uuid={uuid}
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
