"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export default function useTheme(): [Theme, Dispatch<SetStateAction<Theme>>] {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const userTheme = window.localStorage.getItem("theme") as Theme;
    if (userTheme) {
      setTheme(userTheme);
      return;
    }
    if (!window.matchMedia) return;
    const clientTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(clientTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return [theme, setTheme];
}
