import { writable } from 'svelte/store';
import type { Exponential, GeneratedMixed, Normal, Uniform } from '../types';
import { genRandom } from '$lib/genRandom';
import { genNormalize } from '$lib/genNormalize';

interface Random {
	random: GeneratedMixed;
	normalize: number[];
	distribution: Uniform | Exponential | Normal | null;
}

export const createRandom = () => {
	const { subscribe, set, update } = writable<Random>();

	const generateRandom = (m: number) => {
		update((n) => {
			return {
				...n,
				random: { ...genRandom(m) }
			};
		});
	};

	const normalizeRandom = () => {
		update((n) => {
			return {
				...n,
				normalize: genNormalize({ r: n.random.r, m: n.random.initValues.m })
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
		distribution: null
	});

	return {
		subscribe,
		random: {},
		normalize: {},
		distribution: {},
		generateRandom,
		normalizeRandom
	};
};
