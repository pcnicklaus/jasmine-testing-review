var code = require('../js/main.js');

// Problem 1 - working
// Write a function that takes three random numbers from 0 to 100 and returns the largest one.

describe('Problem 1', function() {
  it('should return the largest number', function() {
    expect(code.largestNumber([10, 20, 30])).toBe(30);
    expect(code.largestNumber([1, 20, 3])).toBe(20);
    expect(code.largestNumber([-1, -20, -3])).not.toBe(-20);
  });
});

// WORKING WITH TOEQUAL
// Write a function that takes a random number from 0 to 100 and returns all the odd numbers from 40 to that random number in an array. If the number is smaller than output the number.

describe('problem 2', function() {
  it('take a number and return all odd numbers from forty to the number', function () {
    expect(code.oddNumbersForty(45)).toEqual([41, 43]);
    expect(code.oddNumbersForty(50)).toEqual([41,43,45,47,49]);
    });
});

// Working
// Write a function that takes a random number from 0 to 100 and returns all the even numbers from 0 to the randomized number in an array.

describe('problem 3', function() {
  it('takes a number and returns all even numbers from 0 to the number', function () {
    expect(code.evenNumbersHundred(7)).toEqual([0,2,4,6]);
    expect(code.evenNumbersHundred(6)).toEqual([0,2,4,6]);
  });
});

// Write a function that takes a random number from 0 to 100 and returns the all the odd numbers from 40 to that random number in an array. If the number is smaller than 40, return all the numbers down to the randomized one in an array - i.e., if the number is 37, you should return [40, 39, 38, 37].

describe('problem 4', function() {
  it('takes a number and if greater then 40, returns all odd numbers in an array. if less then forty, returns all numbers in a second array', function () {
    expect(code.oddNumbersAndMore(47)).toEqual([41,43,45,47]);
    expect(code.oddNumbersAndMore(37)).toEqual([40,39,38,37]);
  });
});


// Passed - WAHOO
// Write a function that takes a random number from 0 to 10,0000 and returns the sum of its digits. For instance, if the randomized number is 1049, the function should return 14.

describe('problem 5', function() {
  it('takes a number and returns the sum of its digits', function() {
    expect(code.sumOfDigits(1049)).toBe(14);
    expect(code.sumOfDigits(15)).toBe(6);
  });
});

// Passed - WAHOO
// Write a function that takes a random number from 0 to 10,0000 and calculates the sum of its digits repeatedly as long as the sum is a single digit. Return that number. For instance, if the randomized number is 1049, the function should return 5.

describe('problem 6', function() {
  it('takes a number and returns the sum of its digits as a single digit', function() {
    expect(code.sumOfDigitsOne(1049)).toBe(5);
    expect(code.sumOfDigitsOne(109)).toBe(1);
  });
});

// Write a function that takes two random numbers from 0 to 100 and returns the smaller number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one, simply return "Sorry!".

describe('problem 7', function() {
  it('takes two numbers and returns the lcd if its above 1 otherwise returns sorry', function () {
    expect(code.egcd(9,6)).toBe(3);
    expect(code.egcd(32,3)).toBe('Sorry');
  });
});

// Write a function that takes two random numbers from 0 to 100 and returns their least common multiple of them.

describe('problem 8', function() {
  it('takes two numbers and returns the least common multiple of them', function() {
      expect(code.lcm(14,10)).toBe(70);
  });
});

// Write a function that takes two randomized numbers and returns their average and standard deviation

describe('problem 9', function () {
  it('takes two numbers and returns the average and the standard deviation', function () {
    expect(code.averageAndDeviation(5,10)).toEqual(["7.5 average","2.5 SD"]);
    expect(code.averageAndDeviation(30,50)).toEqual(["40 average","10 SD"]);
  });
});
