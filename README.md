# Completefy

A TypeScript-based REST API that manages Todos. This project is designed to build fluency in backend fundamentals: routing, middleware, MongoDB operations, and working with TypeScript in a real-world structure.

## 🎯 Project Purpose

**Completefy** is a **Practice Project** — its goal is to reinforce essential backend concepts in a focused, hands-on way.

Training ground before entering the deeper layers of production-ready systems.

## 🧱 Tech Stack

- **Language:** TypeScript
- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB (with Mongoose)
- **Security:** Helmet, CORS
- **Logging:** Pino + pino-http
- **Error Handling:** Centralized and typed

## ✅ Implemented Features

- [x] **CRUD Operations** for Todos
- [x] **RESTful Routing** using Express Router
- [x] **Modular Folder Structure**
  - `routes/`
  - `controllers/`
  - `models/`
  - `middlewares/`
  - `utils/`

- [x] **Centralized Error Handler** with custom error class
- [x] **Async/Await Patterns** throughout
- [x] **Type Safety** via custom interfaces (e.g., `ITodo`, `ApiResponse`)
- [x] **Basic HTTP Logging** using `pino-http`
- [x] **ESLint + Prettier Configuration**
- [x] **Environment Config** via dotenv
- [x] Refactored controller to use **TodoService module** for db actions
- [x] Request **validation** with Zod
- [x] **Filter + Sort + Pagination**

## 📁 Folder Overview

```
src/
├── config/          # MongoDB and environment configuration
├── controllers/     # Todo logic
├── middleware/      # Error handler, HTTP logger
├── models/          # Mongoose schema for todos
├── routes/          # Express routers
├── types/           # Interfaces for data & responses
├── utils/           # Custom error and logger
├── app.ts           # Entry point
```

## 📜 Scripts

- `npm run type-check` — run TypeScript compiler in check mode
- `npm run dev` — `type check` and then start dev server with `nodemon` and `tsx`
