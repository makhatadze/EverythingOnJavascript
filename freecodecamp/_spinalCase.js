function spinalCase (str) {
    return str.split('')
        .map(c => /[A-Z]/.test(c) ? `-${c.toLowerCase()}` : c)
        .join('')
        .split(/[_ -]+/)
        .filter(word => word.length)
        .join('-')

}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('ThisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small things'));
/**
 * this-is-spinal-tap
this-is-spinal-tap
the-andy-griffith-show
teletubbies-say-eh-oh
all-the-small-things
 */

// 1) all lowercase
// 2) _ and " " (spaces) become hypens (-)
// 3) Capital case always determines the start of a new word(but note , always)

// ['this', 'is', 'spinal', 'tap']

// function spinalCase(str) {
//     let words = [];
//     let word = '';

//     for (const c of str) {
//         if (c === '_' || c === ' ') {
//             words.push(word);
//             word = '';
//         } else if (c >= 'A' && c <='Z' && !word.length){
//             word = c.toLowerCase();
//         } else if (c>='A' && c<='Z' && word.length) {
//             words.push(word);
//             word = c.toLowerCase();
//         } else {
//             word +=c;
//         }
//     }
//     if (word.length) {
//         words.push(word)
//     }
//     return words.join("-");
// }