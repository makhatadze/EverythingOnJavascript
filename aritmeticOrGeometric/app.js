// Arithmetic, Geometric or No pattern 
let mathSequences = (arr) => {
    let arith = new Set();
    let geo = new Set();

    for(let i = 1; i<arr.length; i++) {
        let number1 =arr[i] - arr[i-1];
        arith.add(number1);
        let number2 =arr[i] / arr[i-1];
        geo.add(number2)
    }
    
    if (arith.size === 1) return 'Arithmetic';
    if (geo.size === 1) return 'Geometric';
    return 'False';
}

console.log(mathSequences([1,3,5,7,9]))
// returns arithmetic

console.log(mathSequences([3,9,27]))
// return Geometric

console.log(mathSequences([1,5,12,54,21]))
// false