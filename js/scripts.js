//Business Logic
function beepBoop(numberInput) {
    if (isNaN(numberInput)) {
        return false;
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

    //find form and connect to beepBoop function
    const form = document.getElementById("number-form");
    const userResp = parseInt(form["numberInput"].value);
    const responseBeep = beepBoop(userResp);

    //find p tags and clear any previous entries
    const response = document.getElementById("response");
    const falseEntry = document.getElementById("false-entry");
    response.innerText = "";
    falseEntry.innerText = "";

    if (!beepBoop(!numberInput === false)) {
        response.append(responseBeep);
    } else {
        falseEntry.append("Beep! That's not a number! You will NOT be my beep boop neighbor!");
    };


}

window.addEventListener("load", function () {
    document.getElementById("number-form").addEventListener("submit", giveResponse);
});