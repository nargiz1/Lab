"use strict"
class myString{
    constructor(word){
        this.elements=word;
    }
    Slice (start, end){
        let result="";
        for(let i=start; i<end; i++){
            result+=this.elements[i];
        }
        this.elements=result;
        return this.elements;
    }
}
let str= new myString("Hello there");
console.log(str.Slice(0, 5))