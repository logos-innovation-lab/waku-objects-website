<script lang="ts">
</script>

<div class="drawer-content">
	<div class="inner">
		<slot />
	</div>
</div>

<style lang="scss">
	.drawer-content {
		overflow-y: auto;
		height: 100%;
		height: 100vh;
		position: relative;
		z-index: 100;
		position: sticky;
		top: 0;
	}
	.inner {
		top: 0;
		padding-block: var(--spacing-48);
		background-color: var(--color-base);
		padding-inline: var(--spacing-48);
	}
</style>
