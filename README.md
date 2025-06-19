# Server Starter

An **Express.js** starter template equipped with essential tools and configurations to kickstart your backend development with ease.

## Features

- **Express.js**: Fast and minimalist web framework for Node.js.
- **CORS Support**: Easily handle cross-origin requests.
- **Prisma ORM**: An ORM for database interactions.
- **TypeScript**: Strongly typed JavaScript for improved code quality and maintainability.
- **Hot Reloading**: Seamless development experience using `tsx`.
- **GitHub Actions**: Automated CI for testing and building the project.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/ekyza/server.git
cd server
```

Update and install dependencies:

```bash
npx npm-check-updates -u
npm install
```

Initialize Prisma:

```bash
npx prisma init
npx prisma generate
```

---

## Set up your environment variables

If there is no `.env` file, create one in the root directory:

Example `.env` file:

```env
DATABASE_URL=your-database-url
PORT=8080
```

---

## Scripts

The following scripts are available in `package.json`:

- **Start Development Server**:

  ```bash
  npm run dev
  ```

- **Build Project**:

  ```bash
  npm run build
  ```

- **Run Production Server**:

  ```bash
  npm start
  ```

---

## Project Structure

```
├── src
│   ├── configs
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── repositories
│   ├── routes
│   ├── services
│   ├── utils
│   └── index.ts
├── prisma
│   └── schema.prisma
├── .env
├── .github
│   └── workflows
│       └── ci-cd.yaml
├── package.json
├── tsconfig.json
└── README.md
```

---

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Access the API at:

   ```
   http://localhost:<PORT>
   ```

   Replace `<PORT>` with the value set in your `.env` file or default `3000`.

3. Build the project for production:

   ```bash
   npm run build
   ```

4. Start the production server:

   ```bash
   npm start
   ```

---

## Adding New Routes

To register a new route, import and mount it **above** the `RouteNotFoundHandlerMiddleware` in `src/index.ts` or `app.ts`.

### Example:

```ts
import userRoutes from "@/routes/users";

// Register your new route
app.use("/users", userRoutes);

// Must be placed last
app.use("/", RouteNotFoundHandlerMiddleware.routeNotFoundHandler);
```

> ✅ The "Not Found" handler should always be registered last to ensure it doesn't override other valid routes.

---

## GitHub Actions CI

This project includes a basic GitHub Actions workflow in `.github/workflows/ci-cd.yaml` that automatically:

- Installs dependencies
- Runs type checks and builds
- (Optional) Runs tests if available

CI will run on every push and pull request to main or feature branches.

---

## Environment Variables

| Variable       | Description                         |
| -------------- | ----------------------------------- |
| `DATABASE_URL` | URL to your PostgreSQL database.    |
| `PORT`         | Port number the server will run on. |

---

Happy coding! 🚀

---

## Optional: Continuous Deployment (CD)

You can extend the GitHub Actions workflow for automatic deployment after a successful build.

### Example Options:

- **Deploy to Vercel**: Use the [Vercel GitHub integration](https://vercel.com/docs/git/vercel-for-github).
- **Deploy to Render**: Add a deploy hook in Render and trigger it via curl in your workflow.
- **Deploy to VPS or Docker Host**:
  - Use `scp` or `rsync` to copy build files
  - Use `ssh` to restart your app on remote server
- **Use GitHub Actions Secrets** to store credentials securely:
  - `SSH_PRIVATE_KEY`, `SERVER_IP`, `DEPLOY_USER`, etc.

> 💡 Deployment steps should be added after the build step in your GitHub Actions workflow file.

---

Happy building and deploying! 🚀
