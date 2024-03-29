const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const input = document.querySelector('#user-input');
const result = document.querySelector('#results-div');

const countryCode = '^(1\\s?)?';
const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
const spacesDashes = '[\\s\\-]?';
const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
const phoneRegex = new RegExp(
  `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
);

console.log("Running");
checkBtn.addEventListener('click', () => {
  console.log("Pressed");
  if (input.value.length === 0) {
    alert('Please provide a phone number');
  }else{
    const ans = phoneRegex.test(input.value);
    if (ans) {
      result.innerHTML = `Valid US number: ${input.value}`; 
    } else {
      result.innerHTML = `Invalid US number: ${input.value}`; 
    }
  }
})

clearBtn.addEventListener('click', () => {
  console.log("Clear Pressed");
  result.innerHTML = '';
})