# Sumit Keshari - Software Engineer Portfolio

A modern, responsive personal portfolio built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Live Demo
Currently hosted at: [https://kesharisumit.github.io/portfolio/](https://kesharisumit.github.io/portfolio/)

*(Pending custom domain: `https://sumitkeshari.is-a.dev`)*

## Features
- **Dynamic LeetCode Heatmap**: Uses a custom API to fetch and render a real-time GitHub-style activity calendar for LeetCode submissions.
- **Projects Section**: Showcases advanced backend and full-stack projects, including a Custom Redis Server and a POSIX Shell.
- **Responsive Design**: Mobile-first styling utilizing Tailwind CSS for a clean UI on any device.
- **Lightning Fast**: Built with Astro for zero-JS-by-default performance and rapid loading.

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   *The site will be available locally at `http://localhost:4321`.*

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment
This project is configured to deploy automatically to GitHub Pages via GitHub Actions whenever changes are pushed to the `main` branch.