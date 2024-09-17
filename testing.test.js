import {
  capitalise,
  reverse,
  calculator,
  cipher,
  analyseArray,
} from "./testing";

// Test capitalise function
test("capitalises first letter of a string", () => {
  expect(capitalise("hello")).toBe("Hello");
});

test("handles empty string", () => {
  expect(capitalise("")).toBe("");
});

test("handles single character string", () => {
  expect(capitalise("a")).toBe("A");
});

test("handles string with first character already capitalized", () => {
  expect(capitalise("Hello")).toBe("Hello");
});

test("handles string with non-alphabetic first character", () => {
  expect(capitalise("1hello")).toBe("1hello");
});

test("throws error for non-string input", () => {
  expect(() => capitalise(123)).toThrow(TypeError);
});

// Reverse a string
test("reverse a string", () => {
  expect(reverse("hello")).toBe("olleh");
});

test("reverse a string with numbers", () => {
  expect(reverse("hello123")).toBe("321olleh");
});

test("reverse a string with mixed case", () => {
  expect(reverse("hELlo")).toBe("olLEh");
});

test("reverse a string with gaps", () => {
  expect(reverse("he  llo")).toBe("oll  eh");
});

test("reverse a string with string numbers", () => {
  expect(reverse("12345")).toBe("54321");
});

test("throws error for empty string", () => {
  expect(() => reverse()).toThrow(TypeError);
});

// Calculator
test("adds two numbers", () => {
  expect(calculator.add(5, 1)).toBe(6);
});

test("subtracts two numbers", () => {
  expect(calculator.subtract(5, 1)).toBe(4);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(5, 1)).toBe(5);
});

test("divides two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("zero error", () => {
  expect(() => calculator.divide(5, 0)).toThrow(Error);
});

test("adds negative numbers", () => {
  expect(calculator.add(-5, -1)).toBe(-6);
});

test("subtracts negative numbers", () => {
  expect(calculator.subtract(-5, -1)).toBe(-4);
});

test("multiplies negative numbers", () => {
  expect(calculator.multiply(-5, -1)).toBe(5);
});

test("divides negative numbers", () => {
  expect(calculator.divide(-10, -2)).toBe(5);
});

test("adds zero", () => {
  expect(calculator.add(0, 5)).toBe(5);
});

test("subtracts zero", () => {
  expect(calculator.subtract(5, 0)).toBe(5);
});

test("multiplies by zero", () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});

test("divides by one", () => {
  expect(calculator.divide(5, 1)).toBe(5);
});

test("adds floating point numbers", () => {
  expect(calculator.add(1.5, 2.5)).toBe(4);
});

test("subtracts floating point numbers", () => {
  expect(calculator.subtract(5.5, 2.5)).toBe(3);
});

test("multiplies floating point numbers", () => {
  expect(calculator.multiply(2.5, 2)).toBe(5);
});

test("divides floating point numbers", () => {
  expect(calculator.divide(5.5, 2)).toBe(2.75);
});

test("adds large numbers", () => {
  expect(calculator.add(1000000, 2000000)).toBe(3000000);
});

test("subtracts large numbers", () => {
  expect(calculator.subtract(5000000, 2000000)).toBe(3000000);
});

test("multiplies large numbers", () => {
  expect(calculator.multiply(1000000, 2000000)).toBe(2000000000000);
});

test("divides large numbers", () => {
  expect(calculator.divide(1000000, 2)).toBe(500000);
});

Cipher;

test("shifts letters correctly", () => {
  expect(cipher("abc", 3)).toBe("def");
});

test("shifts letters correctly and wraps", () => {
  expect(cipher("xyz", 3)).toBe("abc");
});

test("case preservation", () => {
  expect(cipher("Abc", 3)).toBe("Def");
});

test("punctuation unchanged", () => {
  expect(cipher("a,b,c", 3)).toBe("d,e,f");
});

test("missing input", () => {
  expect(() => cipher()).toThrow("Provide input data");
});

// analyseArray NOTE USE TOEQUAL FOR CHECKING EQUALITY IN ARRAYS/OBEJCTS as TOBE ONLY CHECKS PRIMITIVES FOR STRICT EQUALITY

test("calculates average, min, max, and length correctly", () => {
  const result = analyseArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("handles an array with one element", () => {
  const result = analyseArray([5]);
  expect(result).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("handles an empty array", () => {
  const result = analyseArray([]);
  expect(result).toBe(null);
});

test("handles an array with negative numbers", () => {
  const result = analyseArray([-1, -8, -3, -4, -2, -6]);
  expect(result).toEqual({
    average: -4,
    min: -8,
    max: -1,
    length: 6,
  });
});
