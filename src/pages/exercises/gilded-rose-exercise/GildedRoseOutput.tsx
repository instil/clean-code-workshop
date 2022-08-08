import {FC} from "react";
import {Item} from "./GildedRoseService";

interface Props {
    item: Item
}

const GildedRoseOutput: FC<Props> = ({item}) => {
    return (
        <>
            <p>Item: {item.name}</p>
            <p>Quality: {item.quality}</p>
            <p>Sell In: {item.sellIn}</p>
            <hr/>
        </>
    );
}

export default GildedRoseOutput;
