<script lang="ts">
	import { EXAMPLE, getArrivedFromClients, serviceStation } from '$lib/serial-queues';
	import CardInput from '../../components/CardInput.svelte';
	import Input from '../../components/Input.svelte';

	// import { EXAMPLE, serialQueues } from '$lib/serial-queues';

	const serv1 = serviceStation(EXAMPLE);

	console.log(serv1);

	const arrived_serv2 = getArrivedFromClients(serv1);

	console.log(arrived_serv2);

	interface Input {
		arrivals: number[];
		services: number[][];
	}

	let input: Input = {
		arrivals: [],
		services: [[]]
	};

	let userInput = {
		arrivals: '',
		services: ['']
	};

	const addService = () => {
		input.services = [...input.services, []];
	};

	const removeService = () => {
		input.services = input.services.slice(0, input.services.length - 1);
		userInput.services.pop();
	};
</script>

<main class="self-center xl:w-3/4 max-w-fit flex flex-col gap-12 px-8 py-4 text-black">
	<div class="mt-8">
		<h1 class=" text-7xl font-bold capitalize">
			Simulador de Colas en
			<span
				class="bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent"
			>
				Serie ✦✱
			</span>
		</h1>
	</div>

	<div class=" flex gap-8 flex-col xl:flex-row justify-start items-start margin-0">
		<div
			class="w-full max-w-sm flex flex-col text-lg gap-4 bg-slate-100 border-[3px] border-pink-600 p-6 rounded-2xl shadow-lg"
		>
			<h2 class=" text-3xl font-semibold">Simulacion de colas en serie</h2>
			<Input label="llegada" bind:value={userInput.arrivals} />
			<Input label="Servidor 1" bind:value={userInput.services[0]} />

			{#each input.services.slice(1) as _, i (`service-${i}`)}
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

				<!-- {#if input.services.length > 1} -->
				<button
					disabled={input.services.length === 1}
					class:opacity-0={input.services.length === 1}
					on:click={removeService}
					class="w-full flex items-center justify-center gap-2 bg-slate-50 border-[3px] border-red-600 text-red-600 tracking-wider font-semibold rounded-lg p-2.5
         active:scale-95 active:bg-red-600 active:text-white duration-150"
				>
					- servidor
				</button>
				<!-- {/if} -->
			</div>

			<button
				on:click={() => console.log(input.services)}
				class="mt-2 flex items-center justify-center gap-2 bg-pink-600 text-white tracking-wider font-semibold text-2xl rounded-lg p-2.5
         active:scale-95 active:bg-pink-400 duration-150"
			>
				Generar
			</button>
		</div>
		<div
			class="bg-slate-50 w-full max-w-3xl p-4 rounded-lg h-[537px] overflow-scroll shadow-xl flex flex-col gap-4"
		/>
	</div>
</main>
