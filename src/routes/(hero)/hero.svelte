<script>
	import Cta from '../../lib/cta.svelte';
</script>

<section id="home">
	<div class="text">
		<h1>
			Create More.<br />
			Earn <e class="accent">More.</e>
		</h1>
		<p class="subheading">
			I help you shape compelling offers and build the
			systems to sell them — so you can grow your income,
			spend less time on tedious tech, and focus on what you
			love.
		</p>
		<div class="cta">
			<Cta />
		</div>
		<div id="mobile_img"></div>
		<p>
			Hi, I’m Ian. I help content creators and local
			businesses grow their businesses and increase revenue
			by combining creative strategy with technical
			expertise. From web development, e-commerce, and
			funnel optimization to email marketing, AI
			automations, CRM integrations, online community
			management, offer development, and product ideation, I
			help turn good ideas into practical systems for
			growth.
			<br />
			<br />
			If the technical side feels overwhelming, or you’re ready
			to get more from your business and free up your time, I’m
			here to help.
		</p>
	</div>
	<div id="pullup"></div>
</section>

<style>
	section {
		padding: 1em;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1em;
		max-width: 1200px;
		margin: auto;

		> div {
			flex: 1;
			min-width: 0;
		}
	}

	h1 {
		line-height: 1.1em;
		margin-bottom: 0.5rem;
		letter-spacing: -2px;
	}

	.subheading {
		margin-bottom: 2em;
		font-size: 1.1em;
	}

	.cta {
		margin-bottom: 3em;
	}

	p {
		margin: 1em 0;
	}

	#pullup,
	#mobile_img {
		position: relative;
		border-radius: 1em;

		&::after {
			color: rgb(85, 85, 85);
			content: 'Me doing pull ups at the park.';
			font-size: 0.7em;
			position: absolute;
			bottom: -2em;
			left: 0.5em;
		}
	}

	#pullup {
		position: relative;
		background-image: url('./pullup.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position-y: -2em;
		width: auto;
		max-width: 400px;
		height: 500px;
	}

	#mobile_img {
		display: none;
		background-image: url('./pullup.jpg');
		background-position-y: -2em;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 240px;
		margin-top: 1.5em;
		margin-bottom: 3em;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 2em;
		}
		#pullup {
			display: none;
		}
		#mobile_img {
			display: block;
		}
		section {
			flex-direction: column;

			> div {
				flex: none;
			}
		}
	}
</style>
