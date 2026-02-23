export type Theme = "system" | "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/** Resolved theme actually applied to the document (light or dark). */
export function getResolvedTheme(): "light" | "dark" {
  const stored = getTheme();
  if (stored === "system") return getSystemTheme();
  return stored;
}

export function getTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const raw = localStorage.getItem(THEME_STORAGE_KEY);
  if (raw === "light" || raw === "dark" || raw === "system") return raw;
  return "system";
}

export function setTheme(theme: Theme): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}

/** Apply theme to document without persisting. */
export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const resolved = theme === "system" ? getSystemTheme() : theme;
  if (resolved === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

/** Call from client to listen for system preference changes when theme is "system". */
export function onSystemThemeChange(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const m = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => callback();
  m.addEventListener("change", handler);
  return () => m.removeEventListener("change", handler);
}
