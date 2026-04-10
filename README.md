# CareerHub – React Job Portal

A Job Portal web application built using React.js, Context API, Tailwind CSS, and JSON Server.  
It allows users to browse jobs, search, filter by category, save jobs, and apply through a form system.

---

## Features

- Browse jobs from API
- Job details page with full description
- Search jobs by title, company, category
- Category-based filtering
- Save and remove jobs (Context API + LocalStorage)
- Apply form with validation
- Simple authentication (Signup/Login using LocalStorage)
- Store applied jobs in LocalStorage
- Success page after form submission
- Responsive UI with Tailwind CSS

---

## Tech Stack

- React.js
- React Router DOM
- Context API
- Tailwind CSS
- JSON Server
- LocalStorage

---

Signup:
- User stored in localStorage as "users"

Login:
- Match email and password
- Store logged user in localStorage as "user"

---

## Saved Jobs Logic

- Uses Context API
- Stored in localStorage as "savedJobs"
- Prevent duplicate saving using array check

---

## Routes

- / → Home
- /job/:id → Job Details
- /apply/:id → Apply Form
- /saved → Saved Jobs
- /login → Login
- /signup → Signup
- /submitted → Success Page

---

## Features Flow

1. User signs up
2. Logs in
3. Browses jobs
4. Views job details
5. Saves job or applies
6. Application stored in localStorage
7. Success page shown after apply

---

## Future Improvements

- JWT authentication
- MongoDB backend
- Admin panel for posting jobs
- Pagination
- Better error handling

## Author

Built as a learning project for React portfolio and interview preparation.
