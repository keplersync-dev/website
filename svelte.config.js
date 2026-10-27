import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ fallback: "404.html" }),
    inlineStyleThreshold: 16384,
    prerender: {
      handleHttpError: ({ path, message }) => {
        if (path === "/terms" || path === "/privacy") return;
        throw new Error(message);
      },
    },
  },
};

export default config;
