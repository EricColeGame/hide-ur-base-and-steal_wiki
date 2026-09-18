export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Hide ur Base and Steal Wiki",
  shortName: "Hide ur Base and Steal",
  logoText: "HB",
  tagline: "Codes, Pets, Base Hiding & Infiltration Guides",
  description: "Your ultimate guide to Hide ur Base and Steal on Roblox! Explore active codes, pet collections, secret base hiding spots, and sneaking strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hide-ur-base-and-steal.wiki",
  supportEmail: "support@hide-ur-base-and-steal.wiki",
  gameUrl: "https://www.roblox.com/games/80844740579381/Hide-ur-Base-and-Steal?utm_source=chatgpt.com",
  heroVideoId: "Xld4JVVKQUw",
  social: {
    discord: "https://www.roblox.com/games/80844740579381/Hide-ur-Base-and-Steal?utm_source=chatgpt.com",
    youtube: "https://www.youtube.com/watch?v=Xld4JVVKQUw",
  },
  locales: ["en", "de", "es", "ja"],
  defaultLocale: "en",
};
