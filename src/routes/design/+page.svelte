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
	// import Launch from '$lib/components/icons/launch.svelte'
	// import LogoGithub from '$lib/components/icons/logo-github.svelte'
	import Calibrate from '$lib/components/icons/calibrate.svelte'

	import { scroll } from '$lib/utils/pageScroll'
	import LogoPayggy from '$lib/components/icons/logo-payggy.svelte'
	import LogoGuidelines from '$lib/components/icons/logo-ui-guidelines.svelte'

	$: innerWidth = 0
	$: sidebar_show = innerWidth >= 688 ? true : false
	function toggle() {
		if (innerWidth < 688) {
			sidebar_show = !sidebar_show
		}
	}
</script>

<svelte:head>
	<title>Guidelines</title>
	<meta
		name="description"
		content="This page contains key information to help you design and build your own Waku Objects."
	/>
</svelte:head>

<svelte:window bind:innerWidth />

<Layout iconBg="var(--color-base)" bind:open={sidebar_show}>
	<LogoGuidelines
		size={24}
		color="var(--color-accent)"
		slot="icon"
		title="UI Design Guidelines logo"
	/>
	<div slot="title">Guidelines</div>
	<svelte:fragment slot="content">
		<Collapse>
			<svelte:fragment slot="cl-header">Vision</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#vision'))
						toggle()
					}}
				>
					Vision
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#people-first'))
						toggle()
					}}
				>
					Put people first
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#augment-convos'))
						toggle()
					}}
				>
					Augment conversations
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#integrate'))
						toggle()
					}}
				>
					Integrate seamlessly
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<Collapse>
			<svelte:fragment slot="cl-header">Inserting Waku Objects</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#inserting'))
						toggle()
					}}
				>
					Inserting Waku Objects
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#icon'))
						toggle()
					}}
				>
					Icon
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#name'))
						toggle()
					}}
				>
					Name and short description
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<Collapse>
			<svelte:fragment slot="cl-header">Standalone view</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#standalone-view'))
						toggle()
					}}
				>
					Standalone view
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#setup-flow'))
						toggle()
					}}
				>
					Setup flow
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#instance-management'))
						toggle()
					}}
				>
					Instance management
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<CollapseItem
			onClick={() => {
				scroll(document.querySelector('#active-menu'))
				toggle()
			}}
		>
			Active menu
		</CollapseItem>
		<Collapse>
			<svelte:fragment slot="cl-header">Chat widgets</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#widgets'))
						toggle()
					}}
				>
					Chat widgets
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#anatomy'))
						toggle()
					}}
				>
					Anatomy of a chat widget
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<CollapseItem
			onClick={() => {
				scroll(document.querySelector('#development'))
				toggle()
			}}
		>
			Development
		</CollapseItem>
	</svelte:fragment>
	<PageHeader bgColor="#F3F3F3" slot="pageheader" bgImage="/images/design_guidelines_cover.png">
		<p slot="second">
			Waku Objects are mini-applications that can be added to a host application (typically a chat
			app) and extend its functionalities. This page contains key information to help you design and
			build your own Waku Objects. Have a look at <a href="/waku-chat" target="_blank">Waku Play</a>
			for examples and inspiration. For guidance about development, please refer to the
			<a
				href="https://github.com/logos-innovation-lab/waku-objects-playground/blob/main/DEVELOPERS.md"
				target="_blank">Waku Objects Developers Documentation</a
			>.
		</p>
	</PageHeader>
	<section id="vision">
		<DetailSection title="Vision">
			<p slot="description">
				Waku Objects are an integral part of the <a href="https://www.wakuplay.im/" target="_blank"
					>Waku Play system</a
				> — they are designed to be integrated into a host application. Essentially, chat applications
				provide a relevant social layer for accessing and using Waku Objects.
			</p>
		</DetailSection>
		<div id="people-first">
			<DetailSection title="Put people first" sub>
				<p slot="description">
					In Waku Play everything starts with chats — not apps, not files, but people. Waku Objects
					leverage the social context defined by the chat they are inserted into. For example,
					sending money to someone with Payggy starts from a private chat, which defines the payment
					recipients details.
				</p>
			</DetailSection>
		</div>
		<div id="augment-convos">
			<DetailSection title="Augment conversations" sub>
				<p slot="description">
					Waku Objects extend and empower chat conversations with new features. Waku Objects
					functionalities should be built around, and combined, with the existing social
					interactions of the chat — not replacing them and not providing unnecessary distraction.
				</p>
			</DetailSection>
		</div>
		<div id="integrate">
			<DetailSection title="Integrate seamlessly" sub last>
				<p slot="description">
					Waku Objects offer a unified and seamless user experience by being fully integrated with
					the chat application. To that regard, it is important to understand how the user interface
					is divided between the Waku Object and the chat application. The following sections of
					these guidelines will explain how they are woven together.
					<br />
					<br />
					Furthermore, to achieve the best consistency, Waku Objects follow the same visual design guidelines
					as the application hosting them. For example in Waku Play, everything is designed using Dieter,
					a flexible and open-source design system.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="inserting">
		<DetailSection title="Inserting Waku Objects" section="01" imgPattern="Guidelines_S">
			<p slot="description">
				Waku Objects instances can be inserted to any chat by opening a list view displaying all
				available Waku Objects for that chat. Each Waku Object needs an icon, a name and a short
				description.
				<br />
				<br />
				For example, this is how the insert Waku Object list looks like on Waku Chat.
			</p>
		</DetailSection>
	</section>
	<section id="icon">
		<DetailSection title="Icon" section="02" imgPattern="Guidelines_S">
			<p slot="description">
				Waku Objects icons are designed in a square format. The primary icon fits in a 50% smaller
				square, center-aligned within the background container. Depending on where it's used, the
				icon might be cropped as a rounded rectangle, or circle.
			</p>
		</DetailSection>
		<div id="name">
			<DetailSection title="Name and short description" sub last imgPattern="Guidelines_S">
				<p slot="description">
					The Waku Object name should be short and memorable. Use 25 characters maximum.
					<br />
					<br />
					The Waku Object description helps people understand its purpose, in one short sentence. For
					best results use 25 to 30 characters, but you can use up to 60 characters.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="standalone-view">
		<DetailSection title="Standalone view" imgPattern="Guidelines_S">
			<p slot="description">
				Waku Objects open in a standalone, fullscreen view. Typically, the standalone view is used
				to configure a new instance when inserting it to a chat, or to manage an existing instance
				with full control. In standalone view, the Waku Object uses the entire area of the screen,
				so there must be a close button in order to get back to the chat application.
				<br />
				<br />
				These guidelines will cover layout principles for the setup flow and instance management of a
				Waku Object.
			</p>
		</DetailSection>
		<div id="setup-flow">
			<DetailSection title="Setup flow" sub section="03" imgPattern="Guidelines_S">
				<p slot="description">
					The setup flow layouts are used to configure a Waku Object instance properties, when
					inserting into a chat. They follow a step-by-step logic, dealing with one piece of
					information at a time.
				</p>
			</DetailSection>
			<DetailSection sub section="04" imgPattern="Guidelines_S">
				<p slot="description">
					There can be as many steps as needed, but try to keep the setup flow as short as possible.
					Once all the required info has been submitted, a summary screen is displayed. The summary
					screen contains all the submitted information, along with some optional additional
					information.
				</p>
			</DetailSection>
			<DetailSection sub section="05" imgPattern="Guidelines_S">
				<p slot="description">
					The summary screen allows people to review all submitted data, before inserting the Waku
					Object to the chat. It is possible to edit a specific entry directly — without having to
					go through the whole flow again.
				</p>
				<p slot="extra">
					In that case, the specific step is displayed, with a “Save changes” button allowing to
					enter the correct information and go back to the summary view.
				</p>
			</DetailSection>
		</div>
		<div id="instance-management">
			<DetailSection title="Instance Management" sub last section="06" imgPattern="Guidelines_S">
				<p slot="description">
					Once a Waku Object instance has been created and inserted to a chat, the “instance
					management” view allows people to access all the functionalities of that Waku Object, in
					fullscreen.
					<br />
					<br />
					Every Waku Object is different and needs to be designed specifically, however, here are some
					structural guidelines and building principles on how to approach the design.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="active-menu">
		<DetailSection title="Active menu" last section="07" imgPattern="Guidelines_S">
			<p slot="description">
				The active menu provides activity notifications and direct access to the standalone view for
				active instances of Waku Objects — even when chat widgets are no longer visible on the
				screen. Displaying notifications on the active menu is the prefered way for a Waku Object to
				communicate information and activity to chat members, because it is less obtrusive than a
				chat widget.
			</p>
			<p slot="extra">
				When there's only one active instance of a Waku Object, tapping on the icon will open the
				standalone view directly. If there are multiple active instances, then tapping the icon will
				display a list of the active instances.
			</p>
		</DetailSection>
	</section>
	<section id="widgets">
		<DetailSection title="Chat widgets" section="08" imgPattern="Guidelines_S">
			<p slot="description">
				Waku Objects can post chat widgets to the chat. Chat widgets are fully integrated into the
				chat conversation. A chat widget provides key information and quick access to the Waku
				Object instance that posted it. In order to reduce noise and distraction, chat widgets are
				used only for important information that require immediate attention from chat members. For
				all other activity, you should display a notification on the active menu.
				<br />
				<br />
				Below are some examples of chat widgets inserted into a chat view, in Waku Play.
			</p>
		</DetailSection>
		<div id="anatomy">
			<DetailSection
				title="Anatomy of a chat widget"
				sub
				last
				section="09"
				imgPattern="Guidelines_S"
			>
				<p slot="description">
					Chat widgets are designed to be as compact as possible. They convey key information at a
					glance, without taking too much space from the chat conversation. Because each Waku Object
					is different, the information displayed by chat widgets will differ — however, you can use
					the building principle explained below as a guideline.
					<br />
					<br />
					Also, a chat widget needs to be integrated into a chat message format which is provided by
					the host chat application. When designing a chat widget you control only the content part —
					the header and footer of the message are provided by the chat application.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="development">
		<DetailSection last title="Development">
			<p slot="description">
				This page is here to help you understand the principles and how to design your own Waku
				Object. For guidance about code and development please refer to the <a
					href="https://github.com/logos-innovation-lab/waku-objects-playground/blob/main/DEVELOPERS.md
"
					target="_blank">Waku Objects Developers Documentation</a
				> on Github.
			</p>
		</DetailSection>
	</section>
</Layout>
<Footer />
