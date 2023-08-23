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
	import LogoSplit from '$lib/components/icons/logo-split.svelte'
	import LogoSwarmcity from '$lib/components/icons/logo-swarmcity.svelte'
	import Launch from '$lib/components/icons/launch.svelte'
	import ZoomIn from '$lib/components/icons/zoom-in.svelte'
	import Header from '$lib/components/header.svelte'

	import { scroll } from '$lib/utils/pageScroll'
</script>

<Header title="Waku Play">
	<svelte:fragment slot="icon">
		<WakuLogo size={48} title="Waku brand logo" />
	</svelte:fragment>
	<svelte:fragment slot="nav">
		<Dropdown>
			<Button slot="button" variant="icon">
				<Menu />
			</Button>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#objects'))
				}}
			>
				Waku Objects
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#chat'))
				}}
			>
				Waku Chat
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#guidelines'))
				}}
			>
				Design Guidelines
			</DropdownItem>
			<DropdownItem
				onClick={() => {
					scroll(document.querySelector('#why'))
				}}
			>
				Why Waku Play?
			</DropdownItem>
		</Dropdown>
	</svelte:fragment>
</Header>
<section id="intro">
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
</section>
<Container padY={0}>
	<Divider padTop={48} />
</Container>
<section id="objects">
	<Container padY={48}>
		<h3 class="section-title">Waku Objects</h3>
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
					<!-- <Button
						variant="strong"
						on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
					>
						<Launch />
						Try Payggy
					</Button> -->
					<Button on:click={() => (window.location.href = '/payggy')}>
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
					<Button on:click={() => (window.location.href = '/safemeet')}>
						<ZoomIn />
						Learn more
					</Button>
				</svelte:fragment>
			</WakuObject>
			<WakuObject name="Splitter" bgColor="#0065CC">
				<LogoSplit title="Splitter object logo" slot="image" />
				<svelte:fragment slot="description">
					<p>
						Vaporware authentic sartorial, humblebrag narwhal schlitz fanny pack copper mug
						snackwave bitters before they sold out. Etsy VHS try-hard cliche.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="buttons">
					<!-- <Button
						variant="strong"
						on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
					>
						<Launch />
						Try Split
					</Button> -->
					<Button on:click={() => (window.location.href = '/splitter')}>
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
					<Button on:click={() => (window.location.href = '/swarm-city')}>
						<ZoomIn />
						Learn more
					</Button>
				</svelte:fragment>
			</WakuObject>
		</div>
	</Container>
</section>
<Container padY={0}>
	<Divider />
</Container>
<section id="chat">
	<Container padY={48}>
		<h3 class="section-title">Waku Chat</h3>
		<div class="grid">
			<div class="img" />
			<div class="content">
				<Container padX={0} padY={0} gap={12}>
					<p>
						A simple chat application built on Waku. Vice echo park kinfolk shoreditch, lumbersexual
						typewriter taxidermy gastropub irony.
					</p>
					<p>
						Vaporware authentic sartorial, humblebrag narwhal schlitz fanny pack copper mug
						snackwave bitters before they sold out. Etsy VHS try-hard cliche.
					</p>
					<Container padX={0} padY={12} gap={12} direction="row" alignItems="center">
						<Button
							variant="strong"
							on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
						>
							<Launch />
							Try Waku Chat
						</Button>
						<Button on:click={() => (window.location.href = '/waku-chat')}>
							<ZoomIn />
							Learn more
						</Button>
					</Container>
				</Container>
			</div>
		</div>
	</Container>
</section>
<Container padY={0}>
	<Divider />
