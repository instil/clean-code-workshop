import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import {GildedRose} from "./GildedRoseService";
import {Item} from "./service/UpdateQuality";
import "./GildedRoseExercise.scss";

const GildedRoseExercise: FC = () => {
    const gildedRoseItems = new GildedRose([new Item("Aged Brie", 1, 1)]);

    return (
      <>
          <Navbar pageTitle="Gilded Rose Exercise"/>
          <p>Items:</p><p>${JSON.stringify(gildedRoseItems.items[0])}</p>
          <p>Update:</p><p>${JSON.stringify(gildedRoseItems.updateQuality())}</p>
          {/*<p>Updated Items: {items.updateQuality()}</p>*/}
      </>
    );
};

export default GildedRoseExercise;
