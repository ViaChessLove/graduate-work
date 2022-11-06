export interface PlaceholderProps {
  readonly height?: string;
  readonly className?: string;
}

export interface H1Props {
  readonly marginBottom?: string;
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
  readonly coins: any,
  readonly isLoading: boolean,
}

export interface CoinStateType {
  readonly coin: any,
  readonly isLoading: boolean,
  readonly uuid: string,
  readonly timePeriod?: string,
}
