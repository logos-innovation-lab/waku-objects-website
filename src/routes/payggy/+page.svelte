<script lang="ts">
	// Components
	import Button from '$lib/components/button.svelte'
	import Footer from '$lib/components/footer.svelte'
	import PageHeader from '$lib/components/page-header.svelte'
	import DetailSection from '$lib/components/detail-section.svelte'
	import Layout from '$lib/components/layout.svelte'
	import Collapse from '$lib/components/collapse.svelte'
	import CollapseItem from '$lib/components/collapse-item.svelte'

	// Icons
	import Calibrate from '$lib/components/icons/calibrate.svelte'

	import { scroll } from '$lib/utils/pageScroll'
	import LogoPayggy from '$lib/components/icons/logo-payggy.svelte'

	$: innerWidth = 0
	$: sidebar_show = innerWidth >= 688 ? true : false
	console.log(sidebar_show)
	function toggle() {
		if (innerWidth < 688) {
			sidebar_show = !sidebar_show
		}
	}
</script>

<svelte:head>
	<title>Payggy</title>
	<meta
		name="description"
		content="Payggy is a Waku Object allowing to send money to chat members within Waku Chat."
	/>
</svelte:head>

<svelte:window bind:innerWidth />

<Layout iconBg="#91FF76" bind:open={sidebar_show}>
	<LogoPayggy size={20} slot="icon" title="Payggy logo" />
	<div slot="title">Payggy</div>
	<svelte:fragment slot="content">
		<Collapse>
			<svelte:fragment slot="cl-header">Adding to Chat</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#add-to-chat'))
						toggle()
					}}
				>
					Adding to Chat
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#add-details'))
						toggle()
					}}
				>
					Setting payment details
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#add-summary'))
						toggle()
					}}
				>
					Summary
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<CollapseItem
			main
			onClick={() => {
				scroll(document.querySelector('#in-chat-messages'))
				toggle()
			}}
		>
			In-chat messages
		</CollapseItem>
		<Collapse>
			<svelte:fragment slot="cl-header">Payggy full view</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#payggy-full-view'))
						toggle()
					}}
				>
					Payggy full view
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#payggy-successful'))
						toggle()
					}}
				>
					Successful transaction
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#payggy-failed'))
						toggle()
					}}
				>
					Failed transaction
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#payggy-history'))
						toggle()
					}}
				>
					Activity history
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
	</svelte:fragment>
	<PageHeader bgColor="#91FF76" slot="pageheader">
		<LogoPayggy size={140} slot="image" />
		<p slot="first">
			Payggy is a Waku Object allowing to send money to chat members within Waku Chat.
		</p>
		<p slot="second">
			This page is an in-depth presentation of Payggy. You can try the latest build in <a
				href="https://www.wakuplay.im/"
				target="_blank">Waku Chat</a
			>
			or contribute on Github. Payggy is released under
			<a href="https://opensource.org/license/mit/" target="_blank">MIT license</a>.
		</p>
		<svelte:fragment slot="buttons">
			<Button variant="strong" link="https://chat.wakuplay.im/">
				<Calibrate />
				Try it in Waku Chat
			</Button>
		</svelte:fragment>
	</PageHeader>
	<section id="add-to-chat">
		<DetailSection title="Adding to Chat" section="01" imgPattern="PayggyS">
			<p slot="description">
				A new Payggy instance can be added to any chat by using the “+” button, next to the message
				input. In a private chat, the recipient is the other person in the chat. If Payggy is
				inserted in a group chat, the next step will be to choose who to meet.
			</p>
		</DetailSection>
		<div id="add-details">
			<DetailSection title="Setting payment details" sub section="02" imgPattern="PayggyS">
				<p slot="description">
					I can select an amount and token, available from my wallet account. Payggy checks
					available balances based on the currently selected token.
				</p>
			</DetailSection>
		</div>
		<div id="add-summary">
			<DetailSection title="Summary" sub last section="03" imgPattern="PayggyS">
				<p slot="description">
					The summary view allows me to check the payment details I provided, before adding to the
					chat.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="in-chat-messages">
		<DetailSection title="In-chat messages" last section="04" imgPattern="PayggyS">
			<p slot="description">
				Payggy will post messages to chat when a new payment is sent or when a transaction failed.
			</p>
		</DetailSection>
	</section>
	<section id="payggy-full-view">
		<DetailSection title="Payggy full view" section="05" imgPattern="PayggyS">
			<p slot="description">
				By tapping on any Payggy instance I can access the Waku Object full view, where more
				information and actions are available.
			</p>
		</DetailSection>
		<div id="payggy-successful">
			<DetailSection title="Successful transaction" sub section="06" imgPattern="PayggyS">
				<p slot="description">
					After the payment is added to the chat, if the transaction is successful the status of the
					Payggy instance will be updated in the chat message and a notification will be displayed
					on the Payggy icon in the top-right corner, informing me that more details are available.
				</p>
			</DetailSection>
		</div>
		<div id="payggy-failed">
			<DetailSection title="Failed transaction" sub section="07" imgPattern="PayggyS">
				<p slot="description">
					If a transaction fails, Payggy will send a chat message. More details are available by
					tapping on the instance button in the message or by using the menu in the top-right
					corner.
				</p>
			</DetailSection>
		</div>
		<div id="payggy-history">
			<DetailSection title="Activity history" sub section="08" imgPattern="PayggyS">
				<p slot="description">
					By default, only the latest or new (unseen) activity is displayed on top of the full view.
					All activity related to a Payggy instance can be viewed in the “Activity history” view.
				</p>
			</DetailSection>
		</div>
	</section>
</Layout>
<Footer />
