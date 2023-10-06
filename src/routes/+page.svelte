<script lang="ts">
	import Card from '../components/card.svelte';
</script>

<main class="flex flex-col gap-12 px-8 py-4 text-black">
	<div class="max-w-3xl w-full">
		<h1 class="text-7xl font-bold capitalize">
			Generador de
			<span
				class="bg-gradient-to-r from-purple-600 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent"
			>
				Variables
			</span>
			aleatorias
		</h1>
	</div>
	<!-- <Card bind:value={m} {handleClick} /> -->

	<Card />
	<!-- {#if random?.r?.length}
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
	{/if} -->
</main>

<!-- <style>
	main {
		background-image: linear-gradient(-225deg, #b6cee8 0%, #f578dc 100%);
	}
</style> -->
