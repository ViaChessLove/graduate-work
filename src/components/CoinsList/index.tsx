import React from 'react'
import { useSelector } from 'react-redux';

import { makeSelectCoinsSliceCoins } from '../../redux/CoinSlice/index';
import { CoinsListProps } from '../../types';
import Coin from '../Coin';

import {
  CoinsListContainer,
  CoinsListWrapper,
} from './CoinsListStyles';

const CoinsList = () => {
  const coins: any = useSelector(makeSelectCoinsSliceCoins);
  console.log(coins);
  return (
    <CoinsListWrapper>
      <CoinsListContainer>
        {coins?.map(({
            name,
            price,
            btcPrice,
            iconUrl,
          }: CoinsListProps,
          coinIndex: number,
        ) => (
          <Coin
            key={`coin--${coinIndex}`}
            name={name}
            btcPrice={btcPrice}
            iconUrl={iconUrl}
            price={price}
          />
        ))}
      </CoinsListContainer>
    </CoinsListWrapper>
  )
}

export default CoinsList;
