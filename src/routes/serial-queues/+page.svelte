<script lang="ts">
	import { simulateSerialQueue } from '$lib/serial-queues';
	import CardSerialQueues from '../../components/CardSerialQueues.svelte';
	import ModalSerialQueues from '../../components/ModalSerialQueues.svelte';
	import type { InputSerialQueue, SerialQueues, UserInputSerialQueue } from '../../types';

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

	let serialQueues: SerialQueues[] = [];

	const handleGenerate = () => {
		serialQueues = simulateSerialQueue(userInput);
	};
</script>

<main class="self-center xl:w-3/4 w-11/12 flex flex-col gap-12 px-8 py-4 text-black">
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

	<div class=" flex gap-8 flex-col xl:flex-row items-start">
		<div class="min-w-fit">
			<CardSerialQueues {input} {userInput} {handleGenerate} />
		</div>
		<div class="w-full">
			<ModalSerialQueues {serialQueues} />
		</div>
	</div>
</main>
