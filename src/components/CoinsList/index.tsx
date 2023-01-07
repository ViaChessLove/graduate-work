import React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  makeSelectCoinsSliceCoins,
  makeSelectSearchParams,
  searchCoins,
  paginateTo,
} from '../../redux/CoinsSlice/index';

import { CoinsListProps } from '../../types';
import Coin from '../CoinItem';

import {
  CoinsListContainer,
  CoinsListOptions,
  CoinsListWrapper,
} from './CoinsListStyles';
import Input from '../Input';
import Pagination from '../Pagination';

const CoinsList = () => {
  const dispatch = useDispatch();

  const search = useSelector(makeSelectSearchParams);

  const coins = useSelector(makeSelectCoinsSliceCoins);

  const handleChangeInput = ({ target }) => {
    dispatch(searchCoins(target.value.trim(' ')));
  }

  const handleChangePage = ({ target }) => {
    dispatch(paginateTo(target.innerText));
  }

  // TODO: move search in home.
  // TODO: add pagination, sort (orderby), timeperiod
  

  return (
    <CoinsListWrapper>
      <CoinsListOptions>
        <Input
          onChange={handleChangeInput}
          value={search}
          placeholder="Search coin"
        />
        
      </CoinsListOptions>
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
        {!Boolean(coins) && ( // eslint-disable-line
          <>
            no coins
          </>
        )}
      </CoinsListContainer>
      <CoinsListOptions>
        <Pagination
          onClick={handleChangePage}
        />
      </CoinsListOptions>
    </CoinsListWrapper>
  )
}

export default CoinsList;
