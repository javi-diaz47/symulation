import type { Mixed } from '../types';
import { PRIMES } from './primes';

// Takes the value of m, and generate other input values
// m must be prime
export const genInitValues = (m: number): Mixed => {
	console.log(m);
	const i = PRIMES.findIndex((n) => n === m);

	// a and c must be less than m
	const randPrime = () => PRIMES[Math.round((i - 1) * Math.random())];

	const x = randPrime();
	const a = randPrime();
	const c = randPrime();

	console.log({ x, a, c, m });

	return {
		x,
		a,
		c,
		m
	};
};
