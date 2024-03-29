// Write your code below

let bobsFollowers = ['Mayur','Chetan','Sahil','Xyz']
let tinasFollowers = ['ABC','Sahil','Chetan']
let mutualFollowers =[]

for(let i = 0;i<bobsFollowers.length;i++){
  for(let j = 0;j<tinasFollowers.length;j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
console.log(mutualFollowers)

