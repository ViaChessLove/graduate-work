const prefix = (action: string): string => `coins/${action}`;

export const getCoins = prefix('getCoins');