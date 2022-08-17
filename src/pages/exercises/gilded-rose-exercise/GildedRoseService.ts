import {Item} from "./Item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].type !== "Aged Brie" && this.items[i].type !== "Backstage passes to a TAFKAL80ETC concert") {
                if (this.items[i].quality > 0) {
                    if (this.items[i].type !== "Sulfuras, Hand of Ragnaros") {
                        this.items[i].quality = this.items[i].quality - 1;
                    }
                }
            } else {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                    if (this.items[i].type === "Backstage passes to a TAFKAL80ETC concert") {
                        if (this.items[i].sellIn < 11) {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                        if (this.items[i].sellIn < 6) {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                    }
                }
            }
            if (this.items[i].type !== "Sulfuras, Hand of Ragnaros") {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].type !== "Aged Brie") {
                    if (this.items[i].type !== "Backstage passes to a TAFKAL80ETC concert") {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].type !== "Sulfuras, Hand of Ragnaros") {
                                this.items[i].quality = this.items[i].quality - 1;
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality;
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                }
            }
        }

        return this.items;
    }

    updateQuality2(): Array<Item> {
        this.items.forEach(item => {
            item.handleQualityUpdate();
            item.handleSellInUpdate();
            if (item.sellIn < 0) {
                item.handleOutOfDateItems();
            }
        });

        return this.items;
    }
}

