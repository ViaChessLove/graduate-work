import React from 'react';

import { CoinInfoProps } from '../../types';
import { H1 } from '../../GlobalStyles';
import {
  CoinInfoContainer,
  CoinItem,
} from './styles';

const CoinInfo = (props: CoinInfoProps) => {
  const { coinInfoData } = props;

  const isMultipleCoins = coinInfoData.length > 1;

  return (
    <CoinInfoContainer>
      <H1 isBlock >
        Short information
      </H1>
      {coinInfoData
        .filter((coin) => coin)
        .map(({
          uuid,
          websiteUrl,
          name,
          rank,
          change,
          numberOfMarkets,
          tier,
          tags,
        }) => (
          <CoinItem
            key={`coinInfo-${uuid}`}
          >
            {isMultipleCoins && (
              <>
                CoinTitle - {name}
              </>
            )}
            WebSiteUrl - {websiteUrl}
            Rank - {rank}
            Change - {change}
            Number Of Markets - {numberOfMarkets}
            Tier - {tier}
            Tags - {tags.map((tag) => (
              <>
                {tag}
              </>
            ))}
          </CoinItem>
        ))}
    </CoinInfoContainer>
  );
};

export default CoinInfo;
