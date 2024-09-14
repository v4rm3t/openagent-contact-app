# OPENAGENT Contact App

**Author:** Meet Vadher  
**Role:** Junior Software Engineer Test - OpenAgent

This app is built to demonstrate the "Contact Us" and "Contacts List" features with a simple API using Docker containers.

## How to Run the App

### Option 1: Run from Docker Hub

#### On Terminal (Linux/macOS):
```bash
docker run -d -p 80:3000 meetvadher/openagent-frontend:latest && docker run -d -p 5000:5000 meetvadher/openagent-backend:latest
```

#### On Command Prompt (Windows):
```bash
docker run -d -p 80:3000 meetvadher/openagent-frontend:latest; docker run -d -p 5000:5000 meetvadher/openagent-backend:latest
```

This will spin up both the frontend (on port 80) and the backend API (on port 5000). The app can be accessed via your browser at:

- Frontend: `http://localhost`
- Backend API: `http://localhost:5000`

### Option 2: Build and Run Locally with Docker Compose

1. **Clone the repository**:
    ```bash
    git clone https://github.com/v4rm3t/openagent-contact-app.git
    cd openagent-contact-app
    ```

2. **Build and run using Docker Compose**:
    ```bash
    docker-compose up --build
    ```

3. **Access the app**:
   - Frontend: `http://localhost:80`
   - Backend API: `http://localhost:5000`

### Option 3: Run Manually (without Docker)

#### Requirements:
- Node.js and npm installed locally.
- SQLite3 database installed.

#### Steps:
1. **Install Backend Dependencies**:
    ```bash
    cd api
    npm install
    ```

2. **Start Backend**:
    ```bash
    npm start
    ```

3. **Install Frontend Dependencies**:
    ```bash
    cd ../ui
    npm install
    ```

4. **Start Frontend**:
    ```bash
    npm start
    ```

5. **Access the app**:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

---

## Frontend Features

- **Built with:** React, Material UI
- **Responsive Design:** Optimized for both desktop and mobile screens.
- **UI Elements:** Icons and color schemes inspired by OpenAgent.
- **Contact Form:** Validates First Name, Last Name, Email, Phone, and Additional Info/Note fields.
- **Thank You Page:** Displays after successful form submission.

### Future Improvements:
- Refactor CSS to use more inline styles via className for better maintainability.
- Improve UI and color schemes for a more polished look.
- Enhance mobile user experience and interactivity.
- Add more robust input validation to handle edge cases.
- Use environment variables for API URLs and ports instead of hardcoding them.

---

## Backend Features

- **Built with:** Node.js, Express.js
- **Database:** SQLite (with Knex.js ORM for database management)
- **API Endpoints:**
  - Create Contact
  - List Contacts
  - Update Contact (Verify)
  - Delete Contact
- **Testing Tools:** Postman, Chrome Network DevTools used for API endpoint testing.

### Future Improvements:
- Add more API input validation for enhanced security.
- Use environment variables for database credentials and API ports for better security practices.
- Add token-based authentication for secured endpoints.

---

## Assumptions

1. **Database Persistence:**  
   Each time a Docker container is rebuilt or run for the first time, a new SQLite database is created.

2. **Frontend and Backend Communication:**  
   The frontend assumes the backend API is running on `http://localhost:5000` by default. This can be changed by setting up environment variables or editing the API URL in the frontend code.

3. **Docker Networking:**  
   It is assumed that the frontend and backend containers are running in a network where they can communicate freely.

---

## Additional Notes

- **API Documentation:**  
  The backend APIs follow RESTful standards and can be accessed through tools like Postman at `http://localhost:5000`.

- **Environment Configuration:**  
  For enhanced security, the app can be configured to use environment variables for API URLs, database configurations, and other secrets.

---