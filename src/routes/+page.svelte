<script lang="ts">
	import { genRandom } from '$lib/genRandom';
	import type { GeneratedMixed, MixedSpreadSheets } from '../types';
	import Card from '../components/card.svelte';
	import { PRIMES } from '$lib/primes';
	import { createSpreadSheets } from '$lib/createSpreadSheets';

	let m: number;
	let random: GeneratedMixed;

	const handleClick = () => {
		if (PRIMES.includes(Number(m))) {
			random = genRandom(Number(m));

			let rows: MixedSpreadSheets[] = [
				...random.r.map((r, i) => {
					if (i === 0) return { index: 0, ...random.initValues };
					return { index: i, x: r };
				})
			];
			createSpreadSheets(rows);
		}
	};
</script>

<main class="grid gap-4 p-4">
	<h1 class="text-4xl font-bold">Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<Card bind:value={m} {handleClick} />

	{#if random?.r?.length}
		<ul class="flex gap-4">
			<li>x: {random.initValues.x}</li>
			<li>a: {random.initValues.a}</li>
			<li>c: {random.initValues.c}</li>
			<li>m: {random.initValues.m}</li>
		</ul>
		<ul>
			{#each random.r as r, i}
				<li>{i + 1}: {r}</li>
			{/each}
		</ul>
	{/if}
	<p>Init values</p>
</main>
