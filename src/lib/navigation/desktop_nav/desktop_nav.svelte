<script lang="ts">
	import MsgIcon from '#lib/footer/msg_icon.svelte';
	import NavItem from '../nav_item.svelte';
	import { NAV_ITEMS } from '../nav_items';
	import { contactModalState } from '#lib/contact_modal/contact_modal_state.svelte.ts';
</script>

<nav>
	<ol>
		{#each NAV_ITEMS as item}
			<NavItem {item} />
		{/each}
		<li>
			<button
				onclick={() => (contactModalState.open = true)}
			>
				<MsgIcon width="2em" --color="var(--color-main)" />
			</button>
		</li>
	</ol>
</nav>

<style>
	ol {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
	button {
		display: block;
		padding: 0;
		margin: 0;
		transition: var(--transition);
		cursor: pointer;
	}

	@media (hover: hover) and (pointer: fine) {
		button:hover {
			scale: 1.05;
		}
	}
</style>
