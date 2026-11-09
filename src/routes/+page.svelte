<script>
  import Nav from "$lib/Nav.svelte";
  import Hero from "$lib/Hero.svelte";
  import AppWindow from "$lib/AppWindow.svelte";
  import Stars from "$lib/Stars.svelte";
  import TandemWindow from "$lib/TandemWindow.svelte";
  import DiscordIcon from "$lib/DiscordIcon.svelte";
  import Mug from "$lib/Mug.svelte";
  import { steps, tandemFeatures, launchers, faq, disclaimer, kofi, discord } from "$lib/content.js";
  import { liveRelease } from "$lib/release.js";
  import { onMount } from "svelte";

  let { data } = $props();

  let fresh = $state(null);
  const release = $derived(fresh ?? data.release);

  onMount(async () => {
    const latest = await liveRelease();
    if (latest?.version) fresh = latest;
  });

  const title = "KeplerSync · Keep Minecraft modpacks in sync with friends";
  const description =
    "Atlas keeps your Minecraft modpack the same on every friend's PC, alongside Prism, the Modrinth App, CurseForge and the Minecraft Launcher. Tandem lets you play your worlds together without a server. Free.";

  const organization = {
    "@type": "Organization",
    "@id": "https://keplersync.app/#org",
    name: "KeplerSync",
    alternateName: "Kepler Sync",
    url: "https://keplersync.app/",
    logo: "https://keplersync.app/android-chrome-512.png",
    sameAs: ["https://github.com/keplersync-dev"],
  };

  const structuredData = $derived(
    JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        organization,
        {
          "@type": "WebSite",
          "@id": "https://keplersync.app/#website",
          name: "KeplerSync",
          alternateName: ["Kepler Sync", "Atlas by KeplerSync"],
          url: "https://keplersync.app/",
          publisher: { "@id": organization["@id"] },
        },
        {
          "@type": "WebPage",
          "@id": "https://keplersync.app/#webpage",
          url: "https://keplersync.app/",
          name: title,
          isPartOf: { "@id": "https://keplersync.app/#website" },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: "https://keplersync.app/thumbnail.png",
            width: 1200,
            height: 1200,
          },
        },
        {
          "@type": "SoftwareApplication",
          name: "Atlas",
          description:
            "A Windows companion app that keeps a Minecraft: Java Edition modpack in sync between friends, alongside the launcher they already use.",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://keplersync.app/#atlas",
          image: "https://keplersync.app/brand/atlas-mark.svg",
          license: "https://www.gnu.org/licenses/gpl-3.0.html",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          publisher: { "@id": organization["@id"] },
          ...(data.release.version && {
            softwareVersion: data.release.version,
            downloadUrl: data.release.url,
            fileSize: `${Math.round(data.release.size / 1_000_000)}MB`,
          }),
        },
      ],
    }).replaceAll("<", "\\u003c"),
  );
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content="KeplerSync" />
  <meta property="og:description" content={description} />
  <meta name="twitter:title" content="KeplerSync" />
  <meta name="twitter:description" content={description} />
  {@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<Nav />
<Hero {release} />

<main>
  <section id="atlas" class="atlas">
    <div class="wrap split">
      <div class="copy">
        <img class="product-logo" src="/brand/atlas-logo-on-dark.svg" alt="Atlas" width="106" height="34" />
        <h2>Everyone on the same mods.</h2>
        <p class="section-lede">
          Works with {launchers.slice(0, -1).join(", ")} and {launchers.at(-1)}.
        </p>
        <ol class="steps">
          {#each steps as step, i}
            <li>
              <span class="n">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>
      <div class="shot atlas-shot">
        <AppWindow />
      </div>
    </div>
  </section>

  <section id="tandem" class="tandem">
    <div class="wrap split reverse">
      <div class="shot tandem-shot">
        <TandemWindow />
      </div>
      <div class="copy">
        <div class="tandem-head">
          <img class="product-logo" src="/brand/tandem-logo-on-dark.svg" alt="Tandem" width="128" height="34" />
          <span class="beta">Beta</span>
        </div>
        <h2>Play together without a server.</h2>
        <p class="section-lede">Open your world. Friends join from their friends list.</p>
        <div class="features">
          {#each tandemFeatures as f}
            <div class="feature">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {#if f.icon === "play"}<path d="M8 5v14l11-7z" />
                {:else if f.icon === "cloud"}<path d="M7 18a5 5 0 0 1-.5-9.98A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z" />
                {:else}<path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l3 2" />{/if}
              </svg>
              <div>
                <h3>{f.title}{#if f.tag}<span class="tag">{f.tag}</span>{/if}</h3>
                <p>{f.body}</p>
              </div>
            </div>
          {/each}
        </div>
        <a class="btn btn-violet" href={discord}><DiscordIcon />Get the beta on Discord</a>
      </div>
    </div>
  </section>

  <section class="promise">
    <div class="wrap">
      <img src="/brand/keplersync-mark-white.svg" alt="" width="44" height="44" loading="lazy" />
      <p>Atlas syncs your modpacks.<br />Tandem syncs your worlds.</p>
    </div>
  </section>

  <section id="faq" class="faq">
    <div class="wrap faq-grid">
      <div>
        <p class="eyebrow">Questions</p>
        <h2>Good to know</h2>
        <p class="faq-ask">Stuck? Ask in the Discord.</p>
        <a class="btn btn-ghost" href={discord}>Join the Discord</a>
      </div>
      <div class="qs">
        {#each faq as item, i}
          <details open={i === 0}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        {/each}
      </div>
    </div>
  </section>

  <section id="support" class="support">
    <div class="wrap">
      <div class="support-card">
        <div class="cup" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
            <path class="steam" d="M8 6.5c0-1 1-1.2 1-2.2" />
            <path class="steam" d="M12 6.5c0-1 1-1.2 1-2.2" />
          </svg>
          <Mug />
        </div>
        <div>
          <h2>Help keep the servers running.</h2>
          <p class="section-lede">If Atlas or Tandem saves your group some hassle, a coffee goes a long way.</p>
        </div>
        <a class="btn btn-peach" href={kofi}><Mug />Buy me a coffee</a>
      </div>
    </div>
  </section>

  <section class="final">
    <Stars count={90} seed={21} />
    <div class="wrap final-inner">
      <h2>Get your friends in sync.</h2>
      <div class="final-buttons">
        <a class="btn btn-primary" href="#download">
          <img src="/brand/atlas-mark.svg" alt="" width="18" height="18" loading="lazy" />Download Atlas
        </a>
        <a class="btn btn-ghost tandem-ghost" href={discord}>
          <img src="/brand/tandem-mark.svg" alt="" width="18" height="18" loading="lazy" />Get the Tandem beta
        </a>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="wrap foot">
    <div class="foot-brand">
      <img src="/brand/keplersync-logo-white.svg" alt="KeplerSync" width="104" height="22" loading="lazy" />
      <p>{disclaimer}</p>
    </div>
    <nav aria-label="Footer">
      <a href="https://github.com/keplersync-dev">GitHub</a>
      {#if discord}<a href={discord}>Discord</a>{/if}
      <a href={kofi}>Ko-fi</a>
      <a href="/terms">Terms</a>
      <a href="/privacy">Privacy</a>
    </nav>
  </div>
</footer>

<style>
  section {
    position: relative;
  }

  h2 {
    font-size: clamp(34px, 4.4vw, 56px);
    font-weight: 800;
    letter-spacing: -0.035em;
  }

  .section-lede {
    max-width: 32em;
    margin-top: 18px;
    color: var(--muted);
    font-size: 18px;
  }

  .product-logo {
    display: block;
    height: 32px;
    width: auto;
  }

  .copy h2 {
    margin-top: 28px;
  }

  .split {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    gap: clamp(40px, 6vw, 88px);
    align-items: center;
  }

  .split.reverse {
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  }

  .shot {
    position: relative;
  }

  .atlas-shot::before {
    content: "";
    position: absolute;
    inset: -12% -8%;
    z-index: -1;
    background: radial-gradient(closest-side, rgb(34 211 238 / 0.12), transparent);
  }

  .atlas {
    padding: 40px 0 140px;
  }

  .steps {
    display: grid;
    gap: 24px;
    margin: 40px 0 0;
    padding: 0;
    list-style: none;
  }

  .steps li {
    display: flex;
    gap: 18px;
  }

  .n {
    flex: none;
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: rgb(122 229 245 / 0.1);
    color: var(--cyan-light);
    font-size: 14px;
    font-weight: 700;
  }

  .steps h3,
  .feature h3 {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.015em;
  }

  .steps p {
    margin-top: 4px;
    color: var(--muted);
    font-size: 16px;
  }

  .tandem {
    padding: 120px 0 140px;
    border-block: 1px solid rgb(167 139 250 / 0.12);
    background:
      radial-gradient(70% 60% at 30% 40%, rgb(124 58 237 / 0.16), transparent 70%),
      #0c0b10;
  }

  .tandem-head {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .beta,
  .tag {
    padding: 3px 10px;
    border: 1px solid rgb(167 139 250 / 0.35);
    border-radius: 999px;
    background: rgb(167 139 250 / 0.16);
    color: var(--violet-light);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0;
  }

  .tag {
    margin-left: 8px;
    padding: 2px 8px;
    border: 0;
    background: rgb(245 245 244 / 0.08);
    color: var(--muted);
    font-size: 11px;
    vertical-align: 2px;
  }

  .features {
    display: grid;
    gap: 14px;
    margin: 36px 0 32px;
  }

  .feature {
    display: flex;
    gap: 16px;
    padding: 18px;
    border: 1px solid rgb(245 245 244 / 0.07);
    border-radius: 14px;
    background: rgb(245 245 244 / 0.03);
  }

  .feature svg {
    flex: none;
    width: 22px;
    height: 22px;
    margin-top: 2px;
    fill: none;
    stroke: var(--violet-light);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .feature h3 {
    font-size: 17px;
  }

  .feature p {
    margin-top: 4px;
    color: var(--muted);
    font-size: 15px;
  }

  .btn-violet {
    background: var(--violet);
    color: var(--violet-ink);
    font-weight: 700;
  }

  .btn-violet:hover {
    background: var(--violet-light);
    box-shadow: 0 0 32px 2px rgb(167 139 250 / 0.35);
  }

  .btn-violet :global(svg) {
    width: 20px;
    height: 20px;
  }

  .promise {
    padding: 120px 0;
    text-align: center;
  }

  .promise img {
    opacity: 0.9;
  }

  .promise p {
    margin-top: 24px;
    font-size: clamp(26px, 3.2vw, 40px);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.025em;
  }

  .faq {
    padding: 40px 0 120px;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: clamp(32px, 6vw, 88px);
  }

  .faq h2 {
    margin-top: 12px;
    font-size: clamp(34px, 4vw, 48px);
  }

  .faq-ask {
    margin: 16px 0 20px;
    color: var(--muted);
    font-size: 16px;
  }

  details {
    border-bottom: 1px solid var(--space-line);
  }

  details:first-child {
    border-top: 1px solid var(--space-line);
  }

  summary {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 0;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "+";
    color: var(--peach);
    font-weight: 400;
    font-size: 22px;
    line-height: 1;
    transition: rotate 0.2s;
  }

  details[open] summary::after {
    rotate: 45deg;
  }

  details p {
    padding-bottom: 20px;
    color: var(--muted);
    font-size: 16px;
  }

  .support {
    padding: 0 0 120px;
  }

  .support-card {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 28px 36px;
    align-items: center;
    padding: clamp(28px, 4vw, 44px);
    border: 1px solid rgb(243 217 196 / 0.25);
    border-radius: 24px;
    background: linear-gradient(135deg, rgb(243 217 196 / 0.12), rgb(240 180 137 / 0.04) 50%, rgb(17 17 20 / 0.9));
  }

  .support-card h2 {
    font-size: clamp(28px, 3.2vw, 40px);
    line-height: 1.1;
  }

  .support-card .section-lede {
    margin-top: 10px;
    font-size: 17px;
  }

  .cup {
    position: relative;
    width: 72px;
    aspect-ratio: 1;
    border-radius: 20px;
    background: rgb(243 217 196 / 0.14);
    color: var(--peach);
  }

  .cup :global(svg) {
    position: absolute;
    inset: 18%;
    width: 64%;
    height: 64%;
  }

  .steam {
    animation: rise 2.8s ease-in-out infinite;
  }

  .steam + .steam {
    animation-delay: 0.5s;
  }

  @keyframes rise {
    0%,
    100% {
      opacity: 0.2;
      translate: 0 2px;
    }
    50% {
      opacity: 1;
      translate: 0 -2px;
    }
  }

  .btn-peach {
    height: 52px;
    padding: 0 26px;
    background: var(--peach);
    color: var(--space);
    font-size: 16px;
    font-weight: 700;
  }

  .btn-peach:hover {
    background: #fbe7d6;
    box-shadow: 0 0 32px 2px rgb(240 180 137 / 0.35);
  }

  .btn-peach :global(svg) {
    width: 20px;
    height: 20px;
  }

  .final {
    overflow: clip;
    padding: 100px 0 120px;
    border-top: 1px solid var(--space-line);
    text-align: center;
  }

  .final-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .final h2 {
    font-size: clamp(36px, 5vw, 64px);
    letter-spacing: -0.04em;
  }

  .final-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 36px;
  }

  .tandem-ghost {
    border-color: rgb(167 139 250 / 0.4);
    color: #e9e3ff;
  }

  .tandem-ghost:hover {
    border-color: rgb(167 139 250 / 0.7);
    background: rgb(167 139 250 / 0.08);
  }

  footer {
    border-top: 1px solid var(--space-line);
  }

  .foot {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    padding-top: 36px;
    padding-bottom: 48px;
  }

  .foot-brand img {
    display: block;
    height: 22px;
    width: auto;
  }

  .foot-brand p {
    max-width: 36em;
    margin-top: 14px;
    color: var(--faint);
    font-size: 12px;
  }

  footer nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0 24px;
    font-size: 14px;
  }

  footer nav a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: var(--muted);
    text-decoration: none;
  }

  footer nav a:hover {
    color: var(--starlight);
  }

  @media (max-width: 960px) {
    .split,
    .split.reverse,
    .faq-grid {
      grid-template-columns: 1fr;
    }

    .split.reverse .shot {
      order: 2;
    }
  }

  @media (max-width: 760px) {
    .support-card {
      grid-template-columns: 1fr;
      justify-items: start;
    }
  }
</style>
