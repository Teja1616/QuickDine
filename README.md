# QuickDine

QuickDine is a full-stack restaurant discovery and reservation platform. It brings diners, restaurant owners, and administrators into one streamlined experience for browsing venues, managing availability, and processing reservations.

## Highlights

- Discover restaurants using search, location, price range, rating, and sorting filters.
- View restaurant details, available dining slots, capacity, cuisine, location, and curated tags.
- Make reservations and manage upcoming or cancelled bookings from a personal dashboard.
- Allow restaurant owners to submit a restaurant profile, manage venue details, and update booking status.
- Provide an administrator approval workflow for restaurant registrations and a dashboard for platform statistics.
- Protect customer, owner, and administrator features with JWT authentication and role-based access control.
- Support restaurant cover-image uploads, with local storage available during development.

## User roles

| Role | Capabilities |
| --- | --- |
| Customer | Browse restaurants, check availability, create reservations, and manage personal bookings. |
| Restaurant owner | Create a restaurant profile, manage restaurant information, and process reservations. |
| Administrator | Approve or reject restaurant registrations and view platform-level activity and metrics. |

## Technology stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, TypeScript, Vite, React Router, Axios, Tailwind CSS, Lucide React |
| Backend | Node.js, Express 5, TypeScript |
| Database | MongoDB with Mongoose |
| Authentication | JSON Web Tokens (JWT), bcrypt password hashing |
| File uploads | Multer, Cloudinary integration, local upload fallback for development |
| Tooling | ESLint, TypeScript compiler, Nodemon, tsx |

## Project structure

```text
QuickDine/
├── client/        # React + Vite frontend
├── server/        # Express API, MongoDB models, controllers, and routes
└── README.md
```

## Run locally

### Prerequisites

- Node.js 20 or later
- MongoDB connection string

Create `server/.env` with the required values:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
# Optional for Cloudinary-hosted image uploads
CLOUDINARY_URL=your_cloudinary_url
```

Install dependencies and start the API:

```powershell
cd server
npm install
npm start
```

In a second terminal, start the frontend:

```powershell
cd client
npm install
npm run dev
```

The client runs at `http://localhost:5173` and the API runs at `http://localhost:5000`.

## Seeded development accounts

These accounts are intended only for local development and testing.

| Role | Email | Password |
| --- | --- | --- |
| Administrator | `admin@example.com` | `admin123` |
| Customer | `user@example.com` | `user123` |
| Restaurant owner | `owner@example.com` | `owner123` |

Do not use these credentials in a production deployment. Change or remove them before publishing the application.
