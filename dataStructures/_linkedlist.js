/* 

Node
- Data (String, Integer, Float, Array of Arrays of LinkedLists)
- Pointer to next node
- Pointer to the previous node

2 types LinkedLists: Singly linked & Doubly linked


Node1 -> Node2 -> Node3 .....Node(N)

*/

function Node(data) {
    this.data = data;
    this.next = null;
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data) {
        const node = new Node(data);

        if (!this.head) {
            // Makes this node both the tail & head
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node
        }
    }

    removeNode(data) {
        let previous = this.head;
        let current = this.head;

        while(current) {
            if (current.data === data) {
                if (current === this.head) // If we found the first element
                    this.head = this.head.next; // Replace this with the node after it
                else if (current === this.tail)
                    this.tail = previous; // Replace this with the node before it
                previous.next = current.next;
            }
            previous = current;
            current = current.next
        }
    }

    traverse(cb) {
        let current = this.head;

        // Node1 -> Node2 -> Node3
        if (cb) {
            while(current) {
                cb(current)
                current = current.next
            }
        }
    }
}

(function test() {
    let linkedList = new LinkedList();

    linkedList.addNode("Node1")
    linkedList.addNode("Node2")
    linkedList.addNode("Node3")
    linkedList.addNode("Node5")
    console.log(`Initial nodes: `)
    linkedList.traverse((node) => {
        console.log(node.data)
    })

    removeAndLog(linkedList, "Node1")
    removeAndLog(linkedList, "Node2")
    removeAndLog(linkedList, "Node3")
    removeAndLog(linkedList, "Node5")


})()
function removeAndLog(linkedList, str) {
    console.log(`Remove node ${str}`)
    linkedList.removeNode(str)

    console.log(`Updated nodes: `)
    linkedList.traverse((node) => {console.log(node.data)})

}