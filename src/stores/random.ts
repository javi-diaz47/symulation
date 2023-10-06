import { writable } from 'svelte/store';
import type { Exponential, GeneratedMixed, Normal, Uniform } from '../types';
import { genRandom } from '$lib/genRandom';
import { genNormalize } from '$lib/genNormalize';
import { genUniform } from '$lib/genDistributions';

interface RandomDistributions {
	uniform: Uniform;
	exponential: Exponential;
	normal: Normal;
	r: number[];
}

interface Random {
	random: GeneratedMixed;
	normalize: number[];
	distributions: RandomDistributions;
}

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

	const generateUniform = () => {
		update((n) => {
			return {
				...n,
				distributions: {
					...n.distributions,
					r: genUniform({ ...n.distributions.uniform, r: n.normalize })
				}
			};
		});
	};

	set({
		random: {
			initValues: { x: 0, a: 0, c: 0, m: 0 },
			r: [],
			areUniform: false
		},
		normalize: [],
		distributions: {
			r: [],
			uniform: { a: 0, b: 0 },
			exponential: { mean: 0 },
			normal: { mean: 0, desv: 1 }
		}
	});

	return {
		subscribe,
		set,
		random: {},
		normalize: {},
		distribution: {},
		generateRandom,
		normalizeRandom,
		generateUniform
	};
};
