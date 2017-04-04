# Macro Counter API
Develop a restful api that will be used to monitor a users daily meals while keeping track of the macros. It will implement a token authentication system to verify the request and use mongodb to store the data.

# April 2017 To Do
* Set up and use authenticated calls
* Use ENV variables to set up config logics
* Fix issue with the copy file path to not include node_module folders (Dockerfile issue)
* Seeded Database
* Create Automated Test Cases [Find a framework to use]
  * Test Endpoints (functional)
  * Test Database connection (functional)
  * Test Relations (unit)
  * Test new npm packages being used (integration)

# Days API

Request  | URI               | Action
-------- | ----------------- | ---------------
GET      |  /days            | List all days
GET      |  /days/{id}       | List a day
PUT      |  /days/{id}       | Update a day
POST     |  /days/user/{id}  | List all days by a user

# Meals API

Request  | URI          | Action
-------- | ------------ | ---------------
GET      |  /meals      | List all meals
GET      |  /meals/{id} | List a meal
PUT      |  /meals/{id} | Update a meal
POST     |  /meals      | Create a meal

# Users API

Request  | URI          | Action
-------- | ------------ | ---------------
GET      |  /users      | List all users
GET      |  /users/{id} | List a user
PUT      |  /users/{id} | Update a username
POST     |  /users      | Create a user
