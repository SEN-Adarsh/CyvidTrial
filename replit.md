# CyVidya - Developer to AppSec Training Platform

## Overview

CyVidya is an interactive cybersecurity training platform designed to bridge the gap between software development and application security. Unlike traditional security platforms that use black-box approaches, CyVidya provides developers with full source code access to find vulnerabilities, exploit them in a terminal, and fix the actual code. The platform follows a "Find > Exploit > Fix" methodology that leverages developers' existing code-reading skills to make them job-ready for AppSec roles.

The application features a modern dark-themed interface with a split-view workspace for code analysis, an integrated terminal for exploitation, and a code editor for implementing fixes. Built with React and TypeScript on the frontend and Express.js on the backend, the platform offers a comprehensive learning environment with challenge-based progression, AI-assisted guidance, and real-time feedback.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server with hot module replacement
- Wouter for lightweight client-side routing (replacing React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Design System**
- Shadcn/ui component library with Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling with custom design tokens
- Dark theme as default following modern developer tool aesthetics (VS Code, GitHub Dark)
- Custom color system using CSS variables with HSL values for consistent theming
- Inter font for UI text and JetBrains Mono for code display

**Component Architecture**
- Page-based routing with three main routes: Home, Challenges list, and individual Challenge workspace
- Reusable UI components organized in `/components/ui` following Shadcn patterns
- Feature components in `/components` including ChallengeCard, CodeViewer, CodeEditor, TerminalPanel, ChatWidget
- Split-view and three-panel layouts for challenge workspaces (code viewer | terminal | editor)

**State Management Strategy**
- React Query for async state, caching, and server synchronization
- Local component state with useState for UI interactions
- No global state management library (Redux/Zustand) - keeping state co-located with components
- Custom hooks for reusable logic (useAutoScroll, useIsMobile, useToast)

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the REST API
- Custom middleware for request logging and JSON parsing
- Vite integration in development mode for seamless HMR and SSR support

**Data Layer**
- Storage interface pattern with in-memory implementation (MemStorage) for development
- Designed for easy swapping to persistent storage (Drizzle ORM ready)
- PostgreSQL schema defined using Drizzle ORM (currently not connected but configured)
- User authentication schema with username/password fields

**API Design**
- RESTful endpoints prefixed with `/api`
- Storage interface abstracts CRUD operations (getUser, getUserByUsername, createUser)
- Request/response logging with truncation for long responses
- Raw body preservation for webhook/payment integrations

**Development Server**
- Hot module replacement via Vite middleware in development
- Static file serving for production builds
- Custom error handling and logging system
- Replit-specific plugins for development tooling

### Data Storage Solutions

**Current Implementation**
- In-memory storage using JavaScript Maps for rapid prototyping
- User data stored with UUID primary keys generated via crypto.randomUUID()

**Configured for PostgreSQL**
- Drizzle ORM schema defined in `/shared/schema.ts`
- Connection setup for Neon serverless PostgreSQL via `@neondatabase/serverless`
- Migration system configured with `drizzle-kit` (migrations output to `/migrations`)
- Environment variable based configuration (`DATABASE_URL`)

**Schema Design**
- Users table with id (UUID), username (unique), and password fields
- Zod schemas for validation using `drizzle-zod` integration
- Type inference for TypeScript safety (InsertUser, User types)

**Database Strategy**
The platform is designed to start with in-memory storage and seamlessly migrate to PostgreSQL when persistence is needed. The storage interface pattern allows this transition without changing business logic.

### Authentication and Authorization

**Current State**
- User schema defined with username/password authentication fields
- No authentication middleware currently implemented
- Storage methods ready for user creation and retrieval

**Designed Architecture**
- Session-based authentication using `connect-pg-simple` for PostgreSQL session storage
- Express session middleware configured for credential-based authentication
- User passwords intended for hashing (bcrypt/argon2 implementation pending)

**Authorization Model**
- Challenge progression system (locked, available, in-progress, completed statuses)
- User progress tracking for completed challenges
- Role-based access (developer/learner role implied by user model)

### External Dependencies

**UI & Styling**
- Radix UI component primitives (@radix-ui/react-*) for accessible headless components
- Tailwind CSS with autoprefixer for cross-browser CSS compatibility
- Class Variance Authority (CVA) for type-safe component variants
- clsx and tailwind-merge for conditional className composition

**3D Graphics**
- Spline (@splinetool/react-spline, @splinetool/runtime) for 3D scene rendering on landing page
- Lazy loading implementation for performance optimization

**Development Tools**
- TypeScript for static typing across the entire codebase
- ESBuild for production server bundling
- Replit-specific plugins for development environment integration
- TSX for running TypeScript directly in development

**Data Fetching & Forms**
- TanStack Query for async state management and caching
- React Hook Form with Zod resolvers for form validation
- Date-fns for date manipulation and formatting

**Database & ORM**
- Drizzle ORM for type-safe database queries
- Neon serverless PostgreSQL driver for serverless database connections
- Drizzle-kit for migrations and schema management

**Icons**
- Lucide React for consistent icon system throughout the UI

**Chat/AI Assistant**
- Custom chat widget implementation (no external chat SDK)
- Mock AI responses (ready for integration with OpenAI/Anthropic APIs)