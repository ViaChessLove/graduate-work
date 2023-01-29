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
  updateCoinOrder,
  makeSelectOrderBy,
  updateOrderDirection,
  makeSelectOrderDirection,
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
import Select from '../SelectC';
import { ORDER_OPTIONS, ORDER_DIRECTIONS } from '../../constants';

const CoinsList = () => {
  const dispatch = useDispatch();

  const search = useSelector(makeSelectSearchParams);

  const coins = useSelector(makeSelectCoinsSliceCoins);

  const selectedOrder = useSelector(makeSelectOrderBy);
  const selectedDirection = useSelector(makeSelectOrderDirection);

  const handleChangeInput = ({ target }) => {
    dispatch(searchCoins(target.value.trim(' ')));
  }

  const handleChangePage = ({ target }) => {
    dispatch(paginateTo(target.innerText));
  }

  const handleChangeOrder = ({ target }) => {
    dispatch(updateCoinOrder(target.value));
  }

  const handleChangeOrderDirection = ({ target }) => {
    dispatch(updateOrderDirection(target.value));
  }

  return (
    <CoinsListWrapper>
      <CoinsListOptions>
        <Input
          onChange={handleChangeInput}
          value={search}
          placeholder="Search coin"
        />
        <Select
          onChange={handleChangeOrder}
          order={ORDER_OPTIONS}
          currentOption={selectedOrder}
        />
        <Select
          onChange={handleChangeOrderDirection}
          order={ORDER_DIRECTIONS}
          currentOption={selectedDirection}
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
            key={`coin--${uuid}--${price}`}
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
