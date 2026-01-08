# 🦉 Crypto Owl

(Genenerated by AI)
Crypto Owl is a personal side project designed as both a **practical tool** and a **portfolio-grade application**.  
Its goal is to help users monitor cryptocurrencies by combining **price alerts**, **news tracking**, and **user-defined preferences** in a single platform.

The application is built entirely with **Next.js**, focusing on clean architecture, scalability, and modern web development practices.

---

## 🚀 Features

- 🔐 User authentication with secure session management
- 📊 Cryptocurrency watchlists
- 🔔 Price alerts based on user-defined thresholds
- 📰 Periodic news updates related to selected cryptocurrencies
- ⚙️ Configurable alert frequency and notification rules
- 💳 Architecture ready for future billing and premium plans

---

## 🧱 Tech Stack

### Frontend & Backend

- Next.js (App Router)
- TypeScript

### Authentication

- Auth.js (NextAuth)
- Database-backed session management for improved security, session revocation, and future billing integration

### Database

- Microsoft Azure Database for PostgreSQL
  - Managed PostgreSQL service
  - Used to store:
    - Users
    - Sessions
    - Watchlists
    - Alerts
    - News references

### External APIs

#### 📰 News API

- Fetches cryptocurrency-related news articles
- Articles are filtered and linked to user-selected assets

#### 📈 Crypto Market API

- Provides real-time and historical cryptocurrency price data
- Used for monitoring prices and triggering alerts

---

## 🏗️ Architecture Overview

The project follows a layered architecture to ensure scalability and maintainability:

- **Authentication Layer**  
  Handles login, session management, and access control using Auth.js.

- **Domain Layer**  
  Contains business logic such as alert rules, watchlists, and user-specific limits.

- **Infrastructure Layer**  
  Integrates with external services including:

  - Cryptocurrency APIs
  - News APIs
  - Database provider
  - (Future) Payment gateway

- **Background Jobs**  
  Responsible for:
  - Periodic price checks
  - News fetching
  - Alert evaluation and notification triggers

---

## 🔒 Security

- Secure HTTP-only cookies for session handling
- Database-backed sessions allowing immediate revocation
- OAuth-based authentication (no password storage in the MVP)
- Environment-based secret management

---

## 📦 Project Status

Crypto Owl is under active development and is intended for **personal use**, experimentation, and professional portfolio demonstration.

Planned improvements include:

- Additional notification channels (email, push, messaging apps)
- News relevance scoring and filtering
- Premium plans with extended limits

---

## 📄 License

This project is developed for personal and educational purposes.  
Licensing terms may be defined if the project evolves into a public or commercial product.
