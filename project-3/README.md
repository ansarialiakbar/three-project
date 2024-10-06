## Todo Web App
A simple and clean Todo web application built using React that allows users to manage their tasks efficiently. Users can add, update, and delete todos. The application is visually appealing and provides a seamless experience for users to keep track of their tasks.

## Project Structure

todo-app/

│-- public/

│-- src/

│   │-- components/

│   │   │-- TodoForm.js        # Form to add a new todo

│   │   │-- TodoList.js        # List of all todos

│   │   │-- TodoItem.js        # Individual todo item component

│   │-- App.js                 # Main App component managing state

│   │-- index.js               # Entry point for React

│-- package.json

## Installation
Clone the repository:

git clone https://github.com/ansarialiakbar/todo-app.git

Navigate to the project directory:

cd todo-app

Install the dependencies:

npm install

Start the development server:

npm start

Open your browser and go to http://localhost:3000 to see the app in action.

## File Descriptions
TodoForm.js: This file contains the form component to add a new todo task.

TodoList.js: This component handles rendering the list of todos.

TodoItem.js: This component renders each individual todo with its status, number, and action buttons for toggling status and deleting the todo.

App.js: The main component that manages the state of the application, such as the list of todos and actions to add, update, and delete todos.

## Technologies Used
React.js: A JavaScript library for building user interfaces

CSS: Used for styling the components and layout