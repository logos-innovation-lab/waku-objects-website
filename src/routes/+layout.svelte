<script lang="ts">
	import '@fontsource/source-sans-pro/400.css' // Defaults to weight 400 with all styles included.
	import '@fontsource/source-sans-pro/600.css'
	import '@fontsource/source-sans-pro/700.css'
	import './style.css'
</script>

<div class={`root`}>
	<slot />
</div>

<style lang="scss">
	.root {
		min-height: 100vh;
		min-height: 100dvh;
		width: 100%;
		/* display: flex;
		flex-direction: column;
		justify-content: flex-start; */
		margin-inline: auto;
		position: relative;
		background-color: var(--color-base, var(--color-dark-accent));
	}
</style>
