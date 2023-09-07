<script lang="ts">
	// export let open = false
</script>

<div class="drawer-content">
	<div class="inner">
		<slot />
	</div>
</div>

<style lang="scss">
	.drawer-content {
		overflow: auto;
		background-color: var(--color-base);
		width: 320px;
		height: 100%;
		border-right: var(--border);
		padding-inline: var(--spacing-48);
		position: relative;
	}
	.inner {
		position: fixed;
		top: 0;
		padding-block: var(--spacing-48);
		width: calc(320px - calc(var(--spacing-48) * 2));
	}
</style>
