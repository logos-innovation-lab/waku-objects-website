<script lang="ts">
	import type { IconProps } from '$lib/types'

	type $$Props = IconProps

	export let size = 20
	export let color: string | undefined = undefined
	export let title: string | undefined = undefined
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 32 32"
	width={size}
	height={size}
	aria-labelledby={title}
	role="img"
>
	<title>{title}</title>
	<path
		fill={`var(${color})`}
		d="M17.4141 16L24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16z"
	/>
</svg>
