<script>
  import { onMount } from "svelte";
  import Mug from "./Mug.svelte";
  import { discord, kofi } from "./content.js";

  let scrollY = $state(0);
  let open = $state(false);
  const scrolled = $derived(scrollY > 24 || open);

  onMount(() => requestAnimationFrame(() => (scrollY = window.scrollY)));

  const links = [
    { href: "#atlas", label: "Atlas" },
    { href: "#tandem", label: "Tandem" },
    { href: "#faq", label: "FAQ" },
    ...(discord ? [{ href: discord, label: "Discord" }] : []),
    { href: "https://github.com/keplersync-dev", label: "GitHub" },
    { href: kofi, label: "Support", support: true },
  ];
</script>

<svelte:window
  onscroll={() => (scrollY = window.scrollY)}
  onkeydown={(e) => e.key === "Escape" && (open = false)}
/>

<header class:scrolled>
  <nav class="wrap" aria-label="Main">
    <a class="brand" href="/">
      <img src="/brand/keplersync-logo-white.svg" alt="KeplerSync" width="132" height="28" />
    </a>
    <div class="links">
      {#each links as link}
        <a href={link.href} class:support={link.support}>
          {#if link.support}<Mug />{/if}{link.label}
        </a>
      {/each}
    </div>
    <a class="btn btn-ghost small beta" href="#tandem">Tandem beta</a>
    <a class="btn btn-primary small" href="#download">Download</a>
    <button
      class="menu-toggle"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      onclick={() => (open = !open)}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        {#if open}
          <path d="M6 6l12 12M18 6 6 18" />
        {:else}
          <path d="M4 7h16M4 12h16M4 17h16" />
        {/if}
      </svg>
    </button>
  </nav>
  {#if open}
    <div class="mobile-menu wrap" id="mobile-menu">
      {#each links as link}
        <a href={link.href} onclick={() => (open = false)}>{link.label}</a>
      {/each}
    </div>
  {/if}
</header>

<style>
  header {
    position: fixed;
    inset: 0 0 auto;
    z-index: 50;
    border-bottom: 1px solid transparent;
    transition:
      background 0.3s,
      border-color 0.3s;
  }

  header.scrolled {
    background: rgb(10 10 11 / 0.82);
    border-color: var(--space-line);
    backdrop-filter: blur(14px);
  }

  nav {
    display: flex;
    align-items: center;
    gap: 32px;
    height: 72px;
  }

  .brand {
    display: flex;
    align-items: center;
    min-height: 44px;
  }

  .brand img {
    display: block;
    height: 28px;
    width: auto;
  }

  .links {
    display: flex;
    gap: 28px;
    margin-left: auto;
    font-size: 15px;
  }

  .links a {
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;
  }

  .links a:hover {
    color: var(--starlight);
  }

  .links .support {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--peach);
  }

  .links .support :global(svg) {
    width: 16px;
    height: 16px;
  }

  .small {
    height: 40px;
    padding: 0 16px;
    font-size: 14px;
  }

  .beta {
    margin-right: -22px;
    border-color: rgb(167 139 250 / 0.35);
    color: var(--violet-light);
  }

  .beta:hover {
    border-color: rgb(167 139 250 / 0.7);
    background: rgb(167 139 250 / 0.08);
  }

  .menu-toggle {
    display: none;
    place-items: center;
    width: 44px;
    height: 44px;
    margin-right: -10px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--starlight);
    cursor: pointer;
  }

  .menu-toggle svg {
    width: 24px;
    height: 24px;
  }

  .mobile-menu {
    display: grid;
    padding-bottom: 12px;
  }

  .mobile-menu a {
    display: flex;
    align-items: center;
    min-height: 52px;
    border-top: 1px solid var(--space-line);
    color: var(--starlight);
    font-size: 17px;
    text-decoration: none;
  }

  @media (max-width: 720px) {
    nav {
      gap: 12px;
    }

    .links {
      display: none;
    }

    .beta {
      display: none;
    }

    .small {
      margin-left: auto;
    }

    .menu-toggle {
      display: grid;
    }
  }

  @media (min-width: 721px) {
    .mobile-menu {
      display: none;
    }
  }

</style>
