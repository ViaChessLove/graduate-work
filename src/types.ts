import {
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';

export interface PlaceholderProps {
  readonly height?: string;
  readonly className?: string;
}

export interface H1Props {
  readonly marginBottom?: string;
  readonly isBlock?: boolean;
}

export interface CoinsListProps {
  readonly name: string,
  readonly price: number,
  readonly btcPrice: number,
  readonly iconUrl: string,
  readonly rank: number,
  readonly sparkline: any,
  readonly change: string,
  readonly uuid: string,
  readonly symbol: string,
}

export interface CoinProps extends CoinsListProps {
  readonly description: string,
}

export interface RouteProps {
  readonly path: string,
  readonly element: () => JSX.Element,
  readonly index: boolean,
}

export interface ChangeProps {
  readonly change: number,
}

export interface CoinsStateType {
  coins: any,
  isLoading: boolean,
  searchParams: string,
  totalCount: number,
  currentPage: number,
  orderBy: string,
  orderDirection: string,
}

export interface CoinStateType {
  coin: any,
  isLoading: boolean,
  uuid: string,
  data: {
    labels: any,
    datasets: [],
  } | null,
  comparableCoin?: any,
  selectCoins: any,
  timePeriod: string,
}

export interface CoinInfoProps {
  coinInfoData: Array<any>;
}

export interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
}

export interface PaginationProps {
  onClick: MouseEventHandler<HTMLDivElement>,
}

export interface PaginationItemProps {
  isActive?: boolean,
}

export interface DotProps {
  delay?: string;
}