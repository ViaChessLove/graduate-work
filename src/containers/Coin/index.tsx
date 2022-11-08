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
import { CoinDescription, CoinImageContent, CoinTitleWrapper, CoinWrapper} from './CoinStyles';
import { ContentWithCoinsOrNewsContainer, H1 } from '../../GlobalStyles';
import { COLORS } from '../../constants';

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

  useEffect(() => {
    dispatch(slice.resetCoin());
    dispatch(slice.setUuid(uuid));
    dispatch(slice.getCoin());
  }, [location])

  // chart data

  // TODO: move data in store change data in saga side effect

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: coin?.name,
      },
    },
  }

  const labels = coin?.sparkline.map((spark: string, sparkIndex: number) => `${sparkIndex}h`);

  const data = {
    labels,
    datasets: [
      {
        label: coin?.symbol,
        data: coin?.sparkline.map((spark: string, sparkline) => Number(spark)),
        borderColor: COLORS.bioticGrasp,
        backgroundColor: COLORS.carrierPigeonBlue,
      }
    ]
  }

  console.log(labels);

  return (
    <>
      {isLoading ? (
        <div>
          Loading...
        </div>
      ) : (
        <CoinWrapper>
          <ContentWithCoinsOrNewsContainer>
            <CoinTitleWrapper>
              <H1>
                {coin?.name}
              </H1>
              <CoinImageContent
                src={coin?.iconUrl}
                alt={`icon-${coin?.name}`}
              />
            </CoinTitleWrapper>
            <CoinDescription dangerouslySetInnerHTML={{__html: (coin?.description)}} />
            {/*Radio buttons on change time period*/}
            {/*Chart*/}
            <Line
              options={options}
              data={data}
            />
          </ContentWithCoinsOrNewsContainer>
        </CoinWrapper>
      )}
    </>
  )
}

export default Coin;
