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

    return roboArray.join(" ");
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

    if (!responseBeep === false) {
        response.append(responseBeep);
        const img1 = document.createElement("img");
        response.append(img1);
        img1.setAttribute("src", "https://media.giphy.com/media/33Gr5O88PgslOninGo/giphy.gif");
        img1.setAttribute("alt", "gif of Mr Rogers turning in a circle");
        img1.setAttribute("class", "img");

    } else {
        falseEntry.append("Beep! That's not a number! You will NOT be my beep boop neighbor!");
        const img2 = document.createElement("img");
        falseEntry.append(img2);
        img2.setAttribute("src", "https://media.tenor.com/ffxXBrAQw5wAAAAC/robot-attack-saturday-night-live.gif");
        img2.setAttribute("alt", "gif of robot fighting old man");
        img2.setAttribute("class", "img");
    };
}

window.addEventListener("load", function () {
    document.getElementById("number-form").addEventListener("submit", giveResponse);
});