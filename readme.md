# Tailwind CSS & Vanilla CSS Practice Projects

Welcome to the **Tailwind Practice** repository. This workspace serves as a dedicated environment for practicing modern web layouts, responsive design, and CSS strategies, ranging from utility-first Tailwind CSS to structured Vanilla CSS.

---

## 🚀 Current Project: Fintech Landing Page

Located in the [`vanilaCSS`](file:///c:/Users/Pushkar%20Raj/Desktop/Practice-Codes/tailwind-practice/vanilaCSS) directory, this project is a premium, responsive landing page for a modern fintech startup ("*Magically simplify accounting and taxes*") built using **Next.js 16**, **React 19**, and **Tailwind CSS v4**.

It showcases a hybrid styling approach where Tailwind CSS v4 is configured alongside semantic, modular vanilla CSS classes for absolute control over the design system.

### Key Features
* 📱 **Fully Responsive Layout**: Optimised for all screen sizes from mobile to wide desktops.
* 💅 **Premium Aesthetics**: Features smooth gradients, modern typography (Inter & Space Grotesk), clean border lines, and micro-interactions.
* 📦 **Modular Components**:
  * [Navbar](file:///c:/Users/Pushkar%20Raj/Desktop/Practice-Codes/tailwind-practice/vanilaCSS/src/components/navbar.tsx): A clean, interactive top-navigation bar.
  * [Hero](file:///c:/Users/Pushkar%20Raj/Desktop/Practice-Codes/tailwind-practice/vanilaCSS/src/components/hero.tsx): An attention-grabbing hero section with dual CTA buttons and taglines.
  * [Container](file:///c:/Users/Pushkar%20Raj/Desktop/Practice-Codes/tailwind-practice/vanilaCSS/src/components/container.tsx): A wrapper to enforce consistent horizontal alignment and padding.

---

## 🛠️ Tech Stack & Dependencies

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
* **Library**: [React 19](https://react.dev/)
* **Styling**: 
  * [Tailwind CSS v4](https://tailwindcss.com/)
  * PostCSS (`@tailwindcss/postcss`)
  * Custom Vanilla CSS rules for layout structuring
* **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter, Space Grotesk)
* **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📁 Repository Structure

```text
tailwind-practice/
├── readme.md                       # This file (Root Workspace Documentation)
└── vanilaCSS/                      # Next.js Practice Workspace
    ├── package.json                # Project dependencies and scripts
    ├── postcss.config.mjs          # PostCSS configuration for Tailwind CSS v4
    ├── tsconfig.json               # TypeScript configuration
    ├── public/                     # Static assets (images, icons)
    └── src/
        ├── components/             # Reusable UI Components
        │   ├── container.tsx       # Layout alignment wrapper
        │   ├── hero.tsx            # Main hero section markup
        │   └── navbar.tsx          # Navigation header component
        └── app/
            ├── globals.css         # Import Tailwind CSS + Custom Vanilla CSS styles
            ├── layout.tsx          # Main Root Layout
            └── page.tsx            # Main Home Page rendering the components
```

---

## ⚙️ Getting Started

Follow these steps to run the project locally:

### 1. Navigate to the project directory
Open your terminal and navigate to the project directory:
```bash
cd vanilaCSS
```

### 2. Install dependencies
Install the required packages using `npm`:
```bash
npm install
```

### 3. Run the development server
Start the local Next.js dev server:
```bash
npm run dev
```

### 4. View in Browser
Open [http://localhost:3000](http://localhost:3000) with your browser to see the live Fintech landing page.

---

## 💡 Styling Approach

This project combines the power of utility-based design and semantic vanilla CSS:
1. **Tailwind Import**: Tailwind CSS v4 is integrated in [`globals.css`](file:///c:/Users/Pushkar%20Raj/Desktop/Practice-Codes/tailwind-practice/vanilaCSS/src/app/globals.css) via `@import "tailwindcss";`.
2. **Vanilla Layout & Components**: Layout structures (e.g., page grids, decorative borders, custom active states) are managed with clean, traditional CSS classes defined within `globals.css`.
3. **Hover & Micro-animations**: Subtle transitions and hover effects (e.g., buttons shifting slightly, inline SVGs sliding right) are fully custom-crafted to create a polished user experience.
