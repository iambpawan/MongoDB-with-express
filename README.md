# Node.js CRUD Operations with MongoDB

This repository contains a Node.js application demonstrating basic CRUD (Create, Read, Update, Delete) operations using MongoDB.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. Clone this repository:

```bash
        git clone https://github.com/iambpawan/MongoDB-with-express.git
```
2. Database Connection
The application connects to a MongoDB database named "whatsapp" running on mongodb://127.0.0.1:27017.

3. Routes
- GET /chats: Retrieves all chats from the database and renders them in the index view.
- GET /chats/new: Renders a form to create a new chat.
- POST /chat: Handles the form submission to create a new chat in the database.
- GET /chats/:id/edit: Retrieves a specific chat by its ID and renders a form to edit it.
- PUT /chats/:id: Handles the form submission to update a chat in the database.
- DELETE /chats/:id: Deletes a chat from the database based on its ID.

4. Views
The application uses EJS (Embedded JavaScript) for rendering views. Views include:
- index.ejs: Lists all chats.
- newChat.ejs: Form for creating a new chat.
- edit.ejs: Form for editing a chat.

## Contributing
- Contributions are welcome! Feel free to open issues or pull requests to contribute to this project.
