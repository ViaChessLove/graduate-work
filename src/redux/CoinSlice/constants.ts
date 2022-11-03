const prefix = (action: string): string => `coin/${action}`;

export const getCoin = prefix('getCoin');