/**
 * Tailwind CSS Color Configuration for Visual Kit
 * 
 * Usage:
 * 1. Copy this configuration
 * 2. Import it in your tailwind.config.ts
 * 3. Merge it with your existing theme configuration
 * 
 * Example in your tailwind.config.ts:
 * import { visualKitColors } from './tailwind-colors.config';
 * 
 * export default {
 *   theme: {
 *     extend: {
 *       colors: visualKitColors,
 *     },
 *   },
 * };
 */

export const visualKitColors = {
  'beige': {
    '50': '#faf8f4',
    '100': '#f5f0e6',  // Primary light beige
    '200': '#efe7d5',
    '300': '#e8dcc3',
    '400': '#e0d3b7',  // Primary dark beige
    '500': '#d4c4a8',
    '600': '#b8a883',
    '700': '#9d8d5e',
    '800': '#6b6342',
    '900': '#3c3830',  // Primary dark brown
  },
  'green': {
    '50': '#e8f7f4',
    '100': '#d1efe8',
    '200': '#a3dfd1',
    '300': '#75cfba',
    '400': '#47bfa3',
    '500': '#1aaf8c',
    '600': '#009175',  // Primary green
    '700': '#007a62',
    '800': '#005c4a',
    '900': '#003d32',
  },
  'orange': {
    '50': '#fff9f5',
    '100': '#fef3eb',
    '200': '#fdd9c1',
    '300': '#fcbf97',
    '400': '#fba56d',
    '500': '#fd8d58',  // Primary orange
    '600': '#f87040',
    '700': '#d9532f',
    '800': '#b03820',
    '900': '#882d1a',
  },
  'neutral': {
    '50': '#f9f8f6',
    '100': '#f5f0e6',
    '200': '#e8dcc3',
    '300': '#d4c4a8',
    '400': '#b8a883',
    '500': '#9d8d5e',
    '600': '#6b6342',
    '700': '#3c3830',
    '800': '#2a2623',
    '900': '#1a1815',
  },
};

/**
 * Color System Overview:
 * 
 * Primary Colors:
 * - Beige (Light): #f5f0e6 - Main background
 * - Beige (Dark): #e0d3b7 - Secondary backgrounds
 * - Brown (Dark): #3c3830 - Primary text
 * 
 * Accent Colors:
 * - Green: #009175 - Primary CTAs, interactive elements
 * - Orange: #fd8d58 - Secondary accent, highlights
 * 
 * Semantic Meanings:
 * - Beige tones: Neutral, comfortable, clean
 * - Brown: Authority, text-focused
 * - Green: Action, growth, interaction
 * - Orange: Energy, highlights, warnings
 */
