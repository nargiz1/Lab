"use strict"
class myString{
    constructor (word){
        this.elements=word;
    }
    Trim(){
        let result="";
        for(let i=0; i<this.elements.length; i++){
           if(!(this.elements[i]==" " && this.elements[i+1]==" ")){
            result+=this.elements[i];
           }
        }

        return result;
    }
}