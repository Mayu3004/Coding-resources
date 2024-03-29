let raceNumber = Math.floor(Math.random() * 1000);

const registerEarly = false
const runnerAge = 87

if(runnerAge > 18 && registerEarly){
  raceNumber += 1000 
}

if(runnerAge > 18 && registerEarly){
  console.log(`${raceNumber} should start at 9:30am`)
}
else if(runnerAge > 18 && !registerEarly){
  console.log('Late adults run at 11:00 am')
}
else if(runnerAge < 18 ){
  console.log(`${raceNumber} at 12:30 pm`)
}
else{
  console.log('See the registration desk')
}
