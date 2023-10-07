<script lang="ts">
	import { PRIMES } from '$lib/primes';
	import CardInput from './CardInput.svelte';

	export let auto: boolean;
	export let isPrime: boolean;
	export let rand;
</script>

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
