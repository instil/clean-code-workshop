# Starting the application

`nvm use`

`npm install`

`npm start`

## Exercises
### Refactoring
> XtraVision2.0 has requested you to assist them with their new system which will print out statements for a customer.
> </br>It was wrote by an intern, taught by Matthew Wilson.
> </br>The code for printing customer statements is pure spaghetti.
> </br>Refactor the code in a clear and efficient way.

`src/pages/exercises/refactoring-exercise/RefactoringExercise.tsx`
- Write some high-level tests before refactoring (to ensure you don't break functionality)
- Make changes to everything but the return section at the bottom
  - Making good use of small methods describing behaviours
  - Descriptive variables
  - New types

### Single Responsibility
> A crazed Arnold Schwarzenegger fan (not Kieran Magee/Garth Gilmour) has asked you to list all of the top Arnie movies and their details. 
> </br>Add the missing implementation to the code and implement it in a clean way.

`src/pages/exercises/single-responsiblity-exercise/SingleResponsibilityExercise.tsx`
- Write some high-level tests before refactoring (to ensure you don't break functionality)
- Make changes to everything but the return section at the bottom
    - Making good use of small methods describing behaviours
    - Descriptive variables
    - New types

### Palindrome
> A huge nerd (Rory Armstrong) wants you to create a program that will detect whether phrases are a palindrome or not. 
> </br>Fix up the service and implement a working solution.
> </br>Why can't Rory do it himself? He's too busy in the gym getting swole. #lazy #butNotLazy
`src/pages/exercises/palindrome-exercise/PalindromeService.ts`
- Before you write the implementation write a test with expected inputs and outputs

### Gilded Rose
> Hi and welcome to team Gilded Rose.
> </br>As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison.
> </br>We also buy and sell only the finest goods.
> </br>Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us.
> </br>It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures.
> </br>Your task is to add the new feature to our system so that we can begin selling a new category of items.
> </br></br>First an introduction to our system:
> </br>1. All items have a SellIn value which denotes the number of days we have to sell the item
> </br>2. All items have a Quality value which denotes how valuable the item is
> </br>3. At the end of each day our system lowers both values for every item
> </br></br>Pretty simple, right? Well this is where it gets interesting:
> </br>1. Once the sell by date has passed, Quality degrades twice as fast
> </br>2. The Quality of an item is never negative
> </br>3. "Aged Brie" actually increases in Quality the older it gets
> </br>4. The Quality of an item is never more than 50
> </br>5. "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
> </br>6. "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches
> </br>7. Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
> </br>8. Quality drops to 0 after the concert
> </br></br>We have recently signed a supplier of conjured items. This requires an update to our system:
> </br>1. "Conjured" items degrade in Quality twice as fast as normal items
> </br></br>Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly.
> </br>However do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover for you).
> </br></br>Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.

`src/pages/exercises/gilded-rose-exercise/GildedRoseService.ts`
- Makes sense to write a couple of tests before refactoring to get an idea of what's going on
- As you go write more tests as understanding increases
- The aim to is to break out anything into separate methods and reduce duplication as much as possible - without breaking functionality

### Linter
> As discussed in the slides, the linter is a great tool for developers as it helps keep code clean and consistent.
> </br>Your task is to set up the linter.

`src/pages/exercises/linter-exercise/LinterExercise.tsx`
1. Import the linter package 
   1. Add the following packages to the `package.json` file:
      1. "@typescript-eslint/eslint-plugin": "^5.13.0"
      2. "@typescript-eslint/parser": "^5.13.0"
      3. "eslint": "^8.1.0"
      4. "eslint-plugin-import": "^2.25.4"
2. Create an .eslintrc.json file in the root of the project (this file will be sent to you)
3. Adjust the rules to display and error when:
   1. There are missing semi colons
   2. There is console output (console.log)
   3. There are single quotes in import statements
   4. There is more than 1 space on a line
4. Add a linting command to package.json
   1. "lint": "eslint . --ext .ts, --ext .tsx"
5. Add the "eslintConfig" to package.json with the following config:
   1. `extends: ["react-app", "react-app/jest"]`
6. In the IntelliJ terminal, run `yarn lint` & resolve any errors

### Unique words
> Count how many unique words there are

`src/pages/exercises/unique-words-exercise/UniqueWordsExercise.tsx`
- Before you write the implementation write a test with expected inputs and outputs
- Make your changes to `execute()` - don't touch the return block
