-
---

# **CarbonCalc - Carbon Footprint Calculator**

## **Overview**
**CarbonCalc** is a web application that helps users calculate, track, and reduce their carbon footprint. By providing details about daily activities such as transportation, energy usage, diet, and shopping habits, users can gain insights into their environmental impact and set goals to lower their emissions.

---

## **Features**
- **Carbon Footprint Calculator**: Calculate emissions based on commute distance, energy usage, diet type, and shopping frequency.
- **User Dashboard**: View historical calculations, monthly trends, and actionable recommendations.
- **Profile Management**: Update user details like name, email, phone number, location, and carbon reduction goals.
- **Authentication**: Secure user registration and login using JWT.

---

## **Technologies Used**
- **Frontend**: HTML, CSS, JavaScript (with Chart.js for visualizations)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

---

## **Setup Instructions**

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud-based like MongoDB Atlas)

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/carboncalc.git
   cd carboncalc
   ```

2. Navigate to the `backend` folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the `backend` folder with the following variables:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/carboncalc
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

5. Open the `frontend` folder in your browser or use a simple HTTP server to serve the files locally.

6. Open your browser and go to `http://localhost:5000`.

---

## **Folder Structure**
```
CarbonCalc/
├── backend/
│   ├── config/
│   │   └── db.js            # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js # Authentication logic
│   │   ├── calcController.js # Carbon calculation logic
│   │   ├── dashboardController.js # Dashboard data fetching logic
│   │   └── userController.js # Profile management logic
│   ├── middleware/
│   │   └── authMiddleware.js # JWT authentication middleware
│   ├── models/
│   │   ├── User.js          # User schema
│   │   ├── Calculation.js   # Calculation schema
│   ├── routes/
│       └── api.js           # API routes definition
│   └── server.js            # Express server setup

├── frontend/
│    ├── public/             # Static files (HTML/CSS)
│    └── src/                # JavaScript files for frontend logic

└── README.md                # Project documentation file

```

---

## **API Endpoints**

### Authentication Routes:
1. `POST /api/register`: Register a new user.
2. `POST /api/login`: Log in an existing user.

### Protected Routes:
1. `POST /api/calculate`: Save a new carbon calculation.
2. `GET /api/dashboard`: Fetch user-specific dashboard data.
3. `GET /api/user/profile`: Fetch user profile data.
4. `PUT /api/user/profile`: Update user profile data.

---

## **Future Enhancements**
- Add support for more emission categories like water usage and waste generation.
- Implement real-time updates for dashboard data using WebSockets.
- Add charts comparing global averages vs individual scores.

---

© 2023 CarbonCalc

