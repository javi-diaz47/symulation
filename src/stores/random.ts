import { writable } from 'svelte/store';
import type { Random } from '../types';
import { genRandom } from '$lib/genRandom';
import { genNormalize } from '$lib/genNormalize';
import { genExponential, genNormal, genPoisson, genUniform } from '$lib/genDistributions';
import { DEFAULT_RANDOM } from '$lib/defaultRandom';

export const createRandom = () => {
	const { subscribe, set, update } = writable<Random>();

	const generateRandom = (custom: boolean) => {
		update((n) => {
			return {
				...n,
				random: { ...genRandom({ custom, init: n.random.initValues }) }
			};
		});
		normalizeRandom();
	};

	const normalizeRandom = () => {
		update((n) => {
			return {
				...n,
				normalize: genNormalize({ r: n.random.r, m: n.random.initValues.m })
			};
		});
	};

	const addDistribution = (n: Random, r: number[]) => ({
		...n,
		distributions: {
			...n.distributions,
			r
		}
	});

	const generateUniform = () => {
		update((n) => addDistribution(n, genUniform({ ...n.distributions.uniform, r: n.normalize })));
	};

	const generateExponential = () => {
		update((n) =>
			addDistribution(n, genExponential({ ...n.distributions.exponential, r: n.normalize }))
		);
	};

	const generateNormal = () => {
		update((n) => addDistribution(n, genNormal({ ...n.distributions.normal, r: n.normalize })));
	};

	const generatePoisson = () => {
		update((n) => {
			const { Fx, r } = genPoisson({ ...n.distributions.poisson, r: n.normalize });
			return {
				...n,
				distributions: {
					...n.distributions,
					r,
					poisson: {
						...n.distributions.poisson,
						Fx
					}
				}
			};
		});
	};

	set(DEFAULT_RANDOM);

	return {
		subscribe,
		set,
		random: {},
		normalize: {},
		distribution: {},
		generateRandom,
		normalizeRandom,
		generateUniform,
		generateExponential,
		generateNormal,
		generatePoisson
	};
};
