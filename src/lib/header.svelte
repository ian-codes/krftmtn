<script>
	import { contactModalState } from './contact_modal/contact_modal_state.svelte';
	import MsgIcon from './footer/msg_icon.svelte';
	import Logo from './logo.svelte';
	import DesktopNav from './navigation/desktop_nav/desktop_nav.svelte';
</script>

<header id="header">
	<div class="inner">
		<Logo color="blue" />
		<div class="desktop_nav">
			<DesktopNav />
		</div>
		<button onclick={() => (contactModalState.open = true)}>
			<MsgIcon width="2em" --color="var(--color-main)" />
		</button>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 5;
		background: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(10px);
		padding: 0.5em 1em;
		color: white !important;
		outline: 1px dotted var(--color-main);
		border-radius: 0 0 1em 1em;

		.inner {
			max-width: 1300px;
			margin: auto;
			display: flex;
			gap: 1em;
			align-items: center;
			justify-content: space-between;
		}
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

	@media (max-width: 900px) {
		header {
			position: relative;
			margin-bottom: 0em;
		}

		.inner {
			justify-content: center;
		}

		.desktop_nav {
			display: none;
		}
	}
</style>
