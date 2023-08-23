<script lang="ts">
	import Container from '$lib/components/container.svelte'

	export let title: string | undefined = undefined
</script>

<header>
	<Container
		padX={12}
		padY={48}
		direction="row"
		justify="space-between"
		alignItems="center"
		sticky="top"
		wide={true}
	>
		<div class="title">
			{#if $$slots.icon}
				<slot name="icon" />
			{/if}
			{title}
		</div>
		{#if $$slots.nav}
			<nav class="nav-main">
				<slot name="nav" />
			</nav>
		{/if}
	</Container>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		height: auto;
		background-color: var(--color-base);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-12);
		z-index: 100;
	}

	.title {
		display: flex;
		align-items: center;
		gap: var(--spacing-12);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-700);
	}
</style>
