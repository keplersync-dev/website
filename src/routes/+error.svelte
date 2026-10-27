<script>
  import { page } from "$app/state";
  import Stars from "$lib/Stars.svelte";
</script>

<svelte:head>
  <title>Page not found · KeplerSync</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main>
  <Stars count={160} seed={404} />
  <div class="inner">
    <img src="/brand/keplersync-mark-white.svg" alt="" width="56" height="56" />
    <p class="code">{page.status}</p>
    <h1>{page.status === 404 ? "This page drifted out of orbit." : "Something went wrong."}</h1>
    <a class="btn btn-primary" href="/">Back to KeplerSync</a>
  </div>
</main>

<style>
  main {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 100svh;
    overflow: clip;
    padding: 0 var(--gutter);
    background: radial-gradient(50% 50% at 50% 100%, rgb(240 180 137 / 0.12), transparent 70%);
  }

  .inner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
  }

  .code {
    color: var(--peach);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  h1 {
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 800;
  }
</style>
