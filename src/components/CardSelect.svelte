<script lang="ts">
	export let label: string;
	export let options: string[];
	export let disabled: boolean = false;
	export let selected: string;
	export let optionsValue: (n: string) => string;
</script>

<label class="grid grid-flow-col grid-cols-3 items-center" class:opacity-50={disabled}>
	<span class="col-span-1">{label}:</span>
	<select
		{disabled}
		bind:value={selected}
		class="col-span-2 border-b-2 border-b-purple-600 px-4 p-2 text-purple-600 bg-transparent"
	>
		{#each options as option}
			<option value={option}>{optionsValue(option)}</option>
		{/each}
	</select>
</label>
