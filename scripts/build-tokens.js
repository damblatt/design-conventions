const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');
const colors = readJson('tokens/colors.json');
const borders = readJson('tokens/borders.json');

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
}

function resolveToken(reference, source) {
  if (!reference.startsWith('{') || !reference.endsWith('}')) {
    return reference;
  }

  const value = reference
    .slice(1, -1)
    .split('.')
    .reduce((current, key) => current[key], source);
  return typeof value === 'object' ? value.value : value;
}

function writeGenerated(relativePath, content) {
  const target = path.join(root, relativePath);
  const normalized = `${content.trim()}\n`;

  if (checkOnly) {
    const current = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : '';
    if (current !== normalized) {
      console.error(`${relativePath} is out of date. Run npm run build.`);
      process.exitCode = 1;
    }
    return;
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, normalized);
}

const primitiveColorNames = {
  lightBeige: 'light-beige',
  darkBeige: 'dark-beige',
  darkBrown: 'dark-brown',
  darkBrown80: 'dark-brown-80',
  green: 'green',
  green80: 'green-80',
  orange: 'orange',
};

const semanticColorNames = {
  textPrimary: 'text-primary',
  textSecondary: 'text-secondary',
  backgroundPrimary: 'bg-primary',
  backgroundSecondary: 'bg-secondary',
  accentPrimary: 'accent-primary',
  accentSecondary: 'accent-secondary',
};

const colorVariables = [
  '/* Generated from tokens/colors.json. Do not edit directly. */',
  ':root {',
  ...Object.entries(colors.primitive).flatMap(([name, token]) => [
    `  --color-${primitiveColorNames[name]}: ${token.value};`,
    `  --rgb-${primitiveColorNames[name]}: ${token.rgb};`,
  ]),
  '',
  ...Object.entries(colors.primitive).map(
    ([name]) => `  --color-primary-${primitiveColorNames[name]}: var(--color-${primitiveColorNames[name]});`,
  ),
  '',
  ...Object.entries(colors.semantic).map(
    ([name, value]) => `  --color-${semanticColorNames[name]}: ${resolveToken(value, colors)};`,
  ),
  '}',
].join('\n');

const borderVariables = [
  '/* Generated from tokens/borders.json. Do not edit directly. */',
  ':root {',
  ...Object.entries(borders.primitive.radius).map(([name, value]) => `  --radius-${name}: ${value};`),
  '',
  ...Object.entries(borders.primitive.width).map(([name, value]) => `  --border-width-${name}: ${value};`),
  '',
  ...Object.entries(borders.semantic.radius).map(
    ([name, value]) => `  --radius-${name}: ${resolveToken(value, borders)};`,
  ),
  ...Object.entries(borders.semantic.width).map(
    ([name, value]) => `  --border-width-${name}: ${resolveToken(value, borders)};`,
  ),
  '}',
].join('\n');

const tailwind = `/* Generated from tokens/*.json. Do not edit directly. */
export const designConventionColors = ${JSON.stringify(colors.scale, null, 2)} as const;

export const designConventionBorders = {
  borderRadius: ${JSON.stringify({ ...borders.primitive.radius, ...Object.fromEntries(Object.entries(borders.semantic.radius).map(([name, value]) => [name, resolveToken(value, borders)])) }, null, 2)},
  borderWidth: ${JSON.stringify({ ...borders.primitive.width, ...Object.fromEntries(Object.entries(borders.semantic.width).map(([name, value]) => [name, resolveToken(value, borders)])) }, null, 2)},
} as const;

// Backward-compatible export names.
export const visualKitColors = designConventionColors;
export const visualKitBorders = {
  borderRadius: ${JSON.stringify(Object.fromEntries(Object.entries(borders.semantic.radius).map(([name, value]) => [name, resolveToken(value, borders)])), null, 2)},
  borderWidth: ${JSON.stringify(Object.fromEntries(Object.entries(borders.semantic.width).map(([name, value]) => [name, resolveToken(value, borders)])), null, 2)},
} as const;
`;

const legacyColors = {
  projectName: 'Butterkeks Design Conventions',
  description: colors.$description,
  colors: {
    primary: Object.fromEntries(
      Object.entries(colors.primitive).map(([name, token]) => [
        primitiveColorNames[name],
        {
          hex: token.hex ?? token.value,
          rgb: token.rgb,
          hsl: token.hsl,
          ...(token.value.startsWith('rgba') ? { rgba: token.value } : {}),
          usage: token.usage,
          name,
        },
      ]),
    ),
  },
};

writeGenerated('css/colors.css', colorVariables);
writeGenerated('css/borders.css', borderVariables);
writeGenerated('integrations/tailwind.ts', tailwind);
writeGenerated('color-palette.json', JSON.stringify(legacyColors, null, 2));

if (!checkOnly) {
  console.log('Generated CSS, Tailwind and legacy color outputs.');
}