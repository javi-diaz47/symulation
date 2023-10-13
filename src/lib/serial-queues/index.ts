export interface Queue {
	arrived: number[];
	service: number[];
}

export const EXAMPLE: Queue = {
	// arrived: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
	arrived: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1],
	service: [
		4.07042, 1.74893, 2.57194, 0.31501, 1.06226, 0.47412, 1.87319, 3.20885, 0.92998, 0.18962,
		0.56534, 2.50051, 0.24564, 0
	]
};

// export const EXAMPLE: SerialQueuesInput = {
// 	arrived: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
// 	maxTime: 13,
// 	services: [
// 		[
// 			4.07042, 1.74893, 2.57194, 0.31501, 1.06226, 0.47412, 1.87319, 3.20885, 0.92998, 0.18962,
// 			0.56534, 2.50051, 0.24564, 0
// 		],
// 		[
// 			1.19095, 1.59799, 1.8191, 1.48241, 1.47236, 1.44221, 1.35176, 1.0804, 1.26633, 1.82412,
// 			1.49749, 1.51759, 1.57789, 0
// 		]
// 	]
// };

export interface Client {
	// id: numbe
	arrvTime: number;
	start?: number;
	end?: number;
	duration?: number;
	state: 'waiting' | 'attending' | 'done';
}

export const serviceStation = ({ arrived, service }: Queue) => {
	let station: number = 0;

	const isBusy = (station: number) => station > 0;

	const queue: Client[] = [];

	const stationClient: Client[] = [];

	const history: Client[] = [];

	let t: number = -1;

	while (t <= arrived.length || queue.length || isBusy(station)) {
		t++;

		// Add user to the history
		if (station) {
			station--;
			if (station < 1) station = 0;
		}

		if (station === 0) {
			const doneClient = stationClient.shift();
			if (doneClient && doneClient.start && doneClient.duration) {
				const endTime = doneClient.start + Math.round(doneClient.duration) - 1;

				const end = endTime < doneClient.start ? doneClient.start : endTime;

				const newHistory: Client = { ...doneClient, end, state: 'done' };
				history.push(newHistory);
			}
		}

		// Llego y Esta ocupada
		if (arrived[t] && isBusy(station)) {
			const newClient: Client = { arrvTime: t + 1, state: 'waiting' };
			queue.push(newClient);
			continue;
		}

		// Llego, no hay cola y no esta ocupada
		if (arrived[t] && !queue.length && !isBusy(station)) {
			station = Math.round(service.shift() ?? 0);

			if (station < 1) station = 1; // min is 1 minute

			const next: Client = { arrvTime: t + 1, start: t + 1, state: 'attending', duration: station };
			stationClient.push(next);

			continue;
		}

		// Llego, hay cola y no esta ocupada
		if (arrived[t] && queue.length && !isBusy(station)) {
			station = Math.round(service.shift() ?? 0);

			if (station < 1) station = 1; // min is 1 minute

			// Add next
			const next = queue.shift();
			if (next) {
				stationClient.push({ ...next, start: t + 1, state: 'attending', duration: station });
			}

			// Add to queue
			const newClient: Client = { arrvTime: t + 1, state: 'waiting' };
			queue.push(newClient);

			continue;
		}

		// No llego, hay cola, no esta ocupada
		if (!arrived[t] && queue.length && !isBusy(station)) {
			station = Math.round(service.shift() ?? 0);

			if (station < 1) station = 1; // min is 1 minute

			const next = queue.shift();

			if (next) {
				stationClient.push({ ...next, start: t + 1, state: 'attending', duration: station });

				continue;
			}
		}
	}

	console.log(history);
	return history;
};
