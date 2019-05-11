function writeCards(names, occasion) {
  const cards = []
  for (var i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
  return cards
}

function countdown(num) {
    while (num >= 0) {
        console.log(num);
        num--
    }
}
