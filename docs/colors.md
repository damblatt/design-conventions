# Farbsystem

Die Quelldatei für alle Farb-Tokens ist `tokens/colors.json`. CSS und Tailwind werden daraus mit `npm run build` erzeugt.

## Primärfarben

| Token | Wert | Verwendung |
|-------|------|------------|
| `lightBeige` | `#f5f0e6` | Hintergrund und helle Flächen |
| `darkBeige` | `#e0d3b7` | Sekundäre Hintergründe und Konturen |
| `darkBrown` | `#3c3830` | Primärer Text und dunkle Elemente |
| `green` | `#009175` | Primäre Aktionen und Interaktion |
| `orange` | `#fd8d58` | Highlights und Warnungen |

## Semantische Rollen

Die semantischen Tokens entkoppeln den Einsatzzweck vom konkreten Farbwert:

```css
color: var(--color-text-primary);
background: var(--color-bg-primary);
border-color: var(--color-accent-primary);
```

## Richtlinien

- Verwende semantische Tokens, wenn eine Farbrolle eindeutig ist.
- Grün kennzeichnet primäre Aktionen, Bestätigung und Interaktion.
- Orange wird für Highlights und Warnungen verwendet, nicht als längerer Text auf hellem Grund.
- Neue Farbabstufungen werden in der Skala ergänzt und nicht lokal in Anwendungen erfunden.
- Kontrastkritische Kombinationen werden mindestens gegen WCAG AA geprüft.