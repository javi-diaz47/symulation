import type { Normalize } from '../types';

export const normalize = ({ r, m }: Normalize): number[] => r.map((n) => n / m);
