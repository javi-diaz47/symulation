export interface Mixed {
	x: number;
	a: number;
	c: number;
	m: number;
}

export interface MixedSpreadSheets {
	index: number;
	x: number;
	a?: number;
	c?: number;
	m?: number;
}

export interface GeneratedMixed {
	initValues: Mixed;
	r: number[];
	areUniform: boolean;
}

export interface Normalize {
	r: number[];
	m: number;
}

// Distributions
export type Distribution = 'Uniform' | 'Exponential' | 'Poisson' | 'Normal';

interface Distributions {
	name: Distribution;
	gen: () => void;
}

interface Uniform {
	a: number;
	b: number;
	r: number[];
}

interface Exponential {
	mean: number;
	r: number[];
}

interface Normal {
	mean: number;
	desv: number;
	r: number[];
}
