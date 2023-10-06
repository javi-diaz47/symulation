import type { GenExponential, GenNormal, GenPoisson, GenUniform } from '../types';
import { FACTORIALS } from './factorials';

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

export const genPoisson = ({ mean, r }: GenPoisson) => {
	const Fx: number[] = [];

	//media^x * e^(-media) / x!

	let x = 0;
	let curr = 0;

	while (curr < 0.9) {
		curr = (mean ** x * Math.exp(-mean)) / FACTORIALS[x];

		x === 0 ? (Fx[x] = curr) : (Fx[x] = Fx[x - 1] + curr);

		if (Fx[x] - Fx[x - 1] <= 0.00001) break;

		x++;
	}

	r = r.map((n) => {
		for (const [x, lim] of Fx.entries()) {
			if (n < lim) return x;
		}
		return 0;
	});
	return r;
};

export const DISTRIBUTIONS = {
	Uniforme: genUniform,
	Exponencial: genExponential,
	Normal: genNormal,
	Poisson: () => {}
};
