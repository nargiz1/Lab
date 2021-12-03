"use strict"
class myString{
    constructor (word){
        this.elements=word;
    }
    Substring(start, end){
        let result="";
        if(start<0){
            start=0;
        }
        if(end<0){
            end=0;
        }
        if(start<end){
            for(let i=start; i<end; i++){
                result+=this.elements[i];
            }
        }
        else{
            for(let i=end; i<start; i++){
                result+=this.elements[i];
            }
        }
        return result;
    }
}