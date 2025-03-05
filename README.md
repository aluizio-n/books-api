
# Books API

A simple RESTful API for managing books, designed with TypeScript. This project provides basic functionalities such as adding, updating, and deleting books, as well as retrieving information about them.

## Features
- CRUD operations for books
- Built using TypeScript
- Prisma ORM for database interactions
- REST API architecture

## Technologies Used
- TypeScript
- Prisma
- Node.js
- Express.js

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aluizio-n/books-api.git
   cd books-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your database using Prisma:
   ```bash
   npx prisma migrate dev
   ```

4. Start the application:
   ```bash
   npm start
   ```

## Endpoints
- `GET /books`: Fetch all books
- `POST /books`: Add a new book
- `PUT /books/:id`: Update an existing book
- `DELETE /books/:id`: Delete a book
