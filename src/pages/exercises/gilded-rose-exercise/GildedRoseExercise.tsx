import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import {GildedRose} from "./GildedRoseService";
import {Item} from "./service/UpdateQuality";
import "./GildedRoseExercise.scss";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";
import GildedRoseOutput from "./GildedRoseOutput";
import Rose from "../../../structure/ascii-art/Rose";

const GildedRoseExercise: FC = () => {
    const gildedRoseItems = new GildedRose([
        new Item("Aged Brie", 1, 1),
        new Item("Sulfuras, Hand of Ragnaros", 1, 1),
        new Item("Backstage passes to a TAFKAL80ETC concert", 11, 1),
        new Item("Conjured", 1, 2)
    ]);
    const output = gildedRoseItems.updateQuality();

    return (
      <>
          <Navbar pageTitle="Gilded Rose Exercise"/>
          <p>Items:</p><p>${JSON.stringify(gildedRoseItems.items[0])}</p>
          <div className="gilded-rose-exercise">
              <div className="gilded-rose-exercise__task">
                  <h3 className="gilded-rose-exercise__title">Task:</h3>
                  <p className="gilded-rose-exercise__description">
                      Hi and welcome to team Gilded Rose. <br/>
                      As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. <br/>We also buy and sell only the finest goods. <br/>Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us.
                      <br/>It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures.
                      <br/>Your task is to add the new feature to our system so that we can begin selling a new category of items.
                      <br/>First an introduction to our system:
                      <br/>
                      <br/>
                      <ol>
                          <li>All items have a SellIn value which denotes the number of days we have to sell the item</li>
                          <li>All items have a Quality value which denotes how valuable the item is</li>
                          <li>At the end of each day our system lowers both values for every item</li>
                      </ol>

                      Pretty simple, right? Well this is where it gets interesting:

                      <ol>
                          <li>Once the sell by date has passed, Quality degrades twice as fast</li>
                          <li>The Quality of an item is never negative</li>
                          <li>"Aged Brie" actually increases in Quality the older it gets</li>
                          <li>The Quality of an item is never more than 50</li>
                          <li>"Sulfuras", being a legendary item, never has to be sold or decreases in Quality</li>
                          <li>"Backstage passes", like aged brie, increases in Quality as its SellIn value approaches</li>
                          <li>Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or
                              less but
                          </li>
                          <li>Quality drops to 0 after the concert</li>
                      </ol>
                      We have recently signed a supplier of conjured items. This requires an update to our system:
                      <br/>
                      "Conjured" items degrade in Quality twice as fast as normal items
                      <br/>
                      <br/>
                      Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly.
                      <br/><br/>However do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover for you).
                      <br/>
                      <br/>
                      Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.
                  </p>
                  <Rose/>
                  <p className="gilded-rose-exercise__quotes">{}</p>
              </div>
              <h3 className="gilded-rose-exercise__sub-title">Output:</h3>
              <p className="gilded-rose-exercise__results">
                  <p>{output.map(it => {
                      if (!it) return <TypingCaret/>
                      else return <GildedRoseOutput item={it}/>
                  })}</p>
              </p>
              <TypingCaret/>
          </div>
      </>
    );
};

export default GildedRoseExercise;
