import { headerLogo } from "../src/lib/index.js";

describe('Este archivo muestra el header en todas las páginas', () => {
  it('Debería retornar una función', () => {
    expect(typeof headerLogo).toBe('function');
  });
});


// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
// describe('myFunction', () => {
// it('debería ser una función', () => {
// expect(typeof myFunction).toBe('function');
// });
// });

// describe("headerLogo", () => {
//   it("should be a function", () => {
//     expect(typeof headerLogo).toBe("function");
//   });

//   it("should load the page for login", () => {
//     expect(headerLogo()).toBe(header);
//   });
// });
