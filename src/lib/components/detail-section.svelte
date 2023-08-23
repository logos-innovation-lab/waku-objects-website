<script lang="ts">
	import Container from './container.svelte'
	import Button from './button.svelte'
	import ZoomIn from './icons/zoom-in.svelte'
	import Divider from './divider.svelte'

	export let title: string | undefined = undefined
	export let sub: boolean | undefined = false
</script>

<div class={`section-wrapper ${sub ? 'sub' : ''}`}>
	<div class="section-intro">
		<Container padX={0} padY={48} gap={12}>
			<h3 class={`section-title ${sub ? 'sub' : ''}`}>{title}</h3>
			<slot />
		</Container>
	</div>

	<div class="imgs-wrap">
		<div class="imgs">
			<slot name="images" />
		</div>
		<Button variant="subtle">
			<ZoomIn />
			View Details
		</Button>
	</div>
</div>
{#if !sub}
	<Divider short />
{/if}

<style lang="scss">
	.section-intro {
		max-width: 498px;
		margin-inline: auto;
	}

	.section-title {
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-700);
	}

	.sub {
		font-size: var(--font-size-normal);
	}

	.section-wrapper:not(.sub) {
		padding-bottom: var(--spacing-48);
	}

	.imgs-wrap {
		background-color: var(--color-low);
		padding: var(--spacing-24);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-24);
		justify-content: center;
	}

	.imgs {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-24);

		:global(img) {
			max-width: 207px;
		}
	}
</style>
