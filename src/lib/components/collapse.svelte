<script lang="ts">
	import { CollapsibleCard } from 'svelte-collapsible'
	import Add from '$lib/components/icons/add.svelte'
	import Subtract from './icons/subtract.svelte'

	const duration = 0.1 // seconds
	const easing = 'linear'

	$: isOpen = false
	function switchIcon() {
		isOpen = !isOpen
	}
</script>

<CollapsibleCard {duration} {easing} open={false}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="cl-header"
		slot="header"
		on:click={() => {
			switchIcon()
		}}
	>
		<slot name="cl-header" />
		{#if isOpen}
			<Subtract />
		{:else}
			<Add />
		{/if}
	</div>
	<ul class="cl-body" slot="body">
		<slot name="cl-body" />
	</ul>
</CollapsibleCard>

<style lang="scss">
	.cl-header {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-12);
		padding: var(--spacing-12);
		border-radius: var(--border-radius);
		width: 100%;
		white-space: nowrap;
		z-index: 10;
		color: var(--color-accent);
	}

	.cl-body {
		margin-left: 0;
		padding-left: var(--spacing-12);
	}

	:global(.drawer-content .card > button) {
		width: 100%;
		border-radius: var(--border-radius);

		&:hover {
			background-color: var(--color-low);
		}
	}
</style>
