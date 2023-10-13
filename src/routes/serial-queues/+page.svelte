<script lang="ts">
	import { EXAMPLE, getArrivedFromClients, serviceStation } from '$lib/serial-queues';

	// import { EXAMPLE, serialQueues } from '$lib/serial-queues';

	const serv1 = serviceStation(EXAMPLE);

	console.log(serv1);

	const arrived_serv2 = getArrivedFromClients(serv1);

	console.log(arrived_serv2);
	// let t = serialQueues(EXAMPLE);

	// const a = {
	// 	arrived: `0 0 0 0 1 1 0 0 0 0 1 0 1 1 0 0 1 1 0 0 1 0 1 0 0 0 0 1 0 0 0 0 0 2 2 0 0 0 0 1 0 0 0 0 0 0 1 0 0 0 1 0 1 1 0 0 0 1 1 0 1`,
	// 	services: [
	// 		`4.07042 1.74893 2.57194 0.31501 1.06226 0.47412 1.87319 3.20885 0.92998 0.18962 0.56534 2.50051 0.24564 0.77606 5.61680 3.15947 0.88255 0.09256 0.23431 0.73210 4.49756 2.14759 5.98144 3.47591 1.18565 0.76130 5.17051 2.76256 0.49976 2.03328 4.40452 2.06125 4.69773 2.33234 0.08206 0.20070 0.60574 2.84421 0.57872 2.60864 0.35062 1.22235 0.85154 0.03038 0.04061 0.07162 0.16764 0.48690 1.95163 3.71864 1.41667 1.37627 1.25973 0.94605 0.22304 0.68909 3.78421 1.47886 1.56489 1.84771 3.06421`,
	// 		`1.19095 1.59799 1.81910 1.48241 1.47236 1.44221 1.35176 1.08040 1.26633 1.82412 1.49749 1.51759 1.57789 1.75879 1.30151 1.92965 1.81407 1.46734 1.42714 1.30653 1.94472 1.85930 1.60302 1.83417 1.52764 1.60804 1.84925 1.57286 1.74372 1.25628 1.79397 1.40704 1.24623 1.76382 1.31658 1.97487 1.94975 1.87437 1.64824 1.96985 1.93467 1.82915 1.51256 1.56281 1.71357 1.16583 1.52261 1.59296 1.80402 1.43719 1.33668 1.03518 1.13065 1.41709 1.27638 1.85427 1.58794 1.78894 1.39196 1.20101 1.62814`
	// 	]
	// };

	// $: prom = t.reduce((a, b) => a + b, 0) / t.length;

	// let arr: string;
	// let serv1: string;
	// let serv2: string;

	// const handleSubmit = () => {
	// 	console.log(a.arrived.split(' '));
	// 	t = serialQueues({
	// 		arrived: a.arrived.split(' ').map((s) => Number(s)),
	// 		services: [
	// 			a.services[0].split(' ').map((s) => Number(s)),
	// 			a.services[1].split(' ').map((s) => Number(s))
	// 		],
	// 		maxTime: 10
	// 	});
	// 	console.log(t);
	// };
</script>

<h2>hi</h2>

<!-- <label>
	<span>Llegada</span>
	<input bind:value={arr} />
</label>
<label>
	<span>Servidor 1</span>
	<input bind:value={serv1} />
</label>
<label>
	<span>Servidor 2</span>
	<input bind:value={serv2} />
</label>

<button on:click={handleSubmit}> Generar </button> -->

<!-- <h2>Promedio por usuarios: {prom}</h2> -->
