# 👇 Extra Practice Questions (Unit 1) 👇

This repositroy was created for anyone looking for more *fun* practice problems which will test your knowledge of things from [**_Unit 1_**](https://github.com/joinpursuit/Pursuit-Core-Web-Unit-1-Review).

![There's more?](https://media.giphy.com/media/l0Exdm9UbTHAFcJi0/giphy.gif)



## 🍰 To use the repository simply 🍰
1. Fork this repository
2. Grab the clone link
3. Then write `git clone` followed by the clone url from step 2
4. After that `cd` followed by the folder name
5. Make a new file `touch youNameSolitions.js`
6. **Copy the `practiceQuestions.js` file into a new file with your name**
``` js
> cp practiceQuestions.js firstNameSolutions.js
```
7. Lastly move the file with your name into the **allSubmissions** folder
``` js
> mv test.js allSubmissions/
```

![Cat typing](https://media.giphy.com/media/juSCTzqDAV1Xq/giphy.gif)



### 📝 Key things to note 📝

Make sure to read the comments regarding what to name your **functions** and to run the test simply uncomment out the function that is right under 
``` js 
Code here..
``` 
that starts with the word run, for example 
``` js
runFlipMe();
```

> There may or may not be a difficulty label on the problems because difficulty is abstract since a easy question might be hard for someone else and vice-versa.

![So easy a caveman can do it](https://media.giphy.com/media/4up3aiyLlAxb2/giphy.gif)

***

# Making contributions / Adding your Questions

Everyone is welcome to create/add their own questions as well as the tests that corresponds with it. 

## ❓ Question format ❓

To add your question make sure to write it in a clear format. Some of the things to consider when writing your question are: 

* Name of the function **(Very Important)**
* Input
* Input Type (string, array, number, object etc.)
* Output
* Output Type (string, array, number, object etc.)
* Certain methods to use or not to use for more of a challenge
* Any hints you think might be needed to solve the problem

> Always add your question(s) after the last question that appears which will be before the `function TestCase()`



## 🧪 Making the Test 🧪

To make your test simple copy and paste a any test that looks like:

``` js
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
```

The key things you need to change are:
1. Name of the function `function giveMeName()`
2. All of the `new TestCase([...])` *(more on that below)*
3. Lastly change the name of the function again with the same name as step 1 where it says changeMe 
``` js
runTests("One", testCases, changeMe)
```

![You can do it](https://media.giphy.com/media/8FNlmNPDTo2wE/giphy.gif)


## 👀 Changing the Test Cases 👀

For the test cases the only thing you need to change are the parameters inside the TestCase().
``` js
TestCase( input, output )
```

For input you can write any input values that you would pass into the function making sure the type is exactly the same as you intended it to be. 

Also, for the Output make sure the type will make the test pass. Best way to make sure the tests are valid is to solve the problem yourself and run the test with all tests that says you have passed.

* The test cases only takes in one parameter right now so be make sure to solve the problem it only takes in **one parameter**.
* Write at least one TestCase() but do *try to add more than one* for **any niche cases** the function needs to solve.

***

# 👏 Final Words 👏

Lastly, feel free to update **ME** (meaning the *README.md* file) for any errors or better explanations on the steps. 

This repository was made to help everybody in the class get better in javascipt. Feel free to put any questions you find *fun, easy, difficult etc.* to solve.

![You got this](https://media.giphy.com/media/1xVbRS6j52YSzp9P7N/giphy.gif)
