// Card Class
class Card {
  constructor(suite, value) {
    this.suite = suite;
    this.value = value;
  }
}

// Shuffling or Randomizing an Array
const getShuffledArr = (arr) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

// Create Deck Function
const createDeck = () => {
  const suites = ["Spades", "Hearts", "Clubs", "Diamonds"];
  const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  const deck = [];

  for (v of values) {
    for (s of suites) {
      const c = new Card(s, v);

      deck.push(c);
    }
  }
  return getShuffledArr(deck);
};

// Provides 52 Instances of Card - Random Suites and Values

createDeck();

console.log(createDeck());
