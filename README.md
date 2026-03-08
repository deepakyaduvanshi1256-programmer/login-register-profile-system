Local Project Setup & Git Push

Open terminal in your project folder:

# Initialize Git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Login/Register/Profile/Logout system"

# Add remote GitHub repo (replace with your repo URL)
git remote add origin https://github.com//login-register-profile-system.git

# Push code to GitHub main branch
git branch -M main
git push -u origin main
 Recommended GitHub Project Structure
login-register-profile-system/
│
├─ views/
│   ├─ login.ejs
│   ├─ register.ejs
│   ├─ registerprofile.ejs
│   └─ viewprofile.ejs
│
├─ app.js
├─ package.json
├─ package-lock.json
└─ README.md
 README.md Content (You can copy-paste)
# Login/Register/Profile/Logout System

A simple Node.js project demonstrating **login, registration, profile view, and logout functionality** using **Express**, **EJS**, and **sessions**.

---

## Features

- User registration with session storage
- Password hashing using **bcrypt**
- Login and view profile functionality
- Logout destroys session
- Session-based route protection (unauthorized users cannot access profile)
- Uses **EJS templates** for dynamic HTML rendering
- Fully commented code for learning and reference

---

## Tech Stack

- Node.js
- Express.js
- EJS
- bcrypt
- express-session

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/deepakyaduvanshi1256-programmer/login-register-profile-system.git
cd login-register-profile-system

Install dependencies:

npm install

Run the server:

node app.js

Open browser:

http://localhost:3000
Usage

Visit /register to create a new account.

Visit /login to log in with your account.

View profile page after login/registration.

Click /logout to end your session.
