<script lang="ts">
	import {
		services,
		serviceTags as tags,
		type ServiceTagType
	} from './services';

	let selectedTags = $state<ServiceTagType[]>([]);

	// Show services that have at least one selected tag.
	let shownServices = $derived(
		selectedTags.length === 0
			? services
			: services.filter((service) =>
					service.tags.some((tag) =>
						selectedTags.includes(tag)
					)
				)
	);
</script>

<section id="services">
	<span class="section_title">Services</span>
	<h2>What I can do <e class="accent">for you.</e></h2>
	<p>
		Below are some of the services I offer. Don't hesitate
		to reach out if you're looking for help with something
		that isn't mentioned.
	</p>

	<!-- <fieldset>
		{#each tags as tag}
			<label>
				<input
					bind:group={selectedTags}
					type="checkbox"
					value={tag}
				/>
				{tag}
			</label>
		{/each}
	</fieldset> -->

	<ul>
		{#each shownServices as service}
			<li>
				{service.name}
			</li>
		{/each}
	</ul>
</section>

<style>
	ul {
		margin-bottom: 1em;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	li {
		display: block;
		white-space: no-break;
		padding: 0.5em 1em;
		border-radius: 0.75em;
		background: linear-gradient(
			to bottom right,
			white,
			rgba(186, 204, 218, 0.2)
		);
		box-shadow: 0 2px 5px gray;

		&:hover {
			background: var(--fancy-gradient);
			color: white;
		}
	}

	p {
		margin-bottom: 1em;
	}
</style>
