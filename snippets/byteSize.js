const bytesSize = str => new Blob([str]).size;

const result = bytesSize('Hello Size')

console.log(result)