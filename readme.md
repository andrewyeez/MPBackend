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

# Issue (1)
The npm install is currently not working as intended, I want to mount my host directory to the app container but it has to map 1 to 1 and for that reason my local node_modules folder has to exist and contain all the dependencies on my packagejson. This was not what I intented to happend, I would like to have a dockerfile spin up a container that will download the necesaary dependencies and still be able to mount with my app. Maybe I just have to remove the node_module folder from my directory to accomplish this and only include certain folders.

# Insight on the Issue (1)

[http://stackoverflow.com/questions/29181032/add-a-volume-to-docker-but-exclude-a-sub-folder] First, using the ADD instruction in a Dockerfile is very different from using a volume (either via the -v argument to docker run or the VOLUME instruction in a Dockerfile). The ADD and COPY commands just take a copy of the files at the time docker build is run. These files are not updated until a fresh image is created with the docker build command. By contrast, using a volume is essentially saying "this directory should not be stored in the container image; instead use a directory on the host"; whenever a file inside a volume is changed, both the host and container will see it immediately.
