const ConsImg = document.querySelector("img");

ConsImg.onclick = () => {
    const newsorce = ConsImg.getAttribute("src");
    if (newsorce === "imgs/cons.png") {
        ConsImg.setAttribute("src", "imgs/cons2.jpeg");
    } else {
        ConsImg.setAttribute("src", "imgs/cons.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Construct With " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Construct With ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}