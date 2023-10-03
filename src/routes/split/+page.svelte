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
	import LogoSplit from '$lib/components/icons/logo-split.svelte'

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
	<title>Split</title>
	<meta
		name="description"
		content="Split is a Waku Object allowing group chat members to collect and settle shared expenses."
	/>
</svelte:head>

<svelte:window bind:innerWidth />

<Layout iconBg="#0065CC" bind:open={sidebar_show}>
	<LogoSplit size={20} slot="icon" title="Split logo" />
	<div slot="title">Split</div>
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
						scroll(document.querySelector('#creating-collection'))
						toggle()
					}}
				>
					Creating a new expenses collection
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#choosing-collection'))
						toggle()
					}}
				>
					Choosing an existing collection
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#add-paid-amount'))
						toggle()
					}}
				>
					Adding paid amount
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#add-details'))
						toggle()
					}}
				>
					Adding expense details
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
		<Collapse>
			<svelte:fragment slot="cl-header">In-chat messages</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#in-chat-messages'))
						toggle()
					}}
				>
					In-chat messages
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#in-chat-expense-page'))
						toggle()
					}}
				>
					Expense page (standalone)
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<Collapse>
			<svelte:fragment slot="cl-header">Split full view</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#split-full-view'))
						toggle()
					}}
				>
					Split full view
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#split-add-expense'))
						toggle()
					}}
				>
					Adding an expense to an existing collection
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#split-summary'))
						toggle()
					}}
				>
					Payments summary
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#split-all-expenses'))
						toggle()
					}}
				>
					All expenses
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#split-history'))
						toggle()
					}}
				>
					Activity history
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#members'))
						toggle()
					}}
				>
					Members
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<CollapseItem
			main
			onClick={() => {
				scroll(document.querySelector('#settling-up'))
				toggle()
			}}
		>
			Settling up
		</CollapseItem>
	</svelte:fragment>
	<PageHeader bgColor="#0065CC" slot="pageheader">
		<LogoSplit size={120} slot="image" />
		<p slot="first">
			Split is a Waku Object allowing group chat members to collect and settle shared expenses.
		</p>
		<p slot="second">
			This page is an in-depth presentation of Split. You can try the latest build in <a
				href="https://www.wakuplay.im/"
				target="_blank">Waku Chat</a
			>
			or contribute on Github. Split is released under
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
		<DetailSection title="Adding to Chat" section="01" imgPattern="Split_S">
			<p slot="description">
				A new Split instance can be added to any group chat by using the “+” button, close the
				message input.
			</p>
		</DetailSection>
		<div id="creating-collection">
			<DetailSection
				title="Creating a new expenses collection"
				sub
				section="02"
				imgPattern="Split_S"
			>
				<p slot="description">
					Shared expenses are organized into collections. As a first step, I have to choose between
					creating a new collection or adding a shared expense to an existing collection. A new
					collection is shared with everyone in the chat.
				</p>
			</DetailSection>
		</div>
		<div id="choosing-collection">
			<DetailSection title="Choosing an existing collection" sub section="03" imgPattern="Split_S">
				<p slot="description">
					From the initial screen, I can also choose to add an expense to an existing collection.
					Note that this can also be done directly by accessing any expense collection from the
					chat.
				</p>
			</DetailSection>
		</div>
		<div id="add-paid-amount">
			<DetailSection title="Adding paid amount" sub section="04" imgPattern="Split_S">
				<p slot="description">
					After creating (or selecting) an expenses collection, I have to enter the paid amount for
					the expense I would like to share.
				</p>
			</DetailSection>
		</div>
		<div id="add-details">
			<DetailSection title="Adding expense details" sub section="05" imgPattern="Split_S">
				<p slot="description">
					After adding the paid amount, I need to add a short description. I can also add images,
					but this is optional.
				</p>
			</DetailSection>
		</div>
		<div id="add-summary">
			<DetailSection title="Summary" sub last section="06" imgPattern="Split_S">
				<p slot="description">
					The summary view allows me to check the expense details I provided, before adding to the
					chat. The current version assumes that there's only a default collection of expenses for
					each group chat. Possibly, there could be an option to create multiple shared expenses
					collections within a single group chat.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="in-chat-messages">
		<DetailSection title="In-chat messages" section="07" imgPattern="Split_S">
			<p slot="description">
				Split will post messages to the chat only when a new shared expense is added and when
				someone requests to settle.
			</p>
		</DetailSection>
		<div id="in-chat-expense-page">
			<DetailSection title="Expense page (standalone)" sub last section="08" imgPattern="Split_S">
				<p slot="description">
					From the in-chat message, it's possible to view the expense details directly. The expense
					page displays the expense details, key actions and a link to view the whole accounting for
					the collection.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="split-full-view">
		<DetailSection title="Split full view" section="09" imgPattern="Split_S">
			<p slot="description">
				By tapping on any Swarm City instance I can access the Waku Object full view, where more
				information and actions are available. The Split full view has three subpages: “Payments
				summary”, “All expenses” and “Activity history”.
			</p>
		</DetailSection>
		<div id="split-add-expense">
			<DetailSection
				title="Adding an expense to an existing collection"
				sub
				section="10"
				imgPattern="Split_S"
			>
				<p slot="description">
					From the collection view I can add a new shared expense to that collection.
				</p>
			</DetailSection>
		</div>
		<div id="split-summary">
			<DetailSection title="Payments summary" sub section="11" imgPattern="Split_S">
				<p slot="description">
					The “Payments summary” view displays the current payment balance for each group member. In
					the footer I can see my current payment balance along with the option to settle, or ask to
					settle if I lent money to the group.
				</p>
			</DetailSection>
		</div>
		<div id="split-all-expenses">
			<DetailSection title="All expenses" sub section="12" imgPattern="Split_S">
				<p slot="description">
					The “All expenses” view displays a list of all shared expense within a collection. By
					tapping on any expense I can access the expense details view. Note that it's possible to
					pay my share of a specific expense (or request payment for it).
				</p>
			</DetailSection>
		</div>
		<div id="split-history">
			<DetailSection title="Activity history" sub section="13" imgPattern="Split_S">
				<p slot="description">
					By default, only the latest or new (unseen) activity is displayed on top of the full view.
					All activity related to a Split instance can be viewed in the “Activity history” view.
				</p>
			</DetailSection>
		</div>
		<div id="members">
			<DetailSection title="Members" sub last section="14" imgPattern="Split_S">
				<p slot="description">
					Under the “Members” section I can see a list of all the people that are in that
					collection. Every shared expense added to that collection will be split equally between
					all members.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="settling-up">
		<DetailSection title="Settling up" section="15" imgPattern="Split_S">
			<p slot="description">
				I can request group members to settle up, this will send an anonymous message in the group
				chat with a “Settle now” button for those who owe money. It's also possible to settle up at
				anytime from the Split full view or from the “Payments summary”.
			</p>
		</DetailSection>
	</section>
	<Footer />
</Layout>
