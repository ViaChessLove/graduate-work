import React, {
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  useLocation,
} from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import * as slice from '../../redux/CoinSlice';
import { makeSelectCoinsSliceCoins } from '../../redux/CoinsSlice';
import { getUuidFromPathName } from '../../utils/helpers';
import * as coinStyles from './CoinStyles';
import { ContentWithCoinsOrNewsContainer, H1 } from '../../GlobalStyles';
import { OPTIONS } from '../../constants';

import { COIN_OPTIONS_TITLE } from './messages';
import Select from '../../components/SelectC';
import CoinInfo from '../../components/CoinInfo';
import Loader from '../../components/Loader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Coin = () => {
  const location = useLocation();

  const { pathname } = location;

  const uuid = getUuidFromPathName(pathname);
  const dispatch = useDispatch();

  const coin = useSelector(slice.makeSelectCoinData);
  const compareCoin = useSelector(slice.makeSelectComparableCoinData)
  const isLoading = useSelector(slice.makeSelectIsLoading);
  const data = useSelector(slice.makeSelectChartData);
  const coins = useSelector(slice.makeSelectSelectCoins);

  useEffect(() => {
    dispatch(slice.setUuid(uuid));
    dispatch(slice.getCoin());

    return () => {
      dispatch(slice.resetCoin());
    }
  }, [dispatch, location]);

  const isNullData = data === null;

  const handleSelectChange = ({ target }) => {
    if (target.value) {
      dispatch(slice.updateCompareCoin(target.value));
    }
  };

  const coinInfoData = [coin, compareCoin];

  return (
    <>
      {isLoading || isNullData ? (
        <Loader />
      ) : (
        <coinStyles.CoinWrapper>
          <ContentWithCoinsOrNewsContainer>
            <coinStyles.CoinTitleWrapper>
              <H1>
                {coin?.name}
              </H1>
              <coinStyles.CoinImageContent
                src={coin?.iconUrl}
                alt={`icon-${coin?.name}`}
              />
            </coinStyles.CoinTitleWrapper>
            <coinStyles.CoinDescription dangerouslySetInnerHTML={{__html: (coin?.description)}} />
            {/*Radio buttons on change time period*/}
            {/*Compare datasets by uuid */}
            <coinStyles.CoinGraphOptions>
              <H1 isBlock >
                {COIN_OPTIONS_TITLE}
              </H1>
              <Select
                onChange={handleSelectChange}
                coins={coins}
                description={'Choose coin'}
              />
            </coinStyles.CoinGraphOptions>
            <coinStyles.ChartWrapper>
              <Line
                options={OPTIONS}
                data={data}
              />
            </coinStyles.ChartWrapper>
            <CoinInfo
              coinInfoData={coinInfoData}
            />
          </ContentWithCoinsOrNewsContainer>
        </coinStyles.CoinWrapper>
      )}
    </>
  )
}

export default Coin;
