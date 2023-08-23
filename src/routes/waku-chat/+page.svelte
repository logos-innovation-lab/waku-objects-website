<script lang="ts">
	// Components
	import Button from '$lib/components/button.svelte'
	import Container from '$lib/components/container.svelte'
	import Divider from '$lib/components/divider.svelte'
	import Footer from '$lib/components/footer.svelte'
	import Dropdown from '$lib/components/dropdown.svelte'
	// import WakuObject from '$lib/components/waku-object.svelte'
	import DropdownItem from '$lib/components/dropdown-item.svelte'

	// Icons
	// import WakuLogo from '$lib/components/icons/waku-logo.svelte'
	// import LogoPayggy from '$lib/components/icons/logo-payggy.svelte'
	// import LogoSafemeet from '$lib/components/icons/logo-safemeet.svelte'
	// import LogoSplit from '$lib/components/icons/logo-split.svelte'
	// import LogoSwarmcity from '$lib/components/icons/logo-swarmcity.svelte'
	// import Launch from '$lib/components/icons/launch.svelte'
	// import ZoomIn from '$lib/components/icons/zoom-in.svelte'
	import Menu from '$lib/components/icons/menu.svelte'
	import Header from '$lib/components/header.svelte'
	import ChatBot from '$lib/components/icons/chat-bot.svelte'
	import PageHeader from '$lib/components/page-header.svelte'
	import Launch from '$lib/components/icons/launch.svelte'
	import LogoGithub from '$lib/components/icons/logo-github.svelte'
	import Calibrate from '$lib/components/icons/calibrate.svelte'
	import DetailSection from '$lib/components/detail-section.svelte'

	import { scroll } from '$lib/utils/pageScroll'
</script>

<Header title="Waku Chat">
	<svelte:fragment slot="icon">
		<ChatBot size={24} title="Waku Chat logo" />
	</svelte:fragment>
	<svelte:fragment slot="nav">
		<Dropdown>
			<Button slot="button" variant="icon">
				<Menu />
			</Button>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#identity'))
				}}
			>
				Identity
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#chats-list'))
				}}
			>
				Chats lists
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#invite'))
				}}
			>
				Invite to chat
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#private-chat'))
				}}
			>
				Private chat
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#group-chat'))
				}}
			>
				Group chat
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#images'))
				}}
			>
				Images
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#waku-objects'))
				}}
			>
				Waku Objects
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#settings'))
				}}
			>
				Identity & Settings
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#desktop'))
				}}
			>
				Desktop view
			</DropdownItem>
		</Dropdown>
	</svelte:fragment>
</Header>
<PageHeader>
	<img src="/images/waku_play_cover.svg" alt="Waku Chat banner" slot="image" />
	<p slot="first">
		Waku Chat is a simple chat application built on Waku. Waku Objects can be added to Waku Chat.
	</p>
	<p slot="second">
		This page is an in-depth presentation of Waku Chat. You can try the latest build on
		wakuplay.im/chat or contribute on Github. Waku chat is released under license terms.
	</p>
	<svelte:fragment slot="buttons">
		<Button
			variant="strong"
			on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
		>
			<Launch />
			Try now
		</Button>
		<Button on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}>
			<LogoGithub />
			Github
		</Button>
		<Button on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}>
			<Calibrate />
			Design specs
		</Button>
	</svelte:fragment>
</PageHeader>
<section id="identity">
	<DetailSection title="Identity">
		To use Waku Chat you can create a new identity or connect an existing one. If you already have a
		connected identity on your device, you can simply unlock it with your password.
		<svelte:fragment slot="images">
			<!-- <img src="/images/payggy_001.png" alt="" />
			<img src="/images/payggy_002.png" alt="" />
			<img src="/images/payggy_003.png" alt="" /> -->

			<!-- <LightboxGallery>
				<svelte:fragment slot="thumbnail">
					<div class="sample-class-1">
						<div class="sample-class-2">
							<div class="sample-class-3">
								<img src="/images/payggy_001.png" alt="" />
							</div>
							<div class="sample-class-4">
								<img src="/images/payggy_002.png" alt="" />
							</div>
							<div class="sample-class-4">
								<img src="/images/payggy_003.png" alt="" />
							</div>
						</div>
					</div>
				</svelte:fragment>

				<GalleryImage>
					<img src="/images/payggy_001.png" alt="" />
				</GalleryImage>
				<GalleryImage>
					<img src="/images/payggy_002.png" alt="" />
				</GalleryImage>
				<GalleryImage>
					<img src="/images/payggy_003.png" alt="" />
				</GalleryImage>
			</LightboxGallery> -->
		</svelte:fragment>
	</DetailSection>
	<DetailSection title="Create a new identity" sub>
		If you don't have an identity, you can simply create a new one directly within Waku Chat.
	</DetailSection>
</section>
<section id="chats-list">
	<DetailSection title="Chats list">
		Once you connected an identity, the default view shows a list of your chats. If you don't have
		any active chats, you're prompted to invite someone to chat.
	</DetailSection>
