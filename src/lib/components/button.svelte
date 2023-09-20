<script lang="ts">
	export let variant: '' | 'icon' | 'strong' | 'subtle' | 'overlay' = ''
	export let disabled: boolean | undefined = undefined
	export let grow = false
	export let active = false
</script>

<button
	type="button"
	{disabled}
	class={`${variant} ${grow ? 'grow' : ''} ${active ? 'active' : ''} `}
	on:click
>
	<slot />
</button>

<style lang="scss">
	button {
		background: var(--transparent);
		border: 1px solid var(--color-low);
		border-radius: var(--border-radius);
		color: var(--color-ultrahigh);
		font-size: var(--font-size-normal);
		font-weight: var(--font-weight-500);
		line-height: 1.25;
		padding: 13px;
		overflow-wrap: normal;
		cursor: pointer;
		display: inline-flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		margin-block: 0;
		gap: var(--spacing-6);
		white-space: nowrap;

		&.grow {
			width: 100%;
			justify-content: space-between;
		}

		&:active,
		&.active {
			background-color: var(--color-low);
		}

		&:disabled {
			cursor: not-allowed;
			color: var(--color-mid);

			& :global(svg) {
				fill: var(--color-mid);
			}
		}

		&.icon {
			border-color: var(--transparent);

			:global(svg) {
				width: 20px;
				height: 20px;
			}
		}

		&.strong {
			background-color: var(--color-ultraHigh);
			color: var(--color-ultraLow);

			:global(svg) {
				fill: var(--color-ultraLow);
				width: 20px;
				height: 20px;
			}

			&:active {
				background-color: var(--color-accent);
				:global(svg) {
					fill: var(--color-base);
					width: 20px;
					height: 20px;
				}
			}

			&:disabled {
				background-color: rgba(var(--color-ultraHigh-rgb), 0.25);
			}
		}

		&.border {
			border: 1px solid var(--color-low);
		}

		&.subtle {
			background-color: var(--color-ultraLow);
		}

		&.overlay {
			background-color: rgba(var(--color-accent-rgb), 0.5);
			border-color: rgba(var(--color-accent-rgb), 0.5);
		}
	}
</style>
