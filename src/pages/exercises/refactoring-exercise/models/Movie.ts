export type PriceCode = 'REGULAR' | 'NEW_RELEASE' | 'CHILDRENS';

export interface Movie {
    title: string;
    priceCode: PriceCode;
}