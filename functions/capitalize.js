function capitalize(word){
    if(word!=''){
    word=word.toLowerCase()
    word=(word.charAt(0).toUpperCase())+word.substring(1,word.length)
    return word
    }
    else{
        return ('Error')
    }
}

export default capitalize