<script>
  import { formatSize } from "./release.js";
  import { discord } from "./content.js";
  import DiscordIcon from "./DiscordIcon.svelte";

  let { release } = $props();
</script>

<div class="downloads">
  <div class="card atlas">
    <div class="head">
      <img src="/brand/atlas-mark.svg" alt="" width="40" height="40" />
      <div>
        <p class="name">Atlas</p>
        <p class="what">Syncs your modpacks</p>
      </div>
      {#if release.version}<span class="badge">v{release.version}</span>{/if}
    </div>
    <a class="btn btn-primary" href={release.url}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-5-5m5 5 5-5M5 21h14" /></svg>
      Download for Windows
    </a>
    <div class="meta-row">
      <p class="meta">Windows 10 and 11{#if release.size}{` · ${formatSize(release.size)}`}{/if}</p>
      <!-- Shown before the download: an expected warning reads as a step, a surprise one as a virus. -->
      <div class="warn">
        <button type="button" class="warn-hint" aria-describedby="smartscreen-tip">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" /></svg>
          Windows warning?
        </button>
        <div class="tip" id="smartscreen-tip" role="tooltip">
          <p class="tip-title">The warning is harmless</p>
          <p>
            Windows shows <q>Windows protected your PC</q> for apps that aren't code signed. Signing
            costs hundreds of dollars a year, so Atlas isn't signed yet. Click
            <span class="key">More info</span>, then <span class="key">Run anyway</span>.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="card tandem">
    <div class="head">
      <img src="/brand/tandem-mark.svg" alt="" width="40" height="40" />
      <div>
        <p class="name">Tandem</p>
        <p class="what">Syncs your worlds</p>
      </div>
      <span class="badge">Beta</span>
    </div>
    <a class="btn btn-violet" href={discord}>
      <DiscordIcon />
      Get the beta on Discord
    </a>
    <p class="meta">Fabric 1.21.1 · Needs Fabric API</p>
  </div>

</div>

<style>
  .downloads {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 24px;
    border-radius: 20px;
  }

  .atlas {
    border: 1px solid rgb(122 229 245 / 0.18);
    background: linear-gradient(180deg, rgb(34 211 238 / 0.07), rgb(17 17 20 / 0.9) 60%);
  }

  .tandem {
    border: 1px solid rgb(167 139 250 / 0.24);
    background: linear-gradient(180deg, rgb(167 139 250 / 0.1), rgb(17 17 20 / 0.9) 60%);
  }

  .head {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .head img {
    flex: none;
  }

  .name {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
  }

  .what {
    color: var(--muted);
    font-size: 14px;
    line-height: 1.4;
  }

  .badge {
    margin-left: auto;
    padding: 3px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
  }

  .atlas .badge {
    background: rgb(122 229 245 / 0.12);
    color: var(--cyan-light);
  }

  .tandem .badge {
    background: rgb(167 139 250 / 0.16);
    color: var(--violet-light);
  }

  .btn {
    justify-content: center;
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

  .meta {
    color: var(--faint);
    font-size: 13px;
  }

  .meta-row {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 6px 12px;
  }

  .warn-hint {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 24px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--starlight);
    font: inherit;
    font-size: 13px;
    text-decoration: underline dotted rgb(245 245 244 / 0.5);
    text-underline-offset: 3px;
    cursor: help;
  }

  .warn-hint svg {
    width: 14px;
    height: 14px;
    color: var(--cyan-light);
  }

  .tip {
    position: absolute;
    z-index: 5;
    right: -8px;
    bottom: calc(100% + 12px);
    width: min(300px, calc(100% + 16px));
    padding: 14px 16px;
    border: 1px solid rgb(245 245 244 / 0.12);
    border-radius: 12px;
    background: #16171b;
    box-shadow: 0 20px 40px -12px rgb(0 0 0 / 0.8);
    color: var(--muted);
    font-size: 13px;
    line-height: 1.55;
    opacity: 0;
    visibility: hidden;
    translate: 0 4px;
    transition:
      opacity 0.15s,
      translate 0.15s,
      visibility 0.15s;
  }

  .tip::after {
    content: "";
    position: absolute;
    right: 40px;
    bottom: -6px;
    width: 10px;
    height: 10px;
    border-right: 1px solid rgb(245 245 244 / 0.12);
    border-bottom: 1px solid rgb(245 245 244 / 0.12);
    background: #16171b;
    rotate: 45deg;
  }

  .warn:hover .tip,
  .warn:focus-within .tip {
    opacity: 1;
    visibility: visible;
    translate: 0 0;
  }

  .tip-title {
    color: var(--starlight);
    font-weight: 600;
  }

  .tip-title + p {
    margin-top: 6px;
  }

  .tip q {
    color: var(--starlight);
  }

  .key {
    padding: 0 5px;
    border: 1px solid rgb(245 245 244 / 0.25);
    border-radius: 5px;
    color: var(--starlight);
    white-space: nowrap;
  }

  @media (max-width: 620px) {
    .downloads {
      grid-template-columns: 1fr;
    }

    .tip::after {
      display: none;
    }
  }
</style>
