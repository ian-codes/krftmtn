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
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="page_outline"></div>
<ContactModal />
<MobileNav />
<BackToTop />

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		min-height: calc(100dvh - 80px);
		display: flex;
		flex-direction: column;
		gap: 2em;
		margin-bottom: 6em;
	}

	.page_outline {
		z-index: 99;
		pointer-events: none;
		position: fixed;
		inset: 0;
		border: 2px solid var(--color-accent);
	}

	@media (max-width: 600px) {
		main {
			gap: 1em;
		}
	}
</style>
