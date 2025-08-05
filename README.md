# Mini LinkedIn Assignment

This is a secure application built with **Node.js**, **Express.js**, and **PostgreSQL**, **Reactj.js** supporting authentication (JWT), user profile access, and post management.

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: PostgreSQL
- **Authentication**: JWT + bcrypt
- **ORM**: native `pg` module
- **Deployed on** : https://mini-linked-in-sigma.vercel.app/
---

## 🗂️ Backend Features

- User Sign Up and Login (with encrypted passwords)
- JWT authentication middleware
- Create and fetch posts
- `/me` route to get logged-in user's profile + posts
- RESTful API structure
- Deployed on Render at : https://mini-linkedin-p3yg.onrender.com
- **NOTE**: Due to prolonged inactivity free instance of render spins down in which delay time goes upto 1min , please wait if that happens.

## 🗂️ Frontend Features

- Create , read , display posts functionality
- Animation like Skeleton , Loaders for mini-interactions
- View profile page
- Signin/Signup page
- Responsive UI
  
---

## ⚙️ Setup Instructions (Local)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
### 2. Install Dependencies

Install dependencies on backend repo 
```bash
cd backend
npm install
```
Install dependencies on frontend repo
```bash
cd ..
cd frontend
npm install
```
### 3. Setup .env
Add .env file on frontend repo and add
```bash
VITE_BACKEND_URL='https://mini-linkedin-p3yg.onrender.com'
```
Add .env on backend repo and add Database string 
```bash
DB_STRING= 'postgresql://neondb_owner:npg_kngQvtw9zyC6@ep-long-cell-a1k4c4s1-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
```
### 4. Start Server
Head over to backend repo and start the dev server
```bash
cd backend
npm run dev
```
### 5. Start frontend
Head over to frontend repo and start react app
```bash
cd frontend
npm run dev
```
### Access the app at http://localhost:5173/
