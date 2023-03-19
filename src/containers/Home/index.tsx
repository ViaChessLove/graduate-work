import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  getCoin,
  makeSelectChartData,
  makeSelectCoinData,
  makeSelectTimePeriod,
  resetCoin,
  setUuid,
  updateTimePeriod,
} from '@/redux/CoinSlice';

import {
  CoinsListWrapper,
  CoinsListContainer,
} from '@/components/CoinsList/CoinsListStyles';
import { makeSelectIsLoading } from '@/redux/CoinsSlice';
import Loader from '@/components/Loader';
import { COLORS } from '@/constants';
import { H1 } from '@/GlobalStyles';
import { Link } from 'react-router-dom';
import { ChartWrapper, CoinImageContent } from '../Coin/CoinStyles';
import { makeSelectExchangeData } from '@/redux/ExchangeSlice';
import Button from '@/components/Button';
import { formatPrice } from '@/utils/helpers';
import { Line } from 'react-chartjs-2';
import { OPTIONS } from '@/constants';
import Change from '@/components/Change';

const HomeListWrapper = styled(CoinsListWrapper)`
  background-color: ${COLORS.white}; 
`;

const HomeListContainer = styled(CoinsListContainer)`
  flex-flow: column;

  font-family: 'Neucha';
`;

const FavoriteCoinSection = styled.section`
  margin-bottom: 20px;
`;

const FavortieCoinButton = styled.div`
  width: 100%;
  height: 100%;

  color: ${COLORS.black};
`;

const FavoriteCoinLinkContent = styled.div`
  padding: 20px;
  border: 2px solid ${COLORS.ruskinBlueColor};
  border-radius: 20px;
`;

const FavoriteCoinTitleContainer = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  text-decoration: none !important;
  margin-bottom: 10px;
`;

const FavoriteExchangeTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavoriteCoinTitle = styled.span`
  display: block;

  font-size: 20px;
  color: ${COLORS.black};
`;

const FavoriteCoinLinkWrapper = styled.div`
  border: 1px dashed ${COLORS.oreBluishBlack};
  padding: 5px 10px;

  margin-bottom: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const FavoriteCoinLinkItem = styled.a`
  display: block;

  text-decoration: none;
  color: ${COLORS.carrierPigeonBlue};
  font-size: 16px;
`;

const FavInfo = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 18px;
  color: ${COLORS.black};

  margin-bottom: 10px;
