import type { GenExponential, GenNormal, GenUniform } from '../types';

export const genUniform = ({ a, b, r }: GenUniform) => {
	return r.map((n) => a + (b - a) * n);
};

export const genExponential = ({ mean, r }: GenExponential) => {
	return r.map((n) => (n === 0 ? mean : -mean * Math.log(n)));
};

export const genNormal = ({ mean, desv, r }: GenNormal) => {
	let i = 1;
	const res = [];
	while (i < r.length - 1) {
		res[i - 1] = mean + desv * Math.sqrt(-2 * Math.log(r[i - 1])) * Math.cos(r[i]);
		res[i] = mean + desv * Math.sqrt(-2 * Math.log(r[i - 1])) * Math.sin(r[i]);

		i += 2;
	}
	return res;
};

export const DISTRIBUTIONS = {
	Uniforme: genUniform,
	Exponencial: genExponential,
	Normal: genNormal,
	Poisson: () => {}
};
