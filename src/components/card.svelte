<script lang="ts">
	import { DISTRIBUTIONS } from '$lib/genDistributions';
	import { PRIMES } from '$lib/primes';
	import { createRandom } from '../stores/random';
	import CardAlert from './CardAlert.svelte';
	import CardInput from './CardInput.svelte';
	import CardSelect from './CardSelect.svelte';

	let value: number;
	const rand = createRandom();

	$: isPrime = PRIMES.includes(Number(value));

	const handleClick = () => {
		rand.generateRandom(Number(value));
		rand.normalizeRandom();
		console.log($rand);
	};
</script>

<div class="grid grid-cols-3 text-lg gap-4 max-w-md bg-slate-900 p-6 rounded-2xl">
	<h2 class="col-span-3 text-2xl font-semibold">Creacion de varible aleatoria</h2>

	<CardSelect label="Selecciona la distribucion" options={Object.keys(DISTRIBUTIONS)} />

	<CardInput
		bind:value
		label="Selecciona la cantidad de numeros aleatorios que deseas generar"
		isAcceptedInput={isPrime}
		options={PRIMES}
		{handleClick}
	/>

	<CardAlert cond={!isPrime} message="Recuerda que solo se aceptan numeros primos" />
</div>
