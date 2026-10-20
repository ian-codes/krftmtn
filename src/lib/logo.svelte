<script lang="ts">
	let {
		color = 'white',
		size = '1.5em'
	}: { color?: 'blue' | 'white'; size?: '1.5em' | '1.25em' } =
		$props();
</script>

<a class={color} style={`font-size: ${size}`} href="/"
	>kraftomation</a
>

<style>
	.white {
		color: white;
	}

	.blue {
		color: var(--color-main);
	}

	a {
		white-space: no-break;
		transition: all 0.3s;
		font-size: 1.5em;
		font-weight: normal;
		color: white;

		&:hover {
			scale: 1.05;
		}
	}
</style>
