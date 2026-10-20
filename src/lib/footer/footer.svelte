<script>
	import Logo from "#lib/logo.svelte";
</script>

<footer>
	<Logo color='blue' />
	<span class="copyright">© 2026 Kraftomation</span>
</footer>

<style>
	footer {
		border-top: 1px solid var(--color-main);
		padding: 1em;
		padding-bottom: 6rem;
	}

	.copyright {
		display: block;
		font-size: .8em;
	}

	@media (max-width: 900px) {
		footer {
			padding-bottom: 8rem !important;
		}
	}
</style>