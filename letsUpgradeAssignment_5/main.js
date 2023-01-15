console.log("js is connected");


const parabackground = document.getElementById("para_container");

const addBackgroundColor = () => {

    if (parabackground.style.backgroundColor === "white") {
        parabackground.style.backgroundColor = "red"
    } else {
        parabackground.style.backgroundColor = "white"
    }
}