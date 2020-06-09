const memory  = require('./memory')

class Array {
    constructor () {
        // start out with length of 0 and a pointer to 0 blocks of memory
      this.length = 0
      this._capacity = 0
      this.ptr = memory.allocate(this.length)
    }
    _resize(size){
        //old memory
       const oldPtr = this.ptr;
       // allocate new, larger size of memory
        this.ptr = memory.allocate(size)
        if (this.ptr === null){
            throw new Error('Out of memory');
        }
        // copy existing values from old to new chunk of memory
        memory.copy(this.ptr, oldPtr, this.length);
        // free old chunk of memory
        memory.free(oldPtr);

    }
    push (value) {
        // resize the array by size ratio if length is greater than capacity
        if(this.length > this._capacity){
        this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        // set memory equal to this.length + this.ptr
        memory.set(this.ptr + this.length, value);
        this.length++;

    }
    get(index){
        if (index < 0 || index >= this.length){
            throw new Error('Index Error')
        }
        return memory.get(this.ptr + index)
    }
    pop() {
        
        if (this.length === 0 ){
            throw new Error('Index error')
        }
        // leave an empty space for the next push
        const value = memory.get(this.ptr + this.length - 1)
        this.length--;
        return value;
    }
    insert(index, value){
        if(index < 0 || index >= this.length){
            throw new Error('Index error')
        }
        if(this.length >= this._capacity){
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value);
        this.length++
    }
    remove(index){
        if(index < 0 || index >= this.length){
            throw new Error('Index error');

        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--;
    }
}

Array.SIZE_RATIO = 3;

module.exports = Array;