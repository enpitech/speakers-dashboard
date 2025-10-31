//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import { globalIgnores } from 'eslint/config'

export default [
  globalIgnores([
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
  ]),
  ...tanstackConfig,
  {
    rules: {
      '@typescript-eslint/array-type': 'off',
      'no-console': 'warn',
    },

  },
]
