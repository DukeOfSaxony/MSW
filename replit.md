# Michael's Shoe Repair - Brooklyn

## Overview

Michael's Shoe Repair is a local business website for a 30-year-old cobbler shop located at 319 Smith Street in Carroll Gardens, Brooklyn. The application serves as a digital presence for the business, providing information about services, pricing, and a contact form for customer inquiries. The site showcases shoe repair, watch repair, and jewelry repair services with an emphasis on traditional craftsmanship.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing
- React Query (@tanstack/react-query) for server state management

**UI Components & Styling**
- shadcn/ui component library with Radix UI primitives for accessible, unstyled components
- Tailwind CSS v4 (via @tailwindcss/vite) for utility-first styling
- Custom design system with "New York" style variant
- CSS variables for theming (light/dark mode support)
- IBM Plex Sans and Inter fonts for typography

**Project Structure**
- `client/src/` - React application source
- `client/src/components/` - Reusable UI components (Header, Footer, Hero, Contact, etc.)
- `client/src/pages/` - Route-level page components
- `client/src/hooks/` - Custom React hooks
- `client/public/` - Static assets and success pages

**Key Design Patterns**
- Intersection Observer API for scroll-based animations
- Custom hooks for animation observers and mobile detection
- Component composition with shadcn/ui patterns
- Form validation with @hookform/resolvers and Zod

### Backend Architecture

**Server Framework**
- Express.js server handling API routes and serving the SPA
- Custom Vite middleware integration for development HMR
- HTTP server created via Node's `http` module for potential WebSocket support

**API Structure**
- RESTful endpoints under `/api` prefix
- Health check endpoint at `/api/health`
- Contact form endpoint at `/api/contact` (Express) and `/api/send` (Vercel serverless)
- Separate serverless functions in `/api` directory for Vercel deployment

**Development vs Production**
- Development: Vite dev server with middleware mode
- Production: Pre-built static assets served by Express, serverless functions on Vercel
- Environment-specific configuration via `NODE_ENV`

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured for PostgreSQL with Neon serverless driver (@neondatabase/serverless)
- Schema defined in `shared/schema.ts` with users table (includes id, username, password)
- Migration support via drizzle-kit with migrations stored in `/migrations`
- Connection via `DATABASE_URL` environment variable

**In-Memory Storage**
- `MemStorage` class in `server/storage.ts` provides in-memory user storage for development
- Implements methods: `getUser`, `getUserByUsername`, `createUser`
- Note: Database is configured but not actively used; current implementation uses memory storage

### Authentication and Authorization

**Current State**
- User schema exists with username/password fields
- No active authentication implementation in the codebase
- Session management dependencies present (connect-pg-simple) but not implemented
- This appears to be boilerplate infrastructure not used by the shoe repair business application

### External Dependencies

**Email Service**
- SendGrid (@sendgrid/mail) for transactional emails
- API key via `SENDGRID_API_KEY` environment variable
- Email utility in `server/utils/email.ts` with initialization and sending functions
- Contact form submissions sent to `jdavydov@gmail.com` from `website@michaelsshoecraft.com`

**Deployment Platforms**
- Vercel as primary deployment target with serverless functions
- Netlify configuration present (.netlify directory, form detection in HTML)
- Dual deployment strategy: Vercel for serverless APIs, potential Netlify for forms

**Third-Party Services**
- Google Fonts (IBM Plex Sans, Inter, custom compressed fonts)
- Replit development environment integration (runtime error overlay, cartographer plugin)

**Key Environment Variables**
- `DATABASE_URL` - PostgreSQL connection string (Neon)
- `SENDGRID_API_KEY` - Email service authentication
- `NODE_ENV` - Environment detection (development/production)
- `VERCEL` / `VERCEL_ENV` / `VERCEL_REGION` - Vercel platform detection

**Build & Deploy**
- `npm run build` - Compiles frontend (Vite) and backend (esbuild) to `dist/`
- `npm run dev` - Development server with tsx for TypeScript execution
- `npm start` - Production server from compiled dist
- Custom `index.js` for Vercel routing to handle SPA with API routes

**Form Handling Strategy**
- Dual approach: Netlify Forms (native) and SendGrid API (Vercel)
- Hidden form in HTML for Netlify form detection at build time
- JavaScript submission with fetch API for Vercel serverless function
- Environment detection to choose appropriate submission method