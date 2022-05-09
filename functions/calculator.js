function calculate(a,b,op){
    if(a!==NaN && b!=NaN){
    if(op=='add'){
        return a+b
    }
    if(op=='subtract'){
        return a-b
    }
    if(op=='multiply'){
        return a*b
    }
    if(op=='divide'){
        if(b!=0){
            return a+b
        }
    }
}
}

export default calculate