import React from 'react';
import { useSelector } from 'react-redux';

import { makeSelectCoinsSliceCoins } from '../../redux/CoinsSlice/index';
import { CoinsListProps } from '../../types';
import Coin from '../CoinItem';

import {
  CoinsListContainer,
  CoinsListWrapper,
} from './CoinsListStyles';

const CoinsList = () => {
  const coins = useSelector(makeSelectCoinsSliceCoins);
  console.log(coins);
  return (
    <CoinsListWrapper>
      <CoinsListContainer>
        {coins?.map(({
            name,
            price,
            btcPrice,
            iconUrl,
            rank,
            sparkline,
            change,
            uuid,
            symbol,
          }: CoinsListProps,
          coinIndex: number,
        ) => (
          <Coin
            key={`coin--${coinIndex}`}
            name={name}
            btcPrice={btcPrice}
            iconUrl={iconUrl}
            price={price}
            rank={rank}
            sparkline={sparkline}
            change={change}
            uuid={uuid}
            symbol={symbol}
          />
        ))}
      </CoinsListContainer>
    </CoinsListWrapper>
  )
}

export default CoinsList;
