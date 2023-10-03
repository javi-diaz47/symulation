import type { GeneratedMixed, Mixed } from '../types';

export const mixed = (initValues: Mixed): GeneratedMixed => {
	const { x, a, c, m } = initValues;
	const r: number[] = Array(m - 1).fill(x);

	let i = 1;
	while (i < m) {
		r[i] = (a * r[i - 1] + c) % m;

		// If first value is repeated
		// before ending the cycle m-1
		if (i < m - 1 && r[i] === x) {
			return { areUniform: false, r, initValues };
		}

		i++;
	}

	return { areUniform: true, r, initValues };
};
