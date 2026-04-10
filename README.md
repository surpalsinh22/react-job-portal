# CareerHub – React Job Portal

CareerHub is a job portal web application built using React.js.  
It allows users to browse jobs, view details, search/filter jobs, save favorites, and apply through a form system.

The project uses Context API for state management and LocalStorage for authentication and data persistence.

---

## Features

- Browse jobs from API
- Job details page with full description
- Search jobs by title, company, or category
- Category-based filtering
- Save and remove jobs (Context API + LocalStorage)
- Apply form with validation
- Simple authentication (Signup/Login using LocalStorage)
- Store applied jobs in LocalStorage
- Success page after submission
- Responsive UI using Tailwind CSS

---

## Tech Stack

- React.js
- React Router DOM
- Context API
- Tailwind CSS
- MockAPI / JSON Server
- LocalStorage

---

## Authentication Flow

### Signup
- User data is stored in LocalStorage under `users`

### Login
- Credentials are matched with stored users
- Logged-in user is stored in LocalStorage as `user`

---

## Saved Jobs Logic

- Implemented using Context API
- Stored in LocalStorage as `savedJobs`
- Duplicate saves are prevented using array check

---

## Routes

- `/` → Home (Job listing)
- `/job/:id` → Job Details
- `/apply/:id` → Apply Form
- `/saved` → Saved Jobs
- `/login` → Login Page
- `/signup` → Signup Page
- `/submitted` → Success Page

---

## Application Flow

1. User signs up
2. User logs in
3. Browses job listings
4. Opens job details
5. Saves job or applies
6. Application is stored in LocalStorage
7. Success page is shown after submission

---

## Future Improvements

- JWT authentication
- Backend with Node.js + MongoDB
- Admin panel for job posting
- Pagination & infinite scroll
- Better error handling & loading states

---

## Author

Built as a learning project for React portfolio and interview preparation.