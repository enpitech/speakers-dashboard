// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import { globalIgnores } from 'eslint/config'

export default [globalIgnores([
  '.nitro',
  '.output',
  '.vinxi',
  '.wrangler',
  '.tanstack',
  '.env',
  '.env.local',
  '.env.development',
  '.env.production',
  '**/*.config.js',
]), ...tanstackConfig, {
  rules: {
    '@typescript-eslint/array-type': 'off',
    'no-console': 'warn',
  },

}, ...storybook.configs["flat/recommended"]];
