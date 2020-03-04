// Get File extension
/////////////////////
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'))
console.log(getFileExtension('webpack.config.js'))

// Replace every character in a given string with the character following it in the alphabet
///////////////

const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0)+1))
    .join('');

console.log(moveCharsForward('abcd'))
// return bcde


/*
    mm-dd-yy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
/////////
const formatDate = (date = new Date()) => {
    const days = date.getDay() +1 ;
    const months = date.getMonth()+1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}

console.log(formatDate())


/*
    create a new string adding "New!" in front of a given string
*/
////
const addNew = (str) => str.indexOf(`New!`) === 0 ? str: `New! ${str}`;

console.log(addNew('Offers'))
// New! Offers
