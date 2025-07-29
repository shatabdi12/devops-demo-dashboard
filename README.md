# DevOps Demo Dashboard

A simple React + TypeScript dashboard app to demonstrate DevOps skills.

## 🌐 Live Demo
👉 [devops-demo-dashboard.vercel.app](https://devops-demo-dashboard.vercel.app)

## Features

- ⚛️ Built with **React + Vite + TypeScript**
- 🔁 **CI/CD** via GitHub Actions
- 📄 **Linting and code formatting** using ESLint + Prettier
- 🧪 **Type checking** with TypeScript
- 🌎 **Environment variable management** via `.env` files
- 🛠️ **Error Monitoring** using [Sentry](https://sentry.io/)
- 🚀 **Production-ready deployment** on Vercel

##  Error Tracking Test
You can trigger an intentional error to test Sentry:

1. Go to the homepage
2. Click the red “Trigger Error” button

This will throw a test error that gets logged to Sentry (visible only to the project owner).

## Local Setup

```bash
git clone https://github.com/shatabdi12/devops-demo-dashboard.git
cd devops-demo-dashboard
cp .env.example .env  # Fill in your own keys
npm install
npm run dev
```
