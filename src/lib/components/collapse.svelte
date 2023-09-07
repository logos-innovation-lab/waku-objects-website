<script lang="ts">
	import { CollapsibleCard } from 'svelte-collapsible'
	import Add from '$lib/components/icons/add.svelte'

	const duration = 0.1 // seconds
	const easing = 'linear'
</script>

<CollapsibleCard {duration} {easing} open={false}>
	<div class="cl-header" slot="header">
		<slot name="cl-header" />
		<Add />
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
		z-index: 10;
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
