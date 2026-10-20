<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import Footer from '#lib/footer/footer.svelte';
	import Header from '#lib/header.svelte';
	import ContactModal from '#lib/contact_modal/contact_modal.svelte';
	import MobileNav from '#lib/navigation/mobile_nav/mobile_nav.svelte';
	import BackToTop from '#lib/back_to_top/back_to_top.svelte';

	let { children }: LayoutProps = $props();

	let scrollable = $state()
	let scrollY = $state();

	function handleScroll(event: any) {
		scrollY = event?.currentTarget.scrollTop
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app_shell">
	<div class="page_outline"></div>
	<ContactModal />
	<MobileNav {scrollY} />
	<BackToTop {scrollY} {scrollable} />

	<Header />
	<div
		bind:this={scrollable}
		onscroll={handleScroll}
		class="scrollable"
	>
		<main>
			{@render children()}
		</main>
		<Footer />
	</div>
</div>

<style>
	.app_shell {
		height: 100vh;
		height: 100dvh;
	}

	.scrollable {
		height: 100dvh;
		overflow-y: scroll;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 2em;
		padding-top: 2em;
		padding-bottom: 6em;
	}

	.page_outline {
		z-index: 99;
		pointer-events: none;
		position: fixed;
		inset: 0;
		border: 2px solid var(--color-main);
	}

	@media (max-width: 900px) {
		main {
			padding-top: 0;
			gap: 1em;
		}
	}
</style>
