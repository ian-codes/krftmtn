<script lang="ts">
	import type { NavItemType } from '#lib/desktop_nav/nav_item.type.ts';
	import { mobileNavState } from './mobile_nav/mobile_nav_state.svelte';
	let { item }: { item: NavItemType } = $props();
</script>

<li>
	<a
		onclick={() => (mobileNavState.open = false)}
		href={`#${item.slug}`}
	>
		{item.title}
	</a>
</li>

<style>
	a {
		z-index: 1;
		position: relative;
		color: var(--color-main);
		padding: 0.5em 1em;
		transition: all 0.3s;

		&::before {
			transition: all 0.3s;
			content: '';
			position: absolute;
			inset: 0;
			z-index: -1;
			border-radius: 1em;
			opacity: 0;
			background: var(--fancy-gradient);
			box-shadow: var(--fancy-shadow);
		}
	}

	@media (hover: hover) and (pointer: fine) {
		a {
			&:hover {
				color: white;
			}

			&:hover::before {
				opacity: 1;
			}
		}
	}
</style>
