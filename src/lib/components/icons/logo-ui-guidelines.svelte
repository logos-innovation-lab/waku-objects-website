<script lang="ts">
	import type { IconProps } from '$lib/types'

	type $$Props = IconProps

	export let size = 20
	export let color: string | undefined = undefined
	export let title: string | undefined = undefined
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 90 90"
	width={size}
	height={size}
	aria-labelledby={title}
	role="img"
>
	<title>{title}</title>
	<path
		fill={color}
		d="M69.3,48 L88.2,29.1 C90.6,26.7 90.6,23.1 88.2,20.7 L75.6,8.1 C73.2,5.7 69.6,5.7 67.2,8.1 L48,26.7 L29.1,7.8 C26.7,5.4 23.1,5.4 20.7,7.8 L7.8,20.4 C5.4,22.8 5.4,26.4 7.8,28.8 L26.7,48 L6,68.7 L6,90 L27.3,90 L48,69.3 L66.9,88.2 C69.3,90.6 72.9,90.6 75.3,88.2 L87.9,75.6 C90.3,73.2 90.3,69.6 87.9,67.2 L69.3,48 Z M71.4,12 L84,24.6 L65.1,43.5 L52.5,30.9 L71.4,12 Z M24.6,84 L12,84 L12,71.4 L30.9,52.5 L43.5,65.1 L24.6,84 Z M71.4,84 L12,24.6 L24.6,12 L35.1,22.5 L28.8,28.8 L33,33 L39.3,26.7 L51.9,39.3 L45.6,45.6 L49.8,49.8 L56.1,43.5 L68.7,56.1 L63,62.7 L67.2,66.9 L73.5,60.6 L84,71.1 L71.4,84 Z"
		id="Shape"
	/>
</svg>
