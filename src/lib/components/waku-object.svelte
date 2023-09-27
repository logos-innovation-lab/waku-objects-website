<script lang="ts">
	import Badge from './badge.svelte'
	import Container from './container.svelte'

	export let name = 'Waku Object Name'
	export let status: string | undefined = undefined
	export let bgColor: string | undefined = undefined
	export let bgImage: string | undefined = undefined
	export let link: string | undefined = undefined
</script>

<Container gap={24} padX={0} padY={0}>
	{#if $$slots.image}
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			href={link}
			target="_blank"
			class="img"
			style={`${bgColor ? 'background-color: ' + bgColor + ';' : ''} ${
				bgImage ? 'background-image: url("' + bgImage + '"");' : ''
			}`}
		>
			<slot name="image" />
		</a>
	{/if}
	<h3>
		{name}
		{#if status}
			<Badge>
				{status}
			</Badge>
		{/if}
	</h3>
	<slot name="description" />
	{#if $$slots.buttons}
		<div class="buttons">
			<slot name="buttons" />
		</div>
	{/if}
</Container>

<style lang="scss">
	.img {
		width: 100%;
		aspect-ratio: 16/9;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: var(--spacing-12);
	}
</style>
