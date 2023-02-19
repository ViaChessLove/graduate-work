import React, {
  FC,
  useEffect,
  useRef,
  useState,
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

import { toPng } from 'html-to-image';

import { Line } from 'react-chartjs-2';

import * as slice from '../../redux/CoinSlice';
import { getUuidFromPathName } from '../../utils/helpers';
import * as coinStyles from './CoinStyles';
import { ContentWithCoinsOrExchangeContainer, H1 } from '../../GlobalStyles';
import { OPTIONS } from '../../constants';

import { COIN_OPTIONS_TITLE } from './messages';
import Select from '../../components/SelectC';
import CoinInfo from '../../components/CoinInfo';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const Coin: FC = () => {
  const location = useLocation();

  const graphRef = useRef<HTMLDivElement>(null);
  const [isDisabledButton, setIsDisabledButton] = useState(false);

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

  const handleDownloadGraphs = () => {
    if (!graphRef) return;

    setIsDisabledButton(true);

    toPng(graphRef.current, { cacheBust: true })
      .then((url) => {
        const link = document.createElement('a');

        const date = new Date();
        const currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        link.download = compareCoin
          ? `${currentTime}-${coin.name}-compared-${compareCoin.name}.png`
          : `${currentTime}-${coin.name}.png`;
        link.href = url;
        link.click();
        setIsDisabledButton(false);
      })
      .catch((e) => {
        setIsDisabledButton(false);
        alert('error', e);
      });
  };

  const coinInfoData = [coin, compareCoin];

  const handleAddCoin = () => {
    localStorage.setItem('favoriteCoin', uuid);
  }

  return (
    <>
      {isLoading || isNullData ? (
        <Loader />
      ) : (
        <coinStyles.CoinWrapper>
          <ContentWithCoinsOrExchangeContainer>
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
            <Button
              onClick={handleAddCoin}
            >
              Add in favorites
            </Button>
            <Button
              disabled={isDisabledButton}
              onClick={handleDownloadGraphs}
            >
              Download graphs
            </Button>
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
            <coinStyles.PngWrapper ref={graphRef}>
              <coinStyles.ChartWrapper>
                <Line
                  options={OPTIONS}
                  data={data}
                />
              </coinStyles.ChartWrapper>
              <CoinInfo
                coinInfoData={coinInfoData}
              />
            </coinStyles.PngWrapper>
          </ContentWithCoinsOrExchangeContainer>
        </coinStyles.CoinWrapper>
      )}
    </>
  )
}

export default Coin;
