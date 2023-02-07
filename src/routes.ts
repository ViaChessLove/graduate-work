import Coins from './containers/Coins';
import Excange from './containers/Excange';
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
    path: '/coins',
    element: Coins,
    index: false,
  },
  {
    path: '/excanges',
    element: Excange,
    index: false,
  },
  {
    path: '/not-found',
    element: NotFound,
    index: false,
  },
  {
    path: '/coin/:uuid',
    element: Coin,
    index: false,
  }
];
