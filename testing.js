// Capitalise
function capitalise(string) {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Reverse string
function reverse(string) {
  let reversed_string = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed_string += string[i];
  }
  return reversed_string;
}

// Calculator
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Division by zero error");
    } else {
      return a / b;
    }
  },
};

// Caesar cipher
function cipher(string, shift) {
  if (!string || !shift) {
    throw new Error("Provide input data");
  }
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    newString += getShiftedLetter(string[i], shift);

    function getShiftedLetter(letter, shift) {
      const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
      const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      if (lowerAlphabet.includes(letter)) {
        let letterIndex = lowerAlphabet.indexOf(letter);
        return lowerAlphabet[(letterIndex + shift) % 26];
      } else if (upperAlphabet.includes(letter)) {
        let letterIndex = upperAlphabet.indexOf(letter);
        return upperAlphabet[(letterIndex + shift) % 26];
      } else {
        return letter; // Non-alphabetic characters remain unchanged
      }
    }
  }
  return newString;
}

// Perform functions on array
function analyseArray(array) {
  if (array.length === 0) return null;

  const average =
    array.reduce((first, second) => first + second) / array.length;
  const min = array.reduce((a, b) => Math.min(a, b));
  const max = array.reduce((a, b) => Math.max(a, b));
  const length = array.length;

  return { average, min, max, length };
}

export { capitalise, reverse, calculator, cipher, analyseArray };
