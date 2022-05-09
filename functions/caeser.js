function caeser(phrase,shift){
    if(shift<=26){ 
    phrase=phrase.toLowerCase()
    let lastLetter=122-shift// ascii for last is 122
    }
     let encrypted = shiftPhrase(phrase,shift)
     return encrypted
}

function shiftPhrase(phrase,shift){
    let encryptedWord=""
    for(let i=0;i<phrase.length;i++){
        let char=phrase.charAt(i);
        if(char!=''){
        let pos=char.charCodeAt()+shift
        if(pos>122){
            let shiftIndex=(pos-122)
            shiftIndex=96+shiftIndex
            encryptedWord=encryptedWord+String.fromCharCode(shiftIndex)
        }
        else{
            encryptedWord=encryptedWord+String.fromCharCode(char.charCodeAt()+shift)
        }
    }
}
    return encryptedWord
}


export default caeser