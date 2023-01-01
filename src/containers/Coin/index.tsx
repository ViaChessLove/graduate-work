import React, {
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useLocation,
} from 'react-router-dom';
import * as slice from '../../redux/CoinSlice';
import { getUuidFromPathName } from '../../utils/helpers';
import { makeSelectCoinData } from '../../redux/CoinSlice/index';
import * as coinStyles from './CoinStyles';
import { ContentWithCoinsOrNewsContainer, H1 } from '../../GlobalStyles';
import { COLORS, OPTIONS } from '../../constants';

import { Line } from 'react-chartjs-2';
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

  const coin = useSelector(makeSelectCoinData);
  const isLoading = useSelector(slice.makeSelectIsLoading);
  const data = useSelector(slice.makeSelectChartData);

  //test
  useEffect(() => {
    dispatch(slice.setUuid(uuid));
    dispatch(slice.getCoin());
  }, []);


  const isNullData = data === null;

  return (
    <>
      {isLoading || isNullData ? (
        <div>
          Loading...
        </div>
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
            {/*Chart*/}
            {/*Compare datasets by uuid */}

            <Line
              options={OPTIONS}
              data={data}
            />
          </ContentWithCoinsOrNewsContainer>
        </coinStyles.CoinWrapper>
      )}
    </>
  )
}

export default Coin;
