<script lang="ts">
	import type { Distribution, Random } from '../types';

	export let generated: boolean;
	export let rand: Random;
	export let distribution: Distribution;

	$: initValues = rand.random.initValues;

	$: r = rand.random.r;

	$: normalize = rand.normalize;

	$: X = rand.distributions.r;
</script>

<div
	class="bg-slate-50 w-full max-w-3xl p-4 rounded-lg h-[537px] overflow-scroll shadow-xl flex flex-col gap-4"
>
	{#if generated}
		<h2 class="text-4xl text-center font-bold">Datos</h2>
		<table class="table-fixed w-full text-center select-all">
			<thead>
				<tr>
					<th> Indice </th>
					{#each Object.keys(initValues) as init}
						<th>
							{init}
						</th>
					{/each}
					<th> R </th>

					{#if distribution === 'poisson'}
						<th> Indice </th>
						<th> F(x) </th>
					{:else if distribution === 'uniform'}
						<th> A </th>
						<th> B </th>
					{:else if distribution === 'exponential'}
						<th />
						<th> Media </th>
					{:else if distribution === 'normal'}
						<th> Media </th>
						<th> Desv.Est </th>
					{:else}
						<th />
						<th />
					{/if}
					<!-- {#each Object.keys(dist) as d}
							<th>
								{d}
							</th>
						{/each} -->
					<th>X</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>0</td>
					{#each Object.values(initValues) as value}
						<td class="w-8">
							{value}
						</td>
					{/each}
					<td>
						<!-- {normalize[0].toFixed(5)} -->
					</td>
					<td>
						<!-- {X[0].toFixed(5)} -->
					</td>
				</tr>
				{#each r.slice(1) as x, i}
					<tr>
						<td>{i + 1}</td>
						<td>{x}</td>
						<td />
						<td />
						<td />
						<td>{normalize[i + 1].toFixed(5)}</td>

						{#if distribution === 'poisson' && i < rand.distributions.poisson.Fx.length - 1}
							<td>{i} </td>
							<td>{rand.distributions.poisson.Fx[i].toFixed(5)}</td>
						{:else if distribution === 'uniform' && i === 0}
							<td> {rand.distributions.uniform.a}</td>
							<td> {rand.distributions.uniform.b}</td>
						{:else if distribution === 'exponential' && i === 0}
							<td />
							<td> {rand.distributions.exponential.mean}</td>
						{:else if distribution === 'normal' && i === 0}
							<td> {rand.distributions.normal.mean}</td>
							<td> {rand.distributions.normal.desv}</td>
						{:else}
							<td />
							<td />
						{/if}

						{#if i < X.length - 1}
							<td>{X[i + 1].toFixed(5)}</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
