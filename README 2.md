
# Vaishnavi Dathrak - Developer Portfolio

This is my personal portfolio website built using **Next.js 13+ (App Router)** with **TypeScript**, **Tailwind CSS**, and modern frontend tooling. It showcases my engineering experience, technical skills, and featured projects, and provides ways to get in touch or explore my background.

## Tech Stack

- **Framework**: [Next.js 13+](https://nextjs.org/docs) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Email Support**: Integrated email templates (`emails/` folder)
- **Deployment**: [Vercel](https://vercel.com)
- **Tooling**: ESLint, Prettier, PostCSS, tsconfig, jsconfig

## Folder Structure

```
├── app/                 # Next.js app directory (pages, layouts, routes)
├── emails/              # Email templates (for contact form / messages)
├── public/              # Static assets (images, favicons, etc.)
├── node_modules/        # Project dependencies
├── eslint.config.mjs    # ESLint config
├── jsconfig.json        # JS tooling paths
├── tsconfig.json        # TypeScript config
├── tailwind.config.js   # Tailwind CSS theme/config
├── postcss.config.mjs   # PostCSS setup
├── next.config.mjs      # Next.js config
├── package.json         # Project metadata and scripts
└── README.md            # You are here!
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the app.

### 3. Build for production

```bash
npm run build
npm run start
```

## ✉️ Contact / Email Integration

If using an email service (e.g., Resend, Nodemailer), templates live under the `emails/` folder. Update SMTP or API configs as needed based on your provider.

## Linting and Formatting

Run ESLint and Prettier:

```bash
npm run lint
npm run format
```

## Scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write ."
}
```

## Deployment

This project is optimized for Vercel:

- Automatically builds on `push`
- Supports edge functions, dynamic routing, and server components
- Easily configure environment variables in Vercel dashboard

## License

This project is open-source and maintained by **Vaishnavi Dathrak**.

---

**Thank you for visiting!**

Check out the live site: [https://dathrak-portofolio.vercel.app](https://dathrak-portofolio.vercel.app)