</Container>
<section id="guidelines">
	<Container padY={48}>
		<h3 class="section-title">Design Guidelines</h3>
		<div class="grid">
			<div class="content">
				<Container padX={0} padY={0} gap={12}>
					<p>
						A simple chat application built on Waku. Vice echo park kinfolk shoreditch, lumbersexual
						typewriter taxidermy gastropub irony.
					</p>
					<p>
						Vaporware authentic sartorial, humblebrag narwhal schlitz fanny pack copper mug
						snackwave bitters before they sold out. Etsy VHS try-hard cliche.
					</p>
					<Container padX={0} padY={12} gap={12} direction="row" alignItems="center">
						<Button variant="strong" on:click={() => (window.location.href = '/learn')}>
							<Launch />
							Learn how to build
						</Button>
					</Container>
				</Container>
			</div>
			<div class="img" />
		</div>
	</Container>
</section>
<Container padY={0}>
	<Divider />
</Container>
<section id="why">
	<Container padY={48}>
		<h3 class="section-title">Why Waku Play?</h3>
		<div class="intro">
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
				online, they raise concerns about data privacy, user surveillance, and the centralized
				control of user data by corporations and states. Many users have become increasingly
				cautious about their digital footprints and the potential misuse of their personal
				information.
			</p>
			<p>
				Waku Objects aims to be a starting point for a concerted effort from both developers and
				users who value privacy, decentralization, and openness. With time, effort, and support, a
				decentralized and open chat app could emerge as a formidable competitor to the existing
				corporate behemoths.
			</p>
		</div>
		<div class="grid">
			<div>
				<h3>Data Privacy and Security</h3>
				<p>
					In centralized chat apps, user data is stored on servers controlled by a company, making
					it susceptible to data breaches and surveillance by states. An open, distributed
					alternative employs end-to-end encryption and decentralized storage, giving users more
					control over their data and enhancing security.
				</p>
			</div>
			<div>
				<h3>Avoiding Vendor Lock-in</h3>
				<p>
					With proprietary chat apps, users are tied to a specific ecosystem, limiting their freedom
					to switch between platforms. An open alternative ensures interoperability and allows users
					to communicate across different platforms seamlessly.
				</p>
			</div>
			<div>
				<h3>Community-Driven Development:</h3>
				<p>
					A decentralized and open platform fostering a community of developers who can contribute
					to its improvement and ensure that it serves the needs and interests of its users, rather
					than being driven solely by profit motives.
				</p>
			</div>
			<div>
				<h3>Global Accessibility</h3>
				<p>
					Accessible to users worldwide, including those in regions where certain corporate apps
					might be restricted or inaccessible.
				</p>
			</div>
			<div>
				<h3>Innovation and Customization:</h3>
				<p>
					Encouraging innovation and customization, allowing developers to create new features and
					extensions that suit their needs and preferences.
				</p>
			</div>
		</div>
	</Container>
</section>
<Footer />

<style lang="scss">
	:root {
		scroll-behavior: smooth;
	}
	#intro {
		h1 {
			margin-bottom: var(--spacing-24);
		}
	}

	.grid {
		display: grid;
		gap: var(--spacing-48) var(--spacing-48);
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

		.img {
			background-size: cover;
			background-position: center center;
			aspect-ratio: 4/3;
		}
		.content {
			p {
				&:first-child {
					font-size: var(--font-size-lg);
				}
			}
		}
	}

	#chat {
		.img {
			background-image: url('/images/waku_play_cover.svg');
		}
	}

	#guidelines {
		@media (max-width: 711px) {
			div:nth-of-type(1) {
				order: 2;
			}
			div:nth-of-type(2) {
				order: 1;
			}
		}

		.img {
			background-image: url('/images/ui_guidelines_cover.svg');
		}
	}

	.section-title {
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-700);
		margin-bottom: var(--spacing-48);
	}

	#why {
		.intro {
			margin-bottom: var(--spacing-48);
			p {
				font-size: var(--font-size-lg);
				line-height: 1.333;

				&:not(:last-child) {
					margin-bottom: var(--spacing-24);
				}

				@media (min-width: 414px) {
					font-size: 24px;
					line-height: 1.25;
				}
			}
		}
	}
</style>
