import { utils, writeFile } from 'xlsx';
import type { MixedSpreadSheets } from '../types';

export const createSpreadSheets = (rows: MixedSpreadSheets[]) => {
	const worksheet = utils.json_to_sheet(rows);

	const workbook = utils.book_new();

	utils.book_append_sheet(workbook, worksheet, 'Random');

	return writeFile(workbook, 'Numeros Aleatorios.xlsx', { compression: true });
};
