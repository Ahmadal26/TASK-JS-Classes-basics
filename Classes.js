/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }
  printName() {
    return this.firstName + " " + this.lastName;
  }

  calculateAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

const object1 = new Person("Ahmad", "Musallam", "Male", 1999);
const object2 = new Person("Osama", "Al-Shammari", "Male", 2000);
const object3 = new Person("Wahab", "Abdal", "Male", 2001);

console.log(object1.printName());
console.log(object2.printName());
console.log(object3.printName());
console.log(
  object1.calculateAge(2023) +
    object2.calculateAge(2023) +
    object3.calculateAge(2023)
);

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  rating = [];
  constructor(title, duraton, genre) {
    this.title = title;
    this.duraton = duraton;
    this.genre = genre;
  }

  rate(rating) {
    if (rating > 0 && rating <= 10) {
      this.rating.push(rating);
    }
  }

  avereageRating() {
    const sum = this.rating.reduce((a, b) => a + b);
    return sum / this.rating.length;
  }
}

const movie1 = new Movie("black clover", 140, "funny");
//console.log(movie1.rating);
movie1.rate(9);
movie1.rate(9);
movie1.rate(10);
movie1.rate(10);
console.log(movie1.rating);
console.log(movie1.avereageRating());

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

class Actor extends Person {
  movies = [];
  constructor(firstName, lastName, gender, birthYear, movies = []) {
    super(firstName, lastName, gender, birthYear);
    this.movies = movies;
  }

  addMovie(movie) {
    this.movies.push(movie);
  }
}
const actor = new Actor("Ahmad", "Musallam", "male", 1999);
actor.addMovie("Dragon Ball");
actor.addMovie(" Attack on Titans");
console.log(actor.movies);
