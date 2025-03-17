# EcoTrack

EcoTrack is a mobile application designed to help users track their carbon footprint, monitor emissions, and make eco-friendly choices. The app provides insightful statistics, encourages sustainable habits, and enables users to take action towards a greener lifestyle.

## 🌱 Features
- **Landing Page:** Users can log in or sign up.
- **Authentication:** Secure login and signup pages.
- **Profile Creation:** Users must create a profile before accessing the main app.
- **Home Screen:** Displays CO₂ emissions, recent activities, and quick statistics.
- **Statistics Screen:** Provides graphical representation of emissions.
- **Eco-Friendly Actions:** Recommends sustainable activities.
- **Profile Management:** Users can view and edit their personal details.
- **Bottom Navigation:** Static navigation bar across main screens.

---

## 📂 Project Structure

```
EcoTrack/
│── src/
│   ├── components/         # Reusable UI components
│   ├── screens/            # Application screens
│   │   ├── Auth/           # Landing, Login, Signup
│   │   ├── Profile/        # Profile creation & user details
│   │   ├── HomeScreen.tsx  # Main dashboard
│   │   ├── StatisticsScreen.tsx
│   │   ├── EcoScreen.tsx
│   │   ├── ProfileScreen.tsx
│   ├── navigation/         # Stack & Bottom Tab navigation
│   ├── assets/             # Images & icons
│   ├── App.tsx             # Entry point
│── backend/                # Node.js & Express API
│── package.json            # Dependencies & scripts
│── README.md               # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Setting up the Frontend (React Native)

Ensure you have **Node.js** and **Expo CLI** installed before proceeding.

```sh
# Install Expo CLI globally (if not installed)
npm install -g expo-cli

# Clone the repository
git clone <repository-url>
cd EcoTrack

# Install dependencies
npm install

# Start the Expo development server
npx expo start
```

#### Running on a Device or Emulator:
- Scan the QR code from **Expo Go** (iOS/Android) or
- Use an emulator (Android Studio or Xcode)

### 2️⃣ Setting up the Backend (Node.js + Express)

Navigate to the backend folder and run the following commands:

```sh
# Move to backend directory
cd backend

# Install dependencies
npm install

# Start the Express server
npm start
```

The backend will start running on `http://localhost:5000/` (default port).

---

## 🔗 API Endpoints
| Method | Endpoint         | Description            |
|--------|-----------------|------------------------|
| GET    | /api/emissions  | Fetch user emissions  |
| POST   | /api/auth/login | User login            |
| POST   | /api/auth/signup| User signup           |
| PUT    | /api/profile    | Update profile data   |


### 1️⃣ Create a Trip
```
POST /api/trips
```
Request Body:
```
{
  "from": "New York",
  "to": "Los Angeles",
  "distance": 4500,
  "duration": "6h"
}
```
Response:
```
{
  "_id": "650f1a24b1",
  "from": "New York",
  "to": "Los Angeles",
  "distance": 4500,
  "duration": "6h",
  "carbonEmission": 540
}
```
### 2️⃣ Get All Trips
```
GET /api/trips
```

---
## Quick video of our EcoTrack (will be completed and updated soon)
### Frontend

https://github.com/user-attachments/assets/033ac9c4-f02c-4db2-a0cd-3a61c0386379


### Backend


https://github.com/user-attachments/assets/323b1bb5-2441-49f3-9da5-1312f3195527


![WhatsApp Image 2025-02-22 at 10 56 58_6efc3dab](https://github.com/user-attachments/assets/4c92268d-a5ce-4faa-b829-27cf5b15b7a8)



---
## ⚡ Future Enhancements
- Implement push notifications for eco-friendly reminders
- Add social sharing for emission reductions
- Expand statistical insights with AI-driven recommendations

---

🌍 **EcoTrack – Making the world a greener place, one step at a time!**

