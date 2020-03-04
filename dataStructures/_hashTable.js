class HashTable {
    constructor (size) {
        this.values = {};
        this.size = size;
    }

    add(key, value) {
        const hash = this.genHash(key);
        
        if(!this.values.hasOwnProperty(hash))
            this.values[hash] = {}

        this.values[hash][key] = value
    }

    genHash(key) {
        var keyStr = key.toString();
        var sum = 0;

        // Sum ASCII characters
        for(let i=0; i <keyStr.length; i++) 
            sum += keyStr.charCodeAt(i)
        return sum % this.size
        
    }

    getValue(key) {
        const hash = this.genHash(key);
        if (this.values.hasOwnProperty(hash) &&
                this.values[hash].hasOwnProperty(key))
            return this.values[hash][key]
    }

    printAll() {
        for(const hash in this.values)
            for(const key in this.values[hash])
                console.log("{", key, ", ", this.values[hash][key], "}")

    }
    remove(key) {
        const hash = this.genHash(key);

        // Evaluates whether the key exists in table
        if (this.values.hasOwnProperty(hash) && 
                this.values[hash].hasOwnProperty(key))
            delete this.values[hash][key]
    }

}

let hashTable = new HashTable(5)


hashTable.add("Key1", "value1")
hashTable.add("Key2", "value2")
hashTable.add("Key3", "value3")
hashTable.add("Key4", "value4")
hashTable.printAll();

console.log(`get value to key2: ${hashTable.getValue("Key2")}`)
hashTable.getValue("Key2")

console.log(`Remove key 2 `)
hashTable.remove("Key2")
hashTable.printAll();