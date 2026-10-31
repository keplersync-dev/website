<script>
  import { formatSize } from "./release.js";
  import { launchers } from "./content.js";

  let { release } = $props();
</script>

<div class="downloads">
  <div class="card atlas">
    <div class="head">
      <img src="/brand/atlas-mark.svg" alt="" width="36" height="36" />
      <div>
        <p class="name">Atlas</p>
        <p class="what">Keeps your modpack in sync</p>
      </div>
    </div>
    <a class="btn btn-primary" href={release.url}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-5-5m5 5 5-5M5 21h14" /></svg>
      Download Atlas
    </a>
    <p class="meta">
      Windows 10 and 11{#if release.version}{` · v${release.version} · ${formatSize(release.size)}`}{/if}
    </p>
  </div>

  <div class="card tandem">
    <div class="head">
      <img src="/brand/tandem-mark.svg" alt="" width="36" height="36" />
      <div>
        <p class="name">Tandem</p>
        <p class="what">Play together, no server</p>
      </div>
    </div>
    <span class="btn btn-disabled">Coming soon</span>
    <p class="meta">Mod for Modrinth and CurseForge</p>
  </div>

  <p class="works">Works with {launchers.slice(0, -1).join(", ")} and the {launchers.at(-1)}</p>

  <!-- Shown before the download: an expected warning reads as a step, a surprise one as a virus. -->
  <div class="smartscreen">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" /></svg>
    <p>
      Windows may say <q>Windows protected your PC</q>, because Atlas isn't signed yet. Click
      <span class="key">More info</span>, then <span class="key">Run anyway</span>.
    </p>
  </div>
</div>

<style>
  .downloads {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    max-width: 600px;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    border: 1px solid rgb(245 245 244 / 0.1);
    border-radius: 20px;
    background: rgb(17 17 20 / 0.72);
    backdrop-filter: blur(12px);
  }

  .atlas {
    border-color: rgb(34 211 238 / 0.28);
    box-shadow: 0 0 60px -20px rgb(34 211 238 / 0.35);
  }

  .head {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .tandem .head img {
    opacity: 0.7;
  }

  .name {
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  .what {
    color: var(--muted);
    font-size: 13px;
    line-height: 1.4;
  }

  .btn {
    justify-content: center;
    height: 46px;
  }

  .btn-disabled {
    border: 1px dashed rgb(196 181 253 / 0.3);
    color: rgb(196 181 253 / 0.75);
    cursor: not-allowed;
  }

  .meta {
    margin-top: -6px;
    color: var(--faint);
    font-size: 12px;
    text-align: center;
  }

  .works,
  .smartscreen {
    grid-column: 1 / -1;
  }

  .works {
    color: var(--muted);
    font-size: 14px;
    text-align: center;
  }

  .smartscreen {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 14px;
    border: 1px solid rgb(245 245 244 / 0.1);
    border-radius: 14px;
    background: rgb(17 17 20 / 0.72);
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
  }

  .smartscreen svg {
    flex: none;
    width: 18px;
    height: 18px;
    margin-top: 2px;
    color: var(--cyan-light);
  }

  .smartscreen q {
    color: var(--starlight);
  }

  .key {
    padding: 1px 7px;
    border: 1px solid rgb(245 245 244 / 0.25);
    border-radius: 6px;
    color: var(--starlight);
    font-weight: 600;
    white-space: nowrap;
  }

  @media (max-width: 520px) {
    .downloads {
      grid-template-columns: 1fr;
    }
  }
</style>
