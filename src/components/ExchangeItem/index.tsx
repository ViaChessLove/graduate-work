import {
  FC,
  useState,
  useEffect,
} from 'react';

import { CoinImageContent, CoinNameContent, ExchangeContainer, ExchangeWrapper } from "../CoinItem/CoinStyles";
import { CollapseH1, CollapseInfo } from './styled';
import Button from '../Button';

interface ExchangeItemProps {
  iconUrl: string,
  name: string,
  verified: boolean,
  recommended: boolean,
  price: number,
  coinrankingUrl: string,
  numberOfMarkets: number,
  uuid: string,
}

const ExchangeItem: FC<ExchangeItemProps> = ({
  iconUrl,
  name,
  verified,
  recommended,
  price,
  coinrankingUrl,
  numberOfMarkets,
  uuid
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem('favoriteExchange') === uuid);

  useEffect(() => {
    if (localStorage.getItem('favoriteExchange') === uuid) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [isCollapsed]);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  const handleAddInFavorites = () => {
    localStorage.setItem('favoriteExchange', uuid);
    setIsFavorite(true);
  }
  
  const handleRemoveFromFavorites = () => {
    localStorage.removeItem('favoriteExchange');
    setIsFavorite(false);
  }

  return (
    <ExchangeWrapper>
      <ExchangeContainer onClick={handleCollapse}>
        <CoinImageContent
          src={iconUrl}
          alt={iconUrl}
        />
        <CoinNameContent>
          {name}
        </CoinNameContent>
      </ExchangeContainer>
      {!isCollapsed && (
        <CollapseInfo>
          <CollapseH1>
            Short information:
          </CollapseH1>
          {verified && (
            <div>
              Exchange is verified
            </div>
          )}
          {recommended && (
            <div>
              Exchange is recommended
            </div>
          )}
          <div style={{ marginBottom: '20px' }}>
            Current price - {price}$
          </div>
          <CollapseH1>
            Extended information:
          </CollapseH1>
          <a
            href={coinrankingUrl}
            rel="noreferrer"
            target="_blank"
            style={{ display: 'block' }}
          >
            Coin ranking url
          </a>
          <div style={{ marginBottom: '20px' }}>
            Number of markets: {numberOfMarkets}
          </div>
          {isFavorite ? (
            <Button
              onClick={handleRemoveFromFavorites}
              disabled={false}
              style={{ width: '100%' }}
            >
              Remove from favorites
            </Button>
          ) : (
            <Button
              onClick={handleAddInFavorites}
              disabled={false}
              style={{ width: '100%' }}
            >
              Add in favorites
            </Button>
          )}
        </CollapseInfo>
      )}
    </ExchangeWrapper>
  );
};

export default ExchangeItem;
