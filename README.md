# Aayushi Waghela Portfolio

A modern personal portfolio website built with **React, TypeScript, and Vite** to showcase experience, projects, technical skills, and academic background.

## Overview

This portfolio is a single-page web application designed to present:

- Professional experience
- Featured projects
- Technical skills
- Education
- Contact information

The site uses a clean responsive layout with animated UI components, interactive sections, and a polished developer-focused design.

## Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Motion**
- **Lucide React**

## Features

- Responsive portfolio layout
- Animated splash screen
- Interactive navigation bar
- Featured projects section
- Skills and education section
- Smooth modern UI styling
- Easy-to-update resume data from a central file

## Project Structure

```bash
src/
  components/      # Reusable UI components
  data/            # Resume and portfolio content
  lib/             # Utility functions
  context/         # Theme or shared state
public/            # Static assets
```

## Getting Started

### Prerequisites

Make sure you have installed:

- **Node.js**
- **npm**

### Installation

Clone the repository or unzip the project folder, then run:

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

This will start the app locally, usually at:

```bash
http://localhost:5173
```

## Build for Production

To generate an optimized production build:

```bash
npm run build
```

The production files will be created in the `dist/` folder.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project can be deployed easily on platforms like:

- **Vercel**
- **Netlify**

### Recommended Vercel Settings

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## Customization

Most portfolio content can be updated from:

```bash
src/data/resume.ts
```

You can edit this file to update:

- Name
- About section
- Experience
- Projects
- Skills
- Education
- Links
