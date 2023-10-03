<script lang="ts">
	// Components
	import Footer from '$lib/components/footer.svelte'
	import PageHeader from '$lib/components/page-header.svelte'
	import DetailSection from '$lib/components/detail-section.svelte'
	import Layout from '$lib/components/layout.svelte'
	import Collapse from '$lib/components/collapse.svelte'
	import CollapseItem from '$lib/components/collapse-item.svelte'

	// Icons
	import LogoSafeMeet from '$lib/components/icons/logo-safemeet.svelte'

	import { scroll } from '$lib/utils/pageScroll'

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
	<title>SafeMeet</title>
	<meta
		name="description"
		content="SafeMeet is a Waku Object helping people to arrange in-person meetings, with an emphasis on safety and privacy."
	/>
</svelte:head>

<svelte:window bind:innerWidth />

<Layout iconBg="#3f3f3f" bind:open={sidebar_show}>
	<LogoSafeMeet size={20} slot="icon" color="#FF6128" title="SafeMeet logo" />
	<div slot="title">SafeMeet</div>
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
						scroll(document.querySelector('#add-date'))
						toggle()
					}}
				>
					Setting date and time
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#add-area'))
						toggle()
					}}
				>
					Setting meeting area
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
			<svelte:fragment slot="cl-header">SafeMeet full view</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#safemeet-full-view'))
						toggle()
					}}
				>
					SafeMeet full view
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#safemeet-confirmed'))
						toggle()
					}}
				>
					Meeting confirmed
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#safemeet-check-time'))
						toggle()
					}}
				>
					Location check on meeting time
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#safemeet-not-in-area'))
						toggle()
					}}
				>
					Participant(s) not located within meeting area
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#safemeet-share-location'))
						toggle()
					}}
				>
					Sharing exact meeting location
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#safemeet-signaling-arrival'))
						toggle()
					}}
				>
					Signaling arrival (invitee)
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#safemeet-ending'))
						toggle()
					}}
				>
					Meeting ending
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#safemeet-history'))
						toggle()
					}}
				>
					Activity history
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
	</svelte:fragment>
	<PageHeader bgColor="#3F3F3F" slot="pageheader">
		<LogoSafeMeet size={140} slot="image" color="#FF6128" />
		<p slot="first">
			SafeMeet is a Waku Object helping people to arrange in-person meetings, with an emphasis on
			safety and privacy.
		</p>
		<p slot="second">
			This page is an in-depth presentation of SafeMeet. This Waku Object is currently a concept. If
			you would like to contribute or build it, you can use the provided design material and refer
			to our <a
				href="https://github.com/logos-innovation-lab/waku-objects-playground/blob/main/DEVELOPERS.md"
				target="_blank">building guidelines</a
			>.
		</p>
	</PageHeader>
	<section id="add-to-chat">
		<DetailSection title="Adding to Chat" section="01" imgPattern="SafeMeet_S">
			<p slot="description">
				A new SafeMeet instance can be added to any chat by using the “+” button, next to the
				message input. In a private chat, the meeting will be organised with the other chat member.
				If SafeMeet is added to a group chat, the next step will be to choose who to meet.
			</p>
		</DetailSection>
		<div id="add-date">
			<DetailSection title="Setting date and time" sub section="02" imgPattern="SafeMeet_S">
				<p slot="description">
					A calendar view allows me to pick a date and a time picker allows me to select a time for
					the meeting.
				</p>
			</DetailSection>
		</div>
		<div id="add-area">
			<DetailSection title="Setting meeting area" sub section="03" imgPattern="SafeMeet_S">
				<p slot="description">
					In SafeMeet, the exact meeting location is not defined upfront. Instead, I can define a
					meeting area (of variable size) within which the meeting location will be chosen at the
					last minute.
				</p>
			</DetailSection>
		</div>
		<div id="add-summary">
			<DetailSection title="Summary" sub last section="04" imgPattern="SafeMeet_S">
				<p slot="description">
					The summary view allows me to check the meeting details I provided, before adding to the
					chat.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="in-chat-messages">
		<DetailSection title="In-chat messages" last section="05" imgPattern="SafeMeet_S">
			<p slot="description">
				SafeMeet will post messages to the chat when a new meeting invite is sent, when a meeting
				invite is accepted or declined and when a previously accepted meeting is cancelled.
			</p>
		</DetailSection>
	</section>
	<section id="safemeet-full-view">
		<DetailSection title="SafeMeet full view" section="06" imgPattern="SafeMeet_S">
			<p slot="description">
				By tapping on any SafeMeet instance I can access the Waku Object full view, where more
				information and actions are available.
			</p>
		</DetailSection>
		<div id="safemeet-confirmed">
			<DetailSection title="Meeting confirmed" sub section="07" imgPattern="SafeMeet_S">
				<p slot="description">
					Once the invited person accepts the invite, the meeting is confirmed. A new message is
					posted in the chat and the SafeMeet full view is updated with the latest activity.
				</p>
			</DetailSection>
		</div>
		<div id="safemeet-check-time">
			<DetailSection
				title="Location check on meeting time"
				sub
				section="08"
				imgPattern="SafeMeet_S"
			>
				<p slot="description">
					On meeting time, SafeMeet checks both participants location. If both of them are within
					the agreed meeting area, the inviter is asked to look for a safe place to meet. The
					invitee is informed that the exact meeting location will be shared soon.
				</p>
			</DetailSection>
		</div>
		<div id="safemeet-not-in-area">
			<DetailSection
				title="Participant(s) not located within meeting area"
				sub
				section="09"
				imgPattern="SafeMeet_S"
			>
				<p slot="description">
					If not all participants are located within the meeting area on meeting time, SafeMeet will
					provide each participant with contextual information and what to do next.
				</p>
			</DetailSection>
		</div>
		<div id="safemeet-share-location">
			<DetailSection
				title="Sharing exact meeting location"
				sub
				section="10"
				imgPattern="SafeMeet_S"
			>
				<p slot="description">
					Once the inviter found a safe location for the meeting to happen, he can share his
					location with the invitee. The invitee is not sharing his location at this time, giving
					him a chance to assess the meeting location discreetly before proceeding.
				</p>
			</DetailSection>
		</div>
		<div id="safemeet-signaling-arrival">
			<DetailSection title="Signaling arrival (invitee)" sub section="11" imgPattern="SafeMeet_S">
				<p slot="description">
					Upon arriving at the meeting location, the invitee is prompted to signal his arrival to
					the inviter, after assessing the situation. If something looks suspicious, the invitee can
					walk away without having revealed his location.
				</p>
			</DetailSection>
		</div>
		<div id="safemeet-ending">
			<DetailSection title="Meeting ending" sub section="12" imgPattern="SafeMeet_S">
				<p slot="description">
					Ten minutes after the invitee signaled his arrival, the inviter's location sharing will
					stop automatically. Also, both participants are informed that if no further action is
					taken the meeting will be closed automatically. This is for safety and privacy reasons and
					avoiding potential tracking while leaving the meeting location — when meeting in-person,
					it's easy to forget things on the phone.
				</p>
			</DetailSection>
		</div>
		<div id="safemeet-history">
			<DetailSection title="Activity history" sub section="13" imgPattern="SafeMeet_S">
				<p slot="description">
					By default, only the latest or new (unseen) activity is displayed on top of the full view.
					All activity related to a SafeMeet instance can be viewed in the “Activity history” view.
				</p>
			</DetailSection>
		</div>
	</section>
	<Footer />
</Layout>
