import {Item} from "./Item";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(): Array<Item> {
        this.items.forEach(item => item.handleItemUpdates());

        return this.items;
    }
}

