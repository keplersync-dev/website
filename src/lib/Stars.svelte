<script>
  let { count = 220, seed = 7 } = $props();

  function rng(a) {
    return () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const stars = $derived.by(() => {
    const r = rng(seed);
    return Array.from({ length: count }, () => {
      const size = r();
      return {
        x: r() * 100,
        y: r() * 100,
        r: 0.35 + size * size * 1.1,
        o: 0.25 + r() * 0.7,
        twinkle: r() < 0.14,
        delay: r() * 6,
      };
    });
  });
</script>

<svg class="stars" aria-hidden="true">
  {#each stars as s}
    <circle
      cx="{s.x}%"
      cy="{s.y}%"
      r={s.r}
      fill="#f5f5f4"
      opacity={s.o}
      class:twinkle={s.twinkle}
      style:animation-delay="{s.delay}s"
    />
  {/each}
</svg>

<style>
  .stars {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .twinkle {
    animation: twinkle 5s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%,
    100% {
      opacity: 0.9;
    }
    50% {
      opacity: 0.15;
    }
  }
</style>
