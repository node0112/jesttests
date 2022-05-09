import analyzearray from '../functions/analyzearray'

test('[1,8,3,4,2,6] gives average:4,min:1,max:8,length:6',()=>{
    expect(analyzearray([1,8,3,4,2,6])).toEqual({average: 4,min: 1,max: 8,length: 6})
})