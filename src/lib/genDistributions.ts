import type { Distributions, Exponential, Normal, Uniform } from '../types';

export const DISTRIBUTIONS: Distributions[] = [
	{ name: 'Uniform', gen: () => genUniform },
	{ name: 'Exponential', gen: () => genExponential },
	{ name: 'Normal', gen: () => genNormal }
];

export const genUniform = ({ a, b, r }: Uniform) => {
	return r.map((n) => a + (b - a) * n);
};

export const genExponential = ({ mean, r }: Exponential) => {
	return r.map((n) => (n === 0 ? mean : -mean * Math.log(n)));
};

export const genNormal = ({ mean, desv, r }: Normal) => {
	let i = 1;
	const res = [];
	while (i < r.length - 1) {
		res[i - 1] = mean + desv * Math.sqrt(-2 * Math.log(r[i - 1])) * Math.cos(r[i]);
		res[i] = mean + desv * Math.sqrt(-2 * Math.log(r[i - 1])) * Math.sin(r[i]);

		i += 2;
	}
	return res;
};
