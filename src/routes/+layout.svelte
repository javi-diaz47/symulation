<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>Symulation</title>
</svelte:head>

<div>
	<header class="h-16 text-2xl flex justify-center items-center bg-purple-600 text-white font-bold">
		Symulation
	</header>
	<div class=" bg-slate-200 min-h-screen h-fit text-white flex justify-center">
		<slot />
	</div>
</div>
