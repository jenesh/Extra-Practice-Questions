# Extra Practice Questions (Unit 1)

This repositroy was created for anyone looking for more fun practice problems which will test your knowledge of things from [**_Unit 1_**](https://github.com/joinpursuit/Pursuit-Core-Web-Unit-1-Review).

To use the repository simply:
1. Fork this repository
2. Grab the clone link
3. Then write `git clone` followed by the clone url from step 2
4. After that `cd` followed by the folder name
5. Make a new file `touch youNameSolitions.js`
6. **Copy the `practiceQuestions.js` file into a new file with your name**
7. Move the file with your name into the **allSubmissions** folder
> cp 


Make sure to read the comments regarded what to name your **functions** and to run the test simply uncomment out the function that is right under `Code here..` that starts with the word run, for example `runFlipMe`.

> There may or may not be a difficulty label on the problems because difficulty is pretty abstract. 

## Making contributions / Adding your Questions

Everyone is welcome to create/add their own questions as well as the tests that corresponds with. 

### Question format

To add your question make sure to write it in a clear format. Some of the things to consider when writing your question are: 

* Name of the function **(Very Important)**
* Input
* Input Type (string, array, number, object etc.)
* Output
* Output Type (string, array, number, object etc.)

### Making the Test

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
3. Lastly change the name of the function again with the same name as step 1 where it says changeMe `runTests("One", testCases, changeMe)`

#### Changing the Test Cases

For the test cases the only thing you need to change are the parameters inside the TestCase().
> `TestCase( input, output )`

For input you can write any input values that you would pass into the function making sure the type is exactly the same as you intended it to be. Also, for the Output make sure the type will make the test pass. Best way to make sure the tests are valid is to solve the problem yourself and run the test with all tests resulting to a pass.

Lastly, feel free to update ME meaning the README.md file for any errors or better explanations on things. This repository was made to help everybody in the class get better in javascipt. Feel free to put any questions you find fun to solve, easy, difficult etc.