let getRandomNumber = (min, max) => {
     return Math.round(Math.random() * (max - min) + min);
 } 
console.log(getRandomNumber(0, 100));

let names= ['Evelyn', 'Harper', 'Jackson', 'Avery', 'Jack', 'Eleanor', 'Carter'];
const chooseName = () =>{
 let randomName = 
  names[Math.floor(Math.random()
  *names.length)];
 return randomName;
}
console.log('Random name:', chooseName(names));