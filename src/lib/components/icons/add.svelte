<script lang="ts">
	import type { IconProps } from '$lib/types'

	type $$Props = IconProps

	export let size = 20
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
	<polygon points="17,15 17,8 15,8 15,15 8,15 8,17 15,17 15,24 17,24 17,17 24,17 24,15 " />
</svg>
