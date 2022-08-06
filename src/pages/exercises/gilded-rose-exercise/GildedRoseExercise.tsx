import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import {GildedRose} from "./GildedRoseService";
import {Item} from "./service/UpdateQuality";
import "./GildedRoseExercise.scss";
import TypingCarot from "../../../structure/typing-carot/TypingCarot";
import GildedRoseOutput from "./GildedRoseOutput";
import Rose from "../../../structure/ascii-art/Rose";

const GildedRoseExercise: FC = () => {
    const gildedRoseItems = new GildedRose([new Item("Aged Brie", 1, 1)]);


    const output = gildedRoseItems.updateQuality();

    return (
      <>
          <Navbar pageTitle="Gilded Rose Exercise"/>
          <p>Items:</p><p>${JSON.stringify(gildedRoseItems.items[0])}</p>
          {/*<p>Updated Items: {items.updateQuality()}</p>*/}
          <div className="gilded-rose-exercise">
              <div className="gilded-rose-exercise__task">
                  <h3 className="gilded-rose-exercise__title">Task:</h3>
                  <p className="gilded-rose-exercise__description">Gilded Rose Description</p>
                  <Rose/>
                  <p className="gilded-rose-exercise__quotes">{}</p>
              </div>
              <h3 className="gilded-rose-exercise__sub-title">Output:</h3>
              <p className="gilded-rose-exercise__results">
                  <p>{output.map(it => {
                      if (!it) return <TypingCarot/>
                      else return <GildedRoseOutput item={it}/>
                  })}</p>
              </p>
          </div>
      </>
    );
};

export default GildedRoseExercise;
