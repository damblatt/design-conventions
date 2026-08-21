# Border-System

Die Quelldatei für alle Border-Tokens ist `tokens/borders.json`. CSS und Tailwind werden daraus mit `npm run build` erzeugt.

## Border-Radien

| Primitive | Semantischer Token | Wert | Verwendung |
|-----------|--------------------|------|------------|
| `radius.sm` | `radius.control` | `6px` | Inputs, Selects, Buttons und kompakte Listeneinträge |
| `radius.md` | `radius.surface` | `8px` | Codeblöcke und verschachtelte Inhaltsflächen |
| `radius.lg` | `radius.container` | `10px` | Cards, Panels und Infoboxen |
| `radius.full` | `radius.round` | `50%` | Runde Icon-Container und Statusindikatoren |

## Konturstärken

| Primitive | Semantischer Token | Wert | Verwendung |
|-----------|--------------------|------|------------|
| `width.thin` | `width.default` | `1px` | Controls, Cards und Trennlinien |
| `width.medium` | `width.emphasis` | `1.5px` | Kleine umrandete Icons und Indikatoren |
| `width.thick` | `width.accent` | `3px` | Akzentkante an hervorgehobenen Containern |

## Richtlinien

- Primitive Tokens beschreiben die Skala; semantische Tokens beschreiben den Einsatzzweck.
- Controls innerhalb eines Containers verwenden einen kleineren Radius als der Container.
- `1px` ist die Standardkontur. Stärkere Konturen markieren eine bewusste Hervorhebung.
- Eine `3px`-Akzentkante wird mit einer `1px`-Standardkontur am übrigen Container kombiniert.
- `50%` ist Elementen mit gleicher Breite und Höhe vorbehalten.