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
                output = output + '.' + sndHalf
            }
        }
        return output;
    })
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

// runMagicNumber()


function magicNumber(arr) {
    let determine = 0;
    let magicNumber = arr.reduce((num, current) => {
        switch (determine) {
            case 0:
                determine++;
                return num + current;
                break
            case 1:
                determine++;
                return num - current;
                break
            case 2:
                determine++;
                return num * current;
                break
            case 3:
                determine = 0;
                return num / current;
                break
        }
    });
    return magicNumber;
}

runMagicNumber();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - - - - - - - //

// Make a function called couponGranny which takes in an array with multiple objects
// The objects have four properties with the last property being an object
// Print out the wonderful granny's bills so she knows what she bought along with the price
// she paid after discounts. The discounts only apply if they are valid. There are two coupon types
// dollar amount and percent amount.  (MEDIUM/HARD)

// The output will be:
// 'Your Total is $42.39. Toilet Paper 36pk => $19.99, Avocado => $15.92, Ice Cream => $3.99, Monster => $2.49'


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
//         item: 'Avocado',
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

function couponGranny(arr) {
    let sortedArr = [arr[0]];
    let total;
    let product = [];
    let finalPrice = [];
    let sentence = '';
    for (let order of arr) {
        for (let i = 0; i <= sortedArr.length; i++) {
            // console.log(order.category)
            if (order.item === sortedArr[i].item) {
                break;
            } else if (order.category[0] <= sortedArr[i].category[0]) {
                sortedArr.splice(i, 0, order);
                break;
            } else {
                sortedArr.push(order);
                break;
            }
        }
    }
    // console.log(sortedArr);
    for (let obj of sortedArr) {
        product.push(obj.item)
        if (obj.coupon.valid) {
            if (obj.coupon.discountType === 'Dollar') {
                finalPrice.push(obj.price - obj.coupon.discount);
            } else if (obj.coupon.discountType === 'Percent') {
                // console.log(19.99 * (100 - obj.coupon.discount)/100)
                let afterDiscount = (obj.price * (100 - obj.coupon.discount) / 10).toFixed(2) * 1;
                finalPrice.push(afterDiscount);
            }
        } else {
            finalPrice.push(obj.price);
        }
    }
    // console.log('Final Price Array: ', finalPrice);
    total = finalPrice.reduce((acc, num) => acc + num, 0);
    // console.log('Total price: ', total);
    // console.log('List of Products: ', product);
    for (let i = 0; i < product.length; i++) {
        sentence += `${product[i]} => $${finalPrice[i]}, `;
    }
    sentence = `Your Total is $${total}. ` + sentence;
    // console.log("Output: ", sentence.slice(0, sentence.length - 2))
    return sentence.slice(0, sentence.length - 2);
}

runGrannysBill();



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
        console.log(`✅  All Questions for ${questionNum} passed! ✅\n`)
    } catch (error) {
        if (error.expected === undefined) {
            console.log("⚠️ An unexpected error occurred running the test")
            console.log(error)
        } else {
            console.log(`\n❌  Test Failed ❌\nWas expecting:\n> ${error.expected} \nBut got: \n> ${error.actual}`)
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

function runMagicNumber() {
    let testCases = [
        new TestCase([7, 2, 3, 4, 8, 6, 7], 2),
        new TestCase([1, 2, 2, 1, 1, 9], 10)
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
                item: 'Avocado',
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
        ], 'Your Total is $42.39. Toilet Paper 36pk => $19.99, Avocado => $15.92, Ice Cream => $3.99, Monster => $2.49')
    ]
    runTests("Three", testCases, couponGranny);
}