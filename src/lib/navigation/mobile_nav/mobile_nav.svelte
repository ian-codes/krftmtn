<script lang="ts">
	import { backToTopState } from '#lib/back_to_top/back_to_top_state.svelte.ts';
	import Burger from '#lib/burger.svelte';
	import { contactModalState } from '#lib/contact_modal/contact_modal_state.svelte.ts';
	import MsgIcon from '#lib/footer/msg_icon.svelte';
	import Logo from '#lib/logo.svelte';
	import NavItem from '../nav_item.svelte';
	import { NAV_ITEMS } from '../nav_items.ts';
	import { mobileNavState } from './mobile_nav_state.svelte.ts';

	$effect(() => {
		document.body.classList.toggle(
			'disable_scroll',
			mobileNavState.open
		);
		if (mobileNavState.open) {
			backToTopState.visible = false
		}
	});

	let showNav = $state(false);

	function handleScroll() {
		showNav = window.scrollY > 53;
	}

	function handleContactButtonClick() {
		contactModalState.open = !contactModalState.open;
	}
</script>

<svelte:window onscroll={handleScroll} />

{#if showNav}
	<nav>
		<div class="outer">
			<div class="inner">
				<div class="flex gap-3">
					<Logo size='1.25em' />
				</div>
				<div class="right">
					<button onclick={handleContactButtonClick}>
						<MsgIcon width="2em" />
					</button>
					<Burger />
				</div>
			</div>
		</div>
	</nav>
{/if}

{#if mobileNavState.open}
	<ol>
		{#each NAV_ITEMS as item}
			<NavItem {item} />
		{/each}
	</ol>
{/if}

<style>
	:global(body.disable_scroll) {
		overflow: hidden !important;
	}

	button {
		cursor: pointer;
	}

	@media (max-width: 800px) {
		nav {
			display: flex !important;
		}
	}

	nav {
		display: none;
		justify-content: center;
		z-index: 99;
		position: fixed;
		bottom: 0.5em;
		width: 100%;
		margin: auto;

		.outer {
			width: 100%;
			max-width: var(--max-width);
			padding: 0.5em 1em;
			margin: 0 1em;
			background: var(--fancy-gradient);
			border-radius: 0.5em;
			box-shadow:
				0 2px 0 2px rgb(81, 81, 81),
				0 5px 20px rgba(128, 128, 128, 0.4),
				inset 2px 2px 3px rgba(255, 255, 255, 0.5);
		}

		.inner {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.right {
				display: inherit;
				gap: 0.2em;
				align-items: inherit;
			}
		}
	}

	ol {
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
