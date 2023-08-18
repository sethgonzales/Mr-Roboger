//Business Logic
function beepBoop(numberInput) {
    let numberArray = [];

    for (let i = 0; i <= numberInput; i += 1) {
        numberArray.push(i);
    }

    const roboArray = numberArray.map(function (element) {
        if (element.toString().includes('1')) {
            return "Beep!"
        } else if (element.toString().includes('2')) {
            return "Boop!"
        }
        return element;
    });

    return roboArray;
}

