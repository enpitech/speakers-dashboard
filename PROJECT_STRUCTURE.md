# Project Structure

This project follows the **bulletproof-react** methodology for organizing React applications. This approach ensures scalability, maintainability, and clear separation of concerns.

## 📁 Folder Structure

```
app/
├── api/                    # API client and global API utilities
│   └── client.ts          # Base API client configuration
├── components/            # Shared components used across the entire application
│   ├── ui/               # Generic UI components (buttons, modals, etc.)
│   └── layout/           # Layout-specific components (sidebar, header, etc.)
├── config/               # Global configurations and environment variables
│   └── index.ts          # Application configuration
├── features/             # Feature-based modules
│   ├── speakers/         # Speaker management feature
│   │   ├── api/         # Speaker-specific API calls
│   │   ├── components/  # Speaker-specific components
│   │   ├── types/       # Speaker-specific TypeScript types
│   │   └── index.ts     # Feature exports
│   ├── reviews/         # Review management feature
│   │   ├── api/         # Review-specific API calls
│   │   ├── components/  # Review-specific components
│   │   └── index.ts     # Feature exports
│   └── sessions/        # Session management feature
│       ├── components/  # Session-specific components
│       └── index.ts     # Feature exports
├── hooks/               # Shared hooks used across the entire application
│   └── index.ts         # Common hooks (useAsync, useLocalStorage, etc.)
├── lib/                 # Reusable libraries preconfigured for the application
│   └── cn.ts           # Utility for conditional className joining
├── routes/             # Application routes (React Router v7)
├── translations/       # Internationalization files
├── types/              # Shared TypeScript types
│   └── index.ts        # Global type definitions
├── utils/              # Shared utility functions
└── welcome/            # Welcome page assets and components
```

## 🎯 Architecture Principles

### Feature-Based Organization

- **Speakers**: All speaker-related functionality (listing, profiles, registration)
- **Reviews**: Review system for speakers and sessions
- **Sessions**: Session management and scheduling

### Unidirectional Code Flow

```
shared (components, hooks, lib, types, utils)
  ↓
features (speakers, reviews, sessions)
  ↓
app (routes, main app components)
```

### No Cross-Feature Imports

- Features should not import from other features
- Compose different features at the application level
- This ensures features remain independent and loosely coupled

## 📦 Component Organization

### Shared Components (`/components`)

- **UI Components** (`/components/ui`): Reusable UI elements like buttons, modals, forms
- **Layout Components** (`/components/layout`): Application layout components

### Feature Components (`/features/*/components`)

- Components specific to each feature
- Should not be imported by other features
- Examples: `SpeakerPageHeader`, `ReviewCard`, `SessionsList`

## 🔧 API Layer

### Global API Client (`/api/client.ts`)

- Centralized HTTP client configuration
- Request/response interceptors
- Error handling

### Feature APIs (`/features/*/api`)

- Feature-specific API functions
- Uses the global API client
- Type-safe request/response handling

## 📝 Type Safety

### Global Types (`/types/index.ts`)

- Shared interfaces and types
- API response types
- Common data structures

### Feature Types (`/features/*/types`)

- Feature-specific type definitions
- Extends or composes global types as needed

## 🎣 Custom Hooks

### Shared Hooks (`/hooks/index.ts`)

- `useAsync`: For managing async operations
- `useLocalStorage`: For persistent local state
- `useToggle`: For boolean state management

### Feature Hooks (`/features/*/hooks`)

- Feature-specific custom hooks
- Business logic encapsulation

## 🚀 Getting Started

### Development

```bash
npm run dev
```

### Building

```bash
npm run build
```

### Type Checking

```bash
npm run typecheck
```

## 📚 Best Practices

1. **Import Directly**: Avoid barrel exports that can cause bundling issues
2. **Feature Independence**: Don't import across features
3. **Compose at App Level**: Combine features in routes and main app components
4. **Type Everything**: Use TypeScript for better developer experience
5. **Consistent Naming**: Follow established naming conventions
6. **Small Components**: Keep components focused and composable

## 🔍 Finding Files

- **Speaker functionality**: `app/features/speakers/`
- **Review functionality**: `app/features/reviews/`
- **Session functionality**: `app/features/sessions/`
- **Shared UI components**: `app/components/ui/`
- **Global utilities**: `app/lib/`, `app/hooks/`, `app/utils/`
- **Type definitions**: `app/types/`
- **API functions**: `app/api/` and `app/features/*/api/`

This structure supports the growth of your application while maintaining clean boundaries and making it easy for new developers to understand and contribute to the codebase.
