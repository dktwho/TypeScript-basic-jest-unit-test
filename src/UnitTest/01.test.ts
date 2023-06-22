import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {sum, multiply, splitInoWords} from "./01-unit";


test('sum should be correct', () => {
    /// data
    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;

    // action
    let result1 = sum(a, b)
    let result2 = sum(a, c)

    // expect result
    expect(result1).toBe(3)
    expect(result2).toBe(4)
})

test('multiply should be correct', () => {
    // data
    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;

    // action
    let result1 = multiply(a, b)
    let result2 = multiply(b, c)

    // expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('split into words should be correct', () => {
    // data
    let sentense1 = 'hello my friends';
    let sentense2 = 'Hello world for all js!';

    // action
    let result1 = splitInoWords(sentense1)
    let result2 = splitInoWords(sentense2)

    // expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('hello')
    expect(result2[1]).toBe('world')
    expect(result2[2]).toBe('for')
    expect(result2[3]).toBe('all')
    expect(result2[4]).toBe('js')

})