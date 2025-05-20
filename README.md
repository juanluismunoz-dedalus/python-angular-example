# Full-Stack Application with Angular and FastAPI

This project consists of an Angular frontend and a FastAPI backend.

## Project Structure

- `/my-angular-app` - Angular frontend application
- `/backend` - FastAPI backend application

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Create and activate a virtual environment:

   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```
   pip install -r requirements.txt
   ```

4. Run the FastAPI server:
   ```
   uvicorn main:app --reload
   ```
   The API will be available at http://localhost:8000

### Frontend Setup

1. Navigate to the Angular app directory:

   ```
   cd my-angular-app
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:
   ```
   ng serve
   ```
   The application will be available at http://localhost:4200

## API Endpoints

- `GET /api/hello` - Returns a "Hello World" message from the backend

## Technologies Used

- **Frontend**: Angular, TypeScript
- **Backend**: FastAPI, Python
