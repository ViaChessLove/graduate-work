import { CoinsListProps } from '../../types';
import { formatPrice } from '../../utils/helpers';

import * as styles from './CoinStyles';
import Change from '../Change';

const Coin = (props: CoinsListProps) => {
  const {
    iconUrl,
    name,
    price,
    change,
    uuid,
    symbol,
  } = props;

  return (
    <styles.CoinContainer
      to={`/coin/${uuid}`}
    >
      <styles.CoinImageContent
        src={iconUrl}
        alt={`icon--${iconUrl}`}
      />
      <styles.CoinNameContent>
        {symbol}
      </styles.CoinNameContent>
      <styles.PriceNameContent>
        {`${formatPrice(price)}$`}
      </styles.PriceNameContent>
      <Change
        change={Number(change)}
      />
    </styles.CoinContainer>
  )
}

export default Coin;
