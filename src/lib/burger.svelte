<script>
	import { mobileNavState } from './navigation/mobile_nav/mobile_nav_state.svelte';
	const lines = [1, 2, 3];

	function handleClick() {
		mobileNavState.open = !mobileNavState.open;
	}
</script>

<button
	class="menu-button"
	aria-label={mobileNavState.open
		? 'Close menu'
		: 'Open menu'}
	aria-expanded={mobileNavState.open}
	onclick={handleClick}
>
	{#each lines as _}
		<span></span>
	{/each}
</button>

<style>
	.menu-button {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.33em;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	.menu-button span {
		display: block;
		width: 1.5em;
		height: 3px;
		border-radius: 3px;
		background: white;
	}

	@media (hover: hover) and (pointer: fine) {
		.menu-button:hover {
			background: white;
			span {
				background: var(--color-main);
			}
		}
	}
</style>
