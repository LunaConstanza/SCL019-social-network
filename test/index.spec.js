// importamos la funcion que vamos a testear

// import { myFunction } from '../src/lib/index';
// describe('myFunction', () => {
// it('debería ser una función', () => {
// expect(typeof myFunction).toBe('function');
// });
// });

import { headerLogo } from "../lib/index.js";

describe("headerLogo", () => {
  it("should be a function", () => {
    expect(typeof headerLogo).toBe("function");
  });

  it("should load the page for login", () => {
    expect(headerLogo()).toBe(header);
  });

//   it("should throw TypeError when invoked with wrong argument types", () => {
//     expect(() => login()).toThrow(TypeError);
//     expect(() => login(0)).toThrow(TypeError);
//     expect(() => login(null, [])).toThrow(TypeError);
//     expect(() => login(0, 0)).toThrow(TypeError);
});
