"use strict"
class myString{
    constructor(word){
        this.elements=word;
    }
    Replace(elementToReplace, elemntToReplaceWith){
        let result="";
        let arr= this.elements.split(/, | /);
        for(let i=0; i<arr.length; i++){
            if(arr[i]==elementToReplace){
                result+=elemntToReplaceWith+" ";
            }
            else{
                result+=arr[i]+" ";
            }
        }
        this.elements=result;
        return this.elements;
    }
}
let str= new myString("Hello, there");
console.log(str.Replace("Hello", "Bye"))