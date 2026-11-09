<script>
  const instances = [
    { name: "Friday SMP", launcher: "Prism Launcher", color: "linear-gradient(135deg, #3f6212, #84cc16)" },
    { name: "Create Nights", launcher: "Modrinth App", color: "linear-gradient(135deg, #78350f, #f59e0b)" },
    { name: "Skyblock", launcher: "CurseForge", color: "linear-gradient(135deg, #1e3a8a, #38bdf8)" },
  ];

  const cards = [
    { name: "Friday SMP", meta: "Fabric 1.21.1 · Prism Launcher", files: "142 files · Played 2 days ago", cover: "linear-gradient(180deg, #1f3a2a, #0f1a14)", icon: instances[0].color, shared: "Shared · 3 joined" },
    { name: "Create Nights", meta: "NeoForge 1.21.1 · Modrinth App", files: "231 files · Played today", cover: "linear-gradient(180deg, #3a2a14, #1a120a)", icon: instances[1].color },
  ];

  const filters = [
    { label: "All", on: true },
    { label: "Needs you", n: 0 },
    { label: "Shared", n: 2 },
    { label: "Not shared", n: 1 },
  ];
</script>

<div class="window" aria-hidden="true">
  <div class="titlebar">
    <img src="/brand/atlas-mark.svg" alt="" width="13" height="13" />Atlas
    <span class="controls">–▢✕</span>
  </div>
  <div class="body">
    <div class="side">
      <span class="nav on">
        <svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>Home
      </span>
      <span class="nav">
        <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></svg>Shared
      </span>
      <span class="nav">
        <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0" /><path d="M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3" /></svg>Friends
      </span>
      <p class="label">Instances</p>
      {#each instances as i}
        <div class="inst">
          <span class="swatch" style:background={i.color}></span>
          <div>
            <p class="iname">{i.name}</p>
            <p class="ilauncher">{i.launcher}</p>
          </div>
        </div>
      {/each}
    </div>
    <div class="main">
      <div class="top">
        <span class="search">Search instances</span>
        <span class="add">+ Add instances</span>
      </div>
      <div class="filters">
        {#each filters as f}
          <span class:on={f.on}>{f.label}{#if f.n !== undefined}<em>{f.n}</em>{/if}</span>
        {/each}
      </div>
      <div class="cards">
        {#each cards as c}
          <div class="card">
            <div class="cover" style:background={c.cover}>
              <span class="icon" style:background={c.icon}></span>
              <span class="play"><svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z" /></svg></span>
            </div>
            <div class="info">
              <p class="cname">{c.name}</p>
              <p class="cmeta">{c.meta}</p>
              <p class="cfiles">{c.files}</p>
              <div class="state">
                {#if c.shared}
                  <span class="shared"><i></i>{c.shared}</span>
                {:else}
                  <span class="alone"><i></i>Not shared</span>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .window {
    position: relative;
    overflow: hidden;
    border: 1px solid #252b33;
    border-radius: 12px;
    background: #0e1115;
    color: #eef1f5;
    font-size: 11px;
    line-height: 1.35;
    box-shadow:
      0 40px 80px -30px rgb(0 0 0 / 0.8),
      0 0 80px -20px rgb(34 211 238 / 0.18);
  }

  p {
    margin: 0;
  }

  .titlebar {
    display: flex;
    align-items: center;
    gap: 7px;
    height: 30px;
    padding: 0 12px;
    background: #0a0c0f;
  }

  .controls {
    margin-left: auto;
    color: #98a1ad;
    letter-spacing: 14px;
  }

  .body {
    display: flex;
    min-height: 330px;
  }

  .side {
    flex: none;
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 148px;
    padding: 8px 8px 12px;
    background: #0a0c0f;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border-radius: 6px;
    color: #b9c1cc;
  }

  .nav.on {
    background: #181d24;
    color: #eef1f5;
  }

  .nav svg {
    width: 13px;
    height: 13px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .label {
    margin: 12px 8px 4px;
    color: #b9c1cc;
    font-size: 10.5px;
  }

  .inst {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 4px 8px;
  }

  .inst div {
    min-width: 0;
  }

  .swatch {
    flex: none;
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }

  .iname {
    overflow: hidden;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .ilauncher {
    color: #98a1ad;
    font-size: 10px;
  }

  .main {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 14px 14px 16px;
  }

  .top {
    display: flex;
    gap: 8px;
  }

  .search,
  .add {
    display: flex;
    align-items: center;
    height: 26px;
    border-radius: 6px;
    font-size: 10.5px;
  }

  .search {
    flex: 1;
    min-width: 0;
    padding: 0 9px;
    border: 1px solid #3d4653;
    color: #98a1ad;
  }

  .add {
    padding: 0 10px;
    background: #7dd3e8;
    color: #062a33;
    font-weight: 600;
    white-space: nowrap;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    font-size: 10.5px;
  }

  .filters span {
    padding: 3px 9px;
    border-radius: 999px;
    color: #b9c1cc;
  }

  .filters span.on {
    background: #222932;
    color: #7dd3e8;
  }

  .filters em {
    margin-left: 4px;
    color: #98a1ad;
    font-style: normal;
  }

  .cards {
    display: flex;
    gap: 10px;
  }

  .card {
    flex: 1 1 0;
    min-width: 0;
    overflow: hidden;
    border: 1px solid #3d4653;
    border-radius: 9px;
    background: #181d24;
  }

  .cover {
    position: relative;
    display: grid;
    place-items: center;
    height: 82px;
  }

  .icon {
    width: 46px;
    height: 46px;
    border-radius: 9px;
    box-shadow: 0 6px 16px rgb(0 0 0 / 0.4);
  }

  .play {
    position: absolute;
    right: 9px;
    bottom: 9px;
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #7dd3e8;
  }

  .play svg {
    width: 10px;
    height: 10px;
    fill: #062a33;
  }

  .info {
    padding: 10px 11px 11px;
  }

  .cname {
    overflow: hidden;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .cmeta {
    color: #b9c1cc;
    font-size: 10.5px;
  }

  .cfiles {
    color: #98a1ad;
    font-size: 10.5px;
  }

  .state {
    margin-top: 9px;
    padding-top: 9px;
    border-top: 1px solid #2a323d;
    font-size: 10.5px;
  }

  .shared,
  .alone {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .shared {
    padding: 3px 9px;
    border-radius: 999px;
    background: rgb(119 216 146 / 0.14);
    color: #77d892;
    font-weight: 600;
  }

  .alone {
    color: #98a1ad;
  }

  .state i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .shared i {
    background: #77d892;
  }

  .alone i {
    border: 1px solid #98a1ad;
  }

  @media (max-width: 560px) {
    .side {
      display: none;
    }
  }
</style>
