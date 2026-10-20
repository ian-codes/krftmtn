<script>
	import Logo from './logo.svelte';
	import DesktopNav from './navigation/desktop_nav/desktop_nav.svelte';
</script>

<header id="header">
	<div class="inner">
		<Logo color="blue" />
		<div class="desktop_nav">
			<DesktopNav />
		</div>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 5;
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(10px);
		padding: 0.5em 1em;
		margin-bottom: 2em;
		color: white !important;
		outline: 2px dotted var(--color-main);
		border-radius: 0 0 1em 1em;

		.inner {
			max-width: 1200px;
			margin: auto;
			display: flex;
			gap: 1em;
			align-items: center;
			justify-content: space-between;
		}
	}

	@media (max-width: 800px) {
		header {
			position: relative;
			background: none;
			border: none;
			outline: none;
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
