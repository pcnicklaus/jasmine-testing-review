// function largestNumber(arr){
//   var largest = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// module.exports = {
//   largestNumber: largestNumber
// };


// Write a function that takes three random numbers from 0 to 100 and returns the largest one.

// function oddNumbersForty(number) {
//   var oddNumbers = [];
//   for (var i = 40; i < number; i++) {
//     if (i % 2 !== 0) {
//       oddNumbers.push(i);
//       console.log(oddNumbers);
//     }
//   }
//   return oddNumbers;
// }

// module.exports = {
//   oddNumbersForty: oddNumbersForty
// };

// Write a function that takes a random number from 0 to 100 and returns all the even numbers from 0 to the randomized number in an array.

// function evenNumbersHundred(number) {
//   var evenNumbers = [];
//   for (var i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//       console.log(evenNumbers);
//     }
//   }
//   return evenNumbers;
// }

// module.exports = {
//   evenNumbersHundred: evenNumbersHundred
// };


// Write a function that takes a random number from 0 to 100 and returns the all the odd numbers from 40 to that random number in an array. If the number is smaller than 40, return all the numbers down to the randomized one in an array - i.e., if the number is 37, you should return [40, 39, 38, 37].


// function oddNumbersAndMore(number) {
//   var numberContainer = [];
//   if (number > 40) {
//     for (var i = 40; i <= number; i++) {
//       if (i % 2 !== 0) {
//         numberContainer.push(i);
//         console.log(numberContainer);
//       }
//     }
//   } else {
//     for (var i = number; i <= 40; i++) {
//       numberContainer.unshift(i);
//     }
//   }
//   return numberContainer;
// }

// module.exports = {
//   oddNumbersAndMore: oddNumbersAndMore
// };


// PASSED - WAHOO!
// Write a function that takes a random number from 0 to 10,0000 and returns the sum of its digits. For instance, if the randomized number is 1049, the function should return 14.

// function sumOfDigits(number) {
//   var x = number.toString();
//   var y = x.split("");
//   var q = y.join("+")
//   var z = eval(q);
//   var a = parseInt(z);
//   return a;
// }

// module.exports = {
//   sumOfDigits: sumOfDigits
// };


// PASSED - WAHOO
// Write a function that takes a random number from 0 to 10,0000 and calculates the sum of its digits repeatedly as long as the sum is a single digit. Return that number. For instance, if the randomized number is 1049, the function should return 5.

// function sumOfDigitsOne(number) {
//   var x = number.toString();
//   var y = x.split("");
//   var q = y.join("+")
//   var z = eval(q);
//   var a = parseInt(z);
//   if (a >= 10) {
//     var m = a.toString();
//     var n = m.split("");
//     var o = n.join("+")
//     var p = eval(o);
//     var r = parseInt(p);
//     return r;
//   } else {
//   return a;
//   }
// }

// module.exports = {
//   sumOfDigitsOne: sumOfDigitsOne
// };

// Write a function that takes two random numbers from 0 to 100 and returns the smaller number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one, simply return "Sorry!".


function egcd(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    if (a === 1) {
      return "Sorry";
    } else {
    return a;
  }
}

// module.exports = {
//   egcd: egcd
// };

// Write a function that takes two random numbers from 0 to 100 and returns their least common multiple of them.

function lcm(num1, num2) {
  var gcd = egcd(num1, num2);
  var lcmValue = (num1 * num2) / gcd;
  return lcmValue;
}

module.exports = {
  egcd: egcd
};

// Write a function that takes two randomized numbers and returns their average and standard deviation

// function averageAndDeviation(num1, num2) {
//   var container = [];
//   var sum = (num1 + num2);
//   var average = sum / 2;
//   container.push(average + " average");
//   console.log(average + "avg");
//   var a = (num1 - average) * (num1 - average);
//   console.log(a + " a");
//   var b = (num2 - average) * (num2 - average);
//   console.log(b + " b");
//   var squaresSum = a + b;
//   console.log(squaresSum + "SqSum");
//   var variance = squaresSum / 2;
//   console.log(variance + " variance");
//   var standDev = Math.sqrt(variance);
//   console.log(standDev + "SD");
//   container.push( standDev + " SD");
//   console.log(container);
//   return container;
// }

// module.exports = {
//   averageAndDeviation: averageAndDeviation
// };
