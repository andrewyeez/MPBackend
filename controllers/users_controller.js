// Users Route Module
var PATH = '/users'
module.exports.controller = function(app) {
  /**
   * lol got bored and made this table 
   * _________________________________________________
   * |__Request__|______URI_____|__Input__|__Output__|
   * |   GET     | '/users'     |         |  json    |
   * |   POST    | '/users'     |         |  json    |
   * |   PUT     | '/users'     |         |  json    |
   * |   GET     | '/users/:id' |         |  json    |
   * -------------------------------------------------
   */
  app.get(PATH, function(req,res){
    data = USERS.all
    res.json(data)
  })
  app.post(PATH, function (req, res) {
    res.send('POST request to the homepage')
  })

  app.put(PATH, function (req, res) {
    res.send('PUT request to the homepage')
  })
  app.get(PATH + '/:id', function(req,res){
    data = USERS.all
    data = data[req.param("id")]
    res.json(data)
  })
}

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
