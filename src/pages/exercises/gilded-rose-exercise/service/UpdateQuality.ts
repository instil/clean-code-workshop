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
const MAXIMUM_QUALITY = 50
const MINIMUM_QUALITY = 0

const isLessThanMaximum = (quality: number): boolean => quality < MAXIMUM_QUALITY
const isOverMinimum = (quality: number): boolean => quality > MINIMUM_QUALITY

const increaseQuality = (quality: number) => isLessThanMaximum(quality) ? quality + 1 : quality
const decreaseQuality = (quality: number) => isOverMinimum(quality) ? quality - 1 :  quality

export const updateQualityForAgedBrie = (item :Item)  =>  {
    item.quality = increaseQuality(item.quality)
    item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality
    item.sellIn -= 1;

    return item
}

const increaseQualityForConcert = (item: Item): number => {
    let quality = increaseQuality(item.quality);
    quality = item.sellIn < 11 ? increaseQuality(quality) : quality;
    quality = item.sellIn < 6 ? increaseQuality(quality) : quality;

    return quality
}

export const updateQualityForConcert = (item :Item) => {
    item.quality = item.sellIn === 0 ? 0 : increaseQualityForConcert(item);
    item.sellIn -= 1

    return item;
}

export const updateQualityForSulfuras = (item:Item) => {
    item.quality = 80;

    return item
}

const updateConjuredQuality = (item:Item):Item => {
    item.quality = updateQualityItem(item).quality;
    item.quality = updateQualityItem(item).quality;
    return item
}

export const updateQualityForConjured = (item:Item) :Item => {
    if (item.sellIn === 5) {
        item.quality -= 3
    } else {
        item = updateQualityItem(item)
        item = updateQualityItem(item)
    }
    item.sellIn -= 1

    return item
}

const updateQualityItem = (item :Item): Item => {
    item.quality = decreaseQuality(item.quality);
    item.quality = item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality

    return item;
}


export const updateQualityForNormalItem = (item:Item): Item => {
    item = updateQualityItem(item)
    item.sellIn -= 1

    return item
}

