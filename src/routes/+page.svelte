<script>
  import Nav from "$lib/Nav.svelte";
  import Hero from "$lib/Hero.svelte";
  import AppWindow from "$lib/AppWindow.svelte";
  import Stars from "$lib/Stars.svelte";
  import Downloads from "$lib/Downloads.svelte";
  import Mug from "$lib/Mug.svelte";
  import { steps, tandemModes, launchers, faq, disclaimer, kofi } from "$lib/content.js";
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
    "Keep your Minecraft modpack identical on every friend's PC. Atlas works alongside Prism, Modrinth App, CurseForge and the Minecraft Launcher. Free.";

  const organization = {
    "@type": "Organization",
    "@id": "https://keplersync.app/#org",
    name: "KeplerSync",
    url: "https://keplersync.app/",
    logo: "https://keplersync.app/android-chrome-512.png",
    sameAs: ["https://github.com/xhalo-dev/atlas"],
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
          url: "https://keplersync.app/",
          publisher: { "@id": organization["@id"] },
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
    <div class="wrap atlas-grid">
      <div>
        <img class="product-logo" src="/brand/atlas-logo-on-dark.svg" alt="Atlas" width="106" height="34" />
        <h2>Everyone on the same mods, every time.</h2>
        <p class="section-lede">
          Atlas is a small Windows app that watches a modpack and keeps every friend's copy
          matching. It works with the launcher you already use.
        </p>
        <ol class="steps">
          {#each steps as step}
            <li>
              <span class="n">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>
      <div class="shot">
        <AppWindow />
      </div>
    </div>

    <div class="wrap launchers">
      <p>Works alongside</p>
      <ul>
        {#each launchers as name}
          <li>{name}</li>
        {/each}
      </ul>
    </div>
  </section>

  <section id="tandem" class="tandem">
    <div class="wrap">
      <div class="tandem-card">
        <div class="tandem-mark" aria-hidden="true">
          <img src="/brand/tandem-mark.svg" alt="" width="200" height="200" />
        </div>
        <div>
          <div class="tandem-head">
            <img class="product-logo" src="/brand/tandem-logo-on-dark.svg" alt="Tandem" width="128" height="34" />
            <span class="soon">In development</span>
          </div>
          <h2>Play together without renting a server.</h2>
          <p class="section-lede">
            Tandem is a mod for the worlds you play with friends, on the same accounts and friends
            list as Atlas.
          </p>
          <div class="modes">
            {#each tandemModes as mode}
              <div class="mode">
                <h3>{mode.title} {#if mode.tag}<span class="tag">{mode.tag}</span>{/if}</h3>
                <p>{mode.body}</p>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="faq" class="faq">
    <div class="wrap faq-grid">
      <div>
        <p class="eyebrow">Questions</p>
        <h2>Good to know</h2>
      </div>
      <div class="qs">
        {#each faq as item}
          <details>
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
          <h2>Atlas is free. Keeping it running isn't.</h2>
          <p class="section-lede">
            If Atlas saved your group a few evenings of "which version of Create are you on", a
            coffee helps pay for the sync server and keeps Tandem moving.
          </p>
        </div>
        <a class="btn btn-primary" href={kofi}><Mug />Buy me a coffee</a>
      </div>
    </div>
  </section>

  <section class="final">
    <Stars count={90} seed={21} />
    <div class="wrap final-inner">
      <img src="/brand/keplersync-mark-white.svg" alt="" width="56" height="56" />
      <h2>Get your friends in sync.</h2>
      <div class="final-downloads">
        <Downloads {release} />
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
    <nav>
      <a href="https://github.com/xhalo-dev/atlas">GitHub</a>
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
    font-size: clamp(34px, 4.4vw, 54px);
    font-weight: 800;
  }

  .section-lede {
    max-width: 34em;
    margin-top: 18px;
    color: var(--muted);
    font-size: 18px;
  }

  .atlas {
    padding: 40px 0 120px;
  }

  .atlas-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
    gap: clamp(40px, 6vw, 88px);
    align-items: center;
  }

  .product-logo {
    display: block;
    height: 34px;
    width: auto;
    margin-bottom: 28px;
  }

  .steps {
    display: grid;
    gap: 26px;
    margin: 44px 0 0;
    padding: 0;
    list-style: none;
  }

  .steps li {
    display: grid;
    grid-template-columns: 44px 1fr;
    gap: 6px;
  }

  .n {
    padding-top: 2px;
    color: var(--cyan);
    font-size: 14px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .steps h3 {
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.015em;
  }

  .steps p {
    margin-top: 6px;
    color: var(--muted);
    font-size: 16px;
  }

  .shot {
    position: relative;
  }

  .shot::before {
    content: "";
    position: absolute;
    inset: -10% -6%;
    z-index: -1;
    background: radial-gradient(closest-side, rgb(34 211 238 / 0.1), transparent);
  }

  .launchers {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px 28px;
    margin-top: 96px;
    padding-top: 32px;
    border-top: 1px solid var(--space-line);
  }

  .launchers p {
    color: var(--faint);
    font-size: 14px;
  }

  .launchers ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .launchers li {
    padding: 8px 16px;
    border: 1px solid var(--space-line);
    border-radius: 999px;
    color: #c9ccd3;
    font-size: 14px;
  }

  .tandem {
    padding: 40px 0 120px;
  }

  .tandem-card {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 56px;
    align-items: center;
    padding: clamp(32px, 5vw, 64px);
    border: 1px solid var(--space-line);
    border-radius: 28px;
    background:
      radial-gradient(60% 120% at 0% 100%, rgb(139 92 246 / 0.14), transparent 70%),
      var(--space-raise);
  }

  .tandem-mark {
    position: relative;
    width: 200px;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
  }

  .tandem-mark::before {
    content: "";
    position: absolute;
    inset: -20%;
    background: radial-gradient(closest-side, rgb(139 92 246 / 0.28), transparent);
    filter: blur(20px);
  }

  .tandem-mark img {
    position: relative;
    width: 76%;
    height: auto;
    animation: lead 3.2s ease-in-out infinite;
  }

  @keyframes lead {
    0%,
    100% {
      translate: -4px 0;
    }
    50% {
      translate: 4px 0;
    }
  }

  .tandem-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    margin-bottom: 28px;
  }

  .tandem-head .product-logo {
    margin-bottom: 0;
  }

  .soon,
  .tag {
    padding: 5px 12px;
    border: 1px solid rgb(196 181 253 / 0.3);
    border-radius: 999px;
    background: rgb(139 92 246 / 0.1);
    color: #c4b5fd;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0;
  }

  .tag {
    padding: 2px 10px;
    font-size: 12px;
    vertical-align: 2px;
  }

  .modes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 32px;
  }

  .mode {
    padding: 22px 24px;
    border: 1px solid var(--space-line);
    border-radius: 18px;
    background: rgb(10 10 11 / 0.4);
  }

  .mode h3 {
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.015em;
  }

  .mode p {
    margin-top: 6px;
    color: var(--muted);
    font-size: 16px;
  }

  .faq {
    padding: 0 0 140px;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: 48px;
  }

  .faq .eyebrow {
    margin-bottom: 14px;
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
    padding: 22px 0;
    font-size: 18px;
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
    padding-bottom: 22px;
    color: var(--muted);
  }

  .support {
    padding: 0 0 140px;
  }

  .support-card {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 40px;
    align-items: center;
    padding: clamp(32px, 5vw, 56px);
    border: 1px solid var(--space-line);
    border-radius: 28px;
    background:
      radial-gradient(60% 140% at 100% 0%, rgb(240 180 137 / 0.14), transparent 70%),
      var(--space-raise);
  }

  .support-card h2 {
    font-size: clamp(28px, 3vw, 38px);
  }

  .support-card .section-lede {
    margin-top: 12px;
    font-size: 17px;
  }

  .cup {
    position: relative;
    width: 84px;
    aspect-ratio: 1;
    color: var(--peach);
  }

  .cup::before {
    content: "";
    position: absolute;
    inset: -30%;
    background: radial-gradient(closest-side, rgb(240 180 137 / 0.3), transparent);
    filter: blur(14px);
  }

  .cup :global(svg) {
    position: absolute;
    inset: 10%;
    width: 80%;
    height: 80%;
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

  .final {
    overflow: clip;
    padding: 140px 0;
    border-top: 1px solid var(--space-line);
    background: radial-gradient(50% 80% at 50% 100%, rgb(240 180 137 / 0.12), transparent 70%);
  }

  .final-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    text-align: center;
  }

  .final-downloads {
    width: 100%;
    max-width: 600px;
    text-align: left;
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
    gap: 24px;
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

  @media (max-width: 900px) {
    .atlas-grid,
    .faq-grid,
    .tandem-card,
    .modes,
    .support-card {
      grid-template-columns: 1fr;
    }

    .support-card {
      gap: 28px;
      justify-items: start;
    }

    .tandem-mark {
      width: 120px;
    }
  }
</style>
