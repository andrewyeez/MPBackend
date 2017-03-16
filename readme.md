# MPBackend
Meal Planner Backend service

# Users API

Request  | URI          | Action
-------- | ------------ | ---------------
GET      |  /users      | List all users
GET      |  /users/{id} | List a user
PUT      |  /users/{id} | Update a user
POST     |  /users      | Create a user

# Issue
The npm install is currently not working as intended, I want to mount my host directory to the app container but it has to map 1 to 1 and for that reason my local node_modules folder has to exist and contain all the dependencies on my packagejson. This was not what I intented to happend, I would like to have a dockerfile spin up a container that will download the necesaary dependencies and still be able to mount with my app. Maybe I just have to remove the node_module folder from my directory to accomplish this and only include certain folders.
