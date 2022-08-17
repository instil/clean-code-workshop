//import {Item} from "./Item";

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

    constructor(public items = [] as Array<Item>) {}

    isAgedBrie(itemName: string):boolean {
        return itemName === "Aged Brie";
    }

    isBackStagePasses(itemName: string): boolean {
        return itemName === "Backstage passes to a TAFKAL80ETC concert";
    }
    isSulfuras(itemName: string): boolean {
        return itemName === "Sulfuras, Hand of Ragnaros";
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            // if (this.items[i].name === "Conjured" && this.items[i].quality > 0) {
            //     this.items[i].quality = this.items[i].quality - 1
            // }
            if (!this.isAgedBrie(this.items[i].name) && !this.isBackStagePasses(this.items[i].name)) {
                if (this.items[i].quality > 0) {
                    if (!this.isSulfuras(this.items[i].name)) {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            }
            else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (this.isBackStagePasses(this.items[i].name )) {
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (!this.isSulfuras(this.items[i].name) ) {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (!this.isAgedBrie(this.items[i].name)) {
                    if (!this.isBackStagePasses(this.items[i].name)) {
                        if (this.items[i].quality > 0) {
                            if (!this.isBackStagePasses(this.items[i].name )) {
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }



}

