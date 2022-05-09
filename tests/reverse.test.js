import reverse from '../functions/reverse'

test('test to tset',()=>{
    expect(reverse("test")).toBe('tset')
})

test('Gray to yraG',()=>{
    expect(reverse("Gray")).toBe('yarG')
})

test('racecar to racecar',()=>{
    expect(reverse("racecar")).toBe('racecar')
})