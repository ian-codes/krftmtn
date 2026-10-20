<script>
	import MobileNav from '#lib/navigation/mobile_nav/mobile_nav.svelte';
	import Burger from '../burger.svelte';
	import Logo from '../logo.svelte';
	import MsgIcon from './msg_icon.svelte';
	import { contactModalState } from '#lib/contact_modal/contact_modal_state.svelte.ts';

	let showFooter = $state(false);

	function handleScroll() {
		showFooter = window.scrollY > 53;
	}

	function handleContactButtonClick() {
		contactModalState.open = !contactModalState.open;
	}
</script>

<svelte:window onscroll={handleScroll} />

<MobileNav />
{#if showFooter}
	<footer>
		<div class="outer">
			<div class="inner">
				<div class="flex gap-3">
					<Logo />
				</div>
				<div class="right">
					<button onclick={handleContactButtonClick}>
						<MsgIcon width="2em" />
					</button>
					<Burger />
				</div>
			</div>
		</div>
	</footer>
{/if}

<style>
	footer {
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
			margin: 0 8px;
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

	@media (max-width: 600px) {
		footer {
			display: flex;
		}
	}
</style>
