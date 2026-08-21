# Design Conventions

Zentrale, erweiterbare Design-Tokens und Richtlinien für projektübergreifend konsistente Oberflächen.

## Struktur

```text
tokens/        Maschinenlesbare Source of Truth
css/           Generierte CSS Custom Properties
integrations/  Generierte Framework-Adapter
docs/          Richtlinien und Anwendungsbeispiele
scripts/       Generierung und Konsistenzprüfung
```

Farben und Borders sind die ersten Token-Kategorien. Weitere Kategorien wie Spacing, Typografie, Schatten, Motion oder Breakpoints können jeweils als eigene Datei in diesen Schichten ergänzt werden.

## Entwicklung

Tokenwerte werden ausschließlich in `tokens/*.json` geändert. Anschließend werden die abgeleiteten Dateien erzeugt und geprüft:

```bash
npm run build
npm run check
```

### Push-Schutz

Das Repository enthält einen versionierten `pre-push`-Hook. Einmal pro lokalem Clone aktivieren:

```bash
git config core.hooksPath .githooks
```

Vor jedem `git push` führt der Hook `npm run check` aus. Commits bleiben jederzeit möglich; ein Push mit veralteten generierten Dateien wird abgebrochen. Zusätzlich führt GitHub Actions dieselbe Prüfung bei Pull Requests und Pushes auf `main` aus.

## CSS

Alle aktuellen Token-Kategorien:

```css
@import '@damblatt/visual-kit/css/all';
```

Einzelne Kategorien:

```css
@import '@damblatt/visual-kit/css/colors';
@import '@damblatt/visual-kit/css/borders';
```

## Tailwind

```typescript
import {
  designConventionBorders,
  designConventionColors,
} from '@damblatt/visual-kit/integrations/tailwind';

export default {
  theme: {
    extend: {
      colors: designConventionColors,
      borderRadius: designConventionBorders.borderRadius,
      borderWidth: designConventionBorders.borderWidth,
    },
  },
};
```

## Dokumentation

- [Farbsystem](docs/colors.md)
- [Border-System](docs/borders.md)

## Kompatibilität

Die bisherigen Einstiegspunkte `color-palette.css`, `color-palette.json` und `tailwind-colors.config.ts` bleiben vorerst erhalten. Neue Integrationen sollten die fachlich getrennten Pfade verwenden.