</section>
<section id="invite">
	<DetailSection title="Invite to chat">
		You can invite someone to chat by showing a QR code or sharing a invite link. If the invitee is
		connected to Waku Chat, a new chat will appear on top of the chat list. The invite to chat can
		be accepted or declined by accessing the new chat from the list.
	</DetailSection>
	<DetailSection title="Invite link landing" sub>
		If the invitee is not connected to Waku Chat, the invite link leads to a specific landing page
		where it's possible to connect or create a new identity.
	</DetailSection>
</section>
<section id="private-chat">
	<DetailSection title="Private chat">
		Private chats allow two persons to exchange messages privately. My messages are shown in italics
		to the right side of the screen.
	</DetailSection>
</section>
<section id="group-chat">
	<DetailSection title="Group chat">
		Group chats allow more members to exchange messages privately. Messages from other people (on
		the left side of the screen) are displayed with the avatar image and name of person that posted
		the message in the group.
	</DetailSection>
	<DetailSection title="Group settings" sub>
		From the “Group settings” page it's possible to change the group details (name and picture) and
		view a list of all group members. I can invite people to the group and also invite group members
		that are not yet in my contacts to chat privately.
	</DetailSection>
	<DetailSection title="Invite to group" sub>
		As a member of a group, I can invite people from my contacts list (anyone I have a private chat
		with) to join the group.
	</DetailSection>
	<DetailSection title="Create group" sub>
		From the “Invite to chat” page I can easily create a group chat. I can invite people from my
		contacts (anyone I have a private chat with) to join the new group.
	</DetailSection>
</section>
<section id="images">
	<DetailSection title="Images">
		Images can be posted to a chat by using the “+” button close to the message input. It's possible
		to add a text message along with an image(s) post.
	</DetailSection>
	<DetailSection title="Viewing images in-chat" sub>
		Posted images previews are inserted directly in the chat following the messages layout grid.
	</DetailSection>
	<DetailSection title="Viewing images fullscreen" sub>
		Tapping or clicking on an image preview from the chat opens it in fullscreen view. If the post
		contains multiple images, they open as a navigable gallery.
	</DetailSection>
</section>
<section id="waku-objects">
	<DetailSection title="Waku Objects">
		Waku Objects can be added to a chat by using the “+” button close to the message input. By
		selecting “Waku Object” I see a list of all available Waku Objects.
	</DetailSection>
	<DetailSection title="Waku Objects messages" sub>
		Waku Objects can generate in-chat messages to display important information and key actions
		directly to chat members. These messages vary depending on each Waku Object, but are built
		according to a standardized layout system. A Waku Object message should always contain a link to
		access that Waku Object full view.
	</DetailSection>
	<DetailSection title="Waku Objects in-chat navigation" sub>
		If a Waku Object has an active instance in a chat, a floating icon is displayed on the
		top-corner of the chat screen. This allows quick and direct access to the Waku Object full view,
		even when no Waku Object message is visible on-screen. If a Waku Object has multiple active
		instances, a menu allows me to select which one to open.
	</DetailSection>
	<DetailSection title="Waku Objects in-chat notifications" sub>
		To reduce noise and fatigue in the chat, most of Waku Objects activity should not trigger
		in-chat messages, but use a notification system combined with the in-chat navigation. From
		there, I can easily access the Waku Object full view and see the latest activity and more
		information.
	</DetailSection>
	<DetailSection title="Waku Objects full view" sub>
		The complete experience of a Waku Object can be accessed through its Waku Object full view. Each
		Waku Object full view is different but should follow some usability and layout guidelines to
		ensure a consistent experience.
	</DetailSection>
</section>
<section id="settings">
	<DetailSection title="Identity & Settings">
		By tapping on the button with my avatar (in the top-right corner of the chats list view) I can
		access the “Identity & Settings” page.
	</DetailSection>
	<DetailSection title="Waku Objects" sub>
		Under “Identity & Settings > Waku Objects” I can find a list of all Waku Objects and find all
		the instances (including the non- active ones) for each Waku Object.
	</DetailSection>
	<DetailSection title="Account" sub>
		Under “Identity & Settings > Account” I can view and copy my account address and see a complete
		list of available assets and balances.
	</DetailSection>
	<DetailSection title="Password & Recovery" sub>
		Under “Identity & Settings > Password & Recovery” I can change my password, backup my recovery
		phrase or disconnected my identity from the current browser.
	</DetailSection>
	<DetailSection title="Contacts list" sub>
		Under “Identity & Settings > Contacts list” I can view a list of all my contacts. I can select a
		contact and go to the contact page where I can access our private chat or remove it from my
		contacts list.
	</DetailSection>
	<DetailSection title="Chat appearance" sub>
		Under “Identity & Settings > Chat appearance” I can change and preview the appearance of Waku
		Chat.
	</DetailSection>
	<DetailSection title="International" sub>
		Under “Identity & Settings > International” I can change the interface language, date and time
		formats.
	</DetailSection>
</section>
<section id="desktop">
	<DetailSection title="Desktop view">
		By tapping on the button with my avatar (in the top-right corner of the chats list view) I can
		access the “Identity & Settings” page.
	</DetailSection>
</section>
<Container padY={0}>
	<Divider padTop={48} />
</Container>
<Footer />
