<script lang="ts">
	import type { InputSerialQueue, UserInputSerialQueue } from '../types';
	import Input from './Input.svelte';

	export let userInput: UserInputSerialQueue;
	export let input: InputSerialQueue;
	export let handleGenerate: () => void;

	const addService = () => {
		input.services = [...input.services, []];
		userInput.services = [...userInput.services, ''];
	};

	const removeService = () => {
		input.services = input.services.slice(0, input.services.length - 1);
		userInput.services = userInput.services.slice(0, userInput.services.length - 1);
	};
</script>

<div
	class="w-full max-w-sm flex flex-col text-lg gap-4 bg-slate-100 border-[3px] border-pink-600 p-6 rounded-2xl shadow-lg"
>
	<h2 class=" text-3xl font-semibold">Simulacion de colas en serie</h2>
	<Input label="llegada" bind:value={userInput.arrivals} />
	<Input label="Servidor 1" bind:value={userInput.services[0]} />

	{#each userInput.services.slice(1) as _, i (`service-${i + 1}`)}
		<Input label={`Servidor ${i + 2}`} bind:value={userInput.services[i + 1]} />
	{/each}

	<div class="text-black mt-8 w-full flex justify-stretch gap-8">
		<button
			on:click={addService}
			class="w-full flex items-center justify-center gap-2 border-[3px] border-green-600 bg-slate-50 text-green-600 tracking-wider font-semibold rounded-lg p-2.5
         active:scale-95 active:bg-green-600 active:text-white duration-150"
		>
			+ servidor
		</button>

		<button
			disabled={userInput.services.length === 1}
			class:opacity-0={userInput.services.length === 1}
			on:click={removeService}
			class="w-full flex items-center justify-center gap-2 bg-slate-50 border-[3px] border-red-600 text-red-600 tracking-wider font-semibold rounded-lg p-2.5
         active:scale-95 active:bg-red-600 active:text-white duration-150"
		>
			- servidor
		</button>
	</div>

	<button
		on:click={handleGenerate}
		class="mt-2 flex items-center justify-center gap-2 bg-pink-600 text-white tracking-wider font-semibold text-2xl rounded-lg p-2.5
         active:scale-95 active:bg-pink-400 duration-150"
	>
		Generar
	</button>
</div>
