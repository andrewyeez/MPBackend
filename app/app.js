var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('change Nuts!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// docker run -v /Users/AndrewPro/Desktop/MealPlanner/backend:/src -d -p 3000:3000 backend
