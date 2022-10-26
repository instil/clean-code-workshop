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
        for (let i = 0; i < this.items.length; i++) {
            if (this.isNotAgedBrieAndIsNotBackstagePassesToATAFKAL80ETCConcert(i)) {
                if (this.itemQualityIsGreaterThanZero(i)) {
                    if (this.isNotSulfurasHandOfRagnaros(i)) {
                        this.itemQualityMinusOne(i);
                    }
                }
            } else {
                if (this.isItemsQualityLessThan50(i)) {
                    this.itemQualityPlusOne(i);
                    if (this.isBackStagePassesToATAFKAL80ETCConcert(i)) {
                        if (this.isSellinLessThan11(i)) {
                            if (this.isItemsQualityLessThan50(i)) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.isSellinLessThan6(i)) {
                            if (this.isItemsQualityLessThan50(i)) {
                                this.qualityPlusOne(i);
                            }
                        }
                    }
                }
            }
            if (this.isNotSulfurasHandOfRagnaros(i)) {
                this.sellInMinus1(i);
            }
            if (this.isSellinLessThanZero(i)) {
                if (this.isNotAgedBrie(i)) {
                    if (this.isNotBackstagePassesToATAFKAL80ETCConcert(i)) {
                        if (this.itemQualityIsGreaterThanZero(i)) {
                            if (this.isNotSulfurasHandOfRagnaros(i)) {
                                this.qualityMinusOne(i);
                            }
                        }
                    } else {
                        this.qualityMinusQuality(i);
                    }
                } else {
                    if (this.isItemsQualityLessThan50(i)) {
                        this.qualityPlusOne(i);
                    }
                }
            }
        }

        return this.items;
    }


    private itemQualityPlusOne(i: number) {
        this.items[i].quality = this.items[i].quality + 1
    }

    private itemQualityMinusOne(i: number) {
        this.items[i].quality = this.items[i].quality - 1
    }

    private isSellinLessThan11(sellIn: number) {
        return this.items[sellIn].sellIn < 11;
    }

    private qualityMinusQuality(i: number) {
        this.items[i].quality = this.items[i].quality - this.items[i].quality
    }

    private qualityPlusOne(i: number) {
        this.items[i].quality = this.items[i].quality + 1
    }

    private qualityMinusOne(i: number) {
        this.items[i].quality = this.items[i].quality - 1
    }

    private itemQualityIsGreaterThanZero(i: number) {
        return this.items[i].quality > 0;
    }

    private sellInMinus1(i: number) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
    }

    private isSellinLessThanZero(i: number) {
        return this.items[i].sellIn < 0;
    }

    private isSellinLessThan6(i: number) {
        return this.items[i].sellIn < 6;
    }

    private isNotBackstagePassesToATAFKAL80ETCConcert(i: number) {
        return this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert';
    }

    private isBackStagePassesToATAFKAL80ETCConcert(i: number) {
        return this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert';
    }

    private isNotSulfurasHandOfRagnaros(i: number) {
        return this.items[i].name !== 'Sulfuras, Hand of Ragnaros';
    }

    private isNotAgedBrie(i: number) {
        return this.items[i].name !== 'Aged Brie';
    }

    private isNotAgedBrieAndIsNotBackstagePassesToATAFKAL80ETCConcert(i: number) {
        return this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert';
    }

    private isItemsQualityLessThan50(i: number) {
        return this.items[i].quality < 50;
    }
}

