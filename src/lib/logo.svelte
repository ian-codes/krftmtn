<script lang="ts">
	let { color = 'white' }: { color?: 'blue' | 'white' } = $props();
</script>

<a class="{color}" href="/">kraftomation</a>

<style>
	.white {
		color: white;
	}

	.blue {
		color: var(--color-main);
	}

	a {
		white-space: no-break;
		transition: all .3s;
		font-size: 1.5em;
		font-weight: normal;
		color: white;

		&:hover {
			scale: 1.05;
		}
	}
</style>