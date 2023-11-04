Here's an example of JavaScript code that demonstrates an elaborate implementation of a ticket booking system for a cinema. 

```javascript
/*
 * Filename: cinema_ticket_booking.js
 * Description: An elaborate ticket booking system for a cinema
 * Author: Your Name
 * Date: July 2021
 */

// Define classes for Cinema, Movie, and Ticket
class Cinema {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.movies = [];
    this.seats = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  addSeat(seat) {
    this.seats.push(seat);
  }

  getMovieByName(movieName) {
    return this.movies.find((movie) => movie.name === movieName);
  }
}

class Movie {
  constructor(name, duration, genre) {
    this.name = name;
    this.duration = duration;
    this.genre = genre;
    this.showtimes = [];
  }

  addShowtime(showtime) {
    this.showtimes.push(showtime);
  }
}

class Showtime {
  constructor(movie, time, seats = []) {
    this.movie = movie;
    this.time = time;
    this.seats = seats;
  }

  bookSeat(seat) {
    this.seats.push(seat);
  }
}

class Seat {
  constructor(row, number, isAvailable = true) {
    this.row = row;
    this.number = number;
    this.isAvailable = isAvailable;
  }
}

// Demo usage
const cinema = new Cinema("ABC Cinema", "New York");

const movie1 = new Movie("Movie 1", "2 hours", "Action");
movie1.addShowtime(new Showtime(movie1, "10:00 AM"));
movie1.addShowtime(new Showtime(movie1, "1:00 PM"));
cinema.addMovie(movie1);

const movie2 = new Movie("Movie 2", "1.5 hours", "Comedy");
movie2.addShowtime(new Showtime(movie2, "4:00 PM"));
movie2.addShowtime(new Showtime(movie2, "7:00 PM"));
cinema.addMovie(movie2);

cinema.addSeat(new Seat("A", "1"));
cinema.addSeat(new Seat("A", "2"));
cinema.addSeat(new Seat("B", "1"));
cinema.addSeat(new Seat("B", "2"));

const selectedMovie = cinema.getMovieByName("Movie 1");
const selectedShowtime = selectedMovie.showtimes[0];
selectedShowtime.bookSeat(cinema.seats[0]);
selectedShowtime.bookSeat(cinema.seats[1]);

console.log(cinema);
```

This code models a cinema ticket booking system using classes and demonstrates the creation of cinema, movie, showtime, and seat objects. It also shows how to add movies, showtimes, and seats to a cinema, and how to book a seat for a specific showtime. The resulting cinema object is then printed to the console for demonstration purposes.