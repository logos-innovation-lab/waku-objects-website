<script lang="ts">
	import Container from './container.svelte'
	import Divider from './divider.svelte'

	export let bgImage: string | undefined = undefined
</script>

<div class="page-header">
	<Container padX={0} padY={0}>
		{#if $$slots.image}
			<div class="img" style={`${bgImage ? 'background-image: url("' + bgImage + '"");' : ''}`}>
				<slot name="image" />
			</div>
		{/if}
		<div class="content">
			<slot name="first" />
			<slot name="second" />
		</div>
		{#if $$slots.buttons}
			<div class="buttons">
				<slot name="buttons" />
			</div>
		{/if}
		<Divider padTop={48} />
	</Container>
</div>

<style lang="scss">
	.page-header {
		max-width: 498px;
		margin-inline: auto;
	}
	.img {
		width: 100%;
		aspect-ratio: 4/3;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-12);
		margin-block: var(--spacing-48);

		:global(p:first-child) {
			font-size: var(--font-size-lg);
			line-height: 1.333;
		}
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: var(--spacing-12);
	}
</style>
