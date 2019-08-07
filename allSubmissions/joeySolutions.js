// JOSEPH P. PASAOA
//



let assert = require('assert');
console.clear();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - //

// Make a function called flipNumbers that takes in an array of strings
// representing numbers and flips it around. (MEDIUM/HARD)

// Sample Input:
// ['880', '001', '12345', '0101']

// Sample Output:
// ['088', '100', '54321', '1010']

// Code here..
function flipNumbers (strArr) {
  return strArr.map( function(str) {
    let inputStr = str.split('');
    let preOutputStr = [];
    let whereHasDecimal;
    for (let i = inputStr.length; i >= 0; i--) {
      if (inputStr[i] === "-") {
        preOutputStr.unshift("-");
      } else if (inputStr[i] === ".") {
        whereHasDecimal = i + 1;
      } else {
        preOutputStr.push(inputStr[i]);
      }
    };
    if (whereHasDecimal) {
      preOutputStr.splice(whereHasDecimal, 0, ".");
    }
    return preOutputStr.join('');
  } );
}

runFlipMe()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - //

// Make a function called magicNumber that takes in an array of numbers and adds the first two,
// subtracts the third from the total, multiplies the 4th, divides the 5th, etc until you go
// through the entire array and get a magic number!! (MEDIUM)

// Sample Input:
// [7,2,3,4,8,6,7]

// Sample Output:
// 2

// Code here..
const magicNumber = (numArr) => {
  let output = numArr[0];
  for (let i = 1; i < numArr.length; i += 4) {
    output = output + numArr[i];
    if (numArr[i+1]) {
      output = output - numArr[i + 1];
    }
    if (numArr[i+2]) {
      output = output * numArr[i + 2];
    }
    if (numArr[i+3]) {
      output = output / numArr[i + 3];
    }
  }
  return output;
}

runMagicNumber()


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - //

// Make a function called couponGranny which takes in an array with multiple objects
// The objects have four properties with the last property being an object
// Print out the wonderful granny's bills so she knows what she bought along with the price
// she paid after discounts. The discounts only apply if they are valid. There are two coupon types
// dollar amount and percent amount.  (MEDIUM/HARD)

// The output will be:
// 'Your Total is $42.39. Toilet Paper 36pk => $19.99, Avacado => $15.92, Ice Cream => $3.99, Monster => $2.49'


// let shoppingList = [
//     {
//         item: 'Ice Cream',
//         category: 'Food',
//         price: 4.99,
//         coupon: {
//             valid: true,
//             discount: 1,
//             discountType: 'Dollar',
//         }
//     },
//     {
//         item: 'Avacado',
//         category: 'Food',
//         price: 1.99,
//         coupon: {
//             valid: true,
//             discount: 20,
//             discountType: 'Percent',
//         }
//     },
//     {
//         item: 'Toilet Paper 36pk',
//         category: 'Bathroom',
//         price: 19.99,
//         coupon: {
//             valid: false,
//             discount: 25,
//             discountType: 'Percent',
//         }
//     },
//     {
//         item: 'Monster',
//         category: 'Drink',
//         price: 2.99,
//         coupon: {
//             valid: true,
//             discount: .5,
//             discountType: 'Dollar',
//         }
//     },
// ];


// runGrannysBill();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - //


/*  -- EVERYTHING BELOW IS A TEST --
    --  ADD QUESTIONS ABOVE THIS  --
    --    ADD TESTS BELOW THIS    --
*/

function TestCase(input, output) {
    this.input = input
    this.output = output
    this.formattedInput = () => {
        return JSON.stringify(this.input)
    }
}

function runTests(questionNum, testCases, testCallback) {
    console.log(`Question ${questionNum} Tests`)
    try {
        for (let testCase of testCases) {
            console.log(`Running ${testCallback.name}(${testCase.formattedInput()})`)
            assert.strictEqual(JSON.stringify(testCallback(testCase.input)), JSON.stringify(testCase.output))
        }
        console.log(`All Question ${questionNum} tests passed!\n`)
    } catch (error) {
        if (error.expected === undefined) {
            console.log("An unexpected error occurred running the test")
            console.log(error)
        } else {
            console.log(`\nTest failed.  Was expecting "${error.expected}", but got "${error.actual}"`)
        }
    }
}

/*
    --                DO NOT CHANGE THE TWO FUNCTIONS ABOVE THIS                    --
    --   PROCEED TO ADD YOUR TEST FUNCTIONS AFTER THE LAST TEST FUNCTION BELOW THIS --
*/

function runFlipMe() {
    let testCases = [
        new TestCase(['123', '321'], ['321', '123']),
        new TestCase(['010', '099'], ['010', '990']),
        new TestCase(['101', '202'], ['101', '202']),
        new TestCase(['-80', '-16'], ['-08', '-61']),
        new TestCase(['100.2', '200.1'], ['200.1', '100.2'])
    ]
    runTests("One", testCases, flipNumbers)
}

function runMagicNumber(){
    let testCases = [
        new TestCase([7,2,3,4,8,6,7], 2),
        new TestCase([1,2,2,1,1,9], 10)
    ]

    runTests("Two", testCases, magicNumber);
}

function runGrannysBill() {
  let testCases = [
    new TestCase([
      {
        item: 'Ice Cream',
        category: 'Food',
        price: 4.99,
        coupon: {
          valid: true,
          discount: 1,
          discountType: 'Dollar',
        }
      },
      {
        item: 'Avacado',
        category: 'Food',
        price: 1.99,
        coupon: {
          valid: true,
          discount: 20,
          discountType: 'Percent',
        }
      },
      {
        item: 'Toilet Paper 36pk',
        category: 'Bathroom',
        price: 19.99,
        coupon: {
          valid: false,
          discount: 25,
          discountType: 'Percent',
        }
      },
      {
        item: 'Monster',
        category: 'Drink',
        price: 2.99,
        coupon: {
          valid: true,
          discount: .5,
          discountType: 'Dollar',
        }
      },
    ], 'Your Total is $42.39. Toilet Paper 36pk => $19.99, Avacado => $15.92, Ice Cream => $3.99, Monster => $2.49')
  ]
  runTests("Three", testCases, couponGranny);
}