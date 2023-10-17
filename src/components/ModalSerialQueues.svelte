<script lang="ts">
	import type { SerialQueues } from '../types';

	export let serialQueues: SerialQueues[];
	let max = 0;
	$: if (serialQueues.length) {
		max = serialQueues[serialQueues.length - 1].ended.length;
	}
</script>

<div
	class="bg-slate-50 w-full p-4 rounded-lg h-[537px] overflow-scroll shadow-xl flex flex-col gap-4"
>
	{#if serialQueues}
		<h2 class="text-4xl text-center font-bold">Datos</h2>
		<table class="table-fixed w-full text-center select-all">
			<thead>
				<tr>
					<th> Minutos </th>
					<th> Llegada </th>
					{#each serialQueues as _, i}
						<th>tiem. en cola {i + 1}</th>
						<th>Estacion {i + 1}</th>
						<th>tiem. total {i + 1}</th>
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
								{@const client = serial.clients.filter((c) => c.end === i + 1)[0]}
								{@const time = serial.service[0] ?? 0}
								{#if client && client.start && client.duration}
									<td> {client.start - client.arrvTime}</td>
								{:else}
									<td />
								{/if}
								<td>
									{serial.clients.filter((c) => c.start === i + 1)[0] && !serial.ended[i + 1]
										? '*'
										: ''}
									{serial.ended[i + 1] ? serial.service.shift() : ''}
								</td>
								{#if client && client.start && client.duration}
									<td> {(client.start - client.arrvTime + time).toFixed(5)}</td>
								{:else}
									<td />
								{/if}
							{/each}
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	{/if}
</div>
