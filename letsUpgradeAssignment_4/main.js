console.log("main.js is connected");


const CheckTheNumber = () => {
    const inputValue = document.getElementById("input").value;
    const displayAnswer = document.getElementById("answer");

    if (inputValue === "") {
        displayAnswer.innerText = "invalid Number"
    } else if (isNaN(inputValue) === true) {
        displayAnswer.innerText = "invalid Number"
    } else {
        if (parseInt(inputValue) % 2 === 0) {
            displayAnswer.innerText = "EVEN Number"
        } else {
            displayAnswer.innerText = "ODD Number"
        }
    }
}