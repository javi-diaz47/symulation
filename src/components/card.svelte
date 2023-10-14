<script lang="ts">
	import { PRIMES } from '$lib/primes';
	import { createRandom } from '../stores/random';
	import type { Distribution } from '../types';
	import CardAlert from './CardAlert.svelte';
	import CardDistributions from './CardDistributions.svelte';
	import CardRandomNumbers from './CardRandomNumbers.svelte';
	import Modal from './Modal.svelte';

	const rand = createRandom();

	let distribution: Distribution = 'uniform';
	let generated = false;

	$: isPrime = PRIMES.includes($rand.random.initValues.m);

	let auto = true;

	const handleClick = () => {
		if ($rand.random.initValues.m === 2) alert('Wow, realmente quiers generar 1 numero aleatorio?');
		rand.generateRandom(auto);
		rand.normalizeRandom();

		if (distribution === 'uniform') {
			rand.generateUniform();
		} else if (distribution === 'exponential') {
			rand.generateExponential();
		} else if (distribution === 'normal') {
			rand.generateNormal();
		} else {
			rand.generatePoisson();
		}

		generated = true;
		console.log($rand);
	};
</script>

<div class="flex gap-8 flex-col xl:flex-row justify-start items-start margin-0">
	<div
		class=" flex flex-col text-lg gap-4 max-w-md bg-slate-100 border-[3px] border-purple-600 p-6 rounded-2xl shadow-lg"
	>
		<h2 class="col-span-3 text-3xl font-semibold">Creacion de varible aleatoria</h2>

		<CardRandomNumbers {rand} bind:auto bind:isPrime />

		<CardDistributions {rand} bind:distribution />

		<button
			disabled={!isPrime}
			on:click={handleClick}
			class="mt-2 text-2xl flex items-center justify-center gap-2 bg-purple-600 text-white tracking-wider font-semibold rounded-lg p-2.5
         active:scale-95 active:bg-purple-400 duration-150"
		>
			Generar
		</button>
		<CardAlert cond={!isPrime} message="Recuerda que solo se aceptan numeros primos" />
	</div>
	<Modal rand={$rand} {distribution} {generated} />
</div>
