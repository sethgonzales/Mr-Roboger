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