`;

const Home = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectIsLoading);

  const favCoinUuid = localStorage.getItem('favoriteCoin');
  const favExchangeUuid = localStorage.getItem('favoriteExchange');

  const hasFavoriteCoin = !!favCoinUuid;

  const coin = useSelector(makeSelectCoinData);

  const exchange = useSelector(makeSelectExchangeData);
  
  const data = useSelector(makeSelectChartData);

  const timePeriod = useSelector(makeSelectTimePeriod);

  const favoriteExchange = exchange?.find(({ uuid }: string) => uuid === favExchangeUuid) || null;

  const [isFavoritesCleared, setIsFavoritesCleared] = useState<boolean>(false);
  const [isCoinInfoExtracted, setIsCoinInfoExtracted] = useState<boolean>(false);
  
  useEffect(() => {
    if (hasFavoriteCoin) {
      dispatch(setUuid(favCoinUuid));

      dispatch(getCoin());
    }

    return () => {
      dispatch(resetCoin());
    }
  }, [dispatch, isLoading, exchange]);

  if (isLoading || (data === null && hasFavoriteCoin)) return <Loader />;

  const handleRemoveAllFavorites = () => {
    localStorage.clear();
    setIsFavoritesCleared(true);
  };
  
  return (
    <HomeListWrapper>
      <HomeListContainer>
        {!hasFavoriteCoin && !favoriteExchange && (
          <FavoriteCoinSection>
            <H1 isBlock marginBottom="20px">
              You have no favorite coins or exchanges.
            </H1>
            <div>
              If you want to choose your favorite coin, you can pick it&nbsp;
              <Link to={`/exchanges`}>
                here
              </Link> or&nbsp;
              <Link to={`/coins`}>
                here
              </Link>
            </div>
          </FavoriteCoinSection>
        )}
        {hasFavoriteCoin && !isFavoritesCleared && (
          <FavoriteCoinSection>
            <H1 isBlock marginBottom="20px">
              Your favorite coin:
            </H1>
            <FavortieCoinButton
              onMouseOver={() => setIsCoinInfoExtracted(true)}
              onMouseOut={() => setIsCoinInfoExtracted(false)}
            >
              <FavoriteCoinLinkContent>
                <FavoriteCoinTitleContainer to={`/coin/${favCoinUuid}`}>
                  <FavoriteCoinTitle>
                    {coin?.name}
                  </FavoriteCoinTitle>
                  <CoinImageContent
                    src={coin?.iconUrl}
                    alt={`icon--${coin?.iconUrl}`}
                  />
                </FavoriteCoinTitleContainer>
                {isCoinInfoExtracted && (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button disabled={timePeriod === '24h'} onClick={() => {dispatch(updateTimePeriod('24h'))}}>
                        Show 24h stats
                      </Button>
                      <Button disabled={timePeriod === '7d'} onClick={() => {dispatch(updateTimePeriod('7d'))}}>
                        Show 7d stats
                      </Button>
                      <Button disabled={timePeriod === '30d'} onClick={() => {dispatch(updateTimePeriod('30d'))}}>
                        Show 30d stats
                      </Button>
                    </div>
                    <FavInfo>
                      Peak price - {formatPrice(coin?.allTimeHigh.price)}$
                    </FavInfo>
                    <FavInfo>
                      Price - {formatPrice(coin?.price)}$
                    </FavInfo>
                    <FavInfo>
                      Change - {(
                        <Change
                          change={Number(coin?.change)}
                        />
                      )}
                    </FavInfo>
                    <FavInfo>
                      Number of markets - {coin?.numberOfMarkets}
                    </FavInfo>
                    <FavInfo>
                      Number of exchanges - {coin?.numberOfExchanges}
                    </FavInfo>
                    <ChartWrapper>
                      <Line
                        options={OPTIONS}
                        data={data}
                      />
                    </ChartWrapper>
                    {coin?.links.length > 0 && (
                      <H1 isBlock marginBottom="10px">
                        Links:
                      </H1>
                    )}
                    {coin?.links.map(({ name, url }) => (
                      <FavoriteCoinLinkWrapper key={url}>
                        <FavoriteCoinLinkItem href={url}>
                          {name}
                        </FavoriteCoinLinkItem>
                      </FavoriteCoinLinkWrapper>
                    ))}
                    {coin?.tags.length > 0 && (
                      <H1 isBlock marginBottom="10px">
                        Tags:
                      </H1>
                    )}
                    {coin?.tags.map((tag) => (
                      <FavoriteCoinLinkWrapper key={tag}>
                        #{tag}
                      </FavoriteCoinLinkWrapper>
                    ))}
                  </>
                )}
              </FavoriteCoinLinkContent>
            </FavortieCoinButton>
          </FavoriteCoinSection>
        )}
        {favoriteExchange && !isFavoritesCleared && (
          <FavoriteCoinSection>
            <H1 isBlock marginBottom="20px">
              Your favorite exchange:
            </H1>
            <FavoriteCoinLinkContent>
              <FavoriteExchangeTitleContainer>
                  <FavoriteCoinTitle>
                    {favoriteExchange?.name}
                  </FavoriteCoinTitle>
                  <CoinImageContent
                    src={favoriteExchange?.iconUrl}
                    alt={`icon--${favoriteExchange?.iconUrl}`}
                  />
              </FavoriteExchangeTitleContainer>
            </FavoriteCoinLinkContent>
          </FavoriteCoinSection>
        )}
        <Button disabled={false} onClick={handleRemoveAllFavorites}>
          Remove all favorites
        </Button>
      </HomeListContainer>
    </HomeListWrapper>
  );
};

export default Home;
