<script lang="ts">
	export let label: string;
	export let value: string;
</script>

<label class="grid grid-flow-col grid-cols-3 items-center">
	<span class="col-span-1 capitalize">{label}:</span>
	<div class="relative col-span-2">
		<input
			bind:value
			type="text"
			class="group w-full appearance-none border-b-2 border-b-pink-600 px-4 p-2 text-pink-600 bg-transparent outline-none"
		/>
	</div>
</label>
