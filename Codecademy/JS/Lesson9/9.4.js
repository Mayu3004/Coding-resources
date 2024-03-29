const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(function(num){
  if(num<250){
    return num
  }
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene']
const longFavoriteWords = favoriteWords.filter(function(word){
  if(word.length > 7){
    return word
  }
})


// Call .filter() on favoriteWords below

