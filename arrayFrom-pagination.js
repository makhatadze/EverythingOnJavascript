const pagination = 'pagination';

// Select items from querySelector or some selector
const card = document.querySelectorAll('.card')
// const card = [
//     '<h2 class="card">card1</h2>',
//     '<h2 class="card">card2</h2>',
//     '<h2 class="card">card3</h2>',
//     '<h2 class="card">card4</h2>',
// ]

const newCard = Array.from(card).find((item) => item.includes('card1'))

const items = Array.from({length: 120}, (_, index) => {
    return index
})

const itemsPerPage = 10;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({length: pages}, (_, index) => {
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start + itemsPerPage);
    return tempItems;
})

console.log(newCard)