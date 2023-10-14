<script lang="ts">
	import {
		EXAMPLE,
		getArrivedFromClients,
		serviceStation,
		type Queue,
		simulateSerialQueue
	} from '$lib/serial-queues';
	import Input from '../../components/Input.svelte';
	import type { InputSerialQueue, UserInputSerialQueue } from '../../types';

	// import { EXAMPLE, serialQueues } from '$lib/serial-queues';

	// const serv1 = serviceStation(EXAMPLE);

	// console.log(serv1);

	// const arrived_serv2 = getArrivedFromClients(serv1);

	// console.log(arrived_serv2);

	let input: InputSerialQueue = {
		arrivals: [],
		services: [[]]
	};

	let userInput: UserInputSerialQueue = {
		arrivals: '0 0 0 0 1 1 0 0 0 0 1 0 1 1',
		services: [
			'4.0704 1.7489 2.5719 0.3150 1.0623 0.4741 1.8732 3.2089 0.9300 0.1896 0.5653 2.5005 0.2456',
			'1.1910 1.5980 1.8191 1.4824 1.4724 1.4422 1.3518 1.0804 1.2663 1.8241 1.4975 1.5176 1.5779'
		]
	};

	const addService = () => {
		input.services = [...input.services, []];
		userInput.services = [...userInput.services, ''];
	};

	const removeService = () => {
		input.services = input.services.slice(0, input.services.length - 1);
		userInput.services = userInput.services.slice(0, userInput.services.length - 1);
	};

	const handleGenerate = () => {
		simulateSerialQueue(userInput);
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
		<div
			class="bg-slate-50 w-full max-w-3xl p-4 rounded-lg h-[537px] overflow-scroll shadow-xl flex flex-col gap-4"
		/>
	</div>
</main>
