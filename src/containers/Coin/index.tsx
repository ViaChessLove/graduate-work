import React, {
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useLocation,
} from 'react-router-dom';
import * as slice from '../../redux/CoinSlice';
import { formatDescription, getUuidFromPathName } from '../../utils/helpers';
import { makeSelectCoinData } from '../../redux/CoinSlice/index';
import { CoinDescription, CoinImageContent, CoinTitleWrapper, CoinWrapper} from './CoinStyles';
import { ContentWithCoinsOrNewsContainer, H1 } from '../../GlobalStyles';

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
        <CoinWrapper>
          <ContentWithCoinsOrNewsContainer>
            <CoinTitleWrapper>
              <H1>
                {coin?.name}
              </H1>
              <CoinImageContent
                src={coin?.iconUrl}
                alt={`icon-${coin?.name}`}
              />
            </CoinTitleWrapper>
            <CoinDescription dangerouslySetInnerHTML={{__html: (coin?.description)}} />
            {/*Radio buttons on change time period*/}
            {/*Chart*/}
          </ContentWithCoinsOrNewsContainer>
        </CoinWrapper>
      )}
    </>
  )
}

export default Coin;
