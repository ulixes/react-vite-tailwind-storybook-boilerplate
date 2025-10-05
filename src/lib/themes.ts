export type Theme = {
  name: string;
  light: Record<string, string>;
  dark: Record<string, string>;
};

export const themes: Theme[] = [
  {
    name: "default",
    light: {
      background: "rgb(255, 255, 255)",
      foreground: "rgb(10, 10, 10)",
      card: "rgb(255, 255, 255)",
      "card-foreground": "rgb(10, 10, 10)",
      popover: "rgb(255, 255, 255)",
      "popover-foreground": "rgb(10, 10, 10)",
      primary: "rgb(23, 23, 23)",
      "primary-foreground": "rgb(250, 250, 250)",
      secondary: "rgb(245, 245, 245)",
      "secondary-foreground": "rgb(23, 23, 23)",
      muted: "rgb(245, 245, 245)",
      "muted-foreground": "rgb(115, 115, 115)",
      accent: "rgb(245, 245, 245)",
      "accent-foreground": "rgb(23, 23, 23)",
      destructive: "rgb(239, 68, 68)",
      "destructive-foreground": "rgb(250, 250, 250)",
      border: "rgb(229, 229, 229)",
      input: "rgb(229, 229, 229)",
      ring: "rgb(23, 23, 23)",
    },
    dark: {
      background: "rgb(10, 10, 10)",
      foreground: "rgb(250, 250, 250)",
      card: "rgb(10, 10, 10)",
      "card-foreground": "rgb(250, 250, 250)",
      popover: "rgb(10, 10, 10)",
      "popover-foreground": "rgb(250, 250, 250)",
      primary: "rgb(250, 250, 250)",
      "primary-foreground": "rgb(23, 23, 23)",
      secondary: "rgb(38, 38, 38)",
      "secondary-foreground": "rgb(250, 250, 250)",
      muted: "rgb(38, 38, 38)",
      "muted-foreground": "rgb(163, 163, 163)",
      accent: "rgb(38, 38, 38)",
      "accent-foreground": "rgb(250, 250, 250)",
      destructive: "rgb(127, 29, 29)",
      "destructive-foreground": "rgb(250, 250, 250)",
      border: "rgb(38, 38, 38)",
      input: "rgb(38, 38, 38)",
      ring: "rgb(212, 212, 212)",
    },
  },
  {
    name: "blue",
    light: {
      background: "rgb(255, 255, 255)",
      foreground: "rgb(15, 23, 42)",
      card: "rgb(255, 255, 255)",
      "card-foreground": "rgb(15, 23, 42)",
      popover: "rgb(255, 255, 255)",
      "popover-foreground": "rgb(15, 23, 42)",
      primary: "rgb(37, 99, 235)",
      "primary-foreground": "rgb(248, 250, 252)",
      secondary: "rgb(241, 245, 249)",
      "secondary-foreground": "rgb(15, 23, 42)",
      muted: "rgb(241, 245, 249)",
      "muted-foreground": "rgb(100, 116, 139)",
      accent: "rgb(241, 245, 249)",
      "accent-foreground": "rgb(15, 23, 42)",
      destructive: "rgb(239, 68, 68)",
      "destructive-foreground": "rgb(248, 250, 252)",
      border: "rgb(226, 232, 240)",
      input: "rgb(226, 232, 240)",
      ring: "rgb(37, 99, 235)",
    },
    dark: {
      background: "rgb(15, 23, 42)",
      foreground: "rgb(248, 250, 252)",
      card: "rgb(30, 41, 59)",
      "card-foreground": "rgb(248, 250, 252)",
      popover: "rgb(30, 41, 59)",
      "popover-foreground": "rgb(248, 250, 252)",
      primary: "rgb(59, 130, 246)",
      "primary-foreground": "rgb(248, 250, 252)",
      secondary: "rgb(51, 65, 85)",
      "secondary-foreground": "rgb(248, 250, 252)",
      muted: "rgb(51, 65, 85)",
      "muted-foreground": "rgb(148, 163, 184)",
      accent: "rgb(51, 65, 85)",
      "accent-foreground": "rgb(248, 250, 252)",
      destructive: "rgb(220, 38, 38)",
      "destructive-foreground": "rgb(248, 250, 252)",
      border: "rgb(51, 65, 85)",
      input: "rgb(51, 65, 85)",
      ring: "rgb(59, 130, 246)",
    },
  },
];

export function applyTheme(themeName: string, mode: "light" | "dark") {
  const theme = themes.find((t) => t.name === themeName);
  if (!theme) return;

  const colors = theme[mode];
  const root = document.documentElement;

  // Toggle dark class
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Apply CSS variables
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}
