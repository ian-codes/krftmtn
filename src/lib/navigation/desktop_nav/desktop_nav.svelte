<script lang="ts">
	import NavItem from '../nav_item.svelte';
	import { NAV_ITEMS } from '../nav_items';
</script>

<nav>
	<ol>
		{#each NAV_ITEMS as item}
			<NavItem {item} />
		{/each}
	</ol>
</nav>

<style>
	ol {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
</style>
