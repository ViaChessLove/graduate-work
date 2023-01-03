import React from 'react';

import { CoinInfoProps } from '../../types';
import { H1 } from '../../GlobalStyles';
import { CoinWebsiteLink } from './styles';
import {
  CoinInfoContainer,
  CoinInfoPart,
  CoinItem,
  PartContent,
  PartTitle,
} from './styles';
import { PartTag, PartTags } from '../../containers/Coin/CoinStyles';

const CoinInfo = (props: CoinInfoProps) => {
  const { coinInfoData } = props;

  const filteredCoins = coinInfoData
    .filter((coin) => coin);

  const isMultipleCoins = filteredCoins.length > 1;

  return (
    <CoinInfoContainer>
      <H1 isBlock >
        Short information:
      </H1>
      {filteredCoins
        .map(({
          uuid,
          websiteUrl,
          name,
          rank,
          change,
          numberOfMarkets,
          tier,
          tags,
        }, coinIndex) => (
          <CoinItem
            key={`coinInfo-${uuid}`}
          >
            {isMultipleCoins && (
              <CoinInfoPart>
                <PartTitle>
                  CoinTitle
                </PartTitle>
                <PartContent>
                 {name}
                </PartContent>
              </CoinInfoPart>
            )}
            <CoinInfoPart>
              <PartTitle>
                WebSiteUrl
              </PartTitle>
              <CoinWebsiteLink
                href={websiteUrl}
                target="_blank"
              >
                {websiteUrl}
              </CoinWebsiteLink>
            </CoinInfoPart>
            <CoinInfoPart>
              <PartTitle>
                Rank
              </PartTitle>
              <PartContent>
                {rank}
              </PartContent>
            </CoinInfoPart>
            <CoinInfoPart>
              <PartTitle>
                Change
              </PartTitle>
              <PartContent>
                {change}
              </PartContent>
            </CoinInfoPart>
            <CoinInfoPart>
              <PartTitle>
                Number Of Markets
              </PartTitle>
              <PartContent>
                {numberOfMarkets}
              </PartContent>
            </CoinInfoPart>
            <CoinInfoPart>
              <PartTitle>
                Tier
              </PartTitle>
              <PartContent>
                {tier}
              </PartContent>
            </CoinInfoPart>
            <CoinInfoPart>
              <PartTitle>
                Tags
              </PartTitle>
              <PartTags>
                {tags.map((tag) => (
                  <PartTag
                    key={`tag-${tag}`}
                  >
                    {tag}
                  </PartTag>
                ))}
              </PartTags>
            </CoinInfoPart>
            {isMultipleCoins
              && (filteredCoins.length !== coinIndex + 1)
              && (
              <hr />
            )}
          </CoinItem>
        ))}
    </CoinInfoContainer>
  );
};

export default CoinInfo;
