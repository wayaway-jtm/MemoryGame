// On load
AddCardClickListeners();
ShuffleCards();

//CARD FLIP
function AddCardClickListeners() {
  let cards = document.querySelectorAll('.card');
  cards.forEach(card => card.addEventListener('click', e => {
    // Filter to prevent more than 2 cards being flipped
    if (!isPairFlipped()) {
      // get flipped card backs
      // check to see if they match
      //    if they don't match
      //        flip them back over after a short delay
      //    if they do match
      //        remove them

      /*
        Flipping card
      */
      // Changing wrapper div class
      card.classList.toggle('is-flipped');
      // Toggling hiding sides
      let cardSides = card.children;
      for (const card of cardSides) {
        card.classList.toggle('hidden');
      }

      /*
        Checking  if 2 cards are flipped
          then checking if they match if true
      */
      if (isPairFlipped())
      {
        // Getting the flipped cards
        let flippedCards = document.querySelectorAll('.is-flipped');
        if (isMatch(flippedCards))
        {
          
        }
      }
    }
  }));
}

/**
 * Shuffles the numbers assigned to each card using a Fisher-Yates shuffle
 * @see shuffle()
 */
function ShuffleCards() {
  // Getting numbers and shuffling order
  const backgroundImage = [
    'images/tuna1.jpg',
    'images/tuna2.jpg',
    'images/tuna3.jpg',
    'images/tuna4.jpg',
    'images/tuna5.png',
    'images/tuna6.jpg',
    'images/tuna7.png',
    'images/tuna8.jpg',
    'images/tuna1.jpg',
    'images/tuna2.jpg',
    'images/tuna3.jpg',
    'images/tuna4.jpg',
    'images/tuna5.png',
    'images/tuna6.jpg',
    'images/tuna7.png',
    'images/tuna8.jpg'
  ];
  let shuffledCardValues = shuffle(backgroundImage);

  // Getting the elements for each card face
  let cardFaces = document.querySelectorAll('.card_back');
  // Adding values to the card face
  for (let i = 0; i < cardFaces.length; i++) {
    cardFaces[i].setAttribute('src', shuffledCardValues[i]);
  }
}

// Fisher-Yates Shuffle
// source: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length,
    t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

// Check to see if two cards are flipped
function isPairFlipped() {
  let flippedCards = document.querySelectorAll('.is-flipped');
  return flippedCards.length === 2 ? true : false;
}