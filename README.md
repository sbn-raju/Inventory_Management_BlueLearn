# Inventory Management System

# Admin Username And Passward
Username:user@ima
Passward:ima@123

# Install dependencies:
cd inventory-management
npm install

# Set up MongoDB:
Make sure MongoDB is installed and running.
Configure the MongoDB connection in app.js or .env file if using environment variables.
# Run the application:
npm start

# Access the application:
Open your web browser and go to http://localhost:8080.

# Usage
Creating an Item:
Access the create form by clicking on the "Create" button.
Fill in the details and click "Submit" to add a new item.

# Updating an Item:
Access the update form by clicking on the "Update" button.
Select the item you want to update, fill in the new details, and click "Update".

# Reading Items:
Access the show page by clicking on the "Show" button.
Select a category to view items in that category.

# Deleting an Item:
Access the destroy page by clicking on the "Destroy" button.
Select the item you want to delete and click "Delete".

# Folder Structure
models/: Contains Mongoose models for Category and Item.
public/: Contains static assets (CSS files, images, etc.).
views/: Contains EJS templates for rendering HTML.
app.js: Main entry point of the application.
README.md: Documentation for the project.

# Dependencies
express: Web framework for Node.js.
mongoose: MongoDB object modeling for Node.js.
method-override: Middleware for HTTP method override.
ejs: Embedded JavaScript templates for rendering HTML.

# Contributing
If you'd like to contribute to this project, please open an issue or submit a pull request.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

- The README file provides instructions on how to set up the project, including cloning the repository, installing dependencies, and running the application.
- It explains how to use the application, including creating, updating, reading, and deleting items.
- It outlines the folder structure of the project and lists the dependencies used.
- It includes a section on contributing and the project's license.