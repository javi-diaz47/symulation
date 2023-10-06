<script lang="ts">
	import CheckIcon from './Icons/CheckIcon.svelte';

	export let value: number;
	export let label: string;
	export let isValidInput: boolean = true;
	export let options: string[] | number[] = [];
	export let disabled: boolean = false;
	// export let handleClick: () => void;
</script>

<label class="grid grid-flow-col grid-cols-3 items-center" class:opacity-50={disabled}>
	<span class="col-span-1 capitalize">{label}:</span>
	<div class="relative col-span-2">
		<input
			{disabled}
			bind:value
			list="primes"
			placeholder="97"
			type="number"
			class="group w-full appearance-none border-b-2 border-b-purple-600 px-4 p-2 text-purple-600 bg-transparent outline-none"
			class:border-green-600={isValidInput}
			class:border-red-400={!isValidInput}
		/>

		{#if isValidInput}
			<CheckIcon
				className="absolute top-1/2 -translate-y-1/2 right-12 text-green-500 group:disabled:text-green-100"
			/>
		{/if}
	</div>
	<datalist id="primes">
		{#each options as option}
			<option>{option}</option>
		{/each}
	</datalist>
	<!-- <button
			disabled={!isValidInput}
			on:click={handleClick}
			class="flex items-center gap-2 bg-purple-400 text-gray-950 font-bold rounded-lg p-2.5
         enable:active:scale-95 enable:active:bg-purple-300 duration-150
				 disabled:opacity-75"
		>
			<DownloadIcon className="w-5 h-5" />
			Generar
		</button> -->
</label>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		appearance: textfield;
	}
</style>
