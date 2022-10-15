type ItemType = "Aged Brie" | "Sulfuras, Hand of Ragnaros" | "Backstage passes to a TAFKAL80ETC concert" | "Conjured";

export class Item {
    private isHighQuality = this.quality < 50;
    private isNotFullyDegraded = this.quality > 0;

    constructor(public type: ItemType, public sellIn: number, public quality: number) {
    }

    handleItemUpdates() {
        this.handleOutOfDateItems();
        this.handleQualityUpdate();
        this.handleSellInUpdate();
    }

    private handleQualityUpdate() {
        switch (this.type) {
            case "Aged Brie":
                this.quality += this.isHighQuality ? 1 : 0;
                break;
            case "Sulfuras, Hand of Ragnaros" || "Conjured":
                this.quality -= this.isNotFullyDegraded ? 1 : 0;
                break;
            case "Backstage passes to a TAFKAL80ETC concert":
                this.quality += this.isHighQuality ? 1 : 0;
                this.quality += this.sellIn < 11 ? 1 : 0;
                this.quality += this.sellIn < 6 ? 1 : 0;
                break;
        }
    }

    private handleSellInUpdate() {
        this.sellIn -= this.type !== "Sulfuras, Hand of Ragnaros" ? 1 : 0;
    }

    private handleOutOfDateItems() {
        switch (this.type) {
            case "Aged Brie":
                this.quality += this.isHighQuality ? 1 : 0;
                break;
            case "Sulfuras, Hand of Ragnaros":
                break;
            case "Backstage passes to a TAFKAL80ETC concert":
                this.quality = 0;
                break;
            case "Conjured":
                this.quality -= this.isNotFullyDegraded ? 1 : 0;
                break;
        }
    }
}