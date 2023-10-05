<script lang="ts">
	export let label: string;
	export let options: string[];
</script>

<span class="col-span-3">{label}</span>
<label class="col-span-3">
	<select
		placeholder="Cantidad"
		class="w-2/3 bg-gray-700 border-2 text-white text-base rounded-lg p-2.5"
	>
		{#each options as option}
			<option>{option}</option>
		{/each}
	</select>
</label>
