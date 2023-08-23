<script lang="ts">
	import type { IconProps } from '$lib/types'

	type $$Props = IconProps

	export let size = 72
	export let title: string | undefined = undefined
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	width={size}
	height={size}
	viewBox="0 0 72 72"
>
	<title>{title}</title>
	<g xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd">
		<path
			d="m71.648 7.552-7.2-7.2a1.199 1.199 0 0 0-1.696 0l-62.4 62.4c-.47.469-.47 1.227 0 1.696l7.2 7.2a1.197 1.197 0 0 0 1.697 0l62.4-62.4c.469-.469.469-1.227 0-1.696"
			fill="#FFF"
		/>
		<path
			d="M13.2 26.4c7.278 0 13.2-5.922 13.2-13.2S20.478 0 13.2 0 0 5.922 0 13.2s5.922 13.2 13.2 13.2"
			fill="#91FF76"
		/>
		<path
			d="M58.8 45.6c-7.278 0-13.2 5.922-13.2 13.2S51.522 72 58.8 72 72 66.078 72 58.8s-5.922-13.2-13.2-13.2"
			fill="#FEEA16"
		/>
	</g>
</svg>
