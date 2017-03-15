# MPBackend
Meal Planner Backend service

# Users API

Request  | URI          | Action
-------- | ------------ | ---------------
GET      |  /users      | List all users
GET      |  /users/:id  | List a user
PUT      |  /users/:id  | Update a user
POST     |  /users      | Create a user

# TODO
Need to plan the bigger picture of what the backend end needs to provide.
Go back to the user stories and finish what will be needed. We need to also
connect to a database that will persist outside the app container. Preferably
using MongoDB with Mongoose framework.
