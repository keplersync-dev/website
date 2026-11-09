<script>
  const sky = "linear-gradient(180deg, #7aa0c8 0 50%, #5b8a3a 50% 75%, #6b4a2f 75%)";

  const worlds = [
    { name: "Sky Base", icon: "ok", status: "Ready", rest: " · Sam played 12 min ago", button: "Play", thumb: "linear-gradient(180deg, #a9c8ea 0 45%, #dfe9f5 45% 55%, #a9c8ea 55%)" },
    { name: "Create Nights", icon: "host", status: "Sam is hosting", rest: "", button: "Join Sam", main: true, thumb: sky },
    { name: "Hardcore Attempt 4", icon: "wait", status: "Alex is saving", rest: " 64%", button: "Play when ready", thumb: "linear-gradient(180deg, #b0603a 0 50%, #7a3b24 50%)" },
    { name: "Survival 2024", icon: "pc", status: "Only on this PC", rest: " · played 3 days ago", button: "Play", thumb: sky },
  ];

  const friends = [
    { name: "Sam", status: "Hosting Create Nights", hosting: true, skin: "#e8b48a", hair: "#e07a2e" },
    { name: "Noor", status: "In Sam's world", skin: "#c99a8a", hair: "#7b4a8c" },
    { name: "Alex", status: "Saving Hardcore Attempt 4", skin: "#6b4a3a", hair: "#2a1d16" },
    { name: "Jules", status: "In the menu", skin: "#b07a5a", hair: "#4a2f1d" },
  ];
</script>

