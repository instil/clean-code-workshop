import {Item} from "./Item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (!this.nameAgedBrie(i) && !this.backStage(i)) {
                this.quanityExists(i);
            } else {
                this.quanityLessthan50(i);
            }

            if (!this.isSulfuras(i)) {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }

            if (this.items[i].sellIn < 0) {
                if (this.nameAgedBrie(i)) {
                    if (!this.backStage(i)) {
                        this.quanityExists(i);
                    } else {
                        this.items[i].quality = 0
                    }
                } else {
                    this.quanityLessthan50(i);
                }
            }
        }
        return this.items;
    }



    private quanityExists(i: number) {
        if (this.items[i].quality > 0) {
            if (!this.isSulfuras(i)) {
                this.decrementQuality(i)
            }
        }
    }

    private backStage(i: number) {
        return this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert';
    }

    private quanityLessthan50(i: number) {
        if (this.items[i].quality < 50) {
            if (this.backStage(i) && this.items[i].sellIn < 11) {
                this.incrementQuality(i, 2)
            }
        } else {
            this.incrementQuality(i)
        }
    }

        private incrementQuality(i: number, incrementval= 1) {
                this.items[i].quality = this.items[i].quality + incrementval
            }

        private decrementQuality(i: number) {
                this.items[i].quality = this.items[i].quality - 1
            }

        private nameAgedBrie(i: number) {
                return this.items[i].name == 'Aged Brie';
            }

        private isSulfuras(i: number) {
                return this.items[i].name == 'Sulfuras, Hand of Ragnaros';
            }

}

