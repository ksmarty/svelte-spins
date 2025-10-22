<script lang="ts">
    import ClipboardJS from "clipboard";
    import { onMount } from "svelte";
    import { HighlightSvelte } from "svelte-highlight";
    import { atomOneDark } from "svelte-highlight/styles";
    import * as Spins from "svelte-spins";

    onMount(() => {
        document
            .querySelectorAll("code")
            .forEach((el) =>
                el.setAttribute("data-clipboard-text", el.innerText),
            );
        new ClipboardJS("code");
    });

    const importCode = `
<script lang="ts">
  import { BallPulseSync } from "svelte-spins";

  let color = "red";
  let classes = "button-loader";
  let style="background: green; padding: 3rem;";
<\/script>

<BallPulseSync {color} {style} \/>
     `.trim();

    const color = "#f25f4c";
    const loaders = Object.keys(Spins);
</script>

<svelte:head>{@html atomOneDark}</svelte:head>

<main class="container">
    <header class="header">
        <h1 class="title">svelte-spins</h1>
        <Spins.BallPulseSync {color} />
        <h6 style="margin: 3rem 0 1rem">
            A <span class="bold">zero dependency</span> spinner library using
            <a href="https://github.com/ConnorAtherton/loaders.css"
                >loaders.css</a
            > as Svelte components.
        </h6>
        <h6>
            <a href="https://kyleschwartz.ca" target="_blank"
                >Built by Kyle Schwartz</a
            >
        </h6>
        <a
            class="button button-primary"
            href="https://github.com/ksmarty/svelte-spins"
            target="_blank">View on GitHub</a
        >
    </header>

    <hr />

    <section>
        <h6 class="section-title">Install</h6>
        <p>
            <code>svelte-spins</code> can be installed using <code>yarn</code>
            or <code>npm</code>.
        </p>
        <div class="row">
            <div class="six columns">
                <span>Bun:</span><br /><code>bun i svelte-spins</code>
            </div>
            <div class="six columns">
                <span>Yarn:</span><br /><code>yarn add svelte-spins</code>
            </div>
            <div class="six columns">
                <span>NPM:</span><br /><code>npm i svelte-spins</code>
            </div>
        </div>
    </section>

    <hr />

    <section>
        <h6 class="section-title">Usage</h6>
        <HighlightSvelte code={importCode} />
    </section>

    <hr />

    <section>
        <h6 class="section-title">API</h6>
        <p>All props are optional</p>
        <table class="u-full-width">
            <thead
                ><tr
                    ><th>Name</th><th>Value</th><th>Default</th><th>Function</th
                    ></tr
                ></thead
            >
            <tbody>
                <tr
                    ><td>classes</td><td><code>string</code></td><td
                        ><code>null</code></td
                    ><td>CSS classes</td></tr
                >
                <tr
                    ><td>style</td><td><code>string</code></td><td
                        ><code>null</code></td
                    ><td>Inline styles</td></tr
                >
                <tr
                    ><td>color</td><td><code>string</code></td><td
                        ><code>black</code></td
                    ><td>Foreground color</td></tr
                >
            </tbody>
        </table>
    </section>

    <br /><br />

    <section>
        <h6 class="section-title">Loaders</h6>
        {#each loaders as name}
            <div class="row loader-example">
                <div class="three columns"><span>{name}</span></div>
                <div class="nine columns center">
                    <svelte:component this={Spins[name]} {color} />
                </div>
            </div>
            <hr />
        {/each}
    </section>

    <hr />

    <footer>
        <h6 class="section-title">License</h6>
        <a href="https://github.com/ksmarty/svelte-spins/blob/main/LICENSE"
            >© {new Date().getFullYear()} Kyle Schwartz</a
        >
    </footer>
</main>

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
