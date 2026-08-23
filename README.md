# QuickDine

QuickDine is a restaurant discovery and reservation application with customer, restaurant-owner, and administrator dashboards.

## Run locally

Start the API server:

```powershell
cd server
npm start
```

Start the client in a second terminal:

```powershell
cd client
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
