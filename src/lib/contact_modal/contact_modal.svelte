<script lang="ts">
	import ContactLinkItem from './contact_link_item.svelte';
	import { CONTACT_LINKS } from './contact_links';
	import { contactModalState } from './contact_modal_state.svelte';
	let dialog: HTMLDialogElement;

	let expanded = $state(false);
	let numberOfAdditionalContactMethods =
		CONTACT_LINKS.length - 3;

	$effect(() => {
		if (contactModalState.open) {
			openModal();
		}
		document.body.classList.toggle(
			'disable_scroll',
			contactModalState.open
		);
	});

	function openModal() {
		dialog.showModal();
		contactModalState.open = true;
	}

	function closeModal() {
		dialog.close();
		contactModalState.open = false;
	}
</script>

<dialog bind:this={dialog} aria-labelledby="dialog-title">
	<h2 id="dialog-title">Contact Me</h2>
	<ul>
		{#each CONTACT_LINKS as item, i}
			{#if expanded || i < 3}
				<ContactLinkItem {item} />
			{/if}
		{/each}
	</ul>

	<div class="buttons">
		<button
			class="expand_button"
			onclick={() => (expanded = !expanded)}
		>
			{expanded
				? 'Show less'
				: `Show more (${numberOfAdditionalContactMethods})`}
		</button>

		<button
			type="button"
			class="close_button"
			onclick={closeModal}>Close</button
		>
	</div>
</dialog>

<style>
	dialog {
		position: relative;
		border: 0;
		border-radius: 0.5rem;
		padding: 1.5rem 1.5rem 0 1.5rem;
		max-width: 500px;
		width: 100%;
		max-height: 100vh;
		margin: auto;

		&::backdrop {
		background: rgb(0 0 0 / 50%);

		}
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.buttons {
		margin-top: 1rem;
		position: sticky;
		bottom: 0;
		background: rgba(255, 255, 255, 0.8);
		padding-bottom: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.expand_button,
	.close_button {
		cursor: pointer;
		width: 100%;
		border-radius: 0.5rem;
		color: white;
		padding: 0.5em;
	}
	.close_button {
		background: var(--fancy-gradient);
	}
	.expand_button {
		outline: 2px solid var(--color-main);
		color: var(--color-main);
		background: white;
	}

	@media (max-width: 600px) {
		dialog {
			padding: 1em;
			overflow-y: scroll;
		}
		.buttons {
			padding-bottom: 0;
		}
	}
</style>
