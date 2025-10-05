# React + Vite + Tailwind CSS v4 + Storybook Boilerplate

A complete boilerplate with **React 19**, **Vite 7**, **Tailwind CSS v4**, **Storybook 8**, and **30+ shadcn/ui components** with a beautiful Claymorphism theme.

## 🎯 What's Included

- ✅ **React 19** with TypeScript
- ✅ **Vite 7** for lightning-fast builds
- ✅ **Tailwind CSS v4** (CSS-first configuration with `@theme`, `@plugin`)
- ✅ **Storybook 8.6.3** with custom theme switcher
- ✅ **30+ shadcn/ui components** built on Radix UI
- ✅ **Claymorphism theme** (light + dark modes)
- ✅ **All components have Storybook stories**

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Start Storybook
bun run storybook

# Build for production
bun run build

# Build Storybook
bun run build-storybook
```

## 📦 Project Structure

```
app/
├── .storybook/
│   ├── main.ts                    # Storybook config
│   └── preview.tsx                # Theme switcher with globalTypes
├── src/
│   ├── components/
│   │   ├── theme/
│   │   │   └── theme-switcher.tsx # Theme toggle component
│   │   └── ui/                    # 30+ shadcn/ui components
│   │       ├── accordion/
│   │       ├── badge/
│   │       ├── breadcrumb/
│   │       ├── buttons/
│   │       ├── calendar/
│   │       ├── checkbox/
│   │       ├── collapsible/
│   │       ├── command/
│   │       ├── dialog/
│   │       ├── drawer/
│   │       ├── dropdown-menu/
│   │       ├── hover-card/
│   │       ├── input/
│   │       ├── label/
│   │       ├── pagination/
│   │       ├── progress/
│   │       ├── radio-group/
│   │       ├── resizable/
│   │       ├── scroll-area/
│   │       ├── separator/
│   │       ├── skeleton/
│   │       ├── slider/
│   │       ├── sonner/
│   │       ├── spinner/
│   │       ├── tabs/
│   │       ├── textarea/
│   │       ├── toggle/
│   │       ├── toggle-group/
│   │       └── tooltip/
│   ├── lib/
│   │   ├── utils.ts               # cn() helper function
│   │   └── themes.ts              # Claymorphism theme colors
│   ├── stories/                   # Extra Storybook stories
│   ├── index.css                  # Tailwind v4 + Claymorphism theme
│   ├── App.tsx                    # React app
│   └── main.tsx                   # Entry point
├── vite.config.ts                 # Vite with Tailwind v4 plugin
├── postcss.config.js              # PostCSS config
├── tsconfig.json                  # TypeScript config
└── package.json                   # Dependencies
```

## 🎨 Available Components

All components are built with **Radix UI** primitives and include Storybook stories:

### Layout & Navigation
- **Accordion** - Collapsible content sections
- **Breadcrumb** - Navigation breadcrumbs
- **Tabs** - Tabbed interfaces
- **Separator** - Visual dividers
- **Scroll Area** - Custom scrollbars
- **Resizable** - Resizable panel layouts

### Forms & Inputs
- **Button** - Multiple variants (default, destructive, outline, secondary, ghost, link)
- **Input** - Text input field
- **Textarea** - Multi-line text input
- **Checkbox** - Form checkbox
- **Radio Group** - Radio button groups
- **Slider** - Range slider
- **Toggle** - Toggle button
- **Toggle Group** - Toggle button groups
- **Calendar** - Date picker with react-day-picker
- **Label** - Form labels

### Overlays & Dialogs
- **Dialog** - Modal dialogs
- **Drawer** - Bottom sheet drawer (vaul)
- **Dropdown Menu** - Context menus
- **Hover Card** - Hover popover
- **Tooltip** - Tooltips
- **Command** - Command palette (cmdk)
- **Sonner** - Toast notifications

### Feedback & Status
- **Badge** - Status indicators
- **Progress** - Progress bars
- **Skeleton** - Loading skeletons
- **Spinner** - Loading spinner

### Utilities
- **Collapsible** - Expandable sections
- **Pagination** - Page navigation
- **Theme Switcher** - Light/dark mode toggle

## ⚙️ Tailwind CSS v4 Configuration

This boilerplate uses **Tailwind CSS v4** with CSS-first configuration in `src/index.css`:

```css
@import 'tailwindcss';
@plugin 'tailwindcss-animate';

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... more theme variables */
}

:root {
  /* Claymorphism Light Theme */
  --background: rgb(231, 229, 228);
  --foreground: rgb(30, 41, 59);
  --primary: rgb(99, 102, 241);
  /* ... */
}

.dark {
  /* Claymorphism Dark Theme */
  --background: rgb(30, 27, 24);
  --foreground: rgb(226, 232, 240);
  /* ... */
}
```

## 🎨 Theme System

The boilerplate includes a **Claymorphism theme** with:
- Soft, clay-like appearance
- Custom shadow system
- Light and dark mode support
- CSS variable-based theming

Use the `<ThemeSwitcher />` component to toggle between light/dark modes.

## 📚 Using Components

### Basic Import

```typescript
import { Button } from './components/ui/buttons/button'
import { Calendar } from './components/ui/calendar/calendar'
import { ThemeSwitcher } from './components/theme/theme-switcher'

function MyComponent() {
  return (
    <div>
      <ThemeSwitcher />
      <Button variant="default">Click me</Button>
      <Calendar mode="single" />
    </div>
  )
}
```

### Component Variants

```typescript
// Button variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Button sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>

// Badge variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

## 📖 Storybook

All components have interactive Storybook stories. The Storybook includes:

- **Theme switcher** in the toolbar (globalTypes)
- Interactive component demos
- Component documentation
- Accessibility checks

Run Storybook:
```bash
bun run storybook
```

Build Storybook:
```bash
bun run build-storybook
```

## 🔧 Vite Configuration

The boilerplate uses Vite 7 with the Tailwind CSS v4 plugin:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## 📦 Tech Stack

- **React 19.1.1** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.1.7** - Build tool
- **Tailwind CSS 4.1.13** - Styling (CSS-first configuration)
- **Storybook 8.6.3** - Component documentation
- **Radix UI** - Headless UI primitives
- **class-variance-authority** - Component variants
- **lucide-react** - Icons
- **cmdk** - Command palette
- **vaul** - Drawer component
- **sonner** - Toast notifications
- **react-hook-form** - Form management
- **zod** - Schema validation
- **date-fns** - Date utilities
- **react-day-picker** - Calendar component
- **react-resizable-panels** - Resizable panels
- **Bun** - Package manager & runtime

## 🐛 Troubleshooting

### VariantProps Import Errors

If you see errors like `does not provide an export named 'VariantProps'`, ensure type imports are separated:

```typescript
// ✅ Correct
import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"

// ❌ Incorrect
import { cva, type VariantProps } from "class-variance-authority"
```

### Storybook Cache Issues

If Storybook shows stale errors, clear the cache:
```bash
rm -rf node_modules/.cache/storybook
bun run storybook
```

## 📄 License

MIT
