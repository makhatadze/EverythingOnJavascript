const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length

const result = average(1,2,3)

const resultArray = average(...[1,2,3])

console.log(result)
// 2