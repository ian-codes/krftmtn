<script lang="ts">
	import NavItem from '../nav_item.svelte';
	import { NAV_ITEMS } from '../nav_items.ts';
	import { mobileNavState } from './mobile_nav_state.svelte.ts';
	$effect(() => {
		document.body.classList.toggle('disable_scroll', mobileNavState.open);
	});
</script>

{#if mobileNavState.open}
	<nav>
		<ol>
			{#each NAV_ITEMS as item}
				<NavItem {item} />
			{/each}
		</ol>
	</nav>
{/if}

<style>
	:global(body.disable_scroll) {
		overflow: hidden !important;
	}

	nav {
		z-index: 2;
		position: fixed;
		inset: 0;
		background: var(--color-bg);
	}

	ol {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: end;
		justify-content: end;
		gap: 1em;
		padding-bottom: 5em;
	}
</style>
