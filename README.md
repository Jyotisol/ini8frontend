Full Stack CRUD Application Setup Guide (Frontend and Backend)
Prerequisites
Install Node.js if you haven’t already: Download Node.js
Sign up for a MongoDB account and create a cluster: MongoDB Website
Backend Setup (Node.js + Express)
Step 1: Clone the Repository
Clone the project repository:
bash
Copy code
git clone <your-repository-url>
Navigate to the backend directory:
bash
Copy code
cd <project-directory>/server
Step 2: Install Dependencies
Install all necessary packages:
bash
Copy code
npm install
Step 3: Set Up Environment Variables
Create a .env file in the backend root directory.
Add the following environment variables:
env
Copy code
PORT=8000
MONGOURL=<your-mongodb-connection-string>
Replace <your-mongodb-connection-string> with your actual MongoDB URI, including your cluster name, username, and password.
Step 4: Start the Backend Server
Run the following command to start the backend server:
bash
Copy code
npm start
The backend server should start on http://localhost:8000 by default (or the port specified in .env).
Step 5: Test Backend API Endpoints (Optional)
Use a tool like Postman or Insomnia to test the API endpoints and confirm they work as expected.
Frontend Setup (React.js)
Step 1: Navigate to the Frontend Directory
Go to the frontend folder of your project:
bash
Copy code
cd <project-directory>/client
Step 2: Install Dependencies
Install required packages for the frontend:
bash
Copy code
npm install
Step 3: Set Up Environment Variables
In the frontend root directory, create a .env file.
Add the following environment variable for the backend API URL:
env
Copy code
REACT_APP_API_URL=http://localhost:8000/api
Update the URL if your backend is hosted on another domain or port.
Step 4: Start the React Development Server
Run the following command to start the React frontend server:
bash
Copy code
npm start
The frontend will run on http://localhost:3000 by default.
Step 5: Access the Application
Open your browser and go to http://localhost:3000 to use the frontend, which should now be connected to the backend.
Additional Steps
Building the Frontend for Production (Optional)
If you plan to deploy the frontend, create a production build by running:
bash
Copy code
npm run build
This will create an optimized build in the build folder, ready for deployment to hosting services like Vercel, Netlify, or Firebase.
Deployment (Optional)
Deploy both the backend (e.g., on Heroku or Render) and the frontend (e.g., on Vercel or Netlify) to make the application accessible online.

