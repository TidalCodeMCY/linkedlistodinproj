export class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

export class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    size(){
        return this.size;
    }

    append(val){
        let newNode = new Node(val);
        if(this.isEmpty()){
            this.head = newNode;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = newNode;
        }
        this.size++;
    }

    prepend(val){
        let newNode = new Node(val);

        if(this.isEmpty()){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    insert(val, index){
        if(index < 0 || index > this.size){
            return;
        }

        if(index === 0){
            this.prepend(val);
        }else {
           const newNode = new Node(val);
           let previous = this.head;
           for(let i=0; i < index-1; i++){
            previous = previous.next;
           }
           newNode.next = previous.next; 
           previous.next = newNode;
           this.size++;
        }
    }

    pop(){
        let popped = this.head;
        this.head = popped.next;
        this.size--;
    }

    remove(index) {
        if(index < 0 || index >= this.size){
            return null;
        }
        let removedNode;

        if(index === 0){
            removedNode = this.head;
            this.head = this.head.next;
        }else{
            let previous = this.head;
            for(let i=0; i < index-1; i++){
                previous = previous.next;
            }
            removedNode = previous.next;
            previous.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }
    
    headPos(){
        return this.head;
    }

    tailPos(){
        let tail = this.head;
        for(let i=0; i<this.size-1; i++){
            tail = tail.next;
        }
        return tail;
    }

    atPos(index){
        if(index < 0 || index >= this.size){
            return null;
        }else{
            let indexPos = this.head;
            for(let i=0; i<index; i++){
                indexPos = indexPos.next;
            }
            return indexPos;
        }
    }

    contains(val){
        let temp = this.head;
        let answer = false;
        for(let i = 0; i < this.size; i++){
            if(temp.val === val){
                answer = true;
            }
            temp = temp.next;
        }
        return answer;
    }

    find(val){
        let temp = this.head;
        if(this.contains(val)){
            for(let i=0; i<this.size-1;i++){
                if(temp.val === val){
                    return temp;
                }else{
                    temp = temp.next;
                }
            }
        }else{
            console.log('value doesnt exist')
            return;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
           let curr = this.head;
           let listVal = '';
           while(curr){
            listVal += `(${curr.val}) -> `;
            curr = curr.next;
           } 
           console.log(listVal);
        }
    }
}