<script lang="ts">
	import { cubicIn, cubicOut } from 'svelte/easing'
	import Button from './button.svelte'
	import Drawer from './drawer.svelte'
	import Menu from './icons/menu.svelte'

	import { fly } from 'svelte/transition'

	let open = true
	let screenSize: number
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="layout">
	{#if open}
		<div
			class="drawer"
			in:fly={{ x: '-100%', opacity: 1, easing: cubicOut }}
			out:fly={{ x: '-100%', opacity: 1, easing: cubicIn }}
		>
			<Drawer>
				<slot name="sidebar" />
				<Button variant="icon" on:click={() => (open = !open)}>
					<Menu />
				</Button>
			</Drawer>
		</div>
	{/if}
	<main>
		{#if !open}
			<div class="btn-menu" transition:fly>
				<Button variant="icon" active on:click={() => (open = !open)}>
					<Menu />
				</Button>
			</div>
		{/if}
		<slot />
	</main>
</div>

<style lang="scss">
	.layout {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		width: 100%;
	}

	main {
		position: relative;
		width: 100%;
	}

	.btn-menu {
		position: absolute;
		inset: var(--spacing-24) auto auto var(--spacing-24);
		z-index: 100;
	}
</style>
