# Ecommerce Mini

A modern, full-stack e-commerce application built with Next.js, Node.js, and MongoDB.


## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Data Fetching**: Axios

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT (JSON Web Tokens) & BcryptJS

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### 1. Project Setup

Clone the repository:
```bash
git clone https://github.com/mujtabaqureshi2/ecommerce-mini.git
cd ecommerce-mini
```

### 2. Backend Configuration

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder:
   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string/ecommerce
   PORT=5000
   JWT_SECRET=your_secret_key
   ```

### 3. Frontend Configuration

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the `frontend` folder:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

---

## 🚀 Running the Application

### Seed the Database
Before running the app for the first time, populate it with sample products and a test user:
```bash
cd backend
npm run seed
```

### Start Development Servers

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

The application will be available at:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

---

## 🔑 Test Credentials

Once the database is seeded, you can use these credentials to log in:
- **Email**: `test@example.com`
- **Password**: `password123`

---

## 📜 License

This project is licensed under the ISC License.
