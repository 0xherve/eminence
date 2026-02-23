"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  type Theme,
  getTheme,
  setTheme,
  onSystemThemeChange,
} from "@/lib/theme";
import { IconMoon, IconSun, IconDeviceDesktop } from "@tabler/icons-react"
import { cn } from "@/lib/utils";

const OPTIONS: { value: Theme; label: string; icon: ReactNode; ariaLabel: string }[] = [
  { value: "system", label: "System", icon: <IconDeviceDesktop className="size-4" />, ariaLabel: "System theme" },
  { value: "light", label: "Light", icon: <IconSun className="size-4" />, ariaLabel: "Light theme" },
  { value: "dark", label: "Dark", icon: <IconMoon className="size-4" />, ariaLabel: "Dark theme" },
];

export function ThemeSwitcher({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setThemeState(getTheme());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    return onSystemThemeChange(() => {
      setThemeState(getTheme());
    });
  }, [mounted]);

  const activeIndex = OPTIONS.findIndex((o) => o.value === theme);

  if (!mounted) {
    return (
      <div
        className={cn(
          "relative flex rounded-full border border-border bg-muted/50 p-0.5 text-sm",
          className
        )}
        aria-hidden
      >
        <div className="h-8 w-24 rounded-full bg-muted" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex rounded-full border border-border bg-muted/50 p-0.5 text-center text-sm",
        className
      )}
      role="group"
      aria-label="Theme"
    >
      {/* Sliding pill indicator */}
      <div
        className="absolute rounded-full border border-border bg-background transition-all duration-200 ease-out"
        style={{
          left: `calc(${activeIndex * (100 / 3)}% + 2px)`,
          width: `calc(${100 / 3}% - 4px)`,
          top: "2px",
          bottom: "2px",
        }}
        aria-hidden
      />
      {OPTIONS.map((opt, i) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => {
            setTheme(opt.value);
            setThemeState(opt.value);
          }}
          aria-label={opt.ariaLabel}
          aria-pressed={theme === opt.value}
          className={cn(
            "relative z-10 inline-flex cursor-pointer items-center justify-center rounded-full leading-none text-inherit transition-colors",
            "h-8 flex-1 text-base",
            theme === opt.value
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span aria-hidden className="select-none">
            {opt.icon}
          </span>
        </button>
      ))}
    </div>
  );
}
