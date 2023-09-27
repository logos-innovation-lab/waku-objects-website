<script lang="ts">
	import type { IconProps } from '$lib/types'

	type $$Props = IconProps

	export let size = 120
	export let color: string | undefined = undefined
	export let title: string | undefined = undefined
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	width={size}
	height={size * 0.40868}
	viewBox={`0 0 120 ${120 * 0.40868}`}
>
	<title>{title}</title>
	<g xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd">
		<path
			d="M87.186 45.132c-13.63 0-26.911-6.042-38.444-15.282C62.023 18.124 75.303 4.975 90.68 4.975c30.755 0 31.454 40.512-3.494 40.157zM91.379 0C73.555 0 58.53 14.57 45.25 26.652a181.013 181.013 0 0 1-11.535-11.726c-.35-.356-.7-.356-1.047-.356-.35.356-.35.711 0 1.067 3.145 3.909 6.989 8.529 11.183 12.437-6.99 6.752-18.174 15.28-26.91 15.28-17.825 0-17.825-24.875-2.447-29.85.7 0 .7-1.067 0-.711-20.27 4.975-19.222 34.472 2.796 34.472 10.485 0 19.92-7.109 29.705-15.637C57.48 41.223 70.76 49.04 87.535 49.04 130.871 49.04 129.473 0 91.38 0z"
			fill={color}
			fill-rule="nonzero"
		/>
		<path
			d="M23.929 5.686c2.51 0 4.543 2.069 4.543 4.62s-2.034 4.62-4.543 4.62c-2.51 0-4.543-2.069-4.543-4.62s2.034-4.62 4.543-4.62z"
			fill={color}
		/>
	</g>
</svg>
