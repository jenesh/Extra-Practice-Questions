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

// runFlipMe()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - //

// Make a function called magicNumber that takes in an array of numbers and adds the first two,
// subtracts the third from the total, multiplies the 4th, divides the 5th, etc until you go
// through the entire array and get a magic number!! (MEDIUM)

// Sample Input:
// [7,2,3,4,8,6,7]

// Sample Output:
// 2

// Code here..

// runMagicNumber()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - //

// Make a function called couponGranny which takes in an array with multiple objects
// The objects have four properties with the last property being an object
// Print out the wonderful granny's bills so she knows what she bought along with the price
// she paid after discounts.


let shoppingList = [
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
];

function couponGranny(arr) {
    let newArr = [];

    for(let obj of arr) {
        
    }

    return newArr.join(' ')
}

// console.log(shoppingList);

// console.log(shoppingList);
console.log(couponGranny(shoppingList));
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
            console.log(`\n- Test Failed -\nWas expecting:\n> ${error.expected}, \nBut got: \n> ${error.actual}`)
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
        new TestCase([1,2,2,1,1,9], 10),
        new TestCase([-2,8,4,12,6,-8,3,-7], 49),
        new TestCase([0.3,0.7,3,5,0.25,42,1], 1),
        new TestCase([1,0,0,1,1, 1,0,0,1, 0,1,0,1, 1,0,0.5], 1)
    ]

    runTests("Two", testCases, magicNumber);
}

function runGrannysBill(){
    let testCases = [
        new TestCase([
            {x: 'hello'},
            {x: 'world'}
        ], 
        "Your Total is $100. Ice Cream => $3.99, Avacado => $1.59, Toilet Paper => $14.99, Monster => $2.49")   
    ]

    runTests("Three", testCases, couponGranny);
}