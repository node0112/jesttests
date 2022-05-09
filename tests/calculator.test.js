import calculate from "../functions/calculator";

test('1+10 = 11',()=>{
    expect(calculate(1,10,'add')).toBe(11)
})
test('1+10 = 11',()=>{
    expect(calculate(1,10,'subtract')).toBe(-9)
})
test('1+10 = 11',()=>{
    expect(calculate(12,12,'multiply')).toBe(144)
})
test('1+10 = 11',()=>{
    expect(calculate(1,0,'divide')).toBe(undefined)
})
