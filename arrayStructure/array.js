class NewArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(data_item) {
        this.data[this.length] = data_item;
        this.length++;
    }
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i=index; i< this.index-1; i++) {
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];
        this.length
    }
}

module.exports = NewArray;