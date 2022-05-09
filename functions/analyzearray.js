function analyzearray(array){
    let average
    let sum=0
    let min=array[0]
    let max=array[0]
    let length=array.length
    for(let i=0;i<length;i++){
        let element=array[i]
        sum=sum+element
        if(element<min){
            min=element
        }
        if(element>max){
            max=element
        }
    }
    average=sum/length
    let object = {
        average: average,
        min: min,
        max: max,
        length: length
    };

    return object
}
export default analyzearray