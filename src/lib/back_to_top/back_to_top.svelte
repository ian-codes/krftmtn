<script>
	import ChevronUpIcon from '../assets/icons/chevron_up_icon.svelte';
	import { backToTopState } from './back_to_top_state.svelte';

	function handleScroll() {
		backToTopState.visible = window.scrollY > 53;
	}

	function scrollUp() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window onscroll={handleScroll} />

{#if backToTopState.visible }
	<div>
		<button onclick={scrollUp}>
			<ChevronUpIcon />
		</button>
	</div>
{/if}

<style>
	div {
		z-index: 90;
		position: fixed;
		inset: 0;

		button {
			position: absolute;
			bottom: 5em;
			right: 1em;
			color: var(--color-main);
		}
	}
</style>
