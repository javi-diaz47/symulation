<script lang="ts">
	import DownloadIcon from './Icons/DownloadIcon.svelte';

	export let value: number;
	export let label: string;
	export let isAcceptedInput: boolean;
	export let options: string[] | number[];
	export let handleClick: () => void;
</script>

<span class="col-span-3">{label}</span>
<label class="col-span-3">
	<div class="flex gap-4">
		<input
			bind:value
			list="primes"
			placeholder="Cantidad"
			class="w-2/3 bg-gray-700 border-2 text-white text-base rounded-lg p-2.5"
			class:border-green-600={isAcceptedInput}
			class:border-red-400={!isAcceptedInput}
		/>
		<datalist id="primes">
			{#each options as option}
				<option>{option}</option>
			{/each}
		</datalist>
		<button
			disabled={!isAcceptedInput}
			on:click={handleClick}
			class="flex items-center gap-2 bg-purple-400 text-gray-950 font-bold rounded-lg p-2.5
         enable:active:scale-95 enable:active:bg-purple-300 duration-150
				 disabled:opacity-75"
		>
			<DownloadIcon className="w-5 h-5" />
			Generar
		</button>
	</div>
</label>
