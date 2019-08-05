let assert = require('assert');
console.clear();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - //

// Make a function called flipNumbers that takes in an array of strings
// representing numbers and flips it around. (MEDIUM/HARD)

// Sample Input:
// ['880', '001', '12345', '0101']

// Sample Output:
// ['008', '100', '54321', '1010']

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
