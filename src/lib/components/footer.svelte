<script lang="ts">
	import Container from './container.svelte'
	import LogoGithub from './icons/logo-github.svelte'
</script>

<footer>
	<Container>
		<div class="col">
			<p class="bold">Kurate — by Logos Innovation Lab</p>
			<p>
				Logos Innovation Lab prototypes open source technology that promotes peaceful coordination
				using the <u>Logos</u> stack, so humans can voluntarily find each other, communicate, and transact
				value.
			</p>
			<div class="buttons">
				<a
					href="https://github.com/logos-innovation-lab/waku-objects-playground"
					class="button secondary"
					target="_blank"
				>
					<div class="wrapper">
						<LogoGithub color="--color-step-20" />
					</div>
				</a>
			</div>
		</div>
		<p class="copyright">2023 • Logos Innovation Lab</p>
	</Container>
</footer>

<style lang="scss">
	footer {
		background-color: var(--color-accent);
		color: var(--color-high);

		a {
			color: var(--color-high);
		}
	}
</style>
