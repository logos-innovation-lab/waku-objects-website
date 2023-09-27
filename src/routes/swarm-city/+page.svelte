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
	import LogoSwarmcity from '$lib/components/icons/logo-swarmcity.svelte'

	$: innerWidth = 0
	$: sidebar_show = innerWidth >= 688 ? true : false
	console.log(sidebar_show)
	function toggle() {
		if (innerWidth < 688) {
			sidebar_show = !sidebar_show
		}
	}
</script>

<svelte:window bind:innerWidth />

<Layout iconBg="#FEEA16" bind:open={sidebar_show}>
	<LogoSwarmcity size={26} color="#3F3F3F" slot="icon" title="Swarm City logo" />
	<div slot="title">Swarm City</div>
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
						scroll(document.querySelector('#add-select-marketplace'))
						toggle()
					}}
				>
					Selecting a marketplace
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#add-describe'))
						toggle()
					}}
				>
					Describing the request
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#add-set-price'))
						toggle()
					}}
				>
					Setting the price and provider guarantee
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#add-summary'))
						toggle()
					}}
				>
					Summary and confirmation with payment
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
			<svelte:fragment slot="cl-header">Swarm City full view</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-full-view'))
						toggle()
					}}
				>
					Swarm City full view
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-sending-application'))
						toggle()
					}}
				>
					Sending application
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-receiving-applications'))
						toggle()
					}}
				>
					Receiving applications
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-applications-list'))
						toggle()
					}}
				>
					Applications list
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-application-page-seeker'))
						toggle()
					}}
				>
					Application page (seeker view)
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-application-page-provider'))
						toggle()
					}}
				>
					Application page (provider view)
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-application-page-public'))
						toggle()
					}}
				>
					Application page (public view)
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-application-confirming'))
						toggle()
					}}
				>
					Confirming application
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-in-deal'))
						toggle()
					}}
				>
					In a deal
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-history'))
						toggle()
					}}
				>
					Activity history
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#swarmcity-paying-out'))
						toggle()
					}}
				>
					Paying out
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<CollapseItem
			main
			onClick={() => {
				scroll(document.querySelector('#chat'))
				toggle()
			}}
		>
			Swarm City chat
		</CollapseItem>
	</svelte:fragment>
	<PageHeader bgColor="#FEEA16" slot="pageheader">
		<LogoSwarmcity size={180} color="#3F3F3F" slot="image" title="Swarm City logo" />
		<p slot="first">
			Swarm City is a Waku Object concept for swarm.city, a blockchain based marketplace with a
			built in reputation system. With the Swarm City Waku Object, it becomes possible to use a
			marketplace without leaving Waku Chat.
		</p>
		<p slot="second">
			This page is an in-depth presentation of Swarm City. This Waku Object is currently a concept.
			If you would like to contribute or build it, you can use the provided design material and
			refer to our building guidelines.
		</p>
		<svelte:fragment slot="buttons">
			<Button link="/design">
				<Calibrate />
				Design specs
			</Button>
		</svelte:fragment>
	</PageHeader>
	<section id="add-to-chat">
		<DetailSection title="Adding to Chat" section="01" imgPattern="SwarmCity_S">
			<p slot="description">
				A new Swarm City instance can be added to any group chat by using the “+” button, close the
				message input.
			</p>
		</DetailSection>
		<div id="add-select-marketplace">
			<DetailSection title="Selecting a marketplace" sub section="02" imgPattern="SwarmCity_S">
				<p slot="description">
					The first thing I have to do is select a Swarm City marketplace where my request will be
					added.
				</p>
			</DetailSection>
		</div>
		<div id="add-describe">
			<DetailSection title="Describing the request" sub section="03" imgPattern="SwarmCity_S">
				<p slot="description">
					Then I need to provide a short pitch and a more detailed description to explain my
					request. The short pitch will be used for in-chat messages, or wherever the full
					description wouldn't fit.
				</p>
			</DetailSection>
		</div>
		<div id="add-set-price">
			<DetailSection
				title="Setting the price and provider guarantee"
				sub
				section="04"
				imgPattern="SwarmCity_S"
			>
				<p slot="description">
					Here, I indicate how much I will pay for my request to be done. I also specify how much
					guarantee I would like to ask from providers. The provider guarantee is the amount that a
					provider will have to pay in an escrow contract, in order to confirm his application.
				</p>
			</DetailSection>
		</div>
		<div id="add-summary">
			<DetailSection
				title="Summary and confirmation with payment"
				sub
				last
				section="05"
				imgPattern="SwarmCity_S"
			>
				<p slot="description">
					The summary view allows me to check the request details I provided. In order to post a
					request on swarm.city, I will have to pay escrow and the marketplace fee.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="in-chat-messages">
		<DetailSection title="In-chat messages" section="06" last imgPattern="SwarmCity_S">
			<p slot="description">
				Swarm City will post messages to the chat only when a new request is posted, or when a
				previously posted request is deleted.
			</p>
		</DetailSection>
	</section>
	<section id="swarmcity-full-view">
		<DetailSection title="Swarm City full view" section="07" imgPattern="SwarmCity_S">
			<p slot="description">
				By tapping on any Swarm City instance I can access the Waku Object full view, where more
				information and actions are available.
			</p>
		</DetailSection>
		<div id="swarmcity-sending-application">
			<DetailSection title="Sending application" sub section="08" imgPattern="SwarmCity_S">
				<p slot="description">
					As a potential provider, I can submit an application. I need to write a short text to
					“sell myself” to the seeker.
				</p>
			</DetailSection>
		</div>
		<div id="swarmcity-receiving-applications">
			<DetailSection title="Receiving applications" sub section="09" imgPattern="SwarmCity_S">
				<p slot="description">
					Applications to a request will generate a notification on the Swarm City icon in the
					top-right corner. They will not generate in-chat messages, in order to reduce the noise
					for the group. New activity always appears at the top of the Swarm City full view.
				</p>
			</DetailSection>
		</div>
		<div id="swarmcity-applications-list">
			<DetailSection title="Applications list" sub section="10" imgPattern="SwarmCity_S">
				<p slot="description">
					All applications can be accessed and reviewed at any time from the applications list.
					Applications are sorted by their current status: “To review”, “Selected” and “Rejected”.
				</p>
			</DetailSection>
		</div>
		<div id="swarmcity-application-page-seeker">
			<DetailSection
				title="Application page (seeker view)"
				sub
				section="11"
				imgPattern="SwarmCity_S"
			>
				<p slot="description">
					The application page displays profile and reputation information about the potential
					provider, the full application text and key actions allowing the seeker to decide how to
					proceed with that application.
				</p>
			</DetailSection>
		</div>
		<div id="swarmcity-application-page-provider">
			<DetailSection
				title="Application page (provider view)"
				sub
				section="12"
				imgPattern="SwarmCity_S"
			>
				<p slot="description">
					As the potential provider, the application page allows me to review the state of my
					application. If my application was selected by the seeker, I can confirm (with escrow and
					marketplace fee payment) or cancel my application.
				</p>
			</DetailSection>
		</div>
		<div id="swarmcity-application-page-public">
			<DetailSection
				title="Application page (public view)"
				sub
				section="13"
				imgPattern="SwarmCity_S"
			>
				<p slot="description">Anyone can see the status of an application.</p>
			</DetailSection>
		</div>
		<div id="swarmcity-application-confirming">
			<DetailSection title="Confirming application" sub section="14" imgPattern="SwarmCity_S">
				<p slot="description">
					Once the seeker has selected an application, the provider can confirm his application.
					This can de done from the application page or directly from the Swarm City full view. In
					order to confirm his application, the provider has to pay the requested amount of
					provider's guarantee and the marketplace fee.
				</p>
			</DetailSection>
		</div>
		<div id="swarmcity-in-deal">
			<DetailSection title="In a deal" sub section="15" imgPattern="SwarmCity_S">
				<p slot="description">
					Once the confirmation payment has been done by the provider, both parties are in a deal.
					The provider can start working on the task and the seeker will pay him out upon delivery.
				</p>
			</DetailSection>
		</div>
		<div id="swarmcity-history">
			<DetailSection title="Activity history" sub section="16" imgPattern="SwarmCity_S">
				<p slot="description">
					By default, only the latest or new (unseen) activity is displayed on top of the full view.
					All activity related to a SafeMeet instance can be viewed in the “Activity history” view.
				</p>
			</DetailSection>
		</div>
		<div id="swarmcity-paying-out">
			<DetailSection title="Paying out" sub last section="17" imgPattern="SwarmCity_S">
				<p slot="description">
					Once the provider has delivered what was agreed, the seeker pays him out. Both the
					provider and the seeker earn reputation points and the request is closed automatically.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="chat">
		<DetailSection title="Swarm City chat" section="18" imgPattern="SwarmCity_S">
			<p slot="description">
				When the deal is locked, a new chat is opened between the provider and the seeker directly
				in the Waku Chat chats list. This is technically a group chat with 2 participants — in case
				of conflict a third-party moderator can be added to the group by Swarm City.
			</p>
		</DetailSection>
	</section>
</Layout>
<Footer />
