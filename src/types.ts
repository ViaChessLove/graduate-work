export interface PlaceholderProps {
  height?: string;
  className?: string;
}

export interface H1Props {
  marginBottom?: string;
}

export interface CoinsListProps {
  name: string,
  price: number,
  btcPrice: number,
  iconUrl: string,
  rank: number,
  sparkline: any,
  change: string,
  uuid: string,
}

export interface RouteProps {
  path: string,
  element: () => JSX.Element,
  index: boolean,
}

export interface ChangeProps {
  change: number,
}
