/* Generated from tokens/*.json. Do not edit directly. */
export const designConventionColors = {
  "beige": {
    "50": "#faf8f4",
    "100": "#f5f0e6",
    "200": "#efe7d5",
    "300": "#e8dcc3",
    "400": "#e0d3b7",
    "500": "#d4c4a8",
    "600": "#b8a883",
    "700": "#9d8d5e",
    "800": "#6b6342",
    "900": "#3c3830"
  },
  "green": {
    "50": "#e8f7f4",
    "100": "#d1efe8",
    "200": "#a3dfd1",
    "300": "#75cfba",
    "400": "#47bfa3",
    "500": "#1aaf8c",
    "600": "#009175",
    "700": "#007a62",
    "800": "#005c4a",
    "900": "#003d32"
  },
  "orange": {
    "50": "#fff9f5",
    "100": "#fef3eb",
    "200": "#fdd9c1",
    "300": "#fcbf97",
    "400": "#fba56d",
    "500": "#fd8d58",
    "600": "#f87040",
    "700": "#d9532f",
    "800": "#b03820",
    "900": "#882d1a"
  },
  "neutral": {
    "50": "#f9f8f6",
    "100": "#f5f0e6",
    "200": "#e8dcc3",
    "300": "#d4c4a8",
    "400": "#b8a883",
    "500": "#9d8d5e",
    "600": "#6b6342",
    "700": "#3c3830",
    "800": "#2a2623",
    "900": "#1a1815"
  }
} as const;

export const designConventionBorders = {
  borderRadius: {
  "sm": "6px",
  "md": "8px",
  "lg": "10px",
  "full": "50%",
  "control": "6px",
  "surface": "8px",
  "container": "10px",
  "round": "50%"
},
  borderWidth: {
  "thin": "1px",
  "medium": "1.5px",
  "thick": "3px",
  "default": "1px",
  "emphasis": "1.5px",
  "accent": "3px"
},
} as const;

// Backward-compatible export names.
export const visualKitColors = designConventionColors;
export const visualKitBorders = {
  borderRadius: {
  "control": "6px",
  "surface": "8px",
  "container": "10px",
  "round": "50%"
},
  borderWidth: {
  "default": "1px",
  "emphasis": "1.5px",
  "accent": "3px"
},
} as const;
