<script lang="ts">
	import Container from '$lib/components/container.svelte'
	import Divider from '$lib/components/divider.svelte'
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox'
	import Button from './button.svelte'
	import ZoomIn from './icons/zoom-in.svelte'

	export let title: string | undefined = undefined
	export let sub: boolean | undefined = false
	export let last: boolean | undefined = false
	export let section: string | undefined
	export let imgPattern: string | undefined = undefined

	let galleryController: any

	const imgObj = import.meta.glob('/static/images/screens/*.png')
	const imgArray = Object.values(imgObj)
	const imgs = imgArray.map((img) => {
		return img.name
	})
</script>

<div class={`section-wrapper ${sub ? 'sub' : ''} ${last ? 'last' : ''}`}>
	<div class="section-intro">
		<Container padX={24} padY={48} gap={12}>
			<h3 class={`section-title ${sub ? 'sub' : ''}`}>{title}</h3>
			<slot name="description" />
		</Container>
	</div>
	{#if section}
		<div class={`imgs-wrap `}>
			<div class={`imgs `}>
				<LightboxGallery title="Payggy Identity" bind:programmaticController={galleryController}>
					<svelte:fragment slot="thumbnail">
						{#each imgs.filter( (img) => img.startsWith(`/static/images/screens/${imgPattern}${section}`), ) as img, i}
							<div>
								<GalleryThumbnail id={i}>
									<img src={`/images/screens/${imgPattern}${section}I0${i + 1}.png`} alt="" />
								</GalleryThumbnail>
							</div>
						{/each}
					</svelte:fragment>
					{#each imgs.filter( (img) => img.startsWith(`/static/images/screens/${imgPattern}${section}`), ) as img, i}
						<GalleryImage id={i}>
							<img src={`/images/screens/${imgPattern}${section}I0${i + 1}.png`} alt="" />
						</GalleryImage>
					{/each}
				</LightboxGallery>
			</div>
			<Button variant="subtle" on:click={() => galleryController.openImage(0)}>
				<ZoomIn />
				View details
			</Button>
		</div>
	{/if}
</div>

{#if last}
	<Divider short />
{/if}

<style lang="scss">
	.section-title {
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-700);
	}

	.sub {
		font-size: var(--font-size-normal);
	}

	.section-wrapper.last {
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
		width: 100%;
	}

	.imgs {
		display: flex;
		flex-wrap: nowrap;
		white-space: nowrap;
		flex-direction: row;
		align-items: center;
		gap: var(--spacing-24);
		overflow-x: auto;

		> div {
			flex-shrink: 0;

			&:first-child {
				margin-left: auto;
			}

			&:last-child {
				margin-right: auto;
			}
		}

		:global(img) {
			height: 448px;
		}
	}
	:global(div.svelte-lightbox-footer) {
		display: none;
	}
</style>
