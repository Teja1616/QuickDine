# QuickDine Frontend

Welcome to the frontend repository for **QuickDine** – a modern, premium table booking and reservation platform designed for a seamless dining experience.

This application is built using **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS v4**.

## ✨ Features

- **Discerning Curation**: Clean, premium, and responsive search & filter options to browse dining venues by location, cuisine, price range, and rating.
- **Seat Availability System**: Live check of table slots and seat capacity for a chosen reservation date.
- **Seamless Booking Flow**: Reservation request with occasion selection and special dining requests.
- **Role-Based Portals**:
  - **Diners**: Book tables, track active reservations, and cancel requests.
  - **Restaurant Owners**: Register a venue, manage profile information, and confirm/cancel incoming reservations.
  - **Administrators**: Approve new restaurant registrations and monitor system-wide metrics.

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quickdine-frontend.git
   cd quickdine-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Building for Production

Compile typescript and build the production bundle:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get started.

## 📄 License

Distributed under the MIT License. See [LICENSE.md](./LICENSE.md) for more details.
