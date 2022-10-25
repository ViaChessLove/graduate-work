import Coins from './containers/Coins';
import News from './containers/News';
import NotFound from './containers/NotFound';
import Coin from './containers/Coin';

import { RouteProps } from './types';

export const routes: RouteProps[] = [
  {
    path: '/',
    element: Coins,
  },
  {
    path: '/news',
    element: News,
  },
  {
    path: '/not-found',
    element: NotFound,
  },
  {
    path: '/coin/:coinId',
    element: Coin
  }
];
