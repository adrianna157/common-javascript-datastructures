const NUMBUCKETS = 43;

import { LinkedList } from "./LinkedList.mjs";  

class HashMap {
    constructor() {
        // creates 43 buckets
        this.buckets = Array.from({ length: NUMBUCKETS }, a => new LinkedList())
    }

    _hash(str){
        let hashedKey = '';

        for( let i = 0; i < str.length; i++ ) {
            hashedKey += str.charCodeAt(i);
        }
        return hashedKey
    }

    set (key, value){
        // hash it (no class but this one will call this that is what the underscore means)
        let keyHash = this._hash(key);
        // use that hash key to pick a bucket
        this.buckets[keyHash & NUMBUCKETS].add({key, value});
    }

    get (key){
        let foundIt = null;
        this.buckets[this._hash(key) & NUMBUCKETS].traverse( node => node.key === key ? foundIt = node.value: '');
        return foundIt;
    }



}

const hm = new HashMap();
hm.set('AWD8345', 'Black Sprinter Van')
console.log(hm.get('AWD8345'))