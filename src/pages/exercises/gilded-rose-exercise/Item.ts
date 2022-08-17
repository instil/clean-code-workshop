type ItemType = "Aged Brie" | "Sulfuras, Hand of Ragnaros" | "Backstage passes to a TAFKAL80ETC concert" | "Conjured";

export class Item {
    constructor(public type: ItemType , public sellIn: number, public quality: number) {
    }

    handleQualityUpdate() {
        switch (this.type) {
            case "Aged Brie":
                this.quality += this.quality < 50 ? 1 : 0;
                break;
            case "Sulfuras, Hand of Ragnaros":
                this.quality += this.quality > 0 ? 1 : 0;
                break;
            case "Backstage passes to a TAFKAL80ETC concert":
                this.quality += this.quality < 50 ? 1 : 0;
                this.quality += this.sellIn < 11 ? 1 : 0;
                this.quality += this.sellIn < 6 ? 1 : 0;
                break;
            case "Conjured":
                this.quality -= this.quality > 0 ? 1 : 0;
                break;
        }
    }

    handleSellInUpdate() {
        switch (this.type) {
            case "Sulfuras, Hand of Ragnaros":
                break;
            default:
                this.sellIn--;
                break;
        }
    }

    handleOutOfDateItems() {
        switch (this.type) {
            case "Aged Brie":
                this.quality += this.quality < 50 ? 1 : 0;
                break;
            case "Sulfuras, Hand of Ragnaros":
                break;
            case "Backstage passes to a TAFKAL80ETC concert":
                this.quality = 0;
                break;
            case "Conjured":
                this.quality -= this.quality > 0 ? 1 : 0;
                break;

        }
    }
}