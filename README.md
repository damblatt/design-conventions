# Design Conventions

Ein zentrales Repository für Design- und Branding-Standards. Hier werden alle Farben, Komponenten-Richtlinien und Designprinzipien definiert, um Konsistenz über alle Projekte hinweg zu gewährleisten.

## Zweck

Dieses Repository dient als Single Source of Truth für alle Design-Ressourcen:

- Farbpaletten und Design Tokens
- CSS-Variablen für konsistentes Styling
- Tailwind-Konfigurationen
- Designrichtlinien und Best Practices
- Barrierefreiheits-Standards

So ist sichergestellt, dass alle Projekte optisch konsistent sind und eine einheitliche Markenidentität widerspiegeln.

## Farbschema

| Farbe | Hex | Zweck |
|-------|-----|-------|
| Light Beige | #f5f0e6 | Primärer Hintergrund |
| Dark Beige | #e0d3b7 | Sekundäre Elemente |
| Dark Brown | #3c3830 | Primärer Text |
| Green | #009175 | Hauptakzent, Call-to-Action |
| Orange | #fd8d58 | Sekundärer Akzent, Highlights |

## Dateien

- **color-palette.json** - Farbdefinitionen in maschinenlesbarem Format (Hex, RGB, HSL)
- **color-palette.css** - CSS-Variablen zum direkten Import
- **tailwind-colors.config.ts** - Tailwind CSS Konfiguration mit Farbpalette
- **COLOR_PALETTE.md** - Ausführliche Dokumentation

## Integration in Projekte

### CSS Import
```css
@import 'https://raw.githubusercontent.com/damblatt/design-conventions/main/color-palette.css';

body {
  background-color: var(--color-primary-light-beige);
  color: var(--color-primary-dark-brown);
}
```

### JSON für JavaScript/TypeScript
```typescript
import colors from 'https://raw.githubusercontent.com/damblatt/design-conventions/main/color-palette.json';
const primaryGreen = colors.colors.primary.green.hex;
```

### Tailwind Integration
```typescript
import { visualKitColors } from './tailwind-colors.config';

export default {
  theme: {
    extend: {
      colors: visualKitColors,
    },
  },
};
```

### Lokal kopieren
```bash
curl -O https://raw.githubusercontent.com/damblatt/design-conventions/main/color-palette.css
```

## Verwendung nach Framework

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
background-color: var(--color-primary-green);
```

## Best Practices

- Verwende immer die definierten Farben statt Custom-Farben zu erstellen
- Nutze CSS-Variablen oder Tailwind-Klassen für Konsistenz
- Teste Farbkombinationen auf Barrierefreiheit (Kontrastverhältnisse)
- Für Orange nur bei Highlights verwenden, nicht für Body-Text
- Bei Änderungen alle Dateien gleichzeitig aktualisieren
