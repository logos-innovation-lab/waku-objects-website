<script lang="ts">
	// export let open = false
</script>

<div class="drawer">
	<slot />
</div>

<style lang="scss">
	.drawer {
		overflow-y: auto;
		background-color: var(--color-base);
		background-color: var(--color-low);
		max-width: 368px;
		width: 100%;
		min-width: 320px;
		height: 100%;
		border-right: var(--border);
		padding: var(--spacing-48);
	}
</style>
