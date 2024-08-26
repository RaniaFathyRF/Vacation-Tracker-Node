# Vacation-Tracker-Node

## Description

This is a Vacation Tracker System built with Node.js, Express, and MongoDB. The application allows users to manage vacation requests, track their leave balances, and view their vacation history. It provides a RESTful API for CRUD operations related to vacation tracking.

## Features

- User authentication (registration and login)
- Request and manage vacation leaves
- Track leave balances 
- Admin panel for managing users and vacation requests
- Basic validation and error handling

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas instance)

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-vacation-tracker-repo.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-vacation-tracker-repo
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` file** in the root directory and add your environment variables. Example:

    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/vacation-tracker
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the application:**

    ```bash
    npm start
    ```

   By default, the application will run on `http://localhost:5000`.

## API Endpoints

### User Endpoints

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Authenticate and log in a user

### Vacation Endpoints

- **POST** `/api/vacations` - Request a new vacation
- **GET** `/api/vacations` - Retrieve all vacation requests
- **GET** `/api/vacations/:id` - Retrieve a vacation request by ID
- **PUT** `/api/vacations/:id` - Approve a vacation request by ID
- **DELETE** `/api/vacations/:id` - Delete a vacation request by ID

## Vacation Tracker Node API Documentation:
https://documenter.getpostman.com/view/33552511/2sA3sAh7wL