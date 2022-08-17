import {Item} from "../models/Item";

function isAgedBrie(item: Item) {
    return item.name === "Aged Brie";
}

function isSulfuras(item: Item) {
    return item.name === "Sulfuras, Hand of Ragnaros";
}

function isBackstagePass(item: Item) {
    return item.name === "Backstage passes to a TAFKAL80ETC concert";
}

function decrementQuality(item: Item) {
    if (item.quality > 0 && !isSulfuras(item)) {
        item.quality = item.quality - 1
    }
}

function incrementQuality(item: Item) {
    if (item.quality < 50) {
        item.quality = item.quality + 1
    }
}

function updateSellIn(item: Item) {
    if (!isSulfuras(item)) {
        item.sellIn = item.sellIn - 1;
    }
}

function pastSellBy(item: Item) {
    return item.sellIn < 0;
}

function makeWorthless(item: Item) {
    item.quality = 0;
}

function incrementQualityBasedOnSellBy(item: Item) {
    if (item.sellIn < 11) {
        incrementQuality(item);
    }
    if (item.sellIn < 6) {
        incrementQuality(item);
    }
}

function updateQualityBasedOnSellIn(item: Item) {
    if (pastSellBy(item)) {
        if (!isAgedBrie(item)) {
            if (!isBackstagePass(item)) {
                decrementQuality(item);
            } else {
                makeWorthless(item);
            }
        } else {
            incrementQuality(item);
        }
    }
}

function isBrieOrBackstagePass(item: Item) {
    return isAgedBrie(item) || isBackstagePass(item);
}

function defaultQualityUpdate(item: Item) {
    if (!isBrieOrBackstagePass(item)) {
        decrementQuality(item);
    } else {
        incrementQuality(item);
        if (isBackstagePass(item)) {
            incrementQualityBasedOnSellBy(item);
        }
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            defaultQualityUpdate(item);
            updateSellIn(item);
            updateQualityBasedOnSellIn(item);
        })

        return this.items;
    }
}

