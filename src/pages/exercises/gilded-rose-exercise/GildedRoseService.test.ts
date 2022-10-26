import {GildedRose, Item} from "./GildedRoseService";

describe("should run all the tests", () => {
	beforeEach(() => {
		const gildedRoseItems = new GildedRose([
			new Item("Aged Brie", 1, 1),
			new Item("Sulfuras, Hand of Ragnaros", 1, 1),
			new Item("Backstage passes to a TAFKAL80ETC concert", 11, 1),
			new Item("Conjured", 1, 2)
		]);

		let output = gildedRoseItems.updateQuality();
	})

	it("should have the correct aged brie", () => {
	});
});