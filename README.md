## Setup Instructions

### Prerequisites

Before starting the application, make sure you have the necessary system requirements and dependencies installed. For the backend, you'll need Python packages listed in `requirements.txt`. For the frontend, you'll need Node.js and npm/yarn.

### Backend (FastAPI) Setup

1. **Navigate to Backend Directory**  
   Change into the backend directory where your FastAPI app resides:
   ```bash
   cd backend
   ```

2. **Install Required Python Packages**  
   Use the following command to install all necessary dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the FastAPI Server**  
   Run the server using Uvicorn with the following command:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend (React) Setup

1. **Navigate to Frontend Directory**  
   Change into the frontend directory where your React app is located:
   ```bash
   cd frontend
   ```

2. **Install Required Node Packages**  
   Depending on your package manager preference, use one of the following commands to install the dependencies:
   ```bash
   npm install
   ```
   -or-
   ```bash
   yarn install
   ```

3. **Start the React Development Server**  
   Use the following command to start the development server:
   ```bash
   npm start
   ```
   -or-
   ```bash
   yarn start
   ```

### Accessing the Application

- **Backend API**: You can access the FastAPI server by navigating to `http://localhost:8000` in your web browser. FastAPI's interactive documentation should be accessible at `http://localhost:8000/docs`.

- **Frontend App**: The React application will be available in your web browser at `http://localhost:3000`. Ensure that your React app is configured to interact with the FastAPI backend, usually through environment variables or configuration files where you specify the API endpoint URLs.
