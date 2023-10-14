<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="text-black flex gap-8 text-2xl my-4">
	<a
		href="/"
		aria-current={$page.url.pathname === '/'}
		class:text-purple-600={$page.url.pathname === '/'}
		class:font-semibold={$page.url.pathname === '/'}
	>
		Generador
	</a>
	<a
		href="/serial-queues"
		aria-current={$page.url.pathname === '/serial-queues'}
		class:text-purple-600={$page.url.pathname === '/serial-queues'}
		class:font-semibold={$page.url.pathname === '/serial-queues'}
	>
		Colas en Serie
	</a>
</nav>
