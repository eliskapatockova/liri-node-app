
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

function concertThis(value){
    axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
    .then(function(response) { 
        for (var i = 0; i < response.data.length; i++) {
            var datetime = response.data[i].datetime;
            datetime = datetime.split('T');
            var concertResults = 
            "--------------------------------------------------------------------" +
                "\nVenue Name: " + response.data[i].venue.name + 
                "\nVenue Location: " + response.data[i].venue.city +
                "\nDate of the Event: " + moment(datetime[0], "MM-DD-YYYY");
                console.log(concertResults);
        }
    })
}

function spotifySong(value) {
    if(!value){
        value = "Fergalicious";
    }
    spotify
    .search({ type: 'track', query: value })
    .then(function(response) {
        for (var i = 0; i < 5; i++) {
            var spotifyResults = 
                "--------------------------------------------------------------------" +
                    "\nArtist(s): " + response.tracks.items[i].artists[0].name + 
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nPreview Link: " + response.tracks.items[i].preview_url;
                    
            console.log(spotifyResults);
        }
    })
}

