# Portfolio (Astro Edition)

This is a high-performance content-driven portfolio built with **Astro**, **Tailwind CSS**, and **React**.
Migrated from Laravel to be static-host friendly (Netlify/Vercel).

## 🚀 Getting Started

1.  **Open this folder** in your terminal/editor if you haven't already.
    ```bash
    cd portfolio-astro
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start Development Server**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321` to see your site!

## 🛠️ Content Management

### Projects
Add new projects by creating Markdown files in `src/content/projects/`.
Example: `src/content/projects/my-new-project.md`

### Skills & Testimonials
Edit `src/data/skills.json` or `src/data/testimonials.json` to update lists.

### Site Settings
Update `src/data/site.json` for global settings like Name, Email, Social Links.

## 📦 Deployment (Netlify)

1.  **Build the Site**
    ```bash
    npm run build
    ```
    This creates a `dist/` folder.

2.  **Deploy**
    - **Option A (Git)**: Push this folder to GitHub and connect to Netlify.
    - **Option B (Manual)**: Drag and drop the `dist/` folder to Netlify Drop.

## 🎨 Customization
- **Tailwind Config**: Edit `tailwind.config.mjs` to change colors/fonts.
- **Global Styles**: Edit `src/styles/global.css`.
