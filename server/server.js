const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
    {
      "Title": "The Dark Knight",
      "Released": "2008-07-18",
      "Runtime": 152,
      "Genres": ["Action", "Crime", "Drama"],
      "Directors": ["Christopher Nolan"],
      "Writers": ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
      "Actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": 84,
      "imdbRating": 9.0
    },
    {
      "Title": "Pulp Fiction",
      "Released": "1994-10-14",
      "Runtime": 154,
      "Genres": ["Crime", "Drama"],
      "Directors": ["Quentin Tarantino"],
      "Writers": ["Quentin Tarantino", "Roger Avary"],
      "Actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      "Plot": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTItNjUzZi00MzRjLWE3ZjQtYmAwOGExM2RiMjQxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "Metascore": 94,
      "imdbRating": 8.9
    },
    {
      "Title": "Interstellar", // best film :)
      "Released": "2014-11-07",
      "Runtime": 169,
      "Genres": ["Adventure", "Drama", "Sci-Fi"],
      "Directors": ["Christopher Nolan"],
      "Writers": ["Jonathan Nolan", "Christopher Nolan"],
      "Actors": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Metascore": 74,
      "imdbRating": 8.6
    }
  ];
  
  // Send the array as valid JSON
  res.json(movies);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

