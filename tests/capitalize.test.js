import capitalize from '../functions/capitalize';

test('hello to be Hello', () =>{
    expect(capitalize('hello')).toBe('Hello');
})
test(' Empty String to be an Error', () =>{
    expect(capitalize('')).toBe('Error');
})
test('nOdE123 to be Node123', () =>{
    expect(capitalize('nOdE123')).toBe('Node123');
})