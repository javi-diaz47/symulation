<script lang="ts">
	import { DISTRIBUTIONS } from '$lib/genDistributions';
	import { PRIMES } from '$lib/primes';
	import { createRandom } from '../stores/random';
	import type { Distribution } from '../types';
	import CardAlert from './CardAlert.svelte';
	import CardInput from './CardInput.svelte';
	import CardSelect from './CardSelect.svelte';

	const rand = createRandom();

	let distribution: Distribution = 'Uniforme';
	let generated = false;

	$: isPrime = PRIMES.includes(Number($rand.random.initValues.m));

	const handleClick = () => {
		rand.generateRandom(auto);
		rand.normalizeRandom();
		if (distribution === 'Uniforme') {
			rand.generateUniform();
		}
		generated = true;
		console.log($rand);
	};

	let auto = true;
</script>

<div
	class=" flex flex-col text-lg gap-4 max-w-md bg-slate-100 border-[3px] border-purple-600 p-6 rounded-2xl shadow-lg"
>
	<h2 class="col-span-3 text-3xl font-semibold">Creacion de varible aleatoria</h2>

	<div class="flex flex-col gap-2">
		<h3 class="col-span-3 text-xl font-semibold">Numeros aleatorios</h3>
		<label class="flex items-center gap-2 text-purple-600 underline underline-offset-4">
			<input type="checkbox" bind:checked={auto} class="w-5 h-5 p-2 accent-purple-600" />
			Generar automaticamente
		</label>
		{#if auto}
			<CardInput
				bind:value={$rand.random.initValues.m}
				label="Cantidad de numeros"
				isValidInput={isPrime}
				options={PRIMES}
			/>
		{:else}
			<div class="grid grid-cols-2 gap-4">
				<CardInput label="x" bind:value={$rand.random.initValues.x} />
				<CardInput label="a" bind:value={$rand.random.initValues.a} />
				<CardInput label="c" bind:value={$rand.random.initValues.c} />
				<CardInput label="m" bind:value={$rand.random.initValues.m} isValidInput={isPrime} />
			</div>
		{/if}
	</div>

	<div class="flex flex-col gap-2">
		<h3 class="col-span-3 text-xl font-semibold">Distribucion de probabilidad</h3>
		<CardSelect
			bind:selected={distribution}
			label="Distribucion"
			options={Object.keys(DISTRIBUTIONS)}
		/>
		{#if distribution === 'Uniforme'}
			<CardInput label="a" bind:value={$rand.distributions.uniform.a} />
			<CardInput label="b" bind:value={$rand.distributions.uniform.b} />
		{/if}
	</div>

	<button
		disabled={!isPrime}
		on:click={handleClick}
		class="flex items-center justify-center gap-2 bg-purple-600 text-white tracking-wider font-semibold rounded-lg p-2.5
         enabled:active:scale-95 enabled:active:bg-purple-400 duration-150
				 disabled:opacity-50"
		class:opacity-50={generated}
		class:bg-green-400={generated}
	>
		Generar
	</button>
	<CardAlert cond={!isPrime} message="Recuerda que solo se aceptan numeros primos" />
</div>
