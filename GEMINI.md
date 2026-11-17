# GEMINI PROJECT INSTRUCTIONS

## 1. Project Information

Project: Bangunan  
Backend: Laravel 13  
PHP: 8.3  
Frontend: React JSX  
Bridge: Inertia.js  
Build Tool: Vite  
CSS Framework: Tailwind CSS 4  
Package Manager: NPM  
Database: MySQL / MariaDB  
Local Environment: Laragon  
IDE: Visual Studio Code

## 2. Technology Rules

- Use Laravel as the primary backend.
- Use React with JavaScript JSX.
- Use Inertia.js for communication between Laravel and React.
- Use Vite for asset bundling.
- Use Tailwind CSS 4 for styling.
- Use NPM, never Yarn.
- Do not use TypeScript or TSX.
- Do not create a separate frontend application.
- Do not introduce unnecessary REST APIs.
- Use Laravel Controllers, Models, Routes, and Migrations appropriately.

## 3. React Rules

- Use functional components.
- Use React Hooks when necessary.
- Use JSX files with .jsx extension.
- Keep components reusable.
- Separate Pages, Components, and Layouts.
- Avoid unnecessarily large components.
- Use consistent naming conventions.
- Use lucide-react for icons if installed.

## 4. Laravel Rules

- Follow Laravel conventions.
- Use Eloquent ORM for database operations.
- Use Form Request for complex validation.
- Use Middleware for access control.
- Keep controllers clean and focused.
- Never put complex business logic directly inside routes.
- Use database migrations for schema changes.
- Avoid raw SQL unless necessary.

## 5. UI/UX Design Rules

- Create professional, modern, production-quality interfaces.
- Use consistent spacing, typography, colors, and border radius.
- Ensure all content is properly aligned.
- Prevent text overlapping and overflowing.
- Use responsive layouts for desktop, tablet, and mobile.
- Use clear visual hierarchy.
- Avoid excessive gradients, shadows, and decorative elements.
- Design loading, empty, error, and success states.
- Ensure buttons, forms, navigation, and interactive elements work.

## 6. Coding Workflow

Before modifying files:

1. Inspect the existing project structure.
2. Read relevant files.
3. Understand existing dependencies and conventions.
4. Explain the implementation plan.
5. Identify which files will be modified.

When implementing:

1. Modify only relevant files.
2. Reuse existing components where possible.
3. Do not duplicate existing functionality.
4. Do not overwrite working configurations unnecessarily.
5. Preserve existing features.
6. Install dependencies only when necessary.

After implementing:

1. Check for syntax errors.
2. Run relevant Laravel checks.
3. Run npm build when appropriate.
4. Verify route and component consistency.
5. Report all modified files.
6. Explain any remaining manual steps.

## 7. Safety Rules

- Never delete files without permission.
- Never modify .env without explicit permission.
- Never expose credentials, API keys, passwords, or database secrets.
- Never run destructive database commands without permission.
- Never reset or drop the database without permission.
- Never replace major dependencies without explaining the impact.
- Ask before performing potentially destructive operations.

## 8. Communication

- Communicate in Indonesian.
- Explain technical decisions clearly.
- Report errors honestly.
- Do not claim tests passed unless they were actually executed.
- Prefer complete implementations over incomplete code snippets.
