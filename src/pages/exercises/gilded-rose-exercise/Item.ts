export class Item {
    name: string;
    sellIn: number;
    quality: number;

	constructor(name: string, sellIn: number, quality: number) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}

	tick() {
		if (this.name !== 'Sulfuras, Hand of Ragnaros') {
			this.sellIn = this.sellIn - 1;
			
		}
	}

	appreciateQuality() {
		if (this.quality < 50) {
			this.quality++;
		}
	}

	depreciateQuality() {
		if (this.quality > 0) {
			this.quality--;
		}
	}

	appreciatesInQuality = () => 
		this.name === 'Aged Brie' || this.name === 'Backstage passes to a TAFKAL80ETC concert';
	
	depreciatesInQuality = () =>
		this.name === 'Conjured';

	peaksInQuality = () =>
		this.name === 'Backstage passes to a TAFKAL80ETC concert';
}
