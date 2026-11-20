# React Routing & Firebase Authentication

Course: Tools & Technologies for Internet Programming
Student Name: Fahamida Fatima Raisa
ID: C243424

A simple React app with React Router, Firebase Email/Password Authentication and Protected Routes.

## Pages
| Page | Route | Access |
|------|-------|--------|
| Home | `/` | Public |
| Login | `/login` | Public |
| Register | `/register` | Public |
| Dashboard | `/dashboard` | Protected |
| Profile | `/profile` | Protected |

## Features
- React Router (`BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`, `Navigate`)
- Firebase Auth: register, login, logout
- `ProtectedRoute` redirects guests to `/login`
- `onAuthStateChanged` + Context API keeps user logged in after refresh
- Navbar shows Login/Register or Dashboard/Profile/Logout depending on auth state

## Setup
1. `npm install`
2. Create a Firebase project -> enable **Authentication -> Email/Password**
3. Paste your web app config into `src/firebase.js`
4. `npm run dev`

## Project Structure
```
src/
  components/  Navbar.jsx, ProtectedRoute.jsx
  context/     AuthContext.jsx
  pages/       Home, Login, Register, Dashboard, Profile
  firebase.js  App.jsx  main.jsx  index.css
```
