# Mr. Roboger's Generator

#### By Seth Gonzales

#### A website that will take a numerical input and turn it into a response from Mr. Roboger.

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

This website takes a number input from the user and returns a list of numbers spanning from zero to the user's inputted value. Numbers such as 1, 2, and 3 are replaced with "Beep!", "Boop!", and "Won't you be my neighbor?" respectively, giving the user an interesting response from Mr. Roboger. 

## Setup/Installation Requirements

* Navigate to the Mr. Roboger repository on [Github](https://github.com/sethgonzales/Mr-Roboger).
* Clone the code and download into a zip file. 
* Unzip the file and navigate inside the folder.  
* Open the index.html file in your preferred browser and begin exploring! 

## Tests

```
Describe: beepBoop()

<!-- Test 1 -->
Test: "It should take a string as an input and convert it into a number"
Code:
    const number = "1"
    beepBoop(number);
Expected Output: 1

<!-- Test 2 -->
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]


<!-- Test 3 -->
Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop(1)
Expected Output: [0, "Beep"]

<!-- Test 4 -->
Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop(2)
Expected Output: [0, "Beep", "Boop"]

<!-- Test 5 -->
Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: beepBoop(3)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?"]

<!-- Test 6 -->
Test: "It should establish hierarchy of substitutions, with 3 within numbers being highest and 1 being the lowest"
Code: beepBoop(14)
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"] 

<!-- Test 7 -->
Test: "It should return a string of all numbers and substitutions separated by commas"
Code: beepBoop(3)
Expected Output: "0, Beep, Boop, Won't you be my neighbor?"

<!-- Test 8 -->
Test: "It should respond to an input that is not classified as a number"
Code: beepBoop("hi")
Expected Output: "false"
```

## Known Bugs

* Viewing not optimized for mobile devices or smaller screens.

## License

MIT License

Copyright (c) 2023 Seth Gonzales

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact Information

If you run into any issues, or would like to contribute to our code, please email: sethgonzales157@gmail.com.
