<div class="window" aria-hidden="true">
  <div class="titlebar">
    <img src="/brand/atlas-mark.svg" alt="" width="16" height="16" />
    <span>Atlas</span>
    <i></i><i></i><i></i>
  </div>
  <div class="body">
    <aside>
      <b class="on"></b><b></b><b></b><b></b>
    </aside>
    <div class="main">
      <div class="head">
        <div>
          <p class="title">Friday SMP</p>
          <p class="sub">Fabric 1.21.4 · 142 mods · Prism Launcher</p>
        </div>
        <span class="badge">In sync</span>
      </div>
      <div class="change">
        <span class="plus">+</span> Sodium Extra <em>0.6.1</em>
      </div>
      <div class="change">
        <span class="up">↑</span> Create <em>6.0.2 → 6.0.4</em>
      </div>
      <div class="change">
        <span class="minus">−</span> OptiFabric
      </div>
      <p class="label">Friends</p>
      <div class="friends">
        <div class="friend"><span class="av a1"></span>Steve<small class="ok">Up to date</small></div>
        <div class="friend"><span class="av a2"></span>Alex<small class="ok">Up to date</small></div>
        <div class="friend"><span class="av a3"></span>Noor<small class="busy">Updating 3 mods</small></div>
      </div>
    </div>
  </div>
</div>

<style>
  .window {
    border: 1px solid #22272e;
    border-radius: 14px;
    background: #101216;
    overflow: clip;
    font-family: "Segoe UI Variable Text", "Segoe UI", var(--font);
    font-size: 13px;
    box-shadow:
      0 40px 80px -30px rgb(0 0 0 / 0.8),
      0 0 0 1px rgb(255 255 255 / 0.02),
      0 0 80px -20px rgb(34 211 238 / 0.18);
  }

  .titlebar {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding: 0 12px;
    background: #0b0d10;
    color: #a1a9b5;
    font-size: 12px;
  }

  .titlebar i {
    width: 10px;
    height: 1px;
    background: #6d7581;
  }

  .titlebar i:first-of-type {
    margin-left: auto;
  }

  .titlebar i + i {
    margin-left: 14px;
  }

  .body {
    display: grid;
    grid-template-columns: 52px 1fr;
    min-height: 330px;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 14px;
    background: #0b0d10;
  }

  aside b {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: #161a1f;
  }

  aside b.on {
    background: rgb(138 217 235 / 0.16);
    box-shadow: inset 0 0 0 1px rgb(138 217 235 / 0.4);
  }

  .main {
    padding: 18px 20px;
  }

  .head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 16px;
  }

  .title {
    color: #e8ecf1;
    font-size: 16px;
    font-weight: 600;
  }

  .sub {
    color: #6d7581;
    font-size: 12px;
  }

  .badge {
    padding: 3px 10px;
    border-radius: 999px;
    background: rgb(111 208 140 / 0.12);
    color: #6fd08c;
    font-size: 12px;
    white-space: nowrap;
  }

  .change {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    margin-bottom: 6px;
    border-radius: 8px;
    background: #161a1f;
    color: #e8ecf1;
  }

  .change em {
    margin-left: auto;
    color: #6d7581;
    font-style: normal;
    font-family: "Cascadia Mono", Consolas, monospace;
    font-size: 12px;
  }

  .change span {
    width: 16px;
    text-align: center;
    font-weight: 700;
  }

  .plus {
    color: #6fd08c;
  }

  .up {
    color: #8ad9eb;
  }

  .minus {
    color: #f07178;
  }

  .label {
    margin: 16px 0 8px;
    color: #6d7581;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .friends {
    display: grid;
    gap: 8px;
  }

  .friend {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #e8ecf1;
  }

  .friend small {
    margin-left: auto;
    font-size: 12px;
  }

  .ok {
    color: #6d7581;
  }

  .busy {
    color: #e9b866;
  }

  .av {
    width: 22px;
    height: 22px;
    border-radius: 5px;
  }

  .a1 {
    background: linear-gradient(135deg, #6b4a2e, #3c7ab8);
  }

  .a2 {
    background: linear-gradient(135deg, #d0884a, #4f8a2a);
  }

  .a3 {
    background: linear-gradient(135deg, #5a6170, #8ad9eb);
  }
</style>
