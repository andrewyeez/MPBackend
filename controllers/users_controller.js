// Users Route Module

module.exports.controller = function(app) {

  // dummy test page
  app.get('/users', function(req,res){
    data = USERS.all
    res.json(data)
  })

}


// dummy USERS object
// Mimics an Object representation of the USERS db

var USERS = {
  all: {
      "1": {
        "first_name": "Andrew",
        "last_name": "Yee",
        "email": "andrew.yee@mail.com",
        "password": "password"
      },
      "2": {
        "first_name": "Demo",
        "last_name": "User",
        "email": "demo.user@mail.com",
        "password": "password"
      },
      "3": {
        "first_name": "Demo",
        "last_name": "Admin",
        "email": "demo.admin@mail.com",
        "password": "password"
      }
    }
}
