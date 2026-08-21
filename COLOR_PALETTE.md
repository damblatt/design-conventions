# 🎨 Visual Kit - Color Palette

Ein umfassendes Farbschema für konsistentes Branding über alle Projekte hinweg.

## 📋 Farben auf einen Blick

| Name | Hex | RGB | HSL | Verwendung |
|------|-----|-----|-----|-----------|
| **Light Beige** | `#f5f0e6` | 245, 240, 230 | 38°, 60%, 93% | Hintergrund, helle Flächen |
| **Dark Beige** | `#e0d3b7` | 224, 211, 183 | 38°, 47%, 80% | Sekundäre Hintergründe, Akzente |
| **Dark Brown** | `#3c3830` | 60, 56, 48 | 38°, 11%, 21% | Primärer Text, dunkle Elemente |
| **Dark Brown 80%** | `rgba(69, 64, 56, 0.8)` | - | - | Overlays, halbtransparente Hintergründe |
| **Green** | `#009175` | 0, 145, 117 | 168°, 100%, 28% | Primärer Akzent, CTAs, Interaktion |
| **Green 80%** | `rgba(0, 145, 117, 0.8)` | - | - | Hover-States, interaktive Overlays |
| **Orange** | `#fd8d58` | 253, 141, 88 | 16°, 99%, 67% | Highlights, sekundärer Akzent |

---

## 🎯 Farbfamilien

### 🟠 Neutrals (Beige & Brown)
Das warme, natürliche Fundament des Designs. Diese Farben schaffen Ruhe und Authentizität.

- **Hintergrund:** `#f5f0e6`
- **Akzente:** `#e0d3b7`
- **Text & Dominante:** `#3c3830`

**Psychologie:** Warm, vertrauenswürdig, elegant, komfortabel

### 🟢 Green (Primary Accent)
Die Hauptinteraktionsfarbe. Symbolisiert Wachstum, Aktion und Vertrauen.

- **Hex:** `#009175`
- **RGB:** `0, 145, 117`
- **HSL:** `168°, 100%, 28%`

**Psychologie:** Aktion, Erfolg, Wachstum, Vertrauen, Interaktivität

### 🟠 Orange (Secondary Accent)
Warme Highlights und sekundäre Interaktionen. Bringt Energie ins Design.

- **Hex:** `#fd8d58`
- **RGB:** `253, 141, 88`
- **HSL:** `16°, 99%, 67%`

**Psychologie:** Energie, Vitalität, Aufmerksamkeit, Optimismus

---

## 💻 Verwendung in verschiedenen Projekten

### 1. Angular / TypeScript Projekte

**Importiere die JSON-Datei:**

```typescript
import colorPalette from 'https://raw.githubusercontent.com/damblatt/visual-kit/main/color-palette.json';

export const COLORS = colorPalette.colors.primary;

// Verwendung
const bgColor = COLORS['light-beige'].hex; // #f5f0e6
const accentColor = COLORS.green.hex;      // #009175
```

### 2. CSS / SCSS / Tailwind Projekte

**Kopiere die `color-palette.css` Datei:**

```css
@import 'https://raw.githubusercontent.com/damblatt/visual-kit/main/color-palette.css';

body {
  background-color: var(--color-primary-light-beige);
  color: var(--color-primary-dark-brown);
}

.button-primary {
  background-color: var(--color-primary-green);
  color: var(--color-primary-light-beige);
}
```

### 3. Tailwind CSS Projekte

**Kopiere die `tailwind-colors.config.ts` in dein Projekt:**

```typescript
// tailwind.config.ts
import { visualKitColors } from './tailwind-colors.config';

export default {
  theme: {
    extend: {
      colors: visualKitColors,
    },
  },
};
```

**Verwende dann in deinen Klassen:**

```html
<div class="bg-beige-100 text-beige-900">
  <button class="bg-green-600 text-beige-50">
    Primärer Button
  </button>
</div>
```

