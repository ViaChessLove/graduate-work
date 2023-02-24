const prefix = (action: string): string => `coin/${action}`;

export const getCoin = prefix('getCoin');

export const updateCompareCoin = prefix('updateCompareCoin');

export const updateTimePeriod = prefix('updateTimePeriod');