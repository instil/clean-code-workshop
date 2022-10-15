import {Item} from "./Item";

export class GildedRose {
    items: Item[];

    constructor(items: Item[] = []) {
        this.items = items;
    }

	updateQuality(): Item[] {
		this.items.forEach(this.updateItemQuality);
		return this.items;
	}

	private updateItemQuality(item: Item) {
		//TODO find out if JS has functors???
		if (item.appreciatesInQuality()) {
			item.appreciateQuality();
			if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
				if (item.sellIn < 11) {
					item.appreciateQuality();
				}
			}
		} else if (item.depreciatesInQuality()) {
			item.depreciateQuality();
		} 

		item.tick();

		if (item.sellIn < 0) {
			if (item.name !== 'Aged Brie') {
				if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
					if (item.quality > 0) {
						if (item.name !== 'Sulfuras, Hand of Ragnaros') {
							item.quality = item.quality - 1
						}
					}
				} else {
					item.quality = item.quality - item.quality
				}
			} else {
				if (item.quality < 50) {
					item.quality = item.quality + 1
				}
			}
		}

	}
}

