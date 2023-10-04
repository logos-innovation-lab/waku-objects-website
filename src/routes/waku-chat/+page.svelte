<script lang="ts">
	// Components
	import Button from '$lib/components/button.svelte'
	import Container from '$lib/components/container.svelte'
	import Divider from '$lib/components/divider.svelte'
	import Footer from '$lib/components/footer.svelte'
	import PageHeader from '$lib/components/page-header.svelte'
	import DetailSection from '$lib/components/detail-section.svelte'
	import Layout from '$lib/components/layout.svelte'
	import Collapse from '$lib/components/collapse.svelte'
	import CollapseItem from '$lib/components/collapse-item.svelte'

	// Icons
	import Launch from '$lib/components/icons/launch.svelte'
	import ChatBot from '$lib/components/icons/chat-bot.svelte'

	import { scroll } from '$lib/utils/pageScroll'

	$: innerWidth = 0
	$: sidebar_show = innerWidth >= 688 ? true : false

	function toggle() {
		if (innerWidth < 688) {
			sidebar_show = !sidebar_show
		}
	}
</script>

<svelte:head>
	<title>Waku Chat</title>
	<meta name="description" content="Waku Chat is a simple chat application built on Waku." />
</svelte:head>

<svelte:window bind:innerWidth />

<div id="intro" />
<Layout bind:open={sidebar_show}>
	<ChatBot slot="icon" />
	<div slot="title">Waku Chat</div>
	<svelte:fragment slot="content">
		<Collapse>
			<svelte:fragment slot="cl-header">Identity</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#identity'))
						toggle()
					}}
				>
					Identity
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#identity-new'))
						toggle()
					}}
				>
					Create a new identity
				</CollapseItem>
			</svelte:fragment>
		</Collapse>

		<CollapseItem
			main
			onClick={() => {
				scroll(document.querySelector('#chats-list'))
				toggle()
			}}
		>
			Chats list
		</CollapseItem>
		<Collapse>
			<svelte:fragment slot="cl-header">Invite to chat</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#invite'))
						toggle()
					}}
				>
					Invite to chat
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#invite-link'))
						toggle()
					}}
				>
					Invite link landing
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<CollapseItem
			main
			onClick={() => {
				scroll(document.querySelector('#private-chat'))
				toggle()
			}}
		>
			Private chat
		</CollapseItem>
		<Collapse>
			<svelte:fragment slot="cl-header">Group chat</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#group-chat'))
						toggle()
					}}
				>
					Group chat
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#group-settings'))
						toggle()
					}}
				>
					Group settings
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#group-invite'))
						toggle()
					}}
				>
					Invite to group
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#group-create'))
						toggle()
					}}
				>
					Create group
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<Collapse>
			<svelte:fragment slot="cl-header">Images</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#images'))
						toggle()
					}}
				>
					Images
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#images-in-chat'))
						toggle()
					}}
				>
					Viewing images in-chat
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#images-fullscreen'))
						toggle()
					}}
				>
					Viewing images fullscreen
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<Collapse>
			<svelte:fragment slot="cl-header">Waku Objects</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#objects'))
						toggle()
					}}
				>
					Waku Objects
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#objects-messages'))
						toggle()
					}}
				>
					Waku Objects messages
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#objects-nav'))
						toggle()
					}}
				>
					Waku Objects in-chat navigation
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#objects-not'))
						toggle()
					}}
				>
					Waku Objects in-chat notifications
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#objects-fullview'))
						toggle()
					}}
				>
					Waku Objects full view
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<Collapse>
			<svelte:fragment slot="cl-header">Identity & Settings</svelte:fragment>
			<svelte:fragment slot="cl-body">
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#settings'))
						toggle()
					}}
				>
					Identity & Settings
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#settings-objects'))
						toggle()
					}}
				>
					Waku Objects
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#settings-account'))
						toggle()
					}}
				>
					Account
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#settings-password'))
						toggle()
					}}
				>
					Password & Recovery
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#settings-contacts'))
						toggle()
					}}
				>
					Contacts list
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#settings-chat'))
						toggle()
					}}
				>
					Chat appearance
				</CollapseItem>
				<CollapseItem
					onClick={() => {
						scroll(document.querySelector('#settings-international'))
						toggle()
					}}
				>
					International
				</CollapseItem>
			</svelte:fragment>
		</Collapse>
		<CollapseItem
			main
			onClick={() => {
				scroll(document.querySelector('#desktop'))
				toggle()
			}}
		>
			Desktop view
		</CollapseItem>
	</svelte:fragment>
	<PageHeader
		bgColor="#404040"
		slot="pageheader"
		bgImage="/images/waku_chat_cover_lg.png /images/waku_chat_cover.png"
	>
		<p slot="first">
			Waku Chat is a simple chat application built on Waku. Waku Objects can be added to Waku Chat.
		</p>
		<p slot="second">
			This page is an in-depth presentation of Waku Chat. You can try the latest build on
			<a href="https://chat.wakuplay.im/" target="_blank">chat.wakuplay.im</a> or contribute on
			<a href="https://github.com/logos-innovation-lab/waku-objects-playground" target="_blank"
				>Github</a
			>. Waku chat is released under
			<a
				href="https://github.com/logos-innovation-lab/waku-objects-playground#license"
				target="_blank">MIT and Apache v2</a
			> licenses.
		</p>
		<svelte:fragment slot="buttons">
			<Button variant="strong" link="https://chat.wakuplay.im/">
				<Launch />
				Try Waku Chat
			</Button>
		</svelte:fragment>
	</PageHeader>
	<section id="identity">
		<DetailSection title="Identity" section="01" imgPattern="WakuChat_S">
			<p slot="description">
				To use Waku Chat you can create a new identity or connect an existing one. If you already
				have a connected identity on your device, you can simply unlock it with your password.
			</p>
		</DetailSection>
		<div id="identity-new">
			<DetailSection title="Create a new identity" sub section="02" imgPattern="WakuChat_S">
				<p slot="description">
					If you don't have an identity, you can simply create a new one directly within Waku Chat.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="chats-list">
		<DetailSection title="Chats list" section="03" imgPattern="WakuChat_S">
			<p slot="description">
				Once you connected an identity, the default view shows a list of your chats. If you don't
				have any active chats, you're prompted to invite someone to chat.
			</p>
		</DetailSection>
	</section>
	<section id="invite">
		<DetailSection title="Invite to chat" section="04" imgPattern="WakuChat_S">
			<p slot="description">
				You can invite someone to chat by showing a QR code or sharing a invite link. If the invitee
				is connected to Waku Chat, a new chat will appear on top of the chat list. The invite to
				chat can be accepted or declined by accessing the new chat from the list.
			</p>
		</DetailSection>
		<div id="invite-link">
			<DetailSection title="Invite link landing" sub section="05" imgPattern="WakuChat_S">
				<p slot="description">
					If the invitee is not connected to Waku Chat, the invite link leads to a specific landing
					page where it's possible to connect or create a new identity.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="private-chat">
		<DetailSection title="Private chat" section="06" imgPattern="WakuChat_S">
			<p slot="description">
				Private chats allow two persons to exchange messages privately. My messages are shown in
				italics to the right side of the screen.
			</p>
		</DetailSection>
	</section>
	<section id="group-chat">
		<DetailSection title="Group chat" section="07" imgPattern="WakuChat_S">
			<p slot="description">
				Group chats allow more members to exchange messages privately. Messages from other people
				(on the left side of the screen) are displayed with the avatar image and name of person that
				posted the message in the group.
			</p>
		</DetailSection>
		<div id="group-settings">
			<DetailSection title="Group settings" sub section="08" imgPattern="WakuChat_S">
				<p slot="description">
					From the “Group settings” page it's possible to change the group details (name and
					picture) and view a list of all group members. I can invite people to the group and also
					invite group members that are not yet in my contacts to chat privately.
				</p>
			</DetailSection>
		</div>
		<div id="group-invite">
			<DetailSection title="Invite to group" sub section="09" imgPattern="WakuChat_S">
				<p slot="description">
					As a member of a group, I can invite people from my contacts list (anyone I have a private
					chat with) to join the group.
				</p>
			</DetailSection>
		</div>
		<div id="group-create">
			<DetailSection title="Create group" sub section="10" imgPattern="WakuChat_S">
				<p slot="description">
					From the “Invite to chat” page I can easily create a group chat. I can invite people from
					my contacts (anyone I have a private chat with) to join the new group.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="images">
		<DetailSection title="Images" section="11" imgPattern="WakuChat_S">
			<p slot="description">
				Images can be posted to a chat by using the “+” button close to the message input. It's
				possible to add a text message along with an image(s) post.
			</p>
		</DetailSection>
		<div id="images-in-chat">
			<DetailSection title="Viewing images in-chat" sub section="12" imgPattern="WakuChat_S">
				<p slot="description">
					Posted images previews are inserted directly in the chat following the messages layout
					grid.
				</p>
			</DetailSection>
		</div>
		<div id="images-fullscreen">
			<DetailSection title="Viewing images fullscreen" sub section="13" imgPattern="WakuChat_S">
				<p slot="description">
					Tapping or clicking on an image preview from the chat opens it in fullscreen view. If the
					post contains multiple images, they open as a navigable gallery.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="objects">
		<DetailSection title="Waku Objects" section="14" imgPattern="WakuChat_S">
			<p slot="description">
				Waku Objects can be added to a chat by using the “+” button close to the message input. By
				selecting “Waku Object” I see a list of all available Waku Objects.
			</p>
		</DetailSection>
		<div id="objects-messages">
			<DetailSection title="Waku Objects messages" sub section="15" imgPattern="WakuChat_S">
				<p slot="description">
					Waku Objects can generate in-chat messages to display important information and key
					actions directly to chat members. These messages vary depending on each Waku Object, but
					are built according to a standardized layout system. A Waku Object message should always
					contain a link to access that Waku Object full view.
				</p>
			</DetailSection>
		</div>
		<div id="objects-nav">
			<DetailSection
				title="Waku Objects in-chat navigation"
				sub
				section="16"
				imgPattern="WakuChat_S"
			>
				<p slot="description">
					If a Waku Object has an active instance in a chat, a floating icon is displayed on the
					top-corner of the chat screen. This allows quick and direct access to the Waku Object full
					view, even when no Waku Object message is visible on-screen. If a Waku Object has multiple
					active instances, a menu allows me to select which one to open.
				</p>
			</DetailSection>
		</div>
		<div id="objects-not">
			<DetailSection
				title="Waku Objects in-chat notifications"
				sub
				section="17"
				imgPattern="WakuChat_S"
			>
				<p slot="description">
					To reduce noise and fatigue in the chat, most of Waku Objects activity should not trigger
					in-chat messages, but use a notification system combined with the in-chat navigation. From
					there, I can easily access the Waku Object full view and see the latest activity and more
					information.
				</p>
			</DetailSection>
		</div>
		<div id="objects-fullview">
			<DetailSection title="Waku Objects full view" sub section="18" imgPattern="WakuChat_S">
				<p slot="description">
					The complete experience of a Waku Object can be accessed through its Waku Object full
					view. Each Waku Object full view is different but should follow some usability and layout
					guidelines to ensure a consistent experience.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="settings">
		<DetailSection title="Identity & Settings" section="19" imgPattern="WakuChat_S">
			<p slot="description">
				By tapping on the button with my avatar (in the top-right corner of the chats list view) I
				can access the “Identity & Settings” page.
			</p>
		</DetailSection>
		<div id="settings-objects">
			<DetailSection title="Waku Objects" sub section="20" imgPattern="WakuChat_S">
				<p slot="description">
					Under “Identity & Settings > Waku Objects” I can find a list of all Waku Objects and find
					all the instances (including the non-active ones) for each Waku Object.
				</p>
			</DetailSection>
		</div>
		<div id="settings-account">
			<DetailSection title="Account" sub section="21" imgPattern="WakuChat_S">
				<p slot="description">
					Under “Identity & Settings > Account” I can view and copy my account address and see a
					complete list of available assets and balances.
				</p>
			</DetailSection>
		</div>
		<div id="settings-password">
			<DetailSection title="Password & Recovery" sub section="22" imgPattern="WakuChat_S">
				<p slot="description">
					Under “Identity & Settings > Password & Recovery” I can change my password, backup my
					recovery phrase or disconnect my identity from the current browser.
				</p>
			</DetailSection>
		</div>
		<div id="settings-contacts">
			<DetailSection title="Contacts list" sub section="23" imgPattern="WakuChat_S">
				<p slot="description">
					Under “Identity & Settings > Contacts list” I can view a list of all my contacts. I can
					select a contact and go to the contact page where I can access our private chat or remove
					it from my contacts list.
				</p>
			</DetailSection>
		</div>
		<div id="settings-chat">
			<DetailSection title="Chat appearance" sub section="24" imgPattern="WakuChat_S">
				<p slot="description">
					Under “Identity & Settings > Chat appearance” I can change and preview the appearance of
					Waku Chat.
				</p>
			</DetailSection>
		</div>
		<div id="settings-international">
			<DetailSection title="International" sub section="25" imgPattern="WakuChat_S">
				<p slot="description">
					Under “Identity & Settings > International” I can change the interface language, date and
					time formats.
				</p>
			</DetailSection>
		</div>
	</section>
	<section id="desktop">
		<DetailSection title="Desktop view" section="26" imgPattern="WakuChat_S">
			<p slot="description">
				By tapping on the button with my avatar (in the top-right corner of the chats list view) I
				can access the “Identity & Settings” page.
			</p>
		</DetailSection>
	</section>
	<Footer />
</Layout>
