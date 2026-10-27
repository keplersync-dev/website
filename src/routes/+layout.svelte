<script>
  import "@fontsource-variable/inter/opsz.css";
  import inter from "@fontsource-variable/inter/files/inter-latin-opsz-normal.woff2?url";
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="preload" href={inter} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

{@render children()}
