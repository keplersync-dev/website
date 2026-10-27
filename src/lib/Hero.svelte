<script>
  import Stars from "./Stars.svelte";
  import Downloads from "./Downloads.svelte";

  let { release } = $props();
</script>

<section class="hero">
  <Stars />
  <div class="planet" aria-hidden="true">
    <img src="/brand/mark-glass.svg" alt="" width="640" height="640" />
  </div>

  <div class="wrap content">
    {#if release.version}
      <a class="pill" href="https://github.com/xhalo-dev/atlas/releases/latest">
        <span class="dot"></span>
        Atlas {release.version} is out
      </a>
    {/if}
    <h1>KeplerSync</h1>
    <p class="tagline">Your packs and worlds, in sync.</p>
    <p class="lede">
      Two free companions for playing Minecraft with friends. Atlas keeps everyone's modpack
      identical. Tandem keeps your shared world going when the host logs off.
    </p>
    <div class="cta" id="download">
      <Downloads {release} />
    </div>
  </div>

  <div class="horizon" aria-hidden="true"><span class="flare"></span></div>
</section>

<style>
  .hero {
    position: relative;
    display: flex;
    align-items: center;
    min-height: max(100svh, 720px);
    padding: 120px 0 180px;
    overflow: clip;
    isolation: isolate;
    background:
      radial-gradient(60% 70% at 85% 45%, rgb(240 180 137 / 0.07), transparent 70%),
      radial-gradient(80% 60% at 50% 110%, rgb(90 97 112 / 0.18), transparent 70%),
      var(--space);
  }

  .planet {
    position: absolute;
    z-index: -1;
    top: 50%;
    right: clamp(-340px, -17vw, -60px);
    width: min(58vw, 890px);
    aspect-ratio: 1;
    translate: 0 -50%;
    animation: drift 18s ease-in-out infinite alternate;
  }

  .planet::before {
    content: "";
    position: absolute;
    inset: 4%;
    border-radius: 50%;
    background: radial-gradient(closest-side, rgb(243 217 196 / 0.14), rgb(243 217 196 / 0.05) 60%, transparent);
  }

  .planet img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  @keyframes drift {
    from {
      transform: rotate(-2deg) translateY(-8px);
    }
    to {
      transform: rotate(2deg) translateY(8px);
    }
  }

  .content {
    position: relative;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    height: 36px;
    padding: 0 16px;
    margin-bottom: 28px;
    border: 1px solid rgb(243 217 196 / 0.28);
    border-radius: 999px;
    background: rgb(243 217 196 / 0.06);
    color: var(--peach);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: border-color 0.2s;
  }

  .pill:hover {
    border-color: rgb(243 217 196 / 0.55);
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--horizon);
    box-shadow: 0 0 10px var(--horizon);
  }

  h1 {
    font-size: clamp(64px, 10.5vw, 148px);
    font-weight: 900;
    letter-spacing: -0.045em;
    line-height: 0.95;
  }

  .tagline {
    margin-top: 18px;
    font-size: clamp(22px, 2.6vw, 34px);
    font-weight: 400;
    letter-spacing: -0.015em;
    color: #c9ccd3;
  }

  .lede {
    max-width: 30em;
    margin-top: 22px;
    color: var(--muted);
  }

  .cta {
    margin-top: 36px;
    scroll-margin-top: 96px;
  }

  .horizon {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: calc(100% - 110px);
    width: max(200vw, 1800px);
    aspect-ratio: 3.2;
    translate: -50% 0;
    border-radius: 50%;
    background: var(--space);
    box-shadow:
      0 -1px 0 rgb(243 217 196 / 0.85),
      0 -6px 18px rgb(240 180 137 / 0.28),
      0 -40px 120px rgb(240 180 137 / 0.12);
  }

  .flare {
    position: absolute;
    left: 50%;
    top: 0;
    width: min(70vw, 900px);
    height: 2px;
    translate: -50% -50%;
    background: linear-gradient(90deg, transparent, rgb(243 217 196 / 0.55), transparent);
  }

  .flare::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 90px;
    height: 90px;
    translate: -50% -50%;
    border-radius: 50%;
    background: radial-gradient(closest-side, rgb(255 244 232 / 0.9), rgb(240 180 137 / 0.25) 40%, transparent);
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 17vw;
    }
  }

  @media (max-width: 860px) and (orientation: portrait) {
    .hero {
      align-items: flex-end;
      padding-top: calc(72px + min(72vw, 420px));
    }

    .planet {
      top: 56px;
      right: max(-24vw, -140px);
      width: min(96vw, 560px);
      translate: 0;
      opacity: 0.9;
    }
  }

  @media (max-height: 500px) and (orientation: landscape) {
    .hero {
      min-height: 100svh;
      padding: 96px 0 140px;
    }
  }
</style>
