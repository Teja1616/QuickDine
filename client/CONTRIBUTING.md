# Contributing to QuickDine Frontend

First off, thank you for considering contributing to QuickDine! It is people like you who make open source such a wonderful ecosystem.

## How Can I Contribute?

### Reporting Bugs

- **Search first**: Check the existing issues to see if the bug has already been reported.
- **Provide details**: If you find a new bug, open an issue. Include a clear title, steps to reproduce, what you expected to happen, what actually happened, and relevant screenshots if applicable.

### Suggesting Enhancements

- Open an issue explaining your suggestion, how it benefits the project, and any proposed implementation details.

### Submitting Pull Requests

1. **Fork the Repository**: Create your own copy of the project.
2. **Create a Branch**: Create a feature branch off of the `main` branch. Use a descriptive name (e.g., `feature/add-dark-mode` or `bugfix/fix-slot-selection`).
3. **Write Code**:
   - Adhere to the project's styling and structure standards.
   - Run the linting check: `npm run lint`
   - Test your changes to make sure nothing is broken.
4. **Commit Changes**: Use clear and descriptive commit messages.
5. **Push & PR**: Push changes to your fork and submit a Pull Request (PR) to the `main` branch of the official repository.

## Development Guidelines

### Code Style & Linting

- We use **TypeScript** for type-safety. Avoid using `any` types where possible.
- We use **Tailwind CSS v4** for styling. Keep styling consistent with the existing layout patterns.
- Run `npm run lint` to verify eslint rules pass before committing.

### Component Structure

- Place modular/reusable UI blocks under `src/components/`.
- Keep page-level components under `src/pages/`.
- Ensure files use the `.tsx` extension for React components and `.ts` for pure TypeScript logic files.
