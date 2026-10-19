<script lang="ts">
	import type { ContactLinkType } from './contact_link.type';
	import ExternalLinkIcon from './icons/external_link_icon.svelte';

	let { item }: { item: ContactLinkType } = $props();
</script>

<li>
	<a href={item.url} class="contact_link">
		<item.icon />
		{item.title}
	</a>
	{#if item.serviceUrl}
		<a href={item.serviceUrl?.url} class="service_url">
			{item.serviceUrl.title}
			<ExternalLinkIcon size=".8em" />
		</a>
	{/if}
</li>

<style>
	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		outline: 1px solid var(--color-main);
		border-radius: 0.25rem;

		.contact_link {
			display: inherit;
			align-items: inherit;
			gap: inherit;
			width: 100%;
		}

		.service_url {
			white-space: nowrap;
			display: inherit;
			align-items: inherit;
			gap: 0.25em;
			cursor: pointer;
			color: rgb(100, 99, 99);
			font-size: 0.7em;
			text-decoration: underline;
			text-decoration-thickness: 1px;
		}
	}

	@media (hover: hover) and (pointer: fine) {
		li:hover {
			background: var(--fancy-gradient);
			color: white;

			.service_url {
				color: white !important;
			}
		}
	}
</style>
