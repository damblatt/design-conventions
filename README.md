# 🎨 Visual Kit

A cohesive **color palette** and **design token system** for consistent branding across all projects. Built with modern standards and framework-agnostic.

## 📦 What's Included

- **JSON Format** - Easy integration with any tech stack
- **CSS Variables** - Drop-in usage in web projects
- **Tailwind Config** - TypeScript-ready configuration
- **Design Tokens** - Figma-compatible format
- **Full Documentation** - Usage guides and best practices

## 🎯 Color System

| Color | Hex | Purpose |
|-------|-----|---------|
| Light Beige | `#f5f0e6` | Primary background |
| Dark Beige | `#e0d3b7` | Secondary elements |
| Dark Brown | `#3c3830` | Primary text |
| **Green** | `#009175` | Main accent, CTAs |
| **Orange** | `#fd8d58` | Secondary accent, highlights |

## 🚀 Quick Start

### Option 1: CSS Import
```css
@import 'https://raw.githubusercontent.com/damblatt/visual-kit/main/color-palette.css';

body {
  background-color: var(--color-primary-light-beige);
  color: var(--color-primary-dark-brown);
}
```

### Option 2: JSON for JavaScript/TypeScript
```typescript
import colors from 'https://raw.githubusercontent.com/damblatt/visual-kit/main/color-palette.json';

const primaryGreen = colors.colors.primary.green.hex; // #009175
```

### Option 3: Tailwind Integration
```typescript
import { butterkeksColors } from './tailwind-colors.config';

export default {
  theme: {
    extend: {
      colors: butterkeksColors,
    },
  },
};
```

## 📁 File Structure

```
visual-kit/
├── color-palette.json           # Complete color definitions
├── color-palette.css            # CSS variables (ready to use)
├── tailwind-colors.config.ts    # Tailwind configuration
├── COLOR_PALETTE.md             # Detailed documentation
├── README.md                    # This file
└── package.json                 # npm metadata
```

## 📖 Documentation

See [COLOR_PALETTE.md](./COLOR_PALETTE.md) for:
- Detailed color specifications
- Usage examples for different frameworks
- Accessibility considerations
- Color combination guidelines
- Design token principles

## 💻 Framework Integration

### Angular
```typescript
import colors from './color-palette.json';
export const APP_COLORS = colors.colors.primary;
```

### React
```javascript
const colors = {
  primary: { green: '#009175', orange: '#fd8d58' }
};
```

### Vue
```javascript
const colors = require('./color-palette.json');
```

### Vanilla CSS
```css
@import './color-palette.css';
/* Use var(--color-primary-green) etc. */
```

## 🔄 Version History

- **1.0.0** (2026-08-21) - Initial release
  - 5 core colors with variations
  - CSS, JSON, and Tailwind formats
  - Complete documentation

## 📝 License

MIT

## 🤝 Contributing

Suggestions for color improvements? Open an issue or PR!

---

**Part of:** Butterkeks Portfolio Project  
**Maintained by:** [@damblatt](https://github.com/damblatt)
