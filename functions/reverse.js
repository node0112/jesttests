function reverse(word){
    if(word!=''){
    let reversedWord=''
    for(let i=word.length;i>=0;i--){
        reversedWord=reversedWord+(word.charAt(i))
    }
    return reversedWord
}
}

export default reverse