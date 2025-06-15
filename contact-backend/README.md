# Contact Backend

This project is a backend application for handling message submissions from a contact form. It is built using Node.js, Express, and MongoDB with Mongoose for database interactions.

## Project Structure

- **src/**: Contains the source code for the application.
  - **app.js**: Entry point of the application. Initializes the Express app and sets up middleware and routes.
  - **controllers/**: Contains the logic for handling requests.
    - **messageController.js**: Manages the creation and retrieval of messages.
  - **models/**: Defines the data structure for messages.
    - **message.js**: Mongoose model for message data.
  - **routes/**: Defines the API endpoints.
    - **messageRoutes.js**: Sets up routes for message submissions.
  - **config/**: Contains configuration files.
    - **db.js**: Handles database connection setup.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/contact-backend.git
   ```

2. Navigate to the project directory:
   ```
   cd contact-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your database connection string:
   ```
   DATABASE_URL=your_database_connection_string
   ```

## Usage

To start the server, run:
```
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

- **POST /messages**: Submits a new message. Requires `name`, `email`, and `message` in the request body.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.