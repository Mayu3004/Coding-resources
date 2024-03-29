const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(function(word){
  return word ==='elephant'
})

const startsWithS = animals.findIndex(function(word){
  return word.charAt(0) ==='s'
})
