<script lang="ts">
	import { goto } from '$app/navigation'
	import Button from '$lib/components/button.svelte'
	import Container from '$lib/components/container.svelte'
	import Divider from '$lib/components/divider.svelte'
	import Footer from '$lib/components/footer.svelte'

	// Icons
	import WakuLogo from '$lib/components/icons/waku-logo.svelte'
</script>

<div class="hero">
	<Container>
		<div class="content">
			<div class="img">
				<WakuLogo size={180} color="--color-step-20" />
			</div>
			<div class="text">
				<h1>
					Say
					<span>hi</span>
					to Waku Objects
				</h1>
				<p>
					Waku is a decentralised messaging protocol. A Waku Object is a widget that can be added to
					chat conversations. Chat members interact with Waku Objects to execute a specific
					transactional cryptographic protocol.
				</p>
				<div class="buttons">
					<Button
						variant="strong"
						on:click={() => window.open('https://waku-objects-playground.vercel.app/', '_blank')}
						>Launch app</Button
					>

					<!-- TODO: fix link -->
					<!-- <Button on:click={() => window.open('https://kurate.vercel.app', '_blank')}
						>Read the FAQ</Button
					> -->
				</div>
			</div>
		</div>
	</Container>
</div>
<Container>
	<h2>Why is it?</h2>
	<p>
		Talk about “chat app to rule them all” like wechat etc, and how we need an open, distributed and
		free alternative to these monolithic corporate succubus
	</p>
</Container>
<Divider />
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
<Divider />
<Container>
	<h2>How can I use this in my app?</h2>
	<p>Check out the Sandbox and play with it or read the docs</p>
</Container>
<Divider />
<Container>
	<h2>Who made this?</h2>
	<p>Logos Innovation Lab boilerplate</p>
</Container>
<Divider />
<!-- <Container>
	<div class="cols">
		<div class="col">
			<h3>A Persona is a group identity</h3>
			<p>
				In Kurate you and your peers remain private but post content publicly as a group identity
				called a Persona. Each Persona has its own characteristics and culture based on the people
				posting through it.
			</p>
		</div>
		<div class="col">
			<h3>A Persona is curated together</h3>
			<p>
				When a post is submitted, the community votes on whether or not the post is appropriate for
				the Persona's character. The result is a curated stream of community-generated content.
			</p>
		</div>
		<div class="col">
			<h3>A Persona gives privacy</h3>
			<p>
				Posting content through a Persona allows your voice to be heard while you remain anonymous.
				But it's not a free-for-all since the community votes on whether or not each post is in
				character.
			</p>
		</div>
	</div>
</Container>
<hr />
<Container>
	<div class="intro">
		<h2>
			Imagine posting as <span>Satoshi Nakamoto's</span> online Persona. What would you say?
		</h2>
		<div class="subtitle">
			In Kurate a Persona's character is developed by you and your peers, anonymously creating
			content together.
		</div>
	</div>
	<div class="cols">
		<div class="col">
			<h3>Post in character</h3>
			<p>
				Choose a Persona that speaks to you. Read the posts and think about the type of content that
				represents the Persona. Once you get a feel for it, submit your own post for peer review.
			</p>
		</div>
		<div class="col">
			<h3>Curate in character</h3>
			<p>
				Every post submitted to a Persona goes through a curation process, where peers vote on
				whether to promote or demote the post. You vote on your peers' posts too, developing the
				Persona as a community.
			</p>
		</div>
		<div class="col">
			<h3>Develop your character</h3>
			<p>
				Earn reputation (REP) when your peers vote to promote your posts. You also earn REP by
				voting on posts in the direction of the community. The higher your REP, the more you are
				able to do in Kurate.
			</p>
		</div>
	</div>
	<div class="buttons">
		<a
			href="https://kurate-faq.vercel.app/persona/what-is-a-persona"
			target="_blank"
			class="button secondary"
		>
			Learn more about Personas
		</a>
	</div>
</Container>
<hr />
<Container>
	<div class="intro">
		<h2>
			Anonymity and peer-earned reputation combine to empower people to have authentic discourse,
			building community trust.
		</h2>
	</div>
	<div class="cols">
		<div class="col">
			<h3>Be empowered</h3>
			<p>
				In Kurate your identity is private, so you no longer need to fear professional or personal
				repercussions for simply expressing yourself. Speak freely and earn reputation when the
				community agrees that what you have to say is relevant.
			</p>
		</div>
		<div class="col">
			<h3>Be authentic</h3>
			<p>
				Anonymity grants people the freedom to speak honestly—from the heart. This leads to a more
				authentic public discourse because unlike other social media, community members are not
				incentivized to self-censor.
			</p>
		</div>
		<div class="col">
			<h3>Be accountable</h3>
			<p>
				You earn reputation when your peers agree that content you post is relevant, and you curate
				their content as well. This dynamic allows everyone to remain anonymous but also accountable
				for their actions, building community trust together.
			</p>
		</div>
	</div>
	<div class="buttons">
		<a
			href="https://kurate-faq.vercel.app/overview/why-anonymous-reputation"
			target="_blank"
			class="button secondary"
		>
			Learn more about private reputation
		</a>
	</div>
</Container>
<hr />
<section class="container" id="trynow">
	<div class="intro">
		<h2>Try Kurate by connecting your web3 wallet.</h2>
		<div class="buttons">
			<a href="https://kurate.vercel.app/" target="_blank" class="button primary"> Launch app </a>
			<a href="https://kurate-faq.vercel.app/" target="_blank" class="button secondary">
				Read the FAQ
			</a>
		</div>
	</div>
</section> -->
<Footer />

<style lang="scss">
	.hero {
		color: var(--color-body-body);
		display: flex;
		flex-direction: column;

		.content {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			gap: var(--spacing-24);

			@media (min-width: 1242px) {
				flex-direction: row;
			}

			.text {
				display: flex;
				flex-direction: column;
				gap: var(--spacing-6);
				order: 2;
				text-align: center;

				h1 {
					span {
						font-family: var(--font-serif);
						font-style: italic;
					}
				}

				p {
					font-size: 24px;
				}

				.buttons {
					justify-content: center;
					margin-top: var(--spacing-48);
				}
			}

			.img {
				order: 1;

				// img {
				// 	max-height: 508px;
				// }
			}
		}
	}
</style>
