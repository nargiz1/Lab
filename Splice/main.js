"use strict"
class myArr{
    constructor(){
        this.elements=arguments;
    }
    Splice(count, remove){
        for(let i=count; i<this.elements.length; i++){
            if(remove>0){
                this.elements[i]=undefined;
                remove--;
            }
        }
        let result=[];
        for(let i=0; i<this.elements.length; i++){
            if(this.elements[i]!=undefined){
                result.push(this.elements[i])
            }
        }
        let n=0;
        for(let i=count; i<arguments.length; i++){
            result[i+1]=result[i];
            result[i]=arguments[n+2];
            n++;
        }
        this.elements=result;
        return this.elements;
    }
}
let Arr= new myArr(2,3,2,5);
console.log(Arr.Splice(2, 1, 9, 11, 17, 30));