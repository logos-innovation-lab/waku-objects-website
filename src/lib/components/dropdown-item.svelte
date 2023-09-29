<script lang="ts">
	export let disabled = false
	export let danger = false
	export let onClick: () => unknown
	export let sub: boolean | undefined = undefined
</script>

<li
	class={`${$$props.class} ${disabled ? 'disabled' : ''} ${danger ? 'danger' : ''} ${
		sub ? 'sub' : ''
	}`}
	on:click={() => !disabled && onClick()}
	on:keypress={() => !disabled && onClick()}
	role="option"
	tabindex={0}
	aria-selected={false}
	aria-disabled={disabled}
>
	<slot />
</li>

<style lang="scss">
	li {
		padding: 14px;
		list-style: none;
		cursor: pointer;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-24);
		background-color: var(--color-base);

		&.danger {
			color: red;
		}

		&:hover {
			background-color: var(--color-ultraLow);
		}

		&.disabled {
			color: rgba(var(--color-ultraHigh-rgb, 0.25));
			cursor: not-allowed;
		}

		&.sub {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: var(--spacing-12);
			:global(> div) {
				padding-left: var(--spacing-24);
			}
		}
	}
</style>
