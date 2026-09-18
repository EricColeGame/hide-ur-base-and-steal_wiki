export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: unknown;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "codes", path: "/codes", isContentType: true },
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "tips", path: "/tips", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = (NAVIGATION_CONFIG as readonly NavigationItem[])
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
