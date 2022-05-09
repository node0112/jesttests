import caeser from "../functions/caeser";

test('high becomes ijhi',()=>{
    expect(caeser('high',1)).toBe('ijhi')
})
test('razer becomes tcbk',()=>{
    expect(caeser('razer',2)).toBe('tcbgt')
})
test('maze becomes qedo shifting 4 places',()=>{
    expect(caeser('maze',4)).toBe('qedi')
})