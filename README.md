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
```

## 📦 Project Structure

```
apps/demo/
├── src/
│   ├── App.tsx           # Main demo showcasing all components
│   ├── main.tsx          # React entry point
│   ├── index.css         # Imports UI library styles
│   └── App.css           # App-specific styles
├── vite.config.ts        # Vite configuration (IMPORTANT!)
├── postcss.config.js     # PostCSS with Tailwind plugin
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## ⚙️ Configuration

### 1. Vite Configuration (`vite.config.ts`)

The key to proper integration is the Vite configuration:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // CRITICAL: Tell Tailwind to scan UI library components
      content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}']
    })
  ],
  resolve: {
    alias: {
      // Alias 'ui' to the packages/ui directory
      'ui': path.resolve(__dirname, '../../packages/ui'),
      // Dedupe React to avoid multiple instances
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
    dedupe: ['react', 'react-dom'],
  },
})
```

### 2. CSS Import (`src/index.css`)

Import the UI library's main CSS file:

```css
@import '../../packages/ui/src/index.css';
```

This brings in:
- Tailwind CSS base styles
- Custom theme variables
- Component styles
- Theme configurations

### 3. PostCSS Configuration (`postcss.config.js`)

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

## 🎨 Using UI Components

### Basic Import

```typescript
import { Button, Calendar, ThemeSwitcher } from 'ui'

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

### Granular Import

```typescript
import { Button } from 'ui/components/buttons'
import { Calendar } from 'ui/components/calendar'
import { ThemeSwitcher } from 'ui/components/theme'
```

## 🎨 Theme System

The UI library includes a theme system with multiple color schemes:

- **Default**: Modern UI design
- **Claymorphism**: Soft, clay-like appearance
- **Glassmorphism**: Transparent, glass effect
- **Neubrutalism**: Bold, brutalist style

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
- Cycle through theme presets

## 🔧 Creating a New App

To create a new app using this template:

1. **Copy the demo app structure**:
   ```bash
   cp -r apps/demo apps/my-new-app
   ```

2. **Update package.json**:
   ```json
   {
     "name": "my-new-app",
     "version": "0.0.0"
   }
   ```

3. **Install dependencies**:
   ```bash
   cd apps/my-new-app
   bun install
   ```

4. **Start building**!
   ```bash
   bun run dev
   ```

## 🐛 Troubleshooting

### Styles Not Applying

**Problem**: Tailwind classes from UI components aren't being applied.

**Solution**:
- Ensure `content` array in `vite.config.ts` includes `'../../packages/ui/src/**/*.{ts,tsx}'`
- Verify the CSS import path in `src/index.css` is correct
- Check that `@tailwindcss/vite` plugin is installed and configured

### Multiple React Instances

**Problem**: React hooks errors or duplicate React warnings.

**Solution**:
- Verify `resolve.alias` in `vite.config.ts` points to your local `node_modules/react`
- Ensure `dedupe: ['react', 'react-dom']` is configured

### Import Errors

**Problem**: Cannot resolve `'ui'` module.

**Solution**:
- Check the alias configuration in `vite.config.ts`
- Ensure path points to the correct location: `path.resolve(__dirname, '../../packages/ui')`

## 📚 Tech Stack

- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Vite 7** - Build tool
- **Tailwind CSS v4** - Styling (CSS-first configuration)
- **Bun** - Package manager & runtime

## 🔗 Related Files

- UI Library: `../../packages/ui`
- UI Components: `../../packages/ui/src/components`
- UI Styles: `../../packages/ui/src/index.css`
- Theme Configuration: `../../packages/ui/src/lib/themes.ts`

## 📄 License

Part of the post-captain monorepo.
