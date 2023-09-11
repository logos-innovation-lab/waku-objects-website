<script lang="ts">
	import Button from './button.svelte'
	import Container from './container.svelte'
	import LogoGithub from './icons/logo-github.svelte'
</script>

<footer>
	<Container padY={48} size="normal">
		<div class="content">
			<p>wakuplay.im by Logos Innovation Lab — fall 2023</p>
			<p>
				Logos Innovation Lab prototypes open source technology that promotes peaceful coordination
				using the <u>Logos</u> stack, so humans can voluntarily find each other, communicate, and transact
				value.
			</p>
			<a
				href="https://github.com/logos-innovation-lab/waku-objects-playground"
				class="button secondary"
				target="_blank"
			>
				<div class="logo">
					<Button
						variant="icon"
						on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
					>
						<LogoGithub size={24} color="var(--color-ultraLow)" />
					</Button>
				</div>
			</a>
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
		}
	}
</style>
