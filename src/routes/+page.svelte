<script lang="ts">
	// Components
	import Button from '$lib/components/button.svelte'
	import Container from '$lib/components/container.svelte'
	import Divider from '$lib/components/divider.svelte'
	import Footer from '$lib/components/footer.svelte'
	import WakuObject from '$lib/components/waku-object.svelte'

	// Icons
	import WakuLogo from '$lib/components/icons/logo-waku.svelte'
	import LogoPayggy from '$lib/components/icons/logo-payggy.svelte'
	import LogoSafemeet from '$lib/components/icons/logo-safemeet.svelte'
	import LogoSplit from '$lib/components/icons/logo-split.svelte'
	import LogoSwarmcity from '$lib/components/icons/logo-swarmcity.svelte'
	import Launch from '$lib/components/icons/launch.svelte'
	import Info from '$lib/components/icons/information.svelte'
	import Header from '$lib/components/header.svelte'

	import { scroll } from '$lib/utils/pageScroll'
</script>

<Header
	title="Waku Play"
	onClick={() => {
		scroll(document.querySelector('#intro'), true)
	}}
>
	<svelte:fragment slot="icon">
		<WakuLogo size={48} title="Waku brand logo" />
	</svelte:fragment>
</Header>
<section id="intro">
	<Container padY={0} size="normal">
		<h1>
			Waku Objects are mini-applications that can be added to a host chat application and extend its
			functionalities. People interact with Waku Objects within the chat to execute specific
			transactional cryptographic protocols.
		</h1>
		<h2>
			Waku Play includes Waku Chat, a basic chat application and a set of Waku Objects that can be
			integrated to the chat application. Waku Play is a proof-of-concept built on <a
				href="https://waku.org/"
				target="_blank">Waku</a
			>, a decentralised messaging protocol.
		</h2>
	</Container>
</section>
<Container padY={0} size="normal">
	<Divider padTop={48} />
</Container>
<section id="chat">
	<Container padY={48} size="normal">
		<h3 class="section-title">Waku Chat</h3>
		<div class="grid">
			<a href="/waku-chat" target="_blank" style="border: none;">
				<div class="img" />
			</a>
			<div class="content">
				<Container padX={0} padY={0} gap={12}>
					<p>
						A simple chat application built on Waku. Initially created as a sandbox for developing
						Waku Objects.
					</p>
					<p>
						Waku Chat is a decentralised, censorship resistant and private communication app, with a
						built-in crypto wallet. Users enhance their private and group chats with small app
						widgets called Waku Objects.
					</p>
					<Container padX={0} padY={12} gap={12} direction="row" alignItems="center">
						<Button link="https://chat.wakuplay.im/" variant="strong">
							<Launch />
							Try Waku Chat
						</Button>
						<Button link="/waku-chat">
							<Info />
							Learn more
						</Button>
					</Container>
				</Container>
			</div>
		</div>
	</Container>
</section>
<Container padY={0} size="normal">
	<Divider />
</Container>
<section id="objects">
	<Container padY={48} size="normal">
		<h3 class="section-title">Waku Objects</h3>
		<div class="grid">
			<WakuObject name="Payggy" bgColor="#91ff76" link="/payggy">
				<LogoPayggy title="Payggy object logo" slot="image" color="#0065CC" />

				<svelte:fragment slot="description">
					<p>
						Payggy is a Waku Object you can use to send money (any ERC20, ETH) to your friends. It
						can be used in both group chat and direct messages.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="buttons">
					<Button link="/payggy">
						<Info />
						Learn more
					</Button>
				</svelte:fragment>
			</WakuObject>
			<WakuObject link="/safemeet" name="SafeMeet" bgColor="var(--color-ultraHigh)">
				<LogoSafemeet title="SafeMeet object logo" slot="image" color="#FF6128" />
				<svelte:fragment slot="description">
					<p>
						With SafeMeet, two people can meet each other in the real world without having to worry
						about their privacy or safety. SafeMeet follows a specific security protocol and guides
						you every step of the way.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="buttons">
					<Button link="/safemeet">
						<Info />
						Learn more
					</Button>
				</svelte:fragment>
			</WakuObject>
			<WakuObject name="Split" bgColor="#0065CC" link="/split">
				<LogoSplit title="Split object logo" slot="image" />
				<svelte:fragment slot="description">
					<p>
						Share expenses with a group of friends - with Split you can add expenses, or settle what
						you owe at any time.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="buttons">
					<Button link="/split">
						<Info />
						Learn more
					</Button>
				</svelte:fragment>
			</WakuObject>
			<WakuObject name="Swarm City" bgColor="#FEEA16" link="/swarm-city">
				<LogoSwarmcity title="Swarm City object logo" slot="image" color="#3F3F3F" />
				<svelte:fragment slot="description">
					<p>
						Whatever you need, whenever you need it: ask for it in a group chat, users can respond
						with their offer. Choose a provider, use the escrow functionality and successfully trade
						goods and services while gaining Swarm.city reputation.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="buttons">
					<Button link="/swarm-city">
						<Info />
						Learn more
					</Button>
				</svelte:fragment>
			</WakuObject>
		</div>
	</Container>
</section>
<Container padY={0} size="normal">
	<Divider />
</Container>
<section id="guidelines">
	<Container padY={48} size="normal">
		<h3 class="section-title">Guidelines</h3>
		<div class="grid">
			<div class="content">
				<Container padX={0} padY={0} gap={12}>
					<p>
						Waku Play is an open source system, so anyone can create a Waku Object or fork Waku
						Chat.
					</p>
					<p>
						Get started by <a
							href="https://github.com/logos-innovation-lab/waku-objects-playground"
							target="_blank">cloning the repository</a
						>
						for
						<a href="/waku-chat" target="_blank">Waku Chat</a>, or dive into the
						<a
							href="https://github.com/logos-innovation-lab/waku-objects-playground/blob/main/DEVELOPERS.md"
							target="_blank">documentation</a
						>
						and
						<a href="/design" target="_blank">design guidelines</a>. They exist to promote
						consistency in code and user experience.
					</p>
					<Container padX={0} padY={12} gap={12} direction="row" alignItems="center">
						<Button link="/design">
							<Launch />
							Design Guidelines
						</Button>
						<Button
							link="https://github.com/logos-innovation-lab/waku-objects-playground/blob/main/DEVELOPERS.md"
						>
							<Launch />
							Developer Guidelines
						</Button>
					</Container>
				</Container>
			</div>
			<a href="/design" target="_blank" style="border: none;">
				<div class="img" />
			</a>
		</div>
	</Container>
</section>
<Container padY={0} size="normal">
	<Divider />
</Container>
<section id="why">
	<Container padY={48} size="normal">
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
