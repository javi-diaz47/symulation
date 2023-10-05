<script lang="ts">
	import InfoIcon from './Icons/InfoIcon.svelte';

	export let cond: boolean;
	export let message: string;
</script>

{#if cond}
	<div class="group col-span-3 flex text-base gap-2 text-red-400 hover:text-white duration-150">
		<InfoIcon className="" />
		<span>{message}</span>
	</div>
{/if}
