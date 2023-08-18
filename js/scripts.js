//Business Logic
function beepBoop(numberInput) {
    let numberArray = [];

    for (let i = 0; i <= numberInput; i += 1) {
        numberArray.push(i);
    }

const roboArray = numberArray.map(function(element) {
        if (element.toString().includes('1')) {
            return "Beep!"
        } 
        return element;
    });

    return roboArray;
}

