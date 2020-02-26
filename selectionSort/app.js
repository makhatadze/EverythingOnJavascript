let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}
const array1 = [3,5,12,123,-32,2314,312423,12312,123123,4353]
const array2 = [31,5,12,123,-32,2314,-312423,12312,-123123,4353]
const array3 = [-34,5,12,123,-32,2314,312423,12312,-123123,4353]

console.log(selectionSort(array1))
console.log(selectionSort(array2))
console.log(selectionSort(array3))
