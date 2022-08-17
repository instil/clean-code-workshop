export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let item of this.items) {
            this.isNotBrieOrBackstagePass(item);
            this.isNotSulfuras(item);
            this.isSellInLessThanZero(item);
        }

        return this.items;
    }

    private isSellInLessThanZero(item: Item) {
        if (this.isSellInLessThan(item.sellIn, 0)) {
            if (this.isBrie(item.name)) {
                if (this.isBackstagePass(item.name)) {
                    if (this.isQualityGreaterThanZero(item.quality)) {
                        this.isNotSulfuras(item);
                    }
                } else {
                    item.quality = 0
                }
            } else {
                if (this.isQualityLessThan(item.quality, 50)) {
                    item.quality += 1
                }
            }
        }
    }

    private isNotBrieOrBackstagePass(item: Item) {
        if (this.isBrie(item.name) && this.isBackstagePass(item.name)) {
            if (this.isQualityGreaterThanZero(item.quality)) {
                this.isNotSulfuras(item)
            }
        } else {
            if (this.isQualityLessThan(item.quality, 50)) {
                item.quality += 1
                if (this.isBackstagePass(item.name)) {
                    if (this.isSellInLessThan(item.sellIn, 11)) {
                        item.quality += 1
                    }
                    if (this.isSellInLessThan(item.sellIn, 6)) {
                        item.quality += 1
                    }
                }
            }
        }
    }

    private isNotSulfuras(item: Item): Item{
        if (item.name !== 'Sulfuras, Hand of Ragnaros')
            item.sellIn -= 1;
        return item;
    }

    private isBrie(name: string): boolean{
        return(name === 'Aged Brie')
    }

    private isQualityGreaterThanZero(quality: number): boolean{
        return (quality > 0);
    }

    private isBackstagePass(name: string): boolean{
        return (name === 'Backstage passes to a TAFKAL80ETC concert')
    }

    private isQualityLessThan(quality: number, checkAgainst: number): boolean{
        return (quality < checkAgainst);
    }

    private isSellInLessThan(sellIn: number, checkAgainst: number): boolean{
        return (sellIn < checkAgainst);
    }
}

