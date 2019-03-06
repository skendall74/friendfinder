//array that holds all the 'friends' that have taken the survey
//initialize starting with 'dummy' data

var friends = [
  {
    "name": "Shannon Kendall",
    "photo": "https://avatars1.githubusercontent.com/u/26032389?s=460&v=4",
    "scores": [
      5,
      3,
      7,
      2,
      7,
      6,
      4,
      3,
      8,
      6
    ]
  },
  {
    "name": "Tony",
    "photo": "https://media.licdn.com/dms/image/C4E03AQFHwI9fw5wRCw/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=JL_Kczf4znqxaADuhziZc6Iwm3NCBVov9R7V7lIr2c0",
    "scores": [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
  },
  {
    "name": "Kyle",
    "photo": "https://pbs.twimg.com/profile_images/1069977708661219330/ElWyxxZJ_400x400.jpg",
    "scores": [
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
    ]
  },
  {
    "name": "Luuuuuukkkkkeee",
    "photo": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/panthers/jl1awp1hepdukoz7nvjd.jpg",
    "scores": [
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
    ]
  },
  {
    "name": "Lincoln",
    "photo": "https://media.gettyimages.com/photos/directorproducer-lincoln-ruchti-from-the-film-chasing-ghosts-beyond-picture-id73078934",
    "scores": [
      2,
      1,
      4,
      5,
      2,
      5,
      5,
      4,
      2,
      4,
    ]
  }
]

function findMatch(data) {
  var diff = [];
  var userScores = [];
  for (i in data['userScores[]']) {
    var num = parseInt(data['userScores[]'][i]);
    userScores.push(num);
  };
  for (i in friends) {
    var abs = 0;
    for (j in friends[i].scores) {
      var num = parseInt(friends[i].scores[j])
      abs = abs + Math.abs(num - userScores[j]);
    }
    diff.push(abs);
  };
  diff.pop();
  var smallest = Math.min(...diff);
  var match = friends[diff.indexOf(smallest)];
  return match;
};

exports.findMatch = findMatch;
exports.FriendsList = friends;