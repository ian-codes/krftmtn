<script>
	import MsgIcon from '#lib/footer/msg_icon.svelte';
	import { contactModalState } from './contact_modal/contact_modal_state.svelte';

	function clickButton() {
		contactModalState.open = true;
	}
</script>

<button onclick={clickButton}>
	Get in touch
	<MsgIcon width="1.5em" />
</button>

<style>
	button,
	button::before {
		border-radius: 1em;
	}

	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.5em;
		width: fit-content;
		z-index: 1;
		position: relative;
		transition: var(--transition);
		padding: 0.75em 1.25em;
		color: white;
		font-size: 1.2em;
		box-shadow: var(--fancy-shadow);

		&::before {
			transition: all 0.3s;
			z-index: -1;
			content: '';
			position: absolute;
			inset: 0;
			background: var(--fancy-gradient);
			opacity: 1;
		}
	}

	@media (hover: hover) and (pointer: fine) {
		button:hover {
			scale: 1.05;
			box-shadow:
				var(--fancy-shadow),
				0 5px 0 7px rgb(0, 149, 255);
		}
	}
</style>
