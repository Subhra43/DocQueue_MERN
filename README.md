# DocQueue

DocQueue is a MERN-based appointment and queue management system with real-time updates, notifications, and an admin dashboard.

## Tech stack
- Backend: Node.js, Express, TypeScript, MongoDB, Socket.IO
- Frontend: React (Vite), TypeScript, Tailwind CSS

## Project structure
- backend/ - API server and real-time services
- frontend/ - web client
- doc/ - detailed project documentation

## Prerequisites
- Node.js 18+ and npm
- MongoDB (local or cloud)

## Setup
1. Clone the repo and install dependencies:
   - backend: `npm i`
   - frontend: `npm i`
2. Configure environment variables:
   - backend/.env (see doc/PROJECT_DOCUMENTATION.md for required values)
3. Start the apps:
   - backend: `npm run dev`
   - frontend: `npm run dev`

## Scripts
### Backend
- `npm run dev` - run API server with hot reload
- `npm run build` - compile TypeScript
- `npm start` - run compiled server

### Frontend
- `npm run dev` - start Vite dev server
- `npm run build` - build production assets
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Documentation
- doc/PROJECT_DOCUMENTATION.md
- doc/FRONTEND_DOCUMENTATION.md
- doc/PROJECT_DETAILS.md
- doc/walkthrough.md
