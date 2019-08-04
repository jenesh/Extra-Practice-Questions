let assert = require('assert').strict;
console.clear();


// Make a function called flipNumbers that takes in a number and flips
// it around.

// Sample Input:
// ['880', '001', '12345', '0101']

// Sample Output:
// ['008', '100', '54321', '1010']

// Code here..

// runFlipMe()


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