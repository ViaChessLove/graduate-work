import React from 'react'
import { CoinsListProps } from '../../types';
import { CoinImageContent } from './CoinStyles';

const Coin = (props: CoinsListProps) => {
  const {
    iconUrl,
    name,
    btcPrice,
    price
  } = props;

  return (
    <div>
      <CoinImageContent
        src={iconUrl}
        alt={`icon--${iconUrl}`}
      />
      <div>
        {`Title - ${name}`}
      </div>
      <div>
        {`${price}$`}
      </div>
      <div>
        {`btcPrice - ${btcPrice}`}
      </div>
      <hr/>
    </div>
  )
}

export default Coin;
