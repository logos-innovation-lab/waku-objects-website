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
	<path fill={`var(${color})`} d="M8 15H24V17H8z" />
</svg>
