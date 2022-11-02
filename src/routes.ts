import Coins from './containers/Coins';
import News from './containers/News';
import NotFound from './containers/NotFound';
import Coin from './containers/Coin';
import Home from './containers/Home';

import { RouteProps } from './types';

export const routes: RouteProps[] = [
  {
    path: '/',
    element: Home,
    index: true,
  },
  {
    path: '/coin',
    element: Coins,
    index: false,
  },
  {
    path: '/news',
    element: News,
    index: false,
  },
  {
    path: '/not-found',
    element: NotFound,
    index: false,
  },
  {
    path: '/coin/:coinId',
    element: Coin,
    index: false,
  }
];
