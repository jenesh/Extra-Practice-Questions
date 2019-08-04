let assert = require('assert')
console.clear();


// Make a function called flipNumbers that takes in a number and flips
// it around.

// Sample Input:
// [880, 001, 12345, 0101]

// Sample Output:
// [008, 100, 54321, 1010]

function flipNumbers(arr) {
    return newArr = arr.map(ele => {
        let output = '';
        for (let i = ele.length - 1; i >= 0; i--) {
            if (ele[i] === '-') {
                output = ele[i] + output;
                continue;
            }
            if (ele[i] === '.') {
                continue;
            }
            output += ele[i];
        }
        for (let j = 0; j < ele.length; j++) {
            if (ele[j] === '.') {
                let sndHalf = output.slice(j);
                output = output.slice(0, j);
                output = output + '.' +sndHalf
            }
        }
        return output;
    })
}

// runFlipMe()

function magicNumber(arr){
    let determine = 0;
    let magicNumber = arr.reduce((num, current) => {
        switch(determine){
            case 0: determine++; return num + current;
            break
            case 1: determine++; return num - current;
            break
            case 2: determine++; return num * current;
            break
            case 3: determine = 0; return num / current;
            break
        }
    });
    return magicNumber;
}

 runMagicNumber();

 console.log(typeof magicNumber([7,2,3,4,8,6,7]));

 
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

function runMagicNumber(){
    let testCases = [
        new TestCase([7,2,3,4,8,6,7], 2),
        new TestCase([1,2,2,1,1,9], 10)
    ]

    runTests("Two", testCases, magicNumber);
}