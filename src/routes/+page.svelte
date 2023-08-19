<script lang="ts">
	// Components
	import Button from '$lib/components/button.svelte'
	import Container from '$lib/components/container.svelte'
	import Divider from '$lib/components/divider.svelte'
	import Footer from '$lib/components/footer.svelte'
	import Dropdown from '$lib/components/dropdown.svelte'
	import WakuObject from '$lib/components/waku-object.svelte'
	import DropdownItem from '$lib/components/dropdown-item.svelte'

	// Icons
	import WakuLogo from '$lib/components/icons/waku-logo.svelte'
	import Menu from '$lib/components/icons/menu.svelte'
	import LogoPayggy from '$lib/components/icons/logo-payggy.svelte'
	import LogoSafemeet from '$lib/components/icons/logo-safemeet.svelte'
	import LogoSplit from '$lib/components/icons/logo_split.svelte'
	import LogoSwarmcity from '$lib/components/icons/logo_swarmcity.svelte'
	import Launch from '$lib/components/icons/launch.svelte'
	import ZoomIn from '$lib/components/icons/zoom-in.svelte'
</script>

<header>
	<Container
		padX={48}
		padY={48}
		direction="row"
		justify="space-between"
		alignItems="center"
		sticky="top"
		wide={true}
	>
		<div class="logo">
			<WakuLogo size={48} title="Waku brand logo" />
			Waku Play
		</div>
		<nav class="nav-main">
			<Dropdown>
				<Button slot="button" variant="icon">
					<Menu />
				</Button>
				<DropdownItem
					onClick={() => {
						console.log('waku objects')
					}}
				>
					Waku Objects
				</DropdownItem>
				<DropdownItem
					onClick={() => {
						console.log('waku chat')
					}}
				>
					Waku Chat
				</DropdownItem>
				<DropdownItem
					onClick={() => {
						console.log('design guidelines')
					}}
				>
					Design Guidelines
				</DropdownItem>
				<DropdownItem
					onClick={() => {
						console.log('why waku play')
					}}
				>
					Why Waku Play?
				</DropdownItem>
			</Dropdown>
		</nav>
	</Container>
</header>
<div class="intro">
	<Container padY={0}>
		<h1>
			Waku Play is a system of Waku Objects that can be added to <a href="#chat">Waku Chat</a>.
			People in the chat interact with Waku Objects to execute specific transactional cryptographic
			protocols, directly within the chat interface.
		</h1>
		<h2>
			Waku Play is built on <a href="https://waku.org/" target="_blank">Waku</a> — a decentralised messaging
			protocol.
		</h2>
	</Container>
	<Container>
		<Divider padTop={48} />
	</Container>
</div>
<div class="objects">
	<Container padY={48}>
		<h3>Waku Objects</h3>
		<div class="grid">
			<WakuObject name="Payggy" bgColor="#91ff76">
				<LogoPayggy title="Payggy object logo" slot="image" color="#0065CC" />

				<svelte:fragment slot="description">
					<p>
						Vaporware authentic sartorial, humblebrag narwhal schlitz fanny pack copper mug
						snackwave bitters before they sold out. Etsy VHS try-hard cliche.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="buttons">
					<Button
						variant="strong"
						on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
					>
						<Launch />
						Try Payggy
					</Button>
					<Button
						on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
					>
						<ZoomIn />
						Learn more
					</Button>
				</svelte:fragment>
			</WakuObject>
			<WakuObject name="SafeMeet" bgColor="var(--color-ultraHigh)">
				<LogoSafemeet title="SafeMeet object logo" slot="image" color="#FF6128" />
				<svelte:fragment slot="description">
					<p>
						Vaporware authentic sartorial, humblebrag narwhal schlitz fanny pack copper mug
						snackwave bitters before they sold out. Etsy VHS try-hard cliche.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="buttons">
					<Button
						on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
					>
						<ZoomIn />
						Learn more
					</Button>
				</svelte:fragment>
			</WakuObject>
			<WakuObject name="Split" bgColor="#0065CC">
				<LogoSplit title="Split object logo" slot="image" />
				<svelte:fragment slot="description">
					<p>
						Vaporware authentic sartorial, humblebrag narwhal schlitz fanny pack copper mug
						snackwave bitters before they sold out. Etsy VHS try-hard cliche.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="buttons">
					<Button
						variant="strong"
						on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
					>
						<Launch />
						Try Split
					</Button>
					<Button
						on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
					>
						<ZoomIn />
						Learn more
					</Button>
				</svelte:fragment>
			</WakuObject>
			<WakuObject name="Swarm City" bgColor="#FEEA16">
				<LogoSwarmcity title="Swarm City object logo" slot="image" />
				<svelte:fragment slot="description">
					<p>
						Vaporware authentic sartorial, humblebrag narwhal schlitz fanny pack copper mug
						snackwave bitters before they sold out. Etsy VHS try-hard cliche.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="buttons">
					<Button
						on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
					>
						<ZoomIn />
						Learn more
					</Button>
				</svelte:fragment>
			</WakuObject>
		</div>
	</Container>
