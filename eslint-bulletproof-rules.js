// ESLint rules to enforce bulletproof-react architecture
// Add these rules to your .eslintrc.js file

module.exports = {
  rules: {
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          // Prevent cross-feature imports
          {
            target: './app/features/speakers',
            from: './app/features',
            except: ['./speakers'],
          },
          {
            target: './app/features/reviews',
            from: './app/features',
            except: ['./reviews'],
          },
          {
            target: './app/features/sessions',
            from: './app/features',
            except: ['./sessions'],
          },

          // Enforce unidirectional codebase architecture
          // Features cannot import from app
          {
            target: './app/features',
            from: './app/routes',
          },

          // Shared modules cannot import from features or app
          {
            target: [
              './app/components',
              './app/hooks',
              './app/lib',
              './app/types',
              './app/utils',
              './app/api',
              './app/config',
            ],
            from: ['./app/features', './app/routes'],
          },
        ],
      },
    ],
  },
};
