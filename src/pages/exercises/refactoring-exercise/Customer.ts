import {Movie} from "./Movie";
import {Rental} from "./Rental";

export class Customer {
	name: string;
	private rentals: Rental[];

	constructor(name: string) {
		this.name = name;
		this.rentals = [];
	}

	appendRental(rental: Rental) {
		this.rentals.push(rental);
	}

	generateStatement() {
		let result = '';
		result += this.generateStatementStub();
		result += this.generateStatementBody();
		result += this.generateFooter();
		return result;
	}

	private generateStatementStub() {
		return `\nRental Record for ${this.name}\n`;
	}

	private generateStatementBody = () => this.rentals
			.map(this.generateStatementLine)
			.join("\n");


	private generateStatementLine(rental: Rental) {
		return `\t${rental.daysRented}\t${rental.movie.title}\t${rental.getCost()}`;
	}

	private generateFooter = () => {
		return `Amount owed is ${this.getTotalCost()}\nYou earned ${this.getTotalFrequentRenterPoints()} frequentRenterPoints\n`;
	}

	private getTotalCost = () => {
		return this.rentals
			.map((rental: Rental) => rental.getCost())
			.reduce((total: number, next: number) => total + next, 0);
	}

	private getTotalFrequentRenterPoints = () => {
		return this.rentals
			.map((rental: Rental) => rental.getFrequentRenterPoints())
			.reduce((total: number, next: number) => total + next, 0);
	}
}