{#snippet face(skin, hair)}
  <span class="face" style:background="linear-gradient(180deg, {hair} 0 32%, {skin} 32%)"><i></i><i></i><b></b></span>
{/snippet}

<div class="frame" aria-hidden="true">
  <div class="window">
    <div class="head">
      <img src="/brand/tandem-mark.svg" alt="" width="18" height="18" />
      <span class="title">Tandem</span>
      <span class="tab on">Play</span>
      <span class="tab">Storage</span>
      <span class="tab">Settings</span>
      <span class="close">✕</span>
    </div>
    <div class="body">
      <div class="worlds">
        <p class="h">Worlds <span>Pick one to play. Invite friends from the pause menu.</span></p>
        {#each worlds as w}
          <div class="world">
            <span class="thumb" style:background={w.thumb}></span>
            <div class="text">
              <p class="name">{w.name}</p>
              <p class="status {w.icon}">
                <svg viewBox="0 0 24 24">
                  {#if w.icon === "ok"}<path d="M5 12l5 5 9-10" />
                  {:else if w.icon === "host"}<circle cx="12" cy="12" r="2" /><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4" />
                  {:else if w.icon === "wait"}<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                  {:else}<rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" />{/if}
                </svg>
                <span>{w.status}</span><span class="rest">{w.rest}</span>
              </p>
            </div>
            <span class="button" class:main={w.main}>{w.button}</span>
            <span class="more">···</span>
          </div>
        {/each}
      </div>
      <div class="friends">
        <p class="h">Friends <span>4 online</span><em>+</em></p>
        {#each friends as f}
          <div class="friend">
            {@render face(f.skin, f.hair)}
            <div class="text">
              <p class="name">{f.name}</p>
              <p class="fstatus" class:hosting={f.hosting}>{f.status}</p>
            </div>
            <span class="chev">›</span>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="toast">
    {@render face("#e8b48a", "#e07a2e")}
    <div>
      <p class="name">Sam is hosting Create Nights</p>
      <p class="hint">Press <kbd>J</kbd> to join</p>
    </div>
  </div>
</div>

<style>
  .frame {
    position: relative;
  }

  p {
    margin: 0;
  }

  .window {
    overflow: hidden;
    border: 1px solid #2e343d;
    border-radius: 14px;
    background: #101216;
    color: #e8ecf1;
    font-size: 12px;
    line-height: 1.35;
    box-shadow:
      0 50px 100px -40px rgb(0 0 0 / 0.9),
      0 0 100px -30px rgb(167 139 250 / 0.35);
  }

  .head {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    border-bottom: 1px solid #22272e;
  }

  .title {
    margin-right: 10px;
    font-size: 14px;
    font-weight: 700;
  }

  .tab {
    padding: 5px 11px;
    border-radius: 7px;
    color: #a1a9b5;
    font-weight: 500;
  }

  .tab.on {
    background: #1c2128;
    color: #e8ecf1;
    font-weight: 600;
  }

  .close {
    margin-left: auto;
    color: #a1a9b5;
    font-size: 14px;
  }

  .body {
    display: flex;
    flex-wrap: wrap;
  }

  .worlds {
    flex: 1 1 340px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 14px;
  }

  .friends {
    flex: 0 1 210px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 14px;
    border-left: 1px solid #22272e;
  }

  .h {
    display: flex;
    align-items: baseline;
    gap: 6px;
    font-size: 14px;
    font-weight: 700;
  }

  .h span {
    overflow: hidden;
    color: #a1a9b5;
    font-size: 11px;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .h em {
    margin-left: auto;
    color: #a1a9b5;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  .world {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 9px 10px;
    border: 1px solid #2e343d;
    border-radius: 9px;
    background: #14171c;
  }

  .thumb {
    flex: none;
    width: 44px;
    height: 32px;
    border-radius: 4px;
  }

  .text {
    flex: 1;
    min-width: 0;
  }

  .name {
    font-size: 12.5px;
    font-weight: 600;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0;
    overflow: hidden;
    color: #a1a9b5;
    font-size: 11px;
    white-space: nowrap;
  }

  .status svg {
    flex: none;
    margin-right: 5px;
    width: 11px;
    height: 11px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .rest {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .status.ok svg,
  .status.ok span {
    color: #8fdca6;
  }

  .status.host svg,
  .status.host span {
    color: #c4b5fd;
  }

  .status.wait svg,
  .status.wait span {
    color: #efc887;
  }

  .button {
    flex: none;
    min-width: 96px;
    padding: 6px 10px;
    border: 1px solid #646e7c;
    border-radius: 7px;
    font-size: 11.5px;
    font-weight: 600;
    text-align: center;
  }

  .button.main {
    border-color: #a78bfa;
    background: #a78bfa;
    color: #1a1033;
  }

  .more {
    color: #a1a9b5;
    font-size: 13px;
    letter-spacing: 1px;
  }

  .friend {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .fstatus {
    overflow: hidden;
    color: #a1a9b5;
    font-size: 11px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .fstatus.hosting {
    color: #c4b5fd;
  }

  .chev {
    color: #a1a9b5;
  }

  .face {
    position: relative;
    flex: none;
    width: 28px;
    height: 28px;
    border-radius: 5px;
  }

  .face i {
    position: absolute;
    top: 13px;
    width: 4px;
    height: 4px;
    background: #2b2b3a;
  }

  .face i:first-child {
    left: 6px;
  }

  .face i + i {
    right: 6px;
  }

  .face b {
    position: absolute;
    right: -2px;
    bottom: -2px;
    width: 8px;
    height: 8px;
    border: 2px solid #101216;
    border-radius: 50%;
    background: #6fd08c;
  }

  .toast {
    position: absolute;
    top: -24px;
    right: -12px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 14px;
    border: 1px solid #2e343d;
    border-radius: 12px;
    background: #161a1f;
    color: #e8ecf1;
    font-size: 12px;
    line-height: 1.35;
    box-shadow: 0 20px 40px -12px rgb(0 0 0 / 0.8);
  }

  .hint {
    color: #a1a9b5;
    font-size: 11px;
  }

  kbd {
    padding: 0 5px;
    border: 1px solid #646e7c;
    border-radius: 4px;
    color: #e8ecf1;
    font-family: inherit;
  }

  @media (max-width: 560px) {
    .friends {
      border-left: 0;
      border-top: 1px solid #22272e;
    }

    .more,
    .h span {
      display: none;
    }

    .button {
      min-width: 0;
    }

    .toast {
      display: none;
    }
  }
</style>
