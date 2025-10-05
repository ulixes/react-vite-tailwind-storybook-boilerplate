# UI Library Integration Template

This is a reference implementation demonstrating how to integrate the `ui` package into React TypeScript Vite applications.

## 🎯 Purpose

Use this demo app as a **template/boilerplate** for creating new applications with the UI library. It showcases:

- ✅ All available UI components
- ✅ Proper Vite configuration for monorepo setup
- ✅ Correct CSS/Tailwind integration
- ✅ Theme system with dark mode support
- ✅ TypeScript configuration

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
``

## 🎨 Theme System


- **Claymorphism**: Soft, clay-like appearance

Use the `<ThemeSwitcher />` component to toggle between themes and dark/light modes.

## 📝 Available Components

### Button
- **Variants**: default, secondary, destructive, outline, ghost, link
- **Sizes**: sm, default, lg, icon
- **States**: normal, disabled

### Calendar
- Date selection component
- Built with react-day-picker

### ThemeSwitcher
- Toggle light/dark mode


## 📄 License

Part of the post-captain monorepo.
