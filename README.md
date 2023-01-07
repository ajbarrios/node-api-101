# Node API 101

This project is an example of a CRUD API made with **Node**, **Express**, and **Mongoose**.

The API implements basic CRUD operations in the **characters** collection of our **Mongo** database.

## Requirements

The API depends on a **MongoDB** connection. The database could be a local a cloud based one such as Mongo Atlas. 
In order to set up the connection, provide the Mongo connection string in the **.env** file when booting up the server.

## Installation

- Clean install dependencies:
  `npm ci`
  
- Run the server:
  `npm run dev`

  > This command runs the server using the default node environment variables in the ***.env*** file

## Usage

List of available endpoints:

- **GET** http://localhost:3000/characters
- **GET** http://localhost:3000/characters/:id
- **POST** http://localhost:3000/characters

  Example of the request body when creating the  character *Jon Snow*:
  ```
      {
        "name": "Jon", // required
        "lastName": "Snow", //required
        "house": "Stark" // optional, default "Stark"
      }
  ```

- **PATCH** http://localhost:3000/characters/:id

  Example of the request body when changing the lastName to Jon Snow:
  ```
      {
        "lastName": "Nieve"
      }
  ```
  
- **DELETE** http://localhost:3000/characters/:id
