import type { Normalize } from '../types';

export const genNormalize = ({ r, m }: Normalize): number[] => r.map((n) => n / m);
