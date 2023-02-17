import {
  FC,
  useState,
} from 'react';

import { CoinImageContent, CoinNameContent, ExchangeContainer, ExchangeWrapper } from "../CoinItem/CoinStyles";

interface ExchangeItemProps {
  iconUrl: string,
  name: string,
}

const ExchangeItem: FC<ExchangeItemProps> = ({
  iconUrl,
  name,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <ExchangeWrapper onClick={handleCollapse}>
      <ExchangeContainer>
        <CoinImageContent
          src={iconUrl}
          alt={iconUrl}
        />
        <CoinNameContent>
          {name}
        </CoinNameContent>
      </ExchangeContainer>
      {!isCollapsed && (
        <>
          collapse
        </>
      )}
    </ExchangeWrapper>
  );
};

export default ExchangeItem;
