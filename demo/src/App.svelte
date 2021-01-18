<script lang="ts">
	import ClipboardJS from "clipboard";
	import { onMount } from "svelte";
	import { HighlightSvelte } from "svelte-highlight";
	import { atomOneDark } from "svelte-highlight/styles";
	import {
		BallBeat,
		BallClipRotate,
		BallClipRotateMultiple,
		BallClipRotatePulse,
		BallGridBeat,
		BallGridPulse,
		BallPulse,
		BallPulseSync,
		BallRotate,
		BallScale,
		BallScaleMultiple,
		BallScaleRipple,
		BallScaleRippleMultiple,
		BallSpinFadeLoader,
		BallTrianglePath,
		BallZigZag,
		BallZigZagDeflect,
		LineScale,
		LineScaleParty,
		LineScalePulseOut,
		LineScalePulseOutRapid,
		LineSpinFadeLoader,
		Pacman,
		SemiCircleSpin,
		SquareSpin,
		TriangleSkewSpin,
	} from "svelte-spins";
	import "./css/normalize.css";
	import "./css/skeleton.css";

	onMount(() => {
		[...document.getElementsByTagName("code")].forEach((el) => {
			el.setAttribute("data-clipboard-text", el.innerText);
		});

		new ClipboardJS("code");
	});

	let importCode = `
	<script>
  import { BallPulseSync } from "svelte-spins";
  let color = "red";
  let classes = "button-loader";
  let style="background: green; padding: 3rem;";

<\/script>

<BallPulseSync {color} {style} \/>
	`.trim();

	let color = "#f25f4c";
</script>

<style>
	:global(html, body, main) {
		background: #0f0e17;
		color: #fffffe;
	}

	:global(code) {
		cursor: pointer;
	}

	:global(pre) {
		background: none !important;
	}

	:global(.hljs > code) {
		background: none !important;
	}

	.header {
		text-align: center;
		margin-top: 15rem;
	}

	.title {
		margin-bottom: 3rem;
	}

	.bold {
		font-weight: bold;
	}

	.section-title {
		font-size: 1.5rem;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		font-weight: 600;
	}

	hr {
		margin: 5rem 0 5rem 0;
	}

	main {
		padding-bottom: 15rem;
	}

	.row {
		margin-top: 2rem;
	}

	a:link {
		text-decoration: none;
	}

	a {
		color: #f25f4c !important;
	}

	.loader-example {
		margin: 7rem 0 7rem 0;
	}

	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button-primary,
	.button-primary:hover {
		background: #f25f4c !important;
		border: none;
	}

	.button-primary {
		color: black !important;
	}

	.button-primary:hover {
		color: #fffffe !important;
	}

	code {
		background: #f25f4c;
		border: none;
		padding: 0.5rem;
		color: black;
	}
