//Business Logic
function beepBoop(numberInput) {
    if (isNaN(numberInput)) {
        return "Hey, that's not a number! You will NOT be my beep boop neighbor!";
    }
    
    let numberArray = [];
    for (let i = 0; i <= numberInput; i += 1) {
        numberArray.push(i);
    }
    const roboArray = numberArray.map(function (element) {
        if (element.toString().includes('3')) {
            return "Won't you be my neighbor?"
        } else if (element.toString().includes('2')) {
            return "Boop!"
        } else if (element.toString().includes('1')) {
            return "Beep!"
        }
        return element;
    });

    return roboArray.join(", ");
}


