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
}

export interface RouteProps {
  path: string,
  element: () => JSX.Element,
}
