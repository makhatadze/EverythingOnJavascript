// Return tru only if all values are unique, otherwise false
// Using Array, Object, string method


let unique = (str) => {

    for(let i = 0; i<str.length; i++){
        if(str.lastIndexOf(str[i]) !==i) {
            return false;
        }
        return true;
    }

    // ------------------------ By Object
    // let values = {};
    // for(let letter of str) {
    //     if(values[letter]) {
    //         return false;
    //     }
    //    values[letter] = 'exists'
    // }
    // return true;

// --------------------------By Array
//     let values = [];
//     for(let letter of str) {
//         if(values.indexOf(letter) !==-1) {
//             return false;
//         }
       
//         values.push(letter);
//     }
//     return true;

}
console.log(unique("abcde"))
// true

console.log(unique("abacdefb"))
// false