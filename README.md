
# CrowdCube

## 📘 Project Overview

**CrowdCube** is a dynamic web application designed to connect individuals and organizations with causes they care about. Whether it's fundraising for a specific cause, managing donations, or exploring various campaigns, CrowdCube provides a seamless experience for users to contribute and make an impact.

---

## ✅ Features List

- **Explore Campaigns**  
  Browse a variety of donation campaigns with key details such as title, category, and funding goals.

- **Search & Sort**  
  Search campaigns by title and sort them based on different criteria like date, popularity, and amount raised.

- **Category-Based Browsing**  
  Filter campaigns by specific categories to find what matters most to you.

- **Donate to Campaigns**  
  Users can directly contribute to any campaign with a smooth and intuitive donation process.

- **Campaign Management (CRUD)**  
  Organizers can create, update, and delete campaigns while tracking their progress.

- **User Dashboard**  
  Manage your donation activity with features such as:
  - Add new campaigns
  - View, update, and delete your created campaigns
  - See donation history
  - Overview cards showing total users and campaigns
  - Highlighted featured campaign cards

- **Secure Authentication**  
  Powered by Firebase Authentication for secure user registration and login.

- **Interactive Feedback**  
  Enjoy a smooth UX with toast notifications and confirmation modals for all actions.

- **Responsive Design**  
  Mobile-first and tablet-optimized layout ensures accessibility on all devices.

---

## 🧱 Tech Stack

### Frontend:
- **React.js** – Modular UI development
- **Tailwind CSS + DaisyUI** – Rapid utility-first styling with custom components
- **React Router DOM** – SPA navigation
- **Framer Motion** – Modern animations and transitions
- **Lottie React** – Lightweight animations
- **React SweetAlert2** – Feedback notifications and modals
- **React Icons** – Easy-to-use icon set

### Backend:
- **Node.js & Express.js** – API routes for campaign management
- **MongoDB (Atlas)** – Cloud NoSQL database

### Authentication & Hosting:
- **Firebase Auth** – Secure user authentication
- **Firebase Hosting** – Frontend deployment
- **Vercel** – Backend deployment

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/RaihanIslamRauf/b-10-a-10-server-side
cd b-10-a-10-server-side
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Import .env file

Make sure you create a `.env` file and include all necessary environment variables (like Firebase keys and backend URLs).

### 4. Start the Application

#### Frontend:
```bash
npm run dev
```

#### Backend:
```bash
nodemon index.js
```

---

## 🌐 Live Link

🔗 [CrowdCube Live Site](https://assignment-10-ebf30.web.app/)

---

## 🔐 Default Credentials

No default credentials are required.  
You can register with your own email and password through the app.

---

## 🚀 Future Enhancements

- **Analytics Dashboard**  
  Allow organizers to view data visualizations of campaign performance and donations.

- **Leaderboard System**  
  Display top campaigns or donors based on engagement and contributions.

- **Social Media Sharing**  
  Make campaigns easily shareable across social media to boost visibility.

- **Multi-role Access**  
  Introduce admin and organizer roles for content moderation and management.

- **Push Notifications**  
  Notify users about updates, donation confirmations, or campaign milestones.
