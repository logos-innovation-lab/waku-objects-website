<script lang="ts">
	import { slide, fade } from 'svelte/transition'
	import { cubicIn, cubicOut } from 'svelte/easing'

	import Button from '$lib/components/button.svelte'
	import Drawer from '$lib/components/drawer.svelte'
	import Menu from '$lib/components/icons/menu.svelte'

	import SidePanelClose from '$lib/components/icons/side-panel-close.svelte'

	let layoutHeight

	export let open = true
	export function toggleDrawer() {
		open = !open
	}
</script>

<div class="layout" bind:clientHeight={layoutHeight}>
	{#if open}
		<nav class="drawer" class:open transition:slide={{ axis: 'x' }}>
			<div
				style={`height: ${layoutHeight}px;`}
				in:fade={{ duration: 400, easing: cubicIn }}
				out:fade={{ duration: 100, easing: cubicOut }}
			>
				<Drawer>
					<div class="page-title">
						<div class="icon">
							<slot name="icon" />
						</div>
						<slot name="title" />
					</div>
					<slot name="content" />
					<Button variant="icon" on:click={toggleDrawer}>
						<SidePanelClose />
					</Button>
				</Drawer>
			</div>
		</nav>
	{/if}
	<div class="content">
		<slot name="pageheader" />
		{#if !open}
			<div class="btn-menu" transition:fade>
				<Button variant="icon" active on:click={toggleDrawer}>
					<Menu />
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
		align-self: flex-start;
		background-color: var(--color-base);
		border-right: var(--border);
		padding-inline: var(--spacing-48);
		width: 100%;
		max-width: 414px;
		z-index: 100;
		height: 100%;
		align-self: flex-start;
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
			padding: var(--spacing-12);
			border-radius: var(--border-radius-subtle);
			border: var(--border);
			line-height: 0;
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
