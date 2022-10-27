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
}

export interface RouteProps {
  path: string,
  element: () => JSX.Element,
}

export interface ChangeProps {
  change: number,
}
