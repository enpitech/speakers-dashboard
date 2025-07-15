# Frontendistim Speakers Board

A modern, scalable platform for managing and discovering speakers for frontend events. Built with React Router v7 framework mode and following bulletproof-react architecture principles.

## Features

- 🚀 Server-side rendering with React Router v7
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization with Vite
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 Tailwind CSS v4 for styling
- 🏗️ **Bulletproof-React Architecture** for scalability
- � **Speaker Management** - Register, browse, and manage speaker profiles
- ⭐ **Review System** - Rate and review speakers and sessions
- 📅 **Session Management** - Organize and track conference sessions
- 🌐 **Internationalization** support (EN/HE)
- 📱 **Responsive Design** with modern UI components

## Architecture

This project follows the **[bulletproof-react](https://github.com/alan2207/bulletproof-react)** methodology for building scalable React applications with clean architecture and clear separation of concerns.

## 📁 Project Structure

```
app/
├── api/                    # Global API client and utilities
│   └── client.ts          # Base HTTP client with error handling
├── components/            # Shared components used across features
│   ├── ui/               # Generic UI components (Button, Dialog, etc.)
│   └── layout/           # Layout components (Sidebar, Header, etc.)
├── config/               # Application configuration
│   └── index.ts          # Environment variables and app settings
├── features/             # Feature-based modules (core of the app)
│   ├── speakers/         # 👥 Speaker management feature
│   │   ├── api/         # Speaker-specific API calls
│   │   ├── components/  # Speaker UI components
│   │   ├── types/       # Speaker-related TypeScript types
│   │   └── index.ts     # Feature exports
│   ├── reviews/         # ⭐ Review and rating system
│   │   ├── api/         # Review-specific API calls
│   │   ├── components/  # Review UI components
│   │   └── index.ts     # Feature exports
│   └── sessions/        # 📅 Session management
│       ├── components/  # Session UI components
│       └── index.ts     # Feature exports
├── hooks/               # Shared custom hooks
│   └── index.ts         # useAsync, useLocalStorage, useToggle
├── lib/                 # Reusable utilities and libraries
│   └── cn.ts           # Tailwind className utility
├── routes/             # React Router v7 file-based routing
├── translations/       # Internationalization files (EN/HE)
├── types/              # Global TypeScript type definitions
├── utils/              # Shared utility functions
└── welcome/            # Welcome page assets
```

### Architecture Principles

#### 🎯 **Feature-Based Organization**

Each major functionality is organized as a self-contained feature:

- **Speakers**: Registration, profiles, listing, search and filtering
- **Reviews**: Rating system, feedback, review management
- **Sessions**: Conference session scheduling and management

#### 🔄 **Unidirectional Data Flow**

```
Shared (components, hooks, lib, types, utils)
  ↓
Features (speakers, reviews, sessions)
  ↓
App (routes, main application)
```

#### 🚫 **No Cross-Feature Imports**

- Features cannot import from other features
- Features compose at the application/route level
- Ensures loose coupling and independent development

#### 📦 **Component Hierarchy**

- **`/components/ui`**: Reusable UI primitives (Button, Card, Dialog)
- **`/components/layout`**: Application layout components
- **`/features/*/components`**: Feature-specific components
- **Storybook Integration**: All UI components documented and tested

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or bun

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Storybook (Component Documentation)

Start Storybook to view and develop UI components in isolation:

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`.

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## Code Quality & Linting

### ESLint Configuration

This project includes custom ESLint rules to enforce bulletproof-react architecture:

```bash
# The project includes eslint-bulletproof-rules.js which prevents:
# - Cross-feature imports
# - Reverse dependency violations
# - Import violations against unidirectional architecture
```

Add these rules to your `.eslintrc.js` to enforce architectural boundaries.

## 🤝 Contributing

This project follows bulletproof-react principles to ensure consistent, scalable code. When contributing:

### For New Contributors

1. **Read the Architecture**: Review `PROJECT_STRUCTURE.md` for detailed guidelines
2. **Follow the Patterns**: Look at existing features (`speakers`, `reviews`, `sessions`) as examples
3. **No Cross-Feature Imports**: Features should be independent
4. **Use TypeScript**: All new code should be properly typed
5. **Component Stories**: Add Storybook stories for new UI components

### Pull Request Guidelines

1. **Feature Branch**: Create a branch from `main`
2. **Atomic Commits**: Keep commits focused and descriptive
3. **Test Your Changes**: Ensure `npm run typecheck` passes
4. **Follow Architecture**: Respect the feature-based organization
5. **Update Documentation**: Add or update relevant documentation

### File Placement Guide

- **New shared component** → `app/components/ui/`
- **New speaker feature** → `app/features/speakers/`
- **New API endpoint** → `app/features/[feature]/api/`
- **New utility function** → `app/lib/` or `app/utils/`
- **New custom hook** → `app/hooks/`
- **New route** → `app/routes/`

### Questions?

- Check existing patterns in the codebase
- Review `PROJECT_STRUCTURE.md` for detailed architecture guidelines
- Look at bulletproof-react documentation: https://github.com/alan2207/bulletproof-react

---

Built with ❤️ using React Router.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This project uses [Tailwind CSS v4](https://tailwindcss.com/) with the following approach:

- **Design System**: Consistent spacing, colors, and typography
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Component Styling**: Co-located styles using Tailwind classes
- **Custom Utilities**: Additional utilities in `app/lib/cn.ts` for conditional classes

### UI Component Library

The project includes a custom UI component library in `app/components/ui/`:

- **Button** - Various sizes, variants, and states
- **Card** - Content containers with consistent spacing
- **Dialog** - Modal and overlay components
- **Form** - Input components with validation styling
- **Table** - Data display components
- **Tabs** - Navigation and content organization

All components are documented in Storybook with examples and API documentation.

## 📚 Additional Resources

- **[React Router v7 Docs](https://reactrouter.com/)** - Routing and data loading
- **[Bulletproof React](https://github.com/alan2207/bulletproof-react)** - Architecture methodology
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Storybook](https://storybook.js.org/)** - Component documentation

---

Built with ❤️ for the Frontend Istanbul community using React Router and bulletproof-react architecture.
