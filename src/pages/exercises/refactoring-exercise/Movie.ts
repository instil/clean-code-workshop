export class Movie {
    priceCode: string;
    title: string;

    constructor(title: string, priceCode: string) {
        this.title = title;
        this.priceCode = priceCode;
    }
}