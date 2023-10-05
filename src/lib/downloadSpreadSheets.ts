import type { GeneratedMixed, MixedSpreadSheets } from '../types';
import { createSpreadSheets } from './createSpreadSheets';

export const downloadSpreadSheets = (random: GeneratedMixed) => {
	const rows: MixedSpreadSheets[] = [
		...random.r.map((r, i) => {
			if (i === 0) return { index: 0, ...random.initValues };
			return { index: i, x: r };
		})
	];
	createSpreadSheets(rows);
};
