<script>
  import Stars from "./Stars.svelte";
  import Downloads from "./Downloads.svelte";

  let { release } = $props();
</script>

<section class="hero">
  <Stars />
  <div class="glow" aria-hidden="true"></div>

  <div class="wrap content">
    <h1>Your packs and worlds, in sync.</h1>
    <p class="lede">Two free tools for playing Minecraft with friends.</p>
    <div class="cta" id="download">
      <Downloads {release} />
    </div>
  </div>

  <div class="horizon" aria-hidden="true"><span class="flare"></span></div>
</section>

<style>
  .hero {
    position: relative;
    overflow: clip;
    isolation: isolate;
    padding: clamp(150px, 18vw, 200px) 0 clamp(220px, 22vw, 300px);
    text-align: center;
    background:
      radial-gradient(50% 45% at 50% 25%, rgb(243 217 196 / 0.07), transparent 70%),
      radial-gradient(80% 60% at 50% 110%, rgb(90 97 112 / 0.18), transparent 70%),
      var(--space);
  }

  .glow {
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 40px;
    width: min(820px, 120vw);
    aspect-ratio: 1;
    translate: -50% 0;
    opacity: 0.22;
    background: radial-gradient(closest-side, rgb(243 217 196 / 0.25), transparent 70%);
  }

  .content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    max-width: 13em;
    font-size: clamp(44px, 7.4vw, 96px);
    font-weight: 800;
    line-height: 1.02;
    letter-spacing: -0.045em;
  }

  .lede {
    max-width: 36em;
    margin-top: 24px;
    color: var(--muted);
    font-size: clamp(17px, 1.6vw, 20px);
  }

  .cta {
    width: 100%;
    max-width: 860px;
    margin-top: 48px;
    scroll-margin-top: 96px;
    text-align: left;
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
</style>
