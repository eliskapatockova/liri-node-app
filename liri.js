
require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');
var fs = require('fs');

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var value = process.argv[3];

switch (command) {
    case "concert-this":
        concertThis(value);
        break;
    case "spotify-this-song":
        spotifySong(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-what-it-says":
        doThis(value);
        break;
};

