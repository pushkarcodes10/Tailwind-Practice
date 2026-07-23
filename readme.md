# Tailwind CSS & Vanilla CSS Practice Projects

Welcome to the **Tailwind Practice** workspace. This repository serves as a dedicated environment for practicing modern web layouts, responsive design, and CSS configuration strategies—ranging from utility-first Tailwind CSS v4 styling to structured Vanilla CSS integrations.

---

## 📁 Repository Overview

This repository contains four independent Next.js projects, each exploring different styling methodologies:

1. **[`vanilaCSS`](./vanilaCSS)**: A hybrid approach using Next.js, React 19, and Tailwind CSS v4, combining Tailwind utility classes with custom traditional Vanilla CSS modules for layout structures and styling.
2. **[`landing-page`](./landing-page)**: A dark-themed waitlist landing page focusing on Tailwind v4 configuration, including custom `@theme` declarations, gradient text styling, interactive forms, and decorative ambient border glows.
3. **[`tailwind-practice`](./tailwind-practice)**: A layout practicing workspace emphasizing typography integrations (such as custom Google Fonts), custom Tailwind sizing options, line heights, and micro-interactions.
4. **[`responsive-design`](./responsive-design)**: A workspace dedicated to building responsive interfaces and modern design patterns, incorporating custom shadows (e.g., Aceternity UI-inspired) and flexible component layouts.

---

## 🚀 Projects & Key Learnings

### 1. Hybrid Vanilla CSS (`vanilaCSS`)
A premium landing page for a modern fintech startup showcasing semantic styling control.
* **Core Concepts**: Combining utility classes with structured class definitions to manage complex structures.
* **Key Components**:
  * [Navbar](./vanilaCSS/src/components/navbar.tsx): A clean, interactive top-navigation bar.
  * [Hero](./vanilaCSS/src/components/hero.tsx): A startup hero section with dual CTA buttons and clean layout grids.
  * [Container](./vanilaCSS/src/components/container.tsx): A layout wrapper enforcing consistent page alignment.
* **Styling**: Managed via [globals.css](./vanilaCSS/src/app/globals.css) using traditional styling overrides.

### 2. Waitlist Landing Page (`landing-page`)
A high-fidelity landing page with theme customization.
* **Core Concepts**: Custom Tailwind v4 colors configured directly in the CSS file.
* **Key Features**:
  * **Theme Customization**: Leverages Tailwind v4's direct `@theme` utility to declare custom colors (e.g., custom primary using `oklch`).
  * **Ambient Glow Borders**: Uses absolute gradient lines (`bg-linear-to-r` from transparent via primary to transparent) to create modern interactive inputs.
  * **Gradients**: Employs text background clipping and gradient fades (`bg-clip-text` with `bg-linear-to-b`).
* **Key Files**:
  * [Hero Component](./landing-page/src/components/hero.tsx): Form input and interactive waitlist join button.
  * [Globals CSS](./landing-page/src/app/globals.css): Custom `@theme` config.

### 3. Typography & Micro-interactions (`tailwind-practice`)
A Next.js landing page template focusing on typography refinement.
* **Core Concepts**: Integrating external font engines and fine-tuning Tailwind layout parameters.
* **Key Features**:
  * **Custom Fonts**: Integrates custom typography (`Boldonse`) loaded through `@import` and embedded inline.
  * **Fine-Tuning Utilities**: Leverages Tailwind v4 line-height and margin utilities (e.g., `text-7xl/25` for precise tracking).
  * **Micro-interactions**: Hover effects on interactive elements with transition animations.
* **Key Files**:
  * [Hero Component](./tailwind-practice/src/components/hero.tsx): Large styled headers, spacing adjustments, and image display.
  * [Globals CSS](./tailwind-practice/src/app/globals.css): Font imports.

### 4. Responsive Interfaces (`responsive-design`)
A Next.js project focused on responsive component layouts and modern UI design patterns.
* **Core Concepts**: Implementing flexible, responsive layouts and custom styling configurations.
* **Key Components**:
  * [Navbar](./responsive-design/src/components/navbar.tsx): A clean, responsive top-navigation bar.
* **Styling**: Managed via [globals.css](./responsive-design/src/app/globals.css) using custom `@theme` configurations for unique shadow definitions.

---

## 🛠️ Tech Stack & Dependencies

All projects in this repository share a modern web stack:
* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Library**: [React 19](https://react.dev/)
* **CSS Engine**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Compiler/Postprocessor**: PostCSS (`@tailwindcss/postcss`)
* **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Getting Started

Follow these steps to run any of the practice projects locally:

### 1. Navigate to the desired project
Open your terminal and navigate to the project directory you want to run (e.g., `vanilaCSS`, `landing-page`, `tailwind-practice`, or `responsive-design`):
```bash
cd vanilaCSS
# or
cd landing-page
# or
cd tailwind-practice
# or
cd responsive-design
```

### 2. Install dependencies
Install the required packages using `npm`:
```bash
npm install
```

### 3. Run the development server
Start the local Next.js development server:
```bash
npm run dev
```

### 4. View in Browser
Open [http://localhost:3000](http://localhost:3000) with your browser to see the live app.
