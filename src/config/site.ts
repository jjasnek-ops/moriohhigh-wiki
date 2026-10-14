/**
 * Site configuration — the single source of truth for game-specific metadata.
 *
 * 👉 APPLY TEMPLATE: Change every field here when building a new game wiki.
 * This is part of the CONFIG LAYER — framework code reads from here, never the reverse.
 */

export interface SiteConfig {
  /** Only configure a real publishing organization, never infer it from the wiki name. */
  organization?: { name: string; url: string; sameAs?: string[] };
  /** Full site name, used in <title> suffix and WebSite JSON-LD. */
  name: string;
  /** Short name for PWA manifest, mobile logo, and the long-title <title> suffix (>50 chars). e.g. "AQ Wiki" */
  shortName: string;
  /** Description of this website, separate from the game and any publisher. */
  description: string;
  /** Domain without protocol or trailing slash. e.g. "anvilquestwiki.wiki" */
  domain: string;
  /** Hero tagline shown under the site title. */
  tagline: string;
  /** Copyright / legal disclaimer line shown in footer. */
  legalNotice: string;
  /**
   * Optional public contact email — rendered as a mailto link on the contact
   * page when set. AdSense reviewers look for a reachable contact channel;
   * if you run no social channels, set this.
   */
  contactEmail?: string;
  /** Public editorial issue tracker, separate from the game's community. */
  contactUrl?: string;
  /** Lucide icon for the native header. */
  logoIcon?: string;
  social: {
    /** Official game website URL (the game itself, not the wiki). */
    official: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    reddit?: string;
  };
  /**
   * Profiles of the same publishing entity, only used with organization configured.
   * The game's official page is a separate entity and must not go here.
   */
  sameAs?: string[];
  game: {
    /** Full game name. */
    name: string;
    /** Platform: "Roblox" | "Steam" | "Epic Games" | "Mobile" | ... */
    platform: string;
    /** Developer / studio name. */
    developer: string;
    /** Genre description. */
    genre: string;
    /** Description of the game itself, separate from the wiki description. */
    description?: string;
    /** ISO release date (optional). */
    releaseDate?: string;
  };
  /**
   * Dimensions of the configured default OG/Twitter share image.
   * Emitted as og:image:width / og:image:height so social crawlers can render
   * the share card without downloading the image first.
   */
  ogImageWidth: number;
  ogImageHeight: number;
  /** Public path to the default share image. */
  ogImage?: string;
  /** Default author name for articles without an explicit `author` in frontmatter (E-E-A-T signal). */
  defaultAuthor?: string;
}

export const site: SiteConfig = {
  name: 'Morioh High Wiki',
  shortName: 'MH Wiki',
  description:
    'An independent Morioh High Roblox wiki with source-checked game information, community resources, and practical player guides.',
  domain: 'moriohhighguide.wiki',
  tagline: 'Your field guide to Morioh High',
  legalNotice:
    'An unofficial player guide. Not affiliated with Not A Stand Game, Roblox Corporation, or the JoJo rights holders.',
  // Set a real address if you run no social channels — the contact page
  // renders it as a mailto link.
  contactEmail: 'contact@moriohhighguide.wiki',
  contactUrl: '',
  logoIcon: 'lucide:graduation-cap',
  social: {
    official: 'https://www.roblox.com/games/111838814545019/Morioh-High',
  },
  game: {
    name: 'Morioh High',
    platform: 'Roblox',
    developer: 'Not A Stand Game',
    genre: 'School life / Action',
    description: 'A Roblox school-life experience by Not A Stand Game, set in Morioh, Japan.',
    releaseDate: '',
  },
  // og:image dims of the SHIPPED share image — if you replace that asset,
  // update these in src/config/site.ts to match (wrong dims mis-crop share cards).
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImage: '/images/hero-v2.webp',
};

/** Absolute site URL (no trailing slash). Falls back to the Astro `site` config. */
export const siteUrl: string = (process.env.SITE_URL || `https://${site.domain}`).replace(
  /\/$/,
  '',
);
