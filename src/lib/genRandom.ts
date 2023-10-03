import { genInitValues } from './genInitValues';
import { mixed } from './mixedGenerator';

export const genRandom = (m: number) => {
	let res = mixed(genInitValues(m));

	const MAX_ATTEMPT = 20;
	let attempt = 0;

	while (!res.areUniform && attempt < MAX_ATTEMPT) {
		res = mixed(genInitValues(m));

		attempt++;
	}

	return res;
};
