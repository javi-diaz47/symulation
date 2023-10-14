import type { Queue } from '$lib/serial-queues';

export interface Mixed {
	x: number;
	a: number;
	c: number;
	m: number;
}

interface MixedSpreadSheets {
	index: number;
	x: number;
	a?: number;
	c?: number;
	m?: number;
}

interface GeneratedMixed {
	initValues: Mixed;
	r: number[];
	areUniform: boolean;
}

interface Normalize {
	r: number[];
	m: number;
}

// Distributions
type Distribution = 'uniform' | 'exponential' | 'poisson' | 'normal';

interface Uniform {
	a: number;
	b: number;
}

interface Exponential {
	mean: number;
}

export interface Poisson {
	mean: number;
	Fx?: number[];
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

interface GenPoisson extends Poisson {
	r: number[];
}

interface GenNormal extends Normal {
	r: number[];
}

// Store genRandom
interface RandomDistributions {
	uniform: Uniform;
	exponential: Exponential;
	normal: Normal;
	poisson: Poisson;
	r: number[];
}

interface Random {
	random: GeneratedMixed;
	normalize: number[];
	distributions: RandomDistributions;
}

// Serial queues
export interface InputSerialQueue {
	arrivals: number[];
	services: number[][];
}

export interface UserInputSerialQueue {
	arrivals: string;
	services: string[];
}

export interface SerialQueues extends Queue {
	ended: number[];
	clients: Client[];
}
