export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: unknown;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [] as const;

export const CONTENT_TYPES = (NAVIGATION_CONFIG as readonly { path: string; isContentType: boolean }[])
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
