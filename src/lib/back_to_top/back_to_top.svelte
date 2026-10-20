<script>
	import ChevronUpIcon from '../assets/icons/chevron_up_icon.svelte';
	import { backToTopState } from './back_to_top_state.svelte';

	let { scrollY } = $props();

	$effect(() => {
		backToTopState.visible = scrollY > 53
	})

	function scrollUp() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if backToTopState.visible}
	<button onclick={scrollUp}>
		<ChevronUpIcon />
	</button>
{/if}

<style>
	button {
		z-index: 90;
		position: fixed;
		bottom: 5em;
		right: 1em;
		color: var(--color-main);
	}
</style>
