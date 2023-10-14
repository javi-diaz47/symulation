<script lang="ts">
	import type { SerialQueues } from '../types';

	export let serialQueues: SerialQueues[];
	let max = 0;
	$: if (serialQueues.length) {
		max = serialQueues[serialQueues.length - 1].ended.length;
	}
</script>

<div
	class="bg-slate-50 w-full max-w-3xl p-4 rounded-lg h-[537px] overflow-scroll shadow-xl flex flex-col gap-4"
>
	{#if serialQueues}
		<h2 class="text-4xl text-center font-bold">Datos</h2>
		<table class="table-fixed w-full text-center select-all">
			<thead>
				<tr>
					<th> Minutos </th>
					<th> Llegada </th>
					{#each serialQueues as _, i}
						<th>Estacion {i + 1}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#if max}
					{#each Array(max).fill(0) as _, i}
						<tr>
							<td>
								{i + 1}
							</td>
							<td>
								{serialQueues[0].arrived[i] ?? '0'}
							</td>
							{#each serialQueues as serial}
								<td>
									{serial.clients.filter((c) => c.start === i)[0] && !serial.ended[i] ? '*' : ''}
									{serial.ended[i] ? serial.service.shift() : ''}
								</td>
							{/each}
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	{/if}
</div>
