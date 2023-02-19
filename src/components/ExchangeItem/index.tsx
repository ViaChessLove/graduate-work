import {
  FC,
  useState,
} from 'react';

import { CoinImageContent, CoinNameContent, ExchangeContainer, ExchangeWrapper } from "../CoinItem/CoinStyles";
import { CollapseH1, CollapseInfo } from './styled';

interface ExchangeItemProps {
  iconUrl: string,
  name: string,
  verified: boolean,
  recommended: boolean,
  price: number,
  coinrankingUrl: string,
  numberOfMarkets: number,
}

const ExchangeItem: FC<ExchangeItemProps> = ({
  iconUrl,
  name,
  verified,
  recommended,
  price,
  coinrankingUrl,
  numberOfMarkets,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
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
            <span>
              Exchange is verified
            </span>
          )}
          {recommended && (
            <span>
              Exchange is recommended
            </span>
          )}
          <span>
            Current price - {price}$
          </span>

          <CollapseH1>
            Extended information:
          </CollapseH1>
          <a
            href={coinrankingUrl}
            rel="noreferrer"
            target="_blank"
          >
            Coin ranking url
          </a>
          <span>
            Number of markets: {numberOfMarkets}
          </span>
        </CollapseInfo>
      )}
    </ExchangeWrapper>
  );
};

export default ExchangeItem;
