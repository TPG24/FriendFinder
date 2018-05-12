let friends = require("../data/friends.js");
let path = require('path');

module.exports = function (app) {
    app.get('api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('api/friends', function (req, res) {

        let number = 1000000;
        let perfectMatch;

        for (let i = 0; i < friends.length; i++) {
            let compareArray = [];

            for (let j = 0; j < friends[i].scores.length; j++) {
                compareArray.push(Math.abs(friends[i].scores[j] - req.body.scores[j]));

            }

            let matchScore = compareArray.reduce((a, b) => a + b, 0);

            if (matchScore < number) {
                number = matchScore;
                perfectMatch = friends[i];
            }
        }

        res.json(perfectMatch);

        friends.push(req.body);

    });
};