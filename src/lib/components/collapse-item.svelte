<script lang="ts">
	export let onClick: () => unknown
	export let main: boolean | undefined = false
</script>

<li
	on:click={() => onClick()}
	on:keypress={() => onClick()}
	role="option"
	tabindex={0}
	aria-selected={false}
	class:main
>
	<slot />
</li>

<style lang="scss">
	li {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		padding: calc(var(--spacing-12) + 2px);
		border-radius: var(--border-radius);

		&:hover {
			background-color: var(--color-low);
			cursor: pointer;
		}
	}
</style>