### 4. React / Vue Projekte

**Erstelle eine Konstante:**

```javascript
// colors.js
export const colors = {
  primary: {
    lightBeige: '#f5f0e6',
    darkBeige: '#e0d3b7',
    darkBrown: '#3c3830',
    green: '#009175',
    orange: '#fd8d58',
  },
};

// Verwendung
import { colors } from './colors.js';

function Button() {
  return (
    <button style={{ backgroundColor: colors.primary.green }}>
      Click me
    </button>
  );
}
```

### 5. Design Tools (Figma, Adobe XD)

Verwende die `figmaTokens` aus der `color-palette.json`:

1. Öffne die JSON
2. Importiere die Farben in dein Design-Tool
3. Alle Farben werden als Design-Tokens verfügbar

---

## 🔄 Farbvariationen & Tints/Shades

Wenn du weitere Variationen brauchst:

```css
/* Lightens */
--color-green-light: #33a885;   /* Leichter grün */
--color-green-lighter: #66bb99; /* Noch leichter */

/* Darkens */
--color-green-dark: #006b56;   /* Dunkler grün */
--color-green-darker: #004d3f; /* Noch dunkler */

/* Saturation variations */
--color-green-muted: #5a9f8f;  /* Weniger gesättigt */
```

---

## 📐 Kontrast & Barrierefreiheit

| Kombination | Kontrast-Ratio | WCAG AA | WCAG AAA |
|-------------|----------------|---------|----------|
| Dark Brown auf Light Beige | ~8:1 | ✅ | ✅ |
| Green auf Light Beige | ~4.5:1 | ✅ | ❌ |
| Orange auf Light Beige | ~2.5:1 | ❌ | ❌ |

**Empfehlung:** Verwende Orange nur für Highlights, nicht als Text auf hellen Hintergründen.

---

## 🎨 Kombinationsbeispiele

### Hero Section (CTA-fokussiert)
```css
background-color: var(--color-primary-light-beige);
color: var(--color-primary-dark-brown);
border: 3px solid var(--color-primary-green);
```

### Navigation
```css
background-color: var(--color-primary-dark-brown);
color: var(--color-primary-light-beige);
a:hover {
  color: var(--color-primary-green);
}
```

### Cards
```css
background-color: var(--color-primary-dark-beige);
border-left: 4px solid var(--color-primary-orange);
color: var(--color-primary-dark-brown);
```

### Buttons
```css
/* Primary */
background-color: var(--color-primary-green);
color: var(--color-primary-light-beige);

/* Secondary */
background-color: var(--color-primary-dark-beige);
color: var(--color-primary-dark-brown);
border: 1px solid var(--color-primary-dark-brown);
```

---

## 📦 Dateien in diesem Portfolio

1. **color-palette.json** - Vollständige Farbdefinitionen im JSON-Format
2. **color-palette.css** - CSS-Variablen für direkten Import
3. **tailwind-colors.config.ts** - Tailwind-kompatible Konfiguration
4. **COLOR_PALETTE.md** - Diese Dokumentation

---

## 💡 Tipps zur Verwendung

1. **Konsistenz:** Verwende immer die definierten Farben, nicht ähnliche Custom-Farben
2. **Variationen:** Nutze Opacity-Werte statt neue Farben (z.B. `rgba(60, 56, 48, 0.5)`)
3. **Kontrast:** Teste regelmäßig mit Tools wie WebAIM Contrast Checker
4. **Semantische Bedeutung:** Green = Aktion/Bestätigung, Orange = Warnung/Hinweis
5. **Updates:** Wenn die Palette sich ändert, aktualisiere alle Dateien gleichzeitig

---

## 🔗 Ressourcen

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors.co - Palette Generator](https://coolors.co/)
- [Color Space Tool](https://www.colorspace.io/)
- [HSL Color Visualizer](https://hslpicker.com/)

---

**Zuletzt aktualisiert:** 21.08.2026  
**Version:** 1.0.0
