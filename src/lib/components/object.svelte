<script lang="ts">
	import Badge from './badge.svelte'
	import Container from './container.svelte'

	export let name = 'Waku Object Name'
	export let status = 'current development status'
</script>

<Container direction="row" gap={24}>
	<div>
		<h2>
			{name}
			<Badge>
				{status}
			</Badge>
		</h2>
		<slot name="description" />
		<slot name="links" />
	</div>
	<slot name="image" />
</Container>

<style lang="scss">
</style>
