<script lang="ts">
	import { slide, fade } from 'svelte/transition'
	import { cubicIn, cubicOut } from 'svelte/easing'

	import Button from '$lib/components/button.svelte'
	import Drawer from '$lib/components/drawer.svelte'

	import Menu from '$lib/components/icons/menu.svelte'
	import SidePanelClose from '$lib/components/icons/side-panel-close.svelte'
	import Close from './icons/close.svelte'
	import { browser } from '$app/environment'

	let layoutHeight

	export let iconBg: string | undefined = undefined
	export let open = false
	export function toggleDrawer() {
		open = !open
	}

	export function scrollTop() {
		if (browser) {
			// On mobile, close the drawer before scrolling to top
			if (show_close) toggleDrawer()

			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	$: innerWidth = 0
	$: show_close = innerWidth >= 688 ? false : true
</script>

<svelte:window bind:innerWidth />

<div class="layout" bind:clientHeight={layoutHeight} class:open>
	{#if open}
		<nav class="drawer" transition:slide={{ axis: 'x' }}>
			<div
				style={`height: ${layoutHeight}px; `}
				in:fade={{ duration: 400, easing: cubicIn }}
				out:fade={{ duration: 100, easing: cubicOut }}
			>
				<Drawer>
					<div class="page-title">
						<div
							class="icon"
							role="button"
							tabindex="0"
							style={`background-color: ${iconBg};`}
							on:click={scrollTop}
							on:keypress={scrollTop}
						>
							<slot name="icon" />
						</div>
						<slot name="title" />
						{#if show_close}
							<div class="close">
								<Button variant="icon" on:click={toggleDrawer}>
									<Close />
								</Button>
							</div>
						{/if}
					</div>
					<slot name="content" />
					{#if !show_close}
						<Button variant="icon" on:click={toggleDrawer}>
							<SidePanelClose />
						</Button>
					{/if}
				</Drawer>
			</div>
		</nav>
	{/if}
	<div class="content">
		<slot name="pageheader" />
		{#if !open}
			<div class="btn-menu" transition:fade>
				<Button variant="overlay" active on:click={toggleDrawer}>
					<Menu color="--color-base" />
				</Button>
			</div>
		{/if}
		<main>
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	.layout {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		width: 100%;
		position: relative;
	}

	nav.drawer {
		position: absolute;
		align-self: flex-start;
		background-color: var(--color-base);
		border-right: var(--border);
		width: 100%;
		z-index: 100;
		height: 100%;
		align-self: flex-start;

		@media (min-width: 687px) {
			position: static;
			width: 367px;
			flex-shrink: 0;
		}
	}

	.page-title {
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-700);
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: var(--spacing-12);
		align-items: center;
		margin-bottom: var(--spacing-48);

		.icon {
			width: var(--spacing-48);
			aspect-ratio: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: var(--border-radius-subtle);
			border: none;
			line-height: 0;
		}
		.close {
			margin-left: auto;
			margin-right: 0;
		}
	}

	.content {
		position: relative;
		width: 100%;
		z-index: 10;
	}

	.btn-menu {
		position: fixed;
		inset: var(--spacing-24) auto auto var(--spacing-24);
		z-index: 100;
	}
</style>
