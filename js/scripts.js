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
    const image1Place = document.getElementById("image1-place");
    const image2Place = document.getElementById("image2-place");
    response.innerText = "";
    falseEntry.innerText = "";
    image1Place.innerText = "";
    image2Place.innerText = "";

    //Calling the responseBeep function for any number
    if (!responseBeep === false) {
        response.append("Mr. Robogers says: " + responseBeep);
        const img1 = document.createElement("img");
        image1Place.append(img1);
        img1.setAttribute("src", "/css/rogersimg.webp");
        img1.setAttribute("alt", "Mr Rogers with a robot");
        img1.setAttribute("class", "images");

    //Append with error if not a number
    } else {
        falseEntry.append("Beep! That's not a number! You will NOT be my beep boop neighbor!");
        const img2 = document.createElement("img");
        image2Place.append(img2);
        img2.setAttribute("src", "https://media.tenor.com/ffxXBrAQw5wAAAAC/robot-attack-saturday-night-live.gif");
        img2.setAttribute("alt", "gif of robot fighting old man");
        img2.setAttribute("class", "images");
    };
}

window.addEventListener("load", function () {
    document.getElementById("number-form").addEventListener("submit", giveResponse);
});