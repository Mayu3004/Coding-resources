//Inital temperature = 293
const kelvin = 0
//conerting from kelvin by changing to celsius
let celsius = kelvin - 273
//conerting from celsius by changing to fahrenheit
let fahrenheit = celsius*(9/5) +32
//giving floor value
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degree Fahrenheit`)