import { env } from "$env/dynamic/private";
import { latestRelease } from "$lib/release.js";

export async function load({ fetch }) {
  return { release: await latestRelease(fetch, env.GITHUB_TOKEN) };
}
