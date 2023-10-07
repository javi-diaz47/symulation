export const DEFAULT_RANDOM = {
	random: {
		initValues: { x: 0, a: 0, c: 0, m: 7 },
		r: [],
		areUniform: false
	},
	normalize: [],
	distributions: {
		r: [],
		uniform: { a: 0, b: 0 },
		exponential: { mean: 0 },
		poisson: { mean: 0.33, Fx: [] },
		normal: { mean: 0, desv: 1 }
	}
};
