"use strict"
let one="SaLaM";
function LowerUpperCase(word){
    let result="";
    for(let item of word){
        if(item.codePointAt()>=65 && item.codePointAt()<=90){
            let char=String.fromCharCode((item.charCodeAt()+32));
            result+=char;
        }
        else{
            let char=String.fromCharCode((item.charCodeAt()-32));
            result+=char;
        }
    }
    return result;
}
console.log(LowerUpperCase(one));