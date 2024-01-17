# Library System Project

This project is a simple library system that allows users to view and interact with a collection of books. The system provides a user interface with rotating book shelves, each representing a book in the library.

## Technologies Used

 **Express.js**: Used for building the backend API to handle book-related operations.
 **HTML/CSS**: Frontend structure and styling.
 **GSAP (GreenSock Animation Platform)**: Used for creating the interactive and animated book shelves.
 **Draggable Plugin**: Part of GSAP, used for enabling drag and rotation interactions.
 **Inertia Plugin**: Part of GSAP, used for creating inertia in the rotation.
 **MotionPath Plugin**: Part of GSAP, used for animating the books along a specified path.

## Project Structure

 **server.js**: Express.js server file that handles API routes for book operations.
 **index.html**: Frontend HTML file for the library user interface.
 **styles.css**: CSS file for styling the user interface.
 **scripts.js**: JavaScript file for handling GSAP animations and book-related interactions.

## How to Run

1. Ensure Node.js and npm are installed on your machine.
2. Clone the repository.
3. Run `npm install` to install the required dependencies.
4. Run `node server.js` to start the Express.js server.
5. Open your web browser and go to `http://localhost:3000` to access the library system.

## Features

 View a rotating collection of books on the main page.
 Each book shelf represents a book with details such as name, author, and number of pages.
 Interact with the book shelves by dragging and rotating them.
 Inertia effect for a smooth rotation experience.

## Future Improvements

 Add functionality to borrow and return books.
 Implement a user authentication system for personalized interactions.
 Improve the overall design and responsiveness.

Feel free to contribute to the project or suggest improvements!

