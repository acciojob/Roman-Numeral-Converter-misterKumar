function convertToRoman(num) {
  const obj = {
    1000: 'M', 900: 'CM', 500: 'D', 400: 'CD',
    100: 'C', 90: 'XC', 50: 'L', 40: 'XL',
    10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
  };

  let result = '';

  for (let key in obj) {
    while (num >= key) {
      result += obj[key];
      num -= key;
    }
  }

  return result;
}

console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII

// do not edit below this line
module.exports = convertToRoman