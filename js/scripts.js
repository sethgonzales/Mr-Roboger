//Business Logic
function beepBoop(numberInput) {
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


