const prefix = (action: string): string => `exchange/${action}`;

export const exchangesRequest = prefix('exchangesRequest');