</div>
<div class="why">
	<Container>
		<h2>Why Waku Objects?</h2>
		<p>
			The concept of a "chat app to rule them all" refers to an all-encompassing, feature-rich
			messaging application that provides a wide range of services and functionalities beyond just
			text messaging. WeChat is a prime example of such an app, especially popular in China, where
			it has become a central part of people's lives. It goes beyond simple messaging, offering
			features such as social networking, mobile payments, gaming, shopping, and various other
			services, making it an indispensable platform for many users.
		</p>
		<p>
			While these super apps have undoubtedly revolutionized the way we communicate and interact
			online, they raise concerns about data privacy, user surveillance, and the centralized control
			of user data by corporations and states. Many users have become increasingly cautious about
			their digital footprints and the potential misuse of their personal information.
		</p>
		<p>
			Waku Objects aims to be a starting point for a concerted effort from both developers and users
			who value privacy, decentralization, and openness. With time, effort, and support, a
			decentralized and open chat app could emerge as a formidable competitor to the existing
			corporate behemoths.
		</p>
		<h3>Data Privacy and Security</h3>
		<p>
			In centralized chat apps, user data is stored on servers controlled by a company, making it
			susceptible to data breaches and surveillance by states. An open, distributed alternative
			employs end-to-end encryption and decentralized storage, giving users more control over their
			data and enhancing security.
		</p>
		<h3>Avoiding Vendor Lock-in</h3>
		<p>
			With proprietary chat apps, users are tied to a specific ecosystem, limiting their freedom to
			switch between platforms. An open alternative ensures interoperability and allows users to
			communicate across different platforms seamlessly.
		</p>
		<h3>Community-Driven Development:</h3>
		<p>
			A decentralized and open platform fostering a community of developers who can contribute to
			its improvement and ensure that it serves the needs and interests of its users, rather than
			being driven solely by profit motives.
		</p>
		<h3>Global Accessibility</h3>
		<p>
			Accessible to users worldwide, including those in regions where certain corporate apps might
			be restricted or inaccessible.
		</p>
		<h3>Innovation and Customization:</h3>
		<p>
			Encouraging innovation and customization, allowing developers to create new features and
			extensions that suit their needs and preferences.
		</p>
	</Container>
</div>
<Divider />
<div class="how">
	<Container>
		<h2>How does it work?</h2>
		<ul>
			<li>Explain the system</li>
			<li>A bit about waku</li>
			<li>Waku Objects; how is it build, how to use it, how to make one yourself.</li>
			<li>Implementation details</li>
			<li>Design system</li>
			<li>Protocol (link to md)</li>
		</ul>
	</Container>
</div>
<Divider />
<div class="use">
	<Container>
		<h2>How can I use this in my app?</h2>
		<p>Check out the Sandbox and play with it or read the docs</p>
	</Container>
</div>
<Divider />
<div class="who">
	<Container>
		<h2>Who made this?</h2>
		<p>Logos Innovation Lab boilerplate</p>
	</Container>
</div>
<Footer />

<style lang="scss">
	.logo {
		display: flex;
		align-items: center;
		gap: var(--spacing-12);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-700);
	}

	.intro {
		h1 {
			margin-bottom: var(--spacing-24);
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		column-gap: var(--spacing-48);
		row-gap: var(--spacing-48);
	}
</style>
