//Dependencies

//api/friends - this handles incoming survey results.will also used to handle the compatibility logic


var path = require('path');

var friends = require(path.join(__dirname, '../data/friends.js'));

//Routing
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.send(friends.FriendsList);
  });


  app.post('/api/friends', function (req, res) {
    console.log(req.body)
    res.send(friends.findMatch(req.body));
  });

};