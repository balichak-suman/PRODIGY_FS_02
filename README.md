# PRODIGY_FS_02
# Employee Management System

## Description
This is a full-stack web application that allows administrators to perform CRUD (Create, Read, Update, Delete) operations on employee records. The system includes authentication, validation, and secure data handling.

## Features
- **User Authentication**: Secure login and registration using JWT.
- **Employee Management**: Admins can add, view, update, and delete employee records.
- **Validation & Security**: Proper data validation and protection of sensitive employee details.
- **REST API**: Backend built with Node.js and Express.
- **MongoDB Database**: Employee records stored securely.
- **React Frontend**: User-friendly UI built with React.
- **Axios for API Calls**: Frontend communicates with the backend via RESTful APIs.

## Technologies Used
- **Frontend**: React, Axios, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JSON Web Token (JWT)
- **Database**: MongoDB Atlas / Local MongoDB

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/balichak-suman/PRODIGY_FS_02.git
cd PRODIGY_FS_02/employee-management
2. Backend Setup
cd backend
npm install
npm start
3. Frontend Setup
cd ../frontend
npm install
npm start
API Endpoints (Backend)

Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	User login
GET	/api/employees	Get all employees
POST	/api/employees	Add a new employee
PUT	/api/employees/:id	Update employee details
DELETE	/api/employees/:id	Remove an employee
License

This project is open-source and available under the MIT License.

Created by Balichak Suman
