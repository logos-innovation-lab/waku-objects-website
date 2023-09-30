<script lang="ts">
	import Container from './container.svelte'
	import Divider from './divider.svelte'

	export let bgImage: string | undefined = undefined
	export let bgColor: string | undefined = undefined

	let hasMultiple = bgImage?.indexOf(' ') !== -1
	let imgArray: string[] = []
	let bgImgSm: string | undefined = undefined
	if (bgImage && hasMultiple) {
		imgArray = bgImage?.split(' ')
		bgImage = imgArray[0]
		bgImgSm = imgArray[1]
	}
	let bgImageString: string | undefined = undefined

	if (!hasMultiple) {
		bgImageString = "background-image: url('" + bgImage + "');"
	} else {
		bgImageString =
			"background-image: url('" +
			bgImage +
			"'); background-image: image-set(url('" +
			bgImgSm +
			"') 1x, url('" +
			bgImage +
			"') 2x);"
	}
</script>

{#if $$slots.image || bgImage}
	<div style={`${bgColor ? 'background-color: ' + bgColor + ';' : null}`}>
		<Container padY={0} padX={0} size="wide">
			<div class="img" style={bgImage !== undefined ? bgImageString : null}>
				<slot name="image" />
			</div>
		</Container>
	</div>
{/if}
<div class="page-header">
	<Container padX={24} padY={0}>
		<div class="content">
			<div class="first"><slot name="first" /></div>
			<div class="second"><slot name="second" /></div>
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
		background-size: auto 374px;
		background-repeat: no-repeat;
		background-position: center center;
		padding: 0;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-12);
		margin-top: var(--spacing-48);

		.first {
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
		margin-top: var(--spacing-48);
	}
</style>
