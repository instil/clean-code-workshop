import {Movie} from "./Movie";
import * as _ from "lodash";

export class AnswerGenerator {
	movies: Movie[];

	constructor(movies: Movie[]) {
		this.movies = movies;
	}

	private getTitles = (movies: Movie[]) => movies
		.map((movie: Movie) => movie.title)
		.join("; ");

	public q1 = () => this.getTitles(this.movies);

	public q2 = () => this.getTitles(
		this.movies.filter((movie: Movie) => movie.rating === "GREAT")
	);

	private getReleaseYear = (movie: Movie) => movie.releaseDate.getFullYear();

	public q3 = () => this.movies
		.filter((movie: Movie) => this.getReleaseYear(movie) === 1984)
		.map(movie => `${movie.title} (${movie.rating})`)
		.join("; ");
		
	private allQuotes = () => this.movies.flatMap(movie => movie.quotes);

	public q4 = () => this.allQuotes().join("\n")

	public q5 = () => (this.allQuotes().reduce((total, next) => total + next.length, 0) / this.allQuotes().length).toFixed(2);

	private yearIsInEighties = (year: number) => year >= 1980 && year < 1990;

	public q6 = () => this.getTitles(
		this.movies.filter(movie => this.yearIsInEighties(this.getReleaseYear(movie)))
	);

	private yearIsInNineties = (year: number) => year >= 1990 && year < 2000;

	public q7 = () => this.getTitles(
		this.movies.filter(movie => this.yearIsInNineties(this.getReleaseYear(movie)))
	);

	
	private moviesByRating = () => _.groupBy(this.movies, (m:Movie) => m.rating);

	q8 = () => Object.entries(this.moviesByRating())
		.map(([rating, movies]) => `${rating}:\n\t${this.movies.map(m => m.title).join("\n\t")}`)
		.join('\n');

}
