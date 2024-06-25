
## Hacker News Awesome

This repository is a user interface (UI) portal for Hacker News, a popular website for sharing and discussing computer science and entrepreneurship news. This UI provides a clean and potentially customizable way to interact with Hacker News content.

## Getting Started

Use the following commands to run the code on the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment and Vercel

To deploy the application to a live environment, you can use a platform like Vercel. Here's a general guide for deployment on Vercel:

### Create a Vercel account

If you don't have a Vercel account, create one at https://vercel.com/.

### Connect your repository

Connect your GitHub repository to your Vercel account. Vercel will guide you through this process.

### Build and deploy

Vercel will typically handle building and deploying your application based on the configuration in your repository. You might need to configure a build command in your package.json file (check Vercel documentation for details).

To deploy in prod, you just need to push the changes into `main` branch. Once done, it will reflect to [https://hackernews-reciosonny.vercel.app/](https://hackernews-reciosonny.vercel.app/) in just a few seconds!

### Accessing the deployed application

Once deployed, Vercel will provide you with a URL to access your live Hacker News UI portal.