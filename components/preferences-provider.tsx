"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/lib/portfolio-content";

type Theme = "dark" | "light";

type PreferencesContextValue = {
  locale: Locale;
  setLocale: (value: Locale) => void;
  theme: Theme;
  setTheme: (value: Theme) => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const storedLocale = window.localStorage.getItem("portfolio-locale");
      if (storedLocale === "pt" || storedLocale === "en") {
        setLocale(storedLocale);
      }

      const storedTheme = window.localStorage.getItem("portfolio-theme");
      if (storedTheme === "dark" || storedTheme === "light") {
        setTheme(storedTheme);
      }

      setIsHydrated(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem("portfolio-locale", locale);
    document.documentElement.lang = locale;
  }, [isHydrated, locale]);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem("portfolio-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [isHydrated, theme]);

  const contextValue = useMemo(
    () => ({ locale, setLocale, theme, setTheme }),
    [locale, theme],
  );

  return (
    <PreferencesContext.Provider value={contextValue}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("usePreferences must be used inside PreferencesProvider");
  }

  return context;
}
