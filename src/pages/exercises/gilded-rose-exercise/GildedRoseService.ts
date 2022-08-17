import {Item} from "./Item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        let isSulfuras = true;
        let isAgedBrie = true;
        let isBackstagePass = true;

        for (let i = 0; i < this.items.length; i++) {
            isAgedBrie = this.checkForAgedBrie(this.items[i]);
            isSulfuras = this.checkForSulfuras(this.items[i]);
            isBackstagePass = this.checkForBackstagePass(this.items[i]);

            if (!isAgedBrie && !isBackstagePass) {
                if (this.items[i].quality > 0) {
                    if (!isSulfuras) {
                        this.items[i].quality = this.items[i].quality - 1;
                    }
                }
            } else {
                this.qualityBelow50Procedure(this.items[i]);
                    if (isBackstagePass) {
                        if (this.items[i].sellIn < 11) {
                            this.qualityBelow50Procedure(this.items[i]);
                        }
                        if (this.items[i].sellIn < 6) {
                            this.qualityBelow50Procedure(this.items[i]);
                        }
                    }

            }
            if (!isSulfuras) {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (!isAgedBrie) {
                    if (!isBackstagePass) {
                        if (this.items[i].quality > 0) {
                            if (!isSulfuras) {
                                this.items[i].quality = this.items[i].quality - 1;
                            }
                        }
                    } else {
                        this.items[i].quality = this.items[i].quality - this.items[i].quality;
                    }
                } else {
                    this.qualityBelow50Procedure(this.items[i]);
                }
            }
        }

        return this.items;
    }

    private checkQualityGreaterThan0(item: Item) : boolean{
        if(item.quality > 0 ) {
            return true;
        } else {
            return false;
        }
    }


    private qualityBelow50Procedure(item: Item) {
        if (item.quality < 50) {
            item.quality++;
        }
    }

    private checkForAgedBrie(item: Item) : boolean {
        if(item.name !== "Aged Brie"){
            return false;
        } else {
            return true;
        }
    }

    private checkForBackstagePass(item: Item) : boolean {
        if(item.name !== "Backstage passes to a TAFKAL80ETC concert"){
            return false;
        } else {
            return true;
        }
    }

    private checkForSulfuras(item:Item) : boolean{
        if(item.name !== "Sulfuras, Hand of Ragnaros"){
            return false;
        } else {
            return true;
        }
    }
}


