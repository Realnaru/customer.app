# React Interview Task

## Overview

This task involves building a React application that integrates with a provided REST API to manage customer data. The project is pre-configured with the necessary dependencies, and your goal is to implement the required functionality.

## Instructions

1. **Fork the Repository:** Start by forking the existing project repository provided.
2. **Project Structure:** Follow the existing project structure, adhering to best practices for React and maintainable code.
3. **Dependencies:** The base dependencies are already pre-installed. Feel free to add new dependencies if required.
4. **API:** Use the provided REST API (from the Spring Boot backend task) to handle all customer-related requests.

## Requirements

### 1. Customer Form

Create a form component for adding and updating customer details using **Formik** with the following fields:

- **First Name:** (Required, Text input)
- **Last Name:** (Required, Text input)
- **Phone Number:** (Required, Text input)
- **Email:** (Required, Text input, must be a valid email format)
- **Age:** (Number input)
- **Address:** (Required, Text input)
- **Active:** (Checkbox, defaults to unchecked)

### 2. Validation

Implement form validation using **Yup** to ensure:

- Required fields are filled out.
- The email field contains a valid email format.
- The phone number is correctly formatted.

Validation errors **should be displayed on the form** next to the relevant input fields.

### 3. Service Layer

Use **axios** or **fetch** to interact with the REST API for:

- **Creating** a new customer.
- **Updating** an existing customer.
- **Deleting** a customer.
- **Fetching** customer details.

### 4. Customer List

Create a customer list component that fetches and displays a list of customers from the backend API. The list should support the following features:

- Display customer details such as name, phone number, email, and address.
- Provide an option to edit a customer, which populates the form with the customer’s existing data.
- Provide an option to delete a customer with a confirmation alert.

### 5. React Hooks

Use **React hooks** exclusively (no class components) to handle component lifecycle, form submission, and API interaction.

### 6. Error Handling

Use **alert** for handling API request failures. Validation errors should be shown on the form itself.

### 7. Unit Tests

(Optional) Write unit tests for form validation, API interaction, and components using **Jest** and **React Testing Library**.

## Task Completion

Once the task is complete, create a pull request targeting the `develop` branch. Be sure to create a feature branch off of `develop` for your work.

Good luck!


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
