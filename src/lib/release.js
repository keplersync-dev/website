const RELEASES = "https://github.com/keplersync-dev/atlas/releases/latest";
const API = "https://api.github.com/repos/keplersync-dev/atlas/releases/latest";

export const fallback = { version: null, url: RELEASES, size: null };

/** At build time, straight from GitHub. A token raises its limit from 60 an hour to 5000. */
export async function latestRelease(fetch, token) {
  const headers = { Accept: "application/vnd.github+json" };
  if (token) headers.Authorization = `Bearer ${token}`;
  try {
    const res = await fetch(API, { headers });
    if (!res.ok) return fallback;
    const data = await res.json();
    const installer = data.assets.find((a) => a.name.endsWith("-setup.exe"));
    if (!installer) return fallback;
    return {
      version: data.tag_name.replace(/^v/, ""),
      url: installer.browser_download_url,
      size: installer.size,
    };
  } catch {
    return fallback;
  }
}

/** In the browser, from the server's cached copy, so visitors never hit GitHub's limit. */
export async function liveRelease() {
  try {
    const res = await fetch("/v1/releases/atlas");
    if (!res.ok) return null;
    const { version, url, size } = await res.json();
    return { version, url, size };
  } catch {
    return null;
  }
}

export function formatSize(bytes) {
  return `${Math.round(bytes / 1_000_000)} MB`;
}
