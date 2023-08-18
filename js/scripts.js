//Business Logic
function beepBoop(numberInput) {
    if (isNaN(numberInput)) {
        return "Beep! That's not a number! You will NOT be my beep boop neighbor!";
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

//User Interface Logic
function giveResponse(event) {
    event.preventDefault();

    const body = document.querySelector("body");
    const form = document.getElementById("number-form");
    const userResp = parseInt(form["numberInput"].value);
   
    const pElement = document.createElement("p");
    pElement.append(beepBoop(userResp));
    body.append(pElement);
}

window.addEventListener("load", function () {
    document.getElementById("number-form").addEventListener("submit", giveResponse);
    pElement.remove();
});