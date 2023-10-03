<script lang="ts">
	import { PRIMES } from '$lib/primes';
	import InfoIcon from './Icons/InfoIcon.svelte';

	export let value: number;
	$: isPrime = PRIMES.includes(Number(value));

	const handleClick = () => {};
</script>

<div class="grid grid-cols-3 text-lg gap-4 max-w-md bg-slate-900 p-6 rounded-2xl">
	<h2 class="col-span-3 text-2xl font-semibold">Creacion de varible aleatoria</h2>
	<span class="col-span-3">Selecciona la cantidad de numeros aleatorios que deseas generar</span>
	<label class="col-span-3">
		<div class="flex gap-4">
			<input
				bind:value
				list="primes"
				placeholder="Cantidad"
				class="w-2/3 bg-gray-700 border-2 text-white text-base rounded-lg p-2.5"
				class:border-green-600={isPrime}
				class:border-red-400={!isPrime}
			/>
			<datalist id="primes">
				{#each PRIMES as prime}
					<option>{prime}</option>
				{/each}
			</datalist>
			<button
				on:click={handleClick}
				class="w-1/3 bg-purple-400 text-gray-950 font-bold rounded-lg p-2.5
         active:scale-95 active:bg-purple-300 duration-150"
			>
				Generar
			</button>
		</div>
	</label>
	<div
		class="group col-span-3 flex text-base gap-2 text-white hover:text-red-400 duration-150"
		class:text-red-400={!isPrime}
	>
		<InfoIcon className="group-hover:bg-red-400" />
		<span>Recuerda que solo se aceptan numeros primos</span>
	</div>
</div>
