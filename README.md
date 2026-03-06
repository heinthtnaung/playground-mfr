# Vite & Turborepo Micro Frontend Setup

This repository contains a modern Micro Frontend (MFE) architecture built with **Turborepo**, **Vite**, **Tailwind CSS**, and **Vanilla Javascript / DOM APIs**.

## 🏗 Architecture Overview

The system utilizes `vite-plugin-federation` to seamlessly bundle and share ESM modules across independent applications.

- **`app/host`** (Port: `5000`): The primary container application that dynamically consumes the components exposed by `feature-a` and `feature-b`.
- **`app/feature-a`** (Port: `5001`): A standalone Vite application exposing `TestComponentA`.
- **`app/feature-b`** (Port: `5002`): A standalone Vite application exposing `TestComponentB`.
- **`packages/ui`**: A shared library containing reusable UI components (`createSharedButton`, `createSharedCard`) and a unified base Tailwind configuration.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies across all workspaces using npm:
   ```bash
   npm install
   ```

### Running Locally

To build and start all applications simultaneously, Turborepo will orchestrate the execution:

1. Build the applications first (this generates the shared modules):

   ```bash
   npm run build
   ```

2. Start the development servers:
   ```bash
   npm run dev
   ```

The applications will be accessible at:

- **Host / Dashboard**: http://localhost:5000
- **Feature A**: http://localhost:5001
- **Feature B**: http://localhost:5002

## 🎨 Styling

We use Tailwind CSS. The configuration is housed centrally in `packages/ui/tailwind.config.js`. Each application extends this centralized configuration, ensuring design tokens, colors, and global styles remain consistent across every micro frontend.

## 🛠 Commands

We utilize Turborepo to efficiently run tasks across the workspace.

- `npm run dev`: Starts the development servers for all apps.
- `npm run build`: Builds all apps and packages.
- `npm run lint`: Runs ESLint / Turbo lint across the codebase (if configured).
- `npm run format`: Formats code utilizing Prettier.
