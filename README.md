# Server Starter

An **Express.js** starter template equipped with essential tools and configurations to kickstart your backend development with ease.

## Features

- **Express.js**: Fast and minimalist web framework for Node.js.
- **CORS Support**: Easily handle cross-origin requests.
- **Prisma ORM**: An ORM for database interactions.
- **TypeScript**: Strongly typed JavaScript for improved code quality and maintainability.
- **Hot Reloading**: Seamless development experience using `tsx`.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

## Installation

Clone the repository:

```bash
git clone https://github.com/ekyza/server.git
cd server
npx npm-check-updates -u
npm install
npx prisma init
```

Set up your environment variables:
Example `.env` file:

```env
DATABASE_URL=your-database-url
PORT=8080
```

## Scripts

The following scripts are available in `package.json`:

- **Start Development Server**:

  ```bash
  npm run dev
  ```

  Uses `tsx` for hot reloading during development.

- **Build Project**:

  ```bash
  npm run build
  ```

  Transpiles TypeScript to JavaScript.

- **Run Production Server**:

  ```bash
  npm start
  ```

  Runs the transpiled JavaScript code.

---

## Project Structure

```
├── src
│   ├── configs
│   ├── models
│   ├── middlewares
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── repositories
│   ├── utils
│   ├── index.ts
├── prisma
│   ├── schema.prisma
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

- `src/`: Contains the application source code.
- `prisma/`: Contains Prisma schema and migration files.
- `.env`: Environment variables.

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

---

## Environment Variables

| Variable       | Description                    |
| -------------- | ------------------------------ |
| `DATABASE_URL` | URL to your database instance. |
| `PORT`         | Port number for the server.    |
