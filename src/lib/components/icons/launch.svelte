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
		fill={color}
		d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"
	/>
	<polygon
		fill={color}
		points="20 2 20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2"
	/>
</svg>
