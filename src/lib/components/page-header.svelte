<script lang="ts">
	import Container from './container.svelte'
	import Divider from './divider.svelte'

	export let bgImage: string | undefined = undefined
	export let bgColor: string | undefined = undefined
</script>

{#if $$slots.image || bgImage}
	<div style={`${bgColor ? 'background-color: ' + bgColor + ';' : null}`}>
		<Container padY={0} padX={0} size="wide">
			<div class="img" style={`${bgImage ? 'background-image: url("' + bgImage + '");' : ''}`}>
				<slot name="image" />
			</div>
		</Container>
	</div>
{/if}
<div class="page-header">
	<Container padX={24} padY={0}>
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
		max-width: var(--detail-width);
		margin-inline: auto;
	}
	.img {
		width: 100%;
		height: 374px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		background-size: cover;
		background-position: center center;
		padding: 0;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-12);
		margin-block: var(--spacing-48);

		:global(p:first-child) {
			font-size: var(--font-size-lg);
			font-weight: var(--font-weight-700);
			line-height: 1.333;
		}
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--spacing-12);
	}
</style>
