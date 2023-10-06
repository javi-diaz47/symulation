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
export type Distribution = 'Uniforme' | 'Exponencial' | 'Poisson' | 'Normal';

interface Distributions {
	name: Distribution;
	gen: () => void;
}

interface Uniform {
	a: number;
	b: number;
}

interface Exponential {
	mean: number;
}

interface Normal {
	mean: number;
	desv: number;
}

interface GenUniform extends Uniform {
	r: number[];
}

interface GenExponential extends Exponential {
	r: number[];
}

interface GenNormal extends Normal {
	r: number[];
}
