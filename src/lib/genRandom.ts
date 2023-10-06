import type { Mixed } from '../types';
import { genInitValues } from './genInitValues';
import { mixed } from './mixedGenerator';

interface Props {
	custom?: boolean;
	init: Mixed;
}

export const genRandom = ({ custom = false, init }: Props) => {
	if (!custom) {
		console.log('here');
		return mixed(init);
	}
	console.log(init);
	let res = mixed(genInitValues(init.m));

	const MAX_ATTEMPT = 20;
	let attempt = 0;

	while (!res.areUniform && attempt < MAX_ATTEMPT) {
		res = mixed(genInitValues(init.m));

		attempt++;
	}

	return res;
};
