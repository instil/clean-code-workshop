export class Rental {
    constructor(private movie: any, private daysRented: any) {
    }

    public getMovie() {return this.movie;}
    public getDaysRented() {return this.daysRented;}
}