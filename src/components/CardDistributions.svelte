<script lang="ts">
	import { DISTRIBUTIONS } from '$lib/genDistributions';
	import type { Distribution } from '../types';
	import CardInput from './CardInput.svelte';
	import CardSelect from './CardSelect.svelte';

	export let distribution: Distribution;
	export let rand;

	const translate = (dist: string) => DISTRIBUTIONS[dist];
</script>

<div class="flex flex-col gap-2">
	<h3 class="col-span-3 text-xl font-semibold">Distribucion de probabilidad</h3>
	<CardSelect
		bind:selected={distribution}
		label="Distribucion"
		options={Object.keys(DISTRIBUTIONS)}
		optionsValue={translate}
	/>
	{#if distribution === 'uniform'}
		<CardInput label="a" bind:value={$rand.distributions.uniform.a} />
		<CardInput label="b" bind:value={$rand.distributions.uniform.b} />
	{/if}
	{#if distribution === 'exponential'}
		<CardInput label="media" bind:value={$rand.distributions.exponential.mean} />
	{/if}
	{#if distribution === 'normal'}
		<CardInput label="media" bind:value={$rand.distributions.normal.mean} />
		<CardInput label="Desviacion estandar" bind:value={$rand.distributions.normal.desv} />
	{/if}
	{#if distribution === 'poisson'}
		<CardInput label="media" bind:value={$rand.distributions.poisson.mean} />
	{/if}
</div>
