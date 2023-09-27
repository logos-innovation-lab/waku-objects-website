<script lang="ts">
	import Button from './button.svelte'
	import Container from './container.svelte'
	import LogoGithub from './icons/logo-github.svelte'
</script>

<footer>
	<Container padY={48} size="normal">
		<div class="content">
			<p>
				<a href="https://www.wakuplay.im/" target="_blank">wakuplay.im</a> by Logos Innovation Lab —
				fall 2023
			</p>
			<p>
				Logos Innovation Lab prototypes open source technology that promotes peaceful coordination
				using the <a href="https://logos.co/" target="_blank">Logos</a> stack, so humans can voluntarily
				find each other, communicate, and transact value.
			</p>
			<div class="logo">
				<Button
					link="https://github.com/logos-innovation-lab/waku-objects-playground"
					variant="icon"
				>
					<LogoGithub size={24} color="var(--color-ultraLow)" />
				</Button>
			</div>
		</div>
	</Container>
</footer>

<style lang="scss">
	footer {
		background-color: var(--color-ultraHigh);
		color: var(--color-ultraLow);

		.content {
			max-width: calc((100% - 48px) / 2);
			display: flex;
			flex-direction: column;
			gap: var(--spacing-24);
		}

		a {
			color: var(--color-ultraLow);
			border-bottom: var(--border);
		}
	}
</style>
