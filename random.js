let getRandomNumber = (min, max) => {
     return Math.round(Math.random() * (max - min) + min);
 } 
console.log(getRandomNumber(0, 100));