</style>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<main>
	<div class="container">
		<div class="header">
			<h1 class="title">svelte-spins</h1>
			<BallPulseSync {color} />
			<h6 style="margin-bottom: 1rem; margin-top: 3rem;">
				A
				<span class="bold">zero dependency</span>
				spinner/loader library using
				<a
					href="https://github.com/ConnorAtherton/loaders.css">loaders.css</a>
				as Svelte components.
			</h6>
			<h6>
				<a href="https://kyleschwartz.ca" target="_blank">Built by Kyle
					Schwartz</a>
			</h6>
			<a
				class="button button-primary"
				href="https://github.com/ksmarty/svelte-spins"
				target="_blank">View on GitHub</a>
		</div>
		<hr />
		<div>
			<h6 class="section-title">Install</h6>
			<code>svelte-spins</code>
			can be installed using
			<code>yarn</code>
			or
			<code>npm</code>.

			<div class="row">
				<div class="six columns">
					<span>Yarn:</span><br />
					<code>yarn add svelte-spins</code>
				</div>
				<div class="six columns">
					<span>NPM:</span><br /><code>npm i svelte-spins</code>
				</div>
			</div>
		</div>
		<hr />
		<div>
			<h6 class="section-title">Usage</h6>
			<HighlightSvelte code={importCode} />
		</div>
		<hr />
		<div>
			<h6 class="section-title">API</h6>
			<p>All props are optional</p>
			<table class="u-full-width">
				<thead>
					<tr>
						<th>Name</th>
						<th>Value</th>
						<th>Default Value</th>
						<th>Function</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>classes</td>
						<td><code>string</code></td>
						<td><code>null</code></td>
						<td>Classes to be applied</td>
					</tr>
					<tr>
						<td>style</td>
						<td><code>string</code></td>
						<td><code>null</code></td>
						<td>Inline styles to be applied</td>
					</tr>
					<tr>
						<td>color</td>
						<td><code>string</code></td>
						<td><code>black</code></td>
						<td>The foreground color of the loader</td>
					</tr>
				</tbody>
			</table>
		</div>
		<br /><br />
		<div>
			<h6 class="section-title">Loaders</h6>
			<div class="row loader-example">
				<div class="three columns"><span>BallBeat</span></div>
				<div class="nine columns center">
					<BallBeat {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallClipRotate</span></div>
				<div class="nine columns center">
					<BallClipRotate {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns">
					<span>BallClipRotateMultiple</span>
				</div>
				<div class="nine columns center">
					<BallClipRotateMultiple {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns">
					<span>BallClipRotatePulse</span>
				</div>
				<div class="nine columns center">
					<BallClipRotatePulse {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallGridBeat</span></div>
				<div class="nine columns center">
					<BallGridBeat {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallGridPulse</span></div>
				<div class="nine columns center">
					<BallGridPulse {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallPulse</span></div>
				<div class="nine columns center">
					<BallPulse {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallPulseRise</span></div>
				<div class="nine columns center">
					<BallPulseSync {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallRotate</span></div>
				<div class="nine columns center">
					<BallRotate {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallScale</span></div>
				<div class="nine columns center">
					<BallScale {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallScaleMultiple</span></div>
				<div class="nine columns center">
					<BallScaleMultiple {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallScaleRipple</span></div>
				<div class="nine columns center">
					<BallScaleRipple {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns">
					<span>BallScaleRippleMultiple</span>
				</div>
				<div class="nine columns center">
					<BallScaleRippleMultiple {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallSpinFadeLoader</span></div>
				<div class="nine columns center">
					<BallSpinFadeLoader {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallTrianglePath</span></div>
				<div class="nine columns center">
					<BallTrianglePath {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallZigZag</span></div>
				<div class="nine columns center">
					<BallZigZag {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>BallZigZagDeflect</span></div>
				<div class="nine columns center">
					<BallZigZagDeflect {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>LineScale</span></div>
				<div class="nine columns center">
					<LineScale {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>LineScaleParty</span></div>
				<div class="nine columns center">
					<LineScaleParty {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>LineScalePulseOut</span></div>
				<div class="nine columns center">
					<LineScalePulseOut {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns">
					<span>LineScalePulseOutRapid</span>
				</div>
				<div class="nine columns center">
					<LineScalePulseOutRapid {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>LineSpinFadeLoader</span></div>
				<div class="nine columns center">
					<LineSpinFadeLoader {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>Pacman</span></div>
				<div class="nine columns center">
					<Pacman {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>SemiCircleSpin</span></div>
				<div class="nine columns center">
					<SemiCircleSpin {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>SquareSpin</span></div>
				<div class="nine columns center">
					<SquareSpin {color} />
				</div>
			</div>
			<hr />
			<div class="row loader-example">
				<div class="three columns"><span>TriangleSkewSpin</span></div>
				<div class="nine columns center">
					<TriangleSkewSpin {color} />
				</div>
			</div>
		</div>
		<hr />
		<div>
			<h6 class="section-title">License</h6>
			<a href="https://github.com/ksmarty/svelte-spins/blob/main/LICENSE">
				©
				{new Date().getFullYear()}
				Kyle Schwartz</a>
		</div>
	</div>
</main>
