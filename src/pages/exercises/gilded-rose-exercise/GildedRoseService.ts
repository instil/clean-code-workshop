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
    
    private static AGED_BRIE = "Aged Brie";
    private static BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
    private static SULFURAS = "Sulfuras, Hand of Ragnaros";
    private static CONJURED = "Conjured";
    
    updateQuality() {
        this.items.forEach(item => {
            if (this.isConjured(item) && this.hasQuality(item)) {
                this.decrementQuality(item);
            } else {
                if (this.qualityIsLessThanFifty(item)) {
                    this.incrementQuality(item);
                    if (this.isBackstagePasses(item)) {
                        if (this.sellInIsLessThan(11, item)) this.incrementQuality(item);
                        if (this.sellInIsLessThan(6, item)) this.incrementQuality(item);
                    }
                }
            }
            if (!this.isSulfuras(item)) {
                this.decrementQuality(item);
            }
            if (this.sellInIsLessThan(0, item)) {
                if (!this.isAgedBrie(item) && !this.isBackstagePasses(item)) {
                    if (this.hasQuality(item) && !this.isSulfuras(item)) {
                        this.decrementQuality(item);
                    } else {
                        this.setItemQualityToZero(item);
                    }
                } else {
                    if (this.qualityIsLessThanFifty(item)) {
                        this.incrementQuality(item);
                    }
                }
            }
        });
        
        return this.items;
    }

    private isAgedBrie(item: Item) {
        return item.name === GildedRose.AGED_BRIE;
    }

    private isSulfuras(item: Item) {
        return item.name === GildedRose.SULFURAS;
    }

    private sellInIsLessThan(value: number, item: Item) {
        return item.sellIn < value;
    }

    private setItemQualityToZero(item: Item) {
        item.quality = 0;
    }

    private isBackstagePasses(item: Item) {
        return item.name === GildedRose.BACKSTAGE_PASSES;
    }

    private qualityIsLessThanFifty(item: Item) {
        return item.quality < 50;
    }

    private isConjured(item: Item) {
        return item.name === GildedRose.CONJURED;
    }

    private hasQuality(item: Item) {
        return item.quality > 0;
    }

    private incrementQuality(item: Item) {
        item.quality = item.quality + 1;
    }

    private decrementQuality(item: Item) {
        item.quality = item.quality - 1;
    }
}

