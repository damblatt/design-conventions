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

## Inhalte

### color-palette.json
Vollständige Farbdefinitionen in maschinenlesbarem Format. Enthält Hex-, RGB- und HSL-Werte sowie Verwendungszwecke.

**Verwendung in TypeScript/JavaScript:**
```typescript
import colors from 'https://raw.githubusercontent.com/damblatt/design-conventions/main/color-palette.json';
const primaryGreen = colors.colors.primary.green.hex;
```

### color-palette.css
CSS-Variablen, die direkt in Projekten importiert werden können.

**Verwendung:**
```css
@import 'https://raw.githubusercontent.com/damblatt/design-conventions/main/color-palette.css';
background-color: var(--color-primary-green);
```

### tailwind-colors.config.ts
Tailwind CSS Konfiguration mit vollständiger Farbpalette und Variationen.

**Verwendung in tailwind.config.ts:**
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

### COLOR_PALETTE.md
Ausführliche Dokumentation mit Farbspezifikationen, Kontrastrichtlinien und Kombinationsbeispielen.

## Integration in Projekte

Kopiere die entsprechende Datei in dein Projekt oder referenziere sie direkt von GitHub:

**Lokal kopieren:**
```bash
curl -O https://raw.githubusercontent.com/damblatt/design-conventions/main/color-palette.css
```

**Direkt über URL referenzieren:**
```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/damblatt/design-conventions/main/color-palette.css">
```

## Farbschema

| Farbe | Hex | Zweck |
|-------|-----|-------|
| Light Beige | #f5f0e6 | Primärer Hintergrund |
| Dark Beige | #e0d3b7 | Sekundäre Elemente |
| Dark Brown | #3c3830 | Primärer Text |
| Green | #009175 | Hauptakzent, Call-to-Action |
| Orange | #fd8d58 | Sekundärer Akzent, Highlights |

## Best Practices

- Verwende immer die definierten Farben statt Custom-Farben zu erstellen
- Nutze CSS-Variablen oder Tailwind-Klassen für Konsistenz
- Teste Farbkombinationen auf Barrierefreiheit (Kontrastverhältnisse)
- Für Orange nur bei Highlights verwenden, nicht für Body-Text
- Bei Änderungen alle Dateien gleichzeitig aktualisieren

## Updates und Wartung

Dieses Repository ist versionskontrolliert. Bei Änderungen:

1. Aktualisiere die Dateien lokal
2. Erstelle einen Commit mit aussagekräftiger Nachricht
3. Pushe auf den main-Branch

Alle referenzierenden Projekte können dann die neuesten Versionen abrufen.

## Lizenz

MIT

## Kontakt

Betreuer: @damblatt
