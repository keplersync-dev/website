export const steps = [
  {
    n: "01",
    title: "Point Atlas at a pack",
    body: "Pick an instance from Prism, the Modrinth App, CurseForge, or the Minecraft Launcher. Atlas reads what's already there.",
  },
  {
    n: "02",
    title: "Share it with friends",
    body: "Add friends with their friend code, then share the pack with them or a whole group. Atlas fetches each mod from Modrinth or CurseForge.",
  },
  {
    n: "03",
    title: "Change it, they get it",
    body: "Add, update, or remove a mod and everyone's copy follows. No zip files in Discord, no version mismatches on join.",
  },
];

export const launchers = ["Prism Launcher", "Modrinth App", "CurseForge", "Minecraft Launcher"];

export const faq = [
  {
    q: "Does Atlas replace my launcher?",
    a: "No. Your launcher still owns and launches the instance. Atlas sits beside it and keeps the files in step.",
  },
  {
    q: "Is it free?",
    a: "Yes. Atlas and Tandem are both free. Atlas is open source under the GPL-3.0 licence.",
  },
  {
    q: "When can I get Tandem?",
    a: "Tandem is still in development. It'll be on Modrinth and CurseForge when it's ready, and the button above will light up.",
  },
  {
    q: "Do my friends need Atlas too?",
    a: "Yes, everyone in the pack runs Atlas. That's how their copies stay in sync without anyone sending files around.",
  },
  {
    q: "Where do the mods come from?",
    a: "From Modrinth and CurseForge directly. A few CurseForge mods only allow downloads from their own page, so Atlas opens it for you and picks the file up from your Downloads folder. It only uploads files that aren't on either site, like your configs.",
  },
  {
    q: "Windows says it protected my PC. Is Atlas safe?",
    a: "Windows shows that warning for apps from small developers who haven't bought a code-signing certificate yet. Click More info, then Run anyway. Atlas is open source, so you can read every line on GitHub.",
  },
];

export const disclaimer =
  "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.